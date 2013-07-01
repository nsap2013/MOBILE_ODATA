/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.ColumnListItem.
jQuery.sap.declare("sap.m.ColumnListItem");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.m.ListItemBase");

/**
 * Constructor for a new ColumnListItem.
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
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCells cells} : sap.ui.core.Control[]</li></ul>
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
 * ColumnListItem can be used to create columns inside the List like Table.
 * @extends sap.m.ListItemBase
 *
 * @author SAP AG 
 * @version 1.12.1
 *
 * @constructor   
 * @public
 * @since 1.12
 * @experimental Since version 1.12. 
 * This concept is still under discussion so this can be changed in future.
 * @name sap.m.ColumnListItem
 */
sap.m.ListItemBase.extend("sap.m.ColumnListItem", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	defaultAggregation : "cells",
	aggregations : {
    	"_clonedHeaders" : {type : "sap.ui.core.Control", multiple : true, singularName : "_clonedHeader", visibility : "hidden"}, 
    	"cells" : {type : "sap.ui.core.Control", multiple : true, singularName : "cell", bindable : "bindable"}
	}
}});


/**
 * Creates a new subclass of class sap.m.ColumnListItem with name <code>sClassName</code> 
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
 * @name sap.m.ColumnListItem.extend
 * @function
 */


/**
 * Getter for aggregation <code>cells</code>.<br/>
 * Every item inside the cells aggregation defines one column of the row.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.m.ColumnListItem#getCells
 * @function
 */


/**
 * Inserts a cell into the aggregation named <code>cells</code>.
 *
 * @param {sap.ui.core.Control}
 *          oCell the cell to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the cell should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the cell is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the cell is inserted at 
 *             the last position        
 * @return {sap.m.ColumnListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ColumnListItem#insertCell
 * @function
 */

/**
 * Adds some cell <code>oCell</code> 
 * to the aggregation named <code>cells</code>.
 *
 * @param {sap.ui.core.Control}
 *            oCell the cell to add; if empty, nothing is inserted
 * @return {sap.m.ColumnListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ColumnListItem#addCell
 * @function
 */

/**
 * Removes an cell from the aggregation named <code>cells</code>.
 *
 * @param {int | string | sap.ui.core.Control} vCell the cell to remove or its index or id
 * @return {sap.ui.core.Control} the removed cell or null
 * @public
 * @name sap.m.ColumnListItem#removeCell
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>cells</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.ColumnListItem#removeAllCells
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>cells</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oCell the cell whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.ColumnListItem#indexOfCell
 * @function
 */
	

/**
 * Destroys all the cells in the aggregation 
 * named <code>cells</code>.
 * @return {sap.m.ColumnListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ColumnListItem#destroyCells
 * @function
 */


/**
 * Binder for aggregation <code>cells</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.m.ColumnListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ColumnListItem#bindCells
 * @function
 */

/**
 * Unbinder for aggregation <code>cells</code>.
 *
 * @return {sap.m.ColumnListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ColumnListItem#unbindCells
 * @function
 */


// Start of sap/m/ColumnListItem.js

// prototype lookup for pop-in id
sap.m.ColumnListItem.prototype._popinId = false;

// remove pop-in from DOM
sap.m.ColumnListItem.prototype.removePopin = function() {
	if (this._popinId) {
		jQuery.sap.byId(this._popinId).remove();
		delete this._popinId;
	}
	return this;
};

// remove pop-in on destroy
sap.m.ColumnListItem.prototype.exit = function() {
	if (sap.m.ListItemBase.prototype.exit) {
		sap.m.ListItemBase.prototype.exit.call(this);
	}
	this.destroyAggregation("_clonedHeaders", true);
	return this.removePopin();
};

// active feedback for pop-in
sap.m.ColumnListItem.prototype._activeHandlingInheritor = function() {
	if (this._popinId) {
		jQuery.sap.byId(this._popinId).addClass("sapMLIBActive");
	}
};

// inactive feedback for pop-in
sap.m.ColumnListItem.prototype._inactiveHandlingInheritor = function() {
	if (this._popinId) {
		jQuery.sap.byId(this._popinId).removeClass("sapMLIBActive");
	}
};


/**
 * Handles event delegation for pop-ins
 *
 * @static
 * @protected
 *
 * @param {object} oEvent jQuery event object
 * @param {string} sEventName event name to map
 * @param {object} oContainerDomRef max parent element to search in DOM to find pop-in
 */
sap.m.ColumnListItem.handleEvents = function(oEvent, sEventName, oContainerDomRef) {
	// check if event is coming from pop-in
	var $popin = jQuery(oEvent.target).closest(".sapMListTblSubRow", oContainerDomRef);
	if ($popin.length) {
		// get the related Column List Item
		var oColumnLI = sap.ui.getCore().byId($popin.prev().attr("id"));
		if (oColumnLI) {
			// try to find scrControl from event
			oEvent.srcControl = sap.ui.getCore().byId(oEvent.target.id) || oColumnLI;

			// call the related ListItemBase event
			if (oColumnLI["on" + sEventName]) {
				oColumnLI["on" + sEventName](oEvent);
			}
		}
	}
};

/**
 * Remove pop-in from DOM via ListItem
 * This method can be called from list if remove aggregation is implemented
 *
 * @static
 * @protected
 * @param {sap.m.ColumnListItem} sap.m.ColumnListItem Control
 */
sap.m.ColumnListItem.removePopin = function(oLI) {
	jQuery.sap.byId(oLI.getId() + "-sub").remove();
	delete oLI._popinId;
};


/**
 * Toggle class name of the pop-in via ListItem
 *
 * @static
 * @protected
 * @param {sap.m.ColumnListItem} oLI sap.m.ColumnListItem Control
 * @param {string} sClassName CSS class name(s) to be toggled.
 * @param {boolean} bSwitch Determine whether the class should be added or removed.
 */
sap.m.ColumnListItem.toggleClass = function(oLI, sClassName, bSwitch) {
	jQuery.sap.byId(oLI.getId() + "-sub").toggleClass(sClassName, bSwitch);
};