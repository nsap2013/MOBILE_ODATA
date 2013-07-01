/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides an abstraction for list bindings
jQuery.sap.declare("sap.ui.model.ContextBinding");
jQuery.sap.require("sap.ui.model.Binding");

/**
 * Constructor for ContextBinding
 *
 * @class
 * The ContextBinding is a specific binding for a setting context for the model
 *
 * @param {sap.ui.model.Model} oModel
 * @param {String} sPath
 * @param {Object} oContext
 * @param {Object} [mParameters]
 * @abstract
 * @public
 * @name sap.ui.model.ContextBinding
 */
sap.ui.model.Binding.extend("sap.ui.model.ContextBinding", /** @lends sap.ui.model.ContextBinding */ {
	
	constructor : function(oModel, sPath, oContext, mParameters){
		var that = this;
		sap.ui.model.Binding.call(this, oModel, sPath, oContext, mParameters);
		oModel.createBindingContext(sPath, oContext, mParameters, function(oContext) {
			that.oElementContext = oContext;
			that._fireChange();
		});
	},

	metadata : {
		 publicMethods : [
		 // methods
		 	"getElementContext"
		 ]
	}
});

/**
 * Creates a new subclass of class sap.ui.model.ContextBinding with name <code>sClassName</code> 
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
 * @name sap.ui.model.ContextBinding.extend
 * @function
 */

/**
 * Check whether this Binding would provide new values and in case it changed,
 * inform interested parties about this.
 *
 * @param {boolean} bForceupdate
 */
sap.ui.model.ContextBinding.prototype.checkUpdate = function(bForceupdate, oEvent) {
	this._fireChange(oEvent);
};

sap.ui.model.ContextBinding.prototype._refresh = function() {
	var that = this;
	//recreate Context: force update
	this.oModel.createBindingContext(this.sPath, this.oContext, this.mParameters, function(oContext) {
		that.oElementContext = oContext;
		that._fireChange();
	},true);
};

sap.ui.model.ContextBinding.prototype.setContext = function(oContext) {
	var that = this;
	if (this.oContext != oContext) {
		this.oContext = oContext;
		this.oModel.createBindingContext(this.sPath, this.oContext, this.mParameters, function(oContext) {
			that.oElementContext = oContext;
			that._fireChange();
		});
	}
};

sap.ui.model.ContextBinding.prototype.getBoundContext = function(oContext) {
	return this.oElementContext;
};