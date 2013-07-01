/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.IconTabFilter.
jQuery.sap.declare("sap.m.IconTabFilter");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Item");

/**
 * Constructor for a new IconTabFilter.
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
 * <li>{@link #getCount count} : string (default: '')</li>
 * <li>{@link #getShowAll showAll} : boolean (default: false)</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI (default: '')</li>
 * <li>{@link #getIconColor iconColor} : sap.ui.core.IconColor (default: sap.ui.core.IconColor.Default)</li></ul>
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
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Item#constructor sap.ui.core.Item}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The filter item class
 * @extends sap.ui.core.Item
 * @implements sap.m.IconTab
 *
 * @author SAP AG 
 * @version 1.12.1
 *
 * @constructor   
 * @public
 * @name sap.m.IconTabFilter
 */
sap.ui.core.Item.extend("sap.m.IconTabFilter", { metadata : {

	// ---- object ----
	interfaces : [
		"sap.m.IconTab"
	],

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"count" : {type : "string", group : "Data", defaultValue : ''},
		"showAll" : {type : "boolean", group : "Misc", defaultValue : false},
		"icon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : ''},
		"iconColor" : {type : "sap.ui.core.IconColor", group : "Appearance", defaultValue : sap.ui.core.IconColor.Default}
	}
}});


/**
 * Creates a new subclass of class sap.m.IconTabFilter with name <code>sClassName</code> 
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
 * @name sap.m.IconTabFilter.extend
 * @function
 */


/**
 * Getter for property <code>count</code>.
 * The number of available items if this filter is applied
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>count</code>
 * @public
 * @name sap.m.IconTabFilter#getCount
 * @function
 */

/**
 * Setter for property <code>count</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sCount  new value for property <code>count</code>
 * @return {sap.m.IconTabFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabFilter#setCount
 * @function
 */


/**
 * Getter for property <code>showAll</code>.
 * Enables special visualiation for disabled filter (show all items)
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showAll</code>
 * @public
 * @name sap.m.IconTabFilter#getShowAll
 * @function
 */

/**
 * Setter for property <code>showAll</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowAll  new value for property <code>showAll</code>
 * @return {sap.m.IconTabFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabFilter#setShowAll
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * The icon to display for this item.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.m.IconTabFilter#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.IconTabFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabFilter#setIcon
 * @function
 */


/**
 * Getter for property <code>iconColor</code>.
 * If an icon font is used, the color can be chosen from the semantic icon colors.
 *
 * Default value is <code>Default</code>
 *
 * @return {sap.ui.core.IconColor} the value of property <code>iconColor</code>
 * @public
 * @name sap.m.IconTabFilter#getIconColor
 * @function
 */

/**
 * Setter for property <code>iconColor</code>.
 *
 * Default value is <code>Default</code> 
 *
 * @param {sap.ui.core.IconColor} oIconColor  new value for property <code>iconColor</code>
 * @return {sap.m.IconTabFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabFilter#setIconColor
 * @function
 */


// Start of sap/m/IconTabFilter.js
/**
 * touchstart handler
 */
sap.m.IconTabFilter.prototype.ontouchstart = function(oEvent) {
	if (this.getCount() != "0") {
		this.highlight();
	}
}

/**
 * touchend handler
 */
sap.m.IconTabFilter.prototype.ontouchend = function(oEvent) {
	if (this.getCount() != "0") {
		this.unhighlight();
		this.getParent().setSelectedItem(this);
	}
}

/**
 * touchcancel handler
 */
sap.m.IconTabFilter.prototype.ontouchcancel = function(oEvent) {
	if (this.getCount() != "0") {
		this.unhighlight();
	}
}

/**
 * highlights the tab
 */
sap.m.IconTabFilter.prototype.highlight = function(oEvent) {
	this.$().addClass("sapMITHighlight");
}

/**
 * unhighlights the tab
 */
sap.m.IconTabFilter.prototype.unhighlight = function(oEvent) {
	this.$().removeClass("sapMITHighlight")
}

