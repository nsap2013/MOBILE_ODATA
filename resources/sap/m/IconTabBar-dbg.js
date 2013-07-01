/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.IconTabBar.
jQuery.sap.declare("sap.m.IconTabBar");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new IconTabBar.
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
 * <li>{@link #getShowSelection showSelection} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.m.IconTab[]</li>
 * <li>{@link #getContent content} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.IconTabBar#event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A tab bar with large icons
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.12.1
 *
 * @constructor   
 * @public
 * @name sap.m.IconTabBar
 */
sap.ui.core.Control.extend("sap.m.IconTabBar", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"showSelection" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	aggregations : {
    	"items" : {type : "sap.m.IconTab", multiple : true, singularName : "item"}, 
    	"content" : {type : "sap.ui.core.Control", multiple : false}
	},
	events : {
		"select" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.IconTabBar with name <code>sClassName</code> 
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
 * @name sap.m.IconTabBar.extend
 * @function
 */

sap.m.IconTabBar.M_EVENTS = {'select':'select'};


/**
 * Getter for property <code>showSelection</code>.
 * Defines whether the current selection should be visualized
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showSelection</code>
 * @public
 * @name sap.m.IconTabBar#getShowSelection
 * @function
 */

/**
 * Setter for property <code>showSelection</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowSelection  new value for property <code>showSelection</code>
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabBar#setShowSelection
 * @function
 */


/**
 * Getter for aggregation <code>items</code>.<br/>
 * The items displayed in the IconTabBar
 * 
 * @return {sap.m.IconTab[]}
 * @public
 * @name sap.m.IconTabBar#getItems
 * @function
 */


/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.m.IconTab}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabBar#insertItem
 * @function
 */

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.m.IconTab}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabBar#addItem
 * @function
 */

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.m.IconTab} vItem the item to remove or its index or id
 * @return {sap.m.IconTab} the removed item or null
 * @public
 * @name sap.m.IconTabBar#removeItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.IconTab[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.IconTabBar#removeAllItems
 * @function
 */

/**
 * Checks for the provided <code>sap.m.IconTab</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.m.IconTab}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.IconTabBar#indexOfItem
 * @function
 */
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabBar#destroyItems
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * The content displayed below the IconTabBar
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.m.IconTabBar#getContent
 * @function
 */


/**
 * Setter for the aggregated <code>content</code>.
 * @param oContent {sap.ui.core.Control}
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabBar#setContent
 * @function
 */
	

/**
 * Destroys the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabBar#destroyContent
 * @function
 */


/**
 * This event will be fired before an item is selected. 
 *
 * @name sap.m.IconTabBar#select
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.m.IconTabFilter} oControlEvent.getParameters.item The selected item.
 * @param {string} oControlEvent.getParameters.key The key of the selected item.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.m.IconTabBar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.IconTabBar</code>.<br/> itself. 
 *  
 * This event will be fired before an item is selected. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.IconTabBar</code>.<br/> itself.
 *
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabBar#attachSelect
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.m.IconTabBar</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabBar#detachSelect
 * @function
 */

/**
 * Fire event select to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'item' of type <code>sap.m.IconTabFilter</code> The selected item.</li>
 * <li>'key' of type <code>string</code> The key of the selected item.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.IconTabBar#fireSelect
 * @function
 */


// Start of sap/m/IconTabBar.js
/**
 * Init
 */
sap.m.IconTabBar.prototype.init = function() {

};

/**
 * Exit
 */
sap.m.IconTabBar.prototype.exit = function() {

};

/**
 * setSelectedItem
 */
sap.m.IconTabBar.prototype.setSelectedItem = function(oItem) {
	this.oSelectedItem = oItem;
	this.adjustArrow();
	this.fireSelect({
		selectedItem: this.oSelectedItem,
		selectedKey: this.oSelectedItem.getKey()
	});
};

/**
 * adjustArrow
 */
sap.m.IconTabBar.prototype.adjustArrow = function(){
	var $arrow = jQuery.sap.byId(this.getId() + "-arrow"),
		$item;
	if (this.oSelectedItem) {
		$item = this.oSelectedItem.$();
		var iLeft = $item[0].offsetLeft + $item.outerWidth() / 2 - $arrow.width() / 2;
		$arrow.css("left", iLeft + "px");
	}
};

/**
 * afterRendering
 */
sap.m.IconTabBar.prototype.onAfterRendering = function(){
	if (!this.oSelectedItem) {
		this.oSelectedItem = this.getItems()[0];
	}
	this.adjustArrow();
};

/**
 * Called after the theme has been switched, required for new width calc
 * @private
 */
sap.m.IconTabBar.prototype.onThemeChanged = function(oEvent){
	this.adjustArrow();
};
