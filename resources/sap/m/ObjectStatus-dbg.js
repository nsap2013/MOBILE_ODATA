/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.ObjectStatus.
jQuery.sap.declare("sap.m.ObjectStatus");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new ObjectStatus.
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
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getState state} : sap.ui.core.ValueState (default: sap.ui.core.ValueState.None)</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Status information that may be either text with a value state, or an icon.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.12.1
 *
 * @constructor   
 * @public
 * @name sap.m.ObjectStatus
 */
sap.ui.core.Control.extend("sap.m.ObjectStatus", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"text" : {type : "string", group : "Misc", defaultValue : null},
		"state" : {type : "sap.ui.core.ValueState", group : "Misc", defaultValue : sap.ui.core.ValueState.None},
		"icon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.m.ObjectStatus with name <code>sClassName</code> 
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
 * @name sap.m.ObjectStatus.extend
 * @function
 */


/**
 * Getter for property <code>text</code>.
 * Text value.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.m.ObjectStatus#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.m.ObjectStatus} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectStatus#setText
 * @function
 */


/**
 * Getter for property <code>state</code>.
 * Text value state.
 *
 * Default value is <code>None</code>
 *
 * @return {sap.ui.core.ValueState} the value of property <code>state</code>
 * @public
 * @name sap.m.ObjectStatus#getState
 * @function
 */

/**
 * Setter for property <code>state</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {sap.ui.core.ValueState} oState  new value for property <code>state</code>
 * @return {sap.m.ObjectStatus} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectStatus#setState
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * Icon URI. This may be either an icon font or image path.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.m.ObjectStatus#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.ObjectStatus} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectStatus#setIcon
 * @function
 */


// Start of sap/m/ObjectStatus.js
///**
// * This file defines behavior for the control,
// */

/**
 * Called when the control is destroyed.
 * 
 * @private
 */
sap.m.ObjectStatus.prototype.exit = function() {
	if(this._icon) {
		this._icon.destroy();
		this._icon = null;
	}
};

/**
 * Lazy load list item icon info image. Once the icon is created it is not possible to switch
 * between icon font and image.
 * @private
 */
sap.m.ObjectStatus.prototype._getImage = function() {

	var sURI = this.getIcon();
	if(this._icon) {
		this._icon.setSrc(sURI);
	} else {
		var iconId = this.getId() + "-icon";
		if (sap.ui.core.IconPool.isIconURI(sURI)){
			this._icon = sap.ui.core.IconPool.createControlByURI({
				src : sURI,
				id : iconId
				}, sap.m.Image);
		} 
		else {
			this._icon = new sap.m.Image(iconId, {
				src: sURI
			});
		}
	}	
	return this._icon;
};

/**
 * @private
 * @returns {Boolean}
 */
sap.m.ObjectStatus.prototype._isEmpty = function() {
	
	return !(this.getText().trim() || this.getIcon().trim());
};