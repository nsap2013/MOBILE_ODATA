/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */



// Provides class sap.ui.model.odata.ODataMetadata
jQuery.sap.declare("sap.ui.model.odata.ODataMetadata");

/**
 * Constructor for a new ODataMetadata.
 *
 * @param {object} oMetadata the parsed metadata object provided by datajs
 *
 * @class
 * Implementation to access oData metadata
 *
 * @author SAP AG
 * @version 1.12.1
 *
 * @constructor
 * @public
 * @name sap.ui.model.odata.ODataMetadata
 * @extends sap.ui.base.Object
 */
sap.ui.base.Object.extend("sap.ui.model.odata.ODataMetadata", /** @lends sap.ui.model.odata.ODataMetadata */ {
	
	constructor : function(oMetadata) {
	
		this.oMetadata = oMetadata;
	},
	
	metadata : {
		publicMethods : ["getServiceMetadata"]
	}
	
});

/**
 * Creates a new subclass of class sap.ui.model.odata.ODataMetadata with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.Object.extend Object.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.ui.model.odata.ODataMetadata.extend
 * @function
 */

/**
 * Return the metadata object
 *
 * @return {Object} metdata object
 * @public
 */
sap.ui.model.odata.ODataMetadata.prototype.getServiceMetadata = function() {
	return this.oMetadata;
};


/**
 * Extract the entity type name of a given sPath. Also navigation properties in the path will be followed to get the right entity type for that property.
 * eg. 
 * /Categories(1)/Products(1)/Category --> will get the Categories entity type
 * /Products --> will get the Products entity type
 * @return {object} the entity type or null if not found
 */
sap.ui.model.odata.ODataMetadata.prototype._getEntityTypeByPath = function(sPath) {
	if (!sPath) {
		jQuery.sap.assert(undefined, "sPath not defined!");
		return null;
	}
	if (!this.oMetadata || jQuery.isEmptyObject(this.oMetadata)) {
		jQuery.sap.assert(undefined, "No metadata loaded!");
		return null;
	}
	// remove starting and trailing / 
	var sCandidate = sPath.replace(/^\/|\/$/g, ""),
		aParts = sCandidate.split("/"),
		iLength = aParts.length,
		aAssociationName,
		oAssociation,
		oParentEntityType,
		oEnd,		
		aEntityTypeName,
		oEntityType,
		that = this;
	
	// remove key from first path segment if any (e.g. Products(555) --> Products)
	if (aParts[0].indexOf("(") != -1){
		aParts[0] = aParts[0].substring(0,aParts[0].indexOf("("));
	}
	
	if (iLength > 1 ) {
		// check if navigation property is used
		// e.g. Categories(1)/Products(1)/Category --> Category is a navigation property so we need the collection Categories
		
		oParentEntityType = that._getEntityTypeByPath(aParts[0]);
		
		for (var i = 1; i < aParts.length; i++ ){
			if (oParentEntityType) {
				// remove key from current part if any
				if (aParts[i].indexOf("(") != -1){
					aParts[i] = aParts[i].substring(0,aParts[i].indexOf("("));					
				}
				// check for navigation properties
				// if no navigation property found we assume that the current part is a normal property so we return the current oParentEntityType
				// which is the parent entity type of that property
				if (oParentEntityType.navigationProperty) {
					jQuery.each(oParentEntityType.navigationProperty, function(j, oNavigationProperty) {   
						if (oNavigationProperty.name === aParts[i]) {
							// get association for navigation property and then the collection name
							aAssociationName = that._splitName(oNavigationProperty.relationship); 
							oAssociation = that._getObjectMetadata("association", aAssociationName[0], aAssociationName[1]);
							if (oAssociation) {
								oEnd = oAssociation.end[0];
								if (oEnd.role !== oNavigationProperty.toRole) {
									oEnd = oAssociation.end[1];
								}
								aEntityTypeName = that._splitName(oEnd.type);
								oParentEntityType = that._getObjectMetadata("entityType", aEntityTypeName[0], aEntityTypeName[1]);
							}
							return false;
						}
					});
				}				
				oEntityType = oParentEntityType;
			}
		};
	} else {
		// if only one part exists it should be the name of the collection and we can get the entity type for it
		aEntityTypeName = this._splitName(this._getEntityTypeName(aParts[0]));		
		oEntityType = this._getObjectMetadata("entityType", aEntityTypeName[0], aEntityTypeName[1]);
	}
	jQuery.sap.assert(oEntityType, "EntityType for path " + sPath + " could not be found!");  
	return oEntityType;
};


/**
 * splits a name e.g. Namespace.Name into [Name, Namespace]
 */
sap.ui.model.odata.ODataMetadata.prototype._splitName = function(sFullName) {
	var aParts = [];
	if (sFullName) {
		var iSepIdx = sFullName.lastIndexOf(".");
		aParts[0] = sFullName.substr(iSepIdx + 1);
		aParts[1] = sFullName.substr(0, iSepIdx);		
	}
	return aParts;
};


/**  
*  search metadata for specified collection name (= entity set name)
*/  
sap.ui.model.odata.ODataMetadata.prototype._getEntityTypeName = function(sCollection) {
	var sEntityTypeName;
	if (sCollection) {
		jQuery.each(this.oMetadata.dataServices.schema, function(i, oSchema) {
			if (oSchema.entityContainer) {
				jQuery.each(oSchema.entityContainer, function(k, oEntityContainer) {   
					jQuery.each(oEntityContainer.entitySet, function(j, oEntitySet) {  
						if (oEntitySet.name === sCollection) {  
							sEntityTypeName = oEntitySet.entityType;
							return false;
						}
					});
				});
			}
		});		
	}
	jQuery.sap.assert(sEntityTypeName, "EntityType name of EntitySet "+ sCollection + " not found!");
	return sEntityTypeName;  
};

/**
 * get the object of a specified type name and namespace
 */
sap.ui.model.odata.ODataMetadata.prototype._getObjectMetadata = function(sObjectType, sObjectName, sNamespace) {
	var oObject;
	if (sObjectName && sNamespace) {
		// search in all schemas for the sObjectName
		jQuery.each(this.oMetadata.dataServices.schema, function(i, oSchema) {
			// check if we found the right schema which will contain the sObjectName
			if (oSchema[sObjectType] && oSchema.namespace === sNamespace) {
				jQuery.each(oSchema[sObjectType], function(j, oCurrentObject) {
					if (oCurrentObject.name === sObjectName) {  
						oObject = oCurrentObject;
						return false;
					}
				});
				return !oObject;
			}
		});		
	}	
	jQuery.sap.assert(oObject, "ObjectType " + sObjectType + " for name " + sObjectName + " not found!");  
	return oObject;  
};


/**  
*  extract the property metadata of a specified property of a entity type out of the metadata document 
*/  
sap.ui.model.odata.ODataMetadata.prototype._getPropertyMetadata = function(oEntityType, sProperty) {
	var oPropertyMetadata;
	
	var aParts = sProperty.split("/"); // path could point to a complex type
	
	jQuery.each(oEntityType.property, function(k, oProperty) {
		if (oProperty.name === aParts[0]){
			oPropertyMetadata = oProperty;
			return false;
		}
	});
	
	// check if complex type
	if (oPropertyMetadata && aParts.length > 1 && !jQuery.sap.startsWith(oPropertyMetadata.type.toLowerCase(), "edm.")) {		
		var aName = this._splitName(oPropertyMetadata.type);
		oPropertyMetadata = this._getPropertyMetadata(this._getObjectMetadata("complexType", aName[0], aName[1]), aParts[1]);
	}
	
	jQuery.sap.assert(oPropertyMetadata, "PropertyType for property "+ aParts[0]+ " of EntityType " + oEntityType.name + " not found!");  
	return oPropertyMetadata;  
};
