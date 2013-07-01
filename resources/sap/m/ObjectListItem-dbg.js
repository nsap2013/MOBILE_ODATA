/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.ObjectListItem.
jQuery.sap.declare("sap.m.ObjectListItem");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.m.ListItemBase");

/**
 * Constructor for a new ObjectListItem.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getNumber number} : string</li>
 * <li>{@link #getNumberUnit numberUnit} : string</li>
 * <li>{@link #getIntro intro} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getActiveIcon activeIcon} : sap.ui.core.URI</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getAttributes attributes} : sap.m.ObjectAttribute[]</li>
 * <li>{@link #getFirstStatus firstStatus} : sap.m.ObjectStatus</li>
 * <li>{@link #getSecondStatus secondStatus} : sap.m.ObjectStatus</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.m.ListItemBase#constructor sap.m.ListItemBase}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The extended list item control
 * @extends sap.m.ListItemBase
 *
 * @author  
 * @version 1.12.1
 *
 * @constructor   
 * @public
 * @since 1.12
 * @experimental Since version 1.12. 
 * API is not yet finished and might change completely
 * @name sap.m.ObjectListItem
 */
sap.m.ListItemBase.extend("sap.m.ObjectListItem", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"number" : {type : "string", group : "Misc", defaultValue : null},
		"numberUnit" : {type : "string", group : "Misc", defaultValue : null},
		"intro" : {type : "string", group : "Misc", defaultValue : null},
		"icon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"activeIcon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null}
	},
	defaultAggregation : "attributes",
	aggregations : {
    	"attributes" : {type : "sap.m.ObjectAttribute", multiple : true, singularName : "attribute"}, 
    	"firstStatus" : {type : "sap.m.ObjectStatus", multiple : false}, 
    	"secondStatus" : {type : "sap.m.ObjectStatus", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.m.ObjectListItem with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.m.ObjectListItem.extend
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * title
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.m.ObjectListItem#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectListItem#setTitle
 * @function
 */


/**
 * Getter for property <code>number</code>.
 * Number field
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>number</code>
 * @public
 * @name sap.m.ObjectListItem#getNumber
 * @function
 */

/**
 * Setter for property <code>number</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sNumber  new value for property <code>number</code>
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectListItem#setNumber
 * @function
 */


/**
 * Getter for property <code>numberUnit</code>.
 * Number units qualifier
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>numberUnit</code>
 * @public
 * @name sap.m.ObjectListItem#getNumberUnit
 * @function
 */

/**
 * Setter for property <code>numberUnit</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sNumberUnit  new value for property <code>numberUnit</code>
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectListItem#setNumberUnit
 * @function
 */


/**
 * Getter for property <code>intro</code>.
 * Introductory text for the list item.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>intro</code>
 * @public
 * @name sap.m.ObjectListItem#getIntro
 * @function
 */

/**
 * Setter for property <code>intro</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sIntro  new value for property <code>intro</code>
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectListItem#setIntro
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * List item icon displayed to the left of the title.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.m.ObjectListItem#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectListItem#setIcon
 * @function
 */


/**
 * Getter for property <code>activeIcon</code>.
 * Icon displayed when the list item is active.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>activeIcon</code>
 * @public
 * @name sap.m.ObjectListItem#getActiveIcon
 * @function
 */

/**
 * Setter for property <code>activeIcon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sActiveIcon  new value for property <code>activeIcon</code>
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectListItem#setActiveIcon
 * @function
 */


/**
 * Getter for aggregation <code>attributes</code>.<br/>
 * List of attributes displayed below the title to the left of the status fields.
 * 
 * @return {sap.m.ObjectAttribute[]}
 * @public
 * @name sap.m.ObjectListItem#getAttributes
 * @function
 */


/**
 * Inserts a attribute into the aggregation named <code>attributes</code>.
 *
 * @param {sap.m.ObjectAttribute}
 *          oAttribute the attribute to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the attribute should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the attribute is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the attribute is inserted at 
 *             the last position        
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectListItem#insertAttribute
 * @function
 */

/**
 * Adds some attribute <code>oAttribute</code> 
 * to the aggregation named <code>attributes</code>.
 *
 * @param {sap.m.ObjectAttribute}
 *            oAttribute the attribute to add; if empty, nothing is inserted
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectListItem#addAttribute
 * @function
 */

/**
 * Removes an attribute from the aggregation named <code>attributes</code>.
 *
 * @param {int | string | sap.m.ObjectAttribute} vAttribute the attribute to remove or its index or id
 * @return {sap.m.ObjectAttribute} the removed attribute or null
 * @public
 * @name sap.m.ObjectListItem#removeAttribute
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>attributes</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.ObjectAttribute[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.ObjectListItem#removeAllAttributes
 * @function
 */

/**
 * Checks for the provided <code>sap.m.ObjectAttribute</code> in the aggregation named <code>attributes</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.m.ObjectAttribute}
 *            oAttribute the attribute whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.ObjectListItem#indexOfAttribute
 * @function
 */
	

/**
 * Destroys all the attributes in the aggregation 
 * named <code>attributes</code>.
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectListItem#destroyAttributes
 * @function
 */


/**
 * Getter for aggregation <code>firstStatus</code>.<br/>
 * First status text field shown on the right side of the attributes.
 * 
 * @return {sap.m.ObjectStatus}
 * @public
 * @name sap.m.ObjectListItem#getFirstStatus
 * @function
 */


/**
 * Setter for the aggregated <code>firstStatus</code>.
 * @param oFirstStatus {sap.m.ObjectStatus}
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectListItem#setFirstStatus
 * @function
 */
	

/**
 * Destroys the firstStatus in the aggregation 
 * named <code>firstStatus</code>.
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectListItem#destroyFirstStatus
 * @function
 */


/**
 * Getter for aggregation <code>secondStatus</code>.<br/>
 * Second status text field shown on the right side of the attributes.
 * 
 * @return {sap.m.ObjectStatus}
 * @public
 * @name sap.m.ObjectListItem#getSecondStatus
 * @function
 */


/**
 * Setter for the aggregated <code>secondStatus</code>.
 * @param oSecondStatus {sap.m.ObjectStatus}
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectListItem#setSecondStatus
 * @function
 */
	

/**
 * Destroys the secondStatus in the aggregation 
 * named <code>secondStatus</code>.
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectListItem#destroySecondStatus
 * @function
 */


// Start of sap/m/ObjectListItem.js
///**
// * This file defines behavior for the control,
// */

jQuery.sap.require("sap.ui.core.IconPool");

/**
 * Function is called when exiting the control.
 * 
 * @private
 */
sap.m.ObjectListItem.prototype.exit = function(oEvent) {
	// image or icon if initialized
	if (this._image) {
		this._image.destroy();
	}
	if(this._icon) {
		this._icon.destroy();
	}
	
	sap.m.ListItemBase.prototype.exit.apply(this);
};

/**
 * @private
 * @returns {Boolean}
 */
sap.m.ObjectListItem.prototype._hasBottomContent = function() {
	
	return (this._hasAttributes() || this._hasStatus());
};

/**
 * @private
 * @returns {Boolean}
 */
sap.m.ObjectListItem.prototype._hasAttributes = function() {
	var attributes = this.getAttributes(); 
	if(attributes && attributes.length > 0) {
		for(var i=0; i < attributes.length; i++) {
			if(!attributes[i]._isEmpty()) {
				return true;
			}
		}
	}
	return false;
};

/**
 * @private
 * @returns {Boolean}
 */
sap.m.ObjectListItem.prototype._hasStatus = function() {
	
	return ((this.getFirstStatus() && !this.getFirstStatus()._isEmpty())
			|| (this.getSecondStatus() && !this.getSecondStatus()._isEmpty() ));
};

/**
 * Lazy load tile icon image.
 * @private
 */
sap.m.ObjectListItem.prototype._getImage = function() {

	var oImage;
	var sSize = "3rem";
	var sURI = this.getIcon();
	if (sap.ui.core.IconPool.isIconURI(sURI)){
		oImage = this._icon || sap.ui.core.IconPool.createControlByURI({
			src : sURI,
			id : this.getId() + "-img",
			size: sSize
			}, sap.m.Image);
		this._icon = oImage;
	} else {
		oImage = this._image || sap.ui.core.IconPool.createControlByURI({
			src : sURI,
			id : this.getId() + "-img",
			height: sSize,
			width: sSize
			}, sap.m.Image);
		this._image = oImage;
	}
	oImage.addStyleClass("sapMObjLIcon", true);
	oImage.setSrc(sURI);
	
	return oImage;
};

sap.m.ObjectListItem.prototype._activeHandlingInheritor = function() {
	var img = sap.ui.getCore().byId(this.getId() + "-img");
	
	if ((img instanceof sap.m.Image) && this.getActiveIcon()) {
			img.setSrc(this.getActiveIcon());
	}	
};

// overwrite base method to hook into the inactive handling
sap.m.ObjectListItem.prototype._inactiveHandlingInheritor = function() {
	var img = sap.ui.getCore().byId(this.getId() + "-img");
	
	if (img instanceof sap.m.Image) {
			img.setSrc(this.getIcon());
	}
};