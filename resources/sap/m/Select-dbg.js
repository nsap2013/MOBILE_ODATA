/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.Select.
jQuery.sap.declare("sap.m.Select");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new Select.
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
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 'auto')</li>
 * <li>{@link #getMaxWidth maxWidth} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getSelectedKey selectedKey} : string</li>
 * <li>{@link #getSelectedItemId selectedItemId} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.core.Item[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedItem selectedItem} : string | sap.ui.core.Item</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Select#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The select control is built on a native html select element; it provides a list of predefined items that allows end users to choose options.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.12.1
 *
 * @constructor   
 * @public
 * @name sap.m.Select
 */
sap.ui.core.Control.extend("sap.m.Select", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"name" : {type : "string", group : "Misc", defaultValue : null},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : 'auto'},
		"maxWidth" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"selectedKey" : {type : "string", group : "Data", defaultValue : null},
		"selectedItemId" : {type : "string", group : "Misc", defaultValue : null}
	},
	defaultAggregation : "items",
	aggregations : {
    	"items" : {type : "sap.ui.core.Item", multiple : true, singularName : "item"}
	},
	associations : {
		"selectedItem" : {type : "sap.ui.core.Item", multiple : false}
	},
	events : {
		"change" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.Select with name <code>sClassName</code> 
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
 * @name sap.m.Select.extend
 * @function
 */

sap.m.Select.M_EVENTS = {'change':'change'};


/**
 * Getter for property <code>name</code>.
 * The name to be used in the HTML code (e.g. for HTML forms that send data to the server via submit).
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>name</code>
 * @public
 * @name sap.m.Select#getName
 * @function
 */

/**
 * Setter for property <code>name</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#setName
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Determines whether the control is visible or not.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.Select#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#setVisible
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * Determines whether the user can change the selected value.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.m.Select#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#setEnabled
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Defines the width of the select control. This value can be provided in %, em, px… and all possible CSS measures.
 *
 * Default value is <code>auto</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.m.Select#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>auto</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#setWidth
 * @function
 */


/**
 * Getter for property <code>maxWidth</code>.
 * Defines the maximum width of the select control. This value can be provided in %, em, px… and all possible CSS measures.
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>maxWidth</code>
 * @public
 * @name sap.m.Select#getMaxWidth
 * @function
 */

/**
 * Setter for property <code>maxWidth</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sMaxWidth  new value for property <code>maxWidth</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#setMaxWidth
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * The text to be displayed as tooltip and as title of the Select popup on iPad. This overrides the value of the "tooltip" property. If only the "tooltop" property is set, the Select popup on iPad will not have a title.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.m.Select#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#setTitle
 * @function
 */


/**
 * Getter for property <code>selectedKey</code>.
 * Key of the selected item.
 * 
 * If the key has no corresponding aggregated item, no changes will apply.
 * If duplicate keys exists the first item matching the key is used.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>selectedKey</code>
 * @public
 * @since 1.11
 * @name sap.m.Select#getSelectedKey
 * @function
 */

/**
 * Setter for property <code>selectedKey</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSelectedKey  new value for property <code>selectedKey</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @since 1.11
 * @name sap.m.Select#setSelectedKey
 * @function
 */


/**
 * Getter for property <code>selectedItemId</code>.
 * Id of the selected item.
 * 
 * If the id has no corresponding aggregated item, no changes will apply.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>selectedItemId</code>
 * @public
 * @since 1.12
 * @name sap.m.Select#getSelectedItemId
 * @function
 */

/**
 * Setter for property <code>selectedItemId</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSelectedItemId  new value for property <code>selectedItemId</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @since 1.12
 * @name sap.m.Select#setSelectedItemId
 * @function
 */


/**
 * Getter for aggregation <code>items</code>.<br/>
 * Items of the Item control.
 * 
 * @return {sap.ui.core.Item[]}
 * @public
 * @name sap.m.Select#getItems
 * @function
 */


/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.ui.core.Item}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#insertItem
 * @function
 */

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.ui.core.Item}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#addItem
 * @function
 */

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.ui.core.Item} vItem the item to remove or its index or id
 * @return {sap.ui.core.Item} the removed item or null
 * @public
 * @name sap.m.Select#removeItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Item[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.Select#removeAllItems
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Item</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Item}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.Select#indexOfItem
 * @function
 */
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#destroyItems
 * @function
 */


/**
 * The selected item.
 *
 * @return {string} Id of the element which is the current target of the <code>selectedItem</code> association, or null
 * @public
 * @name sap.m.Select#getSelectedItem
 * @function
 */

/**
 * The selected item.
 *
 * @param {string | sap.ui.core.Item} vSelectedItem 
 *    Id of an element which becomes the new target of this <code>selectedItem</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#setSelectedItem
 * @function
 */


	
/**
 * This event will be triggered when the user changes the selected item. 
 *
 * @name sap.m.Select#change
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.core.Item} oControlEvent.getParameters.selectedItem The selected item.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.m.Select</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Select</code>.<br/> itself. 
 *  
 * This event will be triggered when the user changes the selected item. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Select</code>.<br/> itself.
 *
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#attachChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.m.Select</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#detachChange
 * @function
 */

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'selectedItem' of type <code>sap.ui.core.Item</code> The selected item.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Select#fireChange
 * @function
 */


// Start of sap/m/Select.js
jQuery.sap.require("sap.ui.core.theming.Parameters");
jQuery.sap.require("sap.ui.core.EnabledPropagator");
sap.ui.core.EnabledPropagator.apply(sap.m.Select.prototype, [true]);

/* =========================================================== */
/*                   begin: lifecycle methods                  */
/* =========================================================== */

/**
 * Initialization hook for the Select.
 *
 * @private
 */
sap.m.Select.prototype.init = function() {
	if (this._bUseCustomSelect) {
		jQuery.sap.require("sap.m.CustomSelect");
		sap.m.Select.prototype.init = null;
	}
};

/**
 * Required adaptations before rendering.
 *
 * @private
 */
sap.m.Select.prototype.onBeforeRendering = function() {

	/*
	 *	functional dependencies:
	 *
	 *	selectedKey  -> selectedItem, selectedItemId
	 *	selectedItem -> selectedItemId, selectedKey
	 *
	 *	items        -> selectedItem, selectedItemId, selectedKey
	 */

	var aItems = this.getItems(),
		oItem = this.getSelectedItem(),
		sKey = this.getSelectedKey();

	if (aItems.length) {

		if (sKey !== (oItem && oItem.getKey())) {

			oItem = sap.m.Select._getItemByKey(aItems, "" + sKey);

			// if the "selectedKey" has no corresponding aggregated item, no changes will apply
			if (!oItem) {

				// if the key does not have a default value
				if (sKey !== "") {
					jQuery.sap.log.warning('Warning: the key "' + sKey + '" has no corresponding aggregated item on ', this);
				} else {
					this._setDefaultSelectedItem(aItems[0]);
				}
			} else {

				/*
				 * Update and synchronize "selectedItem" association and
				 * "selectedKey" property.
				 * Re-rendering is not needed.
				 */
				this.setAssociation("selectedItem", oItem, true);
				this.setProperty("selectedItemId", oItem.getId(), true);
			}
		} else if (aItems.indexOf(oItem) === -1) {	// validate if the selected item is aggregated
			jQuery.sap.log.warning('Warning: the sap.ui.core.Item instance or sap.ui.core.Item id is not a valid aggregation on', this);
		}
	} else {	// if the select control does not contain any item

		/*
		 * Update "selectedItem" association, "selectedItemId"
		 * and "selectedKey" properties by setting its defaults values.
		 * Re-rendering is not needed.
		 */
		this.setAssociation("selectedItem", null, true);
		this.setProperty("selectedItemId", "", true);
		this.setProperty("selectedKey", "", true);

		jQuery.sap.log.info("Info: the select control does not contain any item on", this);
	}

	this._unbindChangeEvent();

	// custom select
	if (this._bUseCustomSelect) {
		this._onBeforeRenderingCustom();
	}
};

/**
 * Required adaptations after rendering.
 *
 * @private
 */
sap.m.Select.prototype.onAfterRendering = function() {
	var oLabelComputedStyle;

	// jQuery DOM reference to the select control root
	this._$SelectCont = this.$();

	// jQuery DOM reference to the native select using inside the control
	this._$Select = this._$SelectCont.children("select");

	// jQuery DOM collection with all select options
	this._$SelectOptions = this._$Select.children("option");

	// jQuery DOM reference with the selected option
	this._$SeletedOption = this._$SelectOptions.filter(":selected");

	// jQuery DOM reference to the label used to show the text of the current selected item
	this._$SelectLabel = this._$SelectCont.children(".sapMSltLabel");

	// register a listener to the select change event
	this._$Select.on("change.sapMSelect", jQuery.proxy(this._handleChangeEvent, this));

	oLabelComputedStyle = window.getComputedStyle(this._$SelectLabel[0], null);

	this._$Select[0].style.font = oLabelComputedStyle.font;
	this._$Select[0].style.padding = oLabelComputedStyle.padding;
	this._$Select[0].style.border = oLabelComputedStyle.border;

	this._$Select.width("100%");

	// makes the control visible
	this._$SelectCont.css("visibility", "");

	// custom select
	if (this._bUseCustomSelect) {
		this._onAfterRenderingCustom();
	}
};

/* =========================================================== */
/*                   end: lifecycle methods                    */
/* =========================================================== */


/* =========================================================== */
/*                      begin: event handlers                  */
/* =========================================================== */

/**
 * Handle the touch start event happening on the select.
 *
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.m.Select.prototype.ontouchstart = function(oEvent) {

	// for control who need to know if they should handle events from the select control
	oEvent.originalEvent._sapui_handledByControl = true;

	// add active state
	this._$SelectCont.addClass("sapMSltPressed");
};

/**
 * Handle the touch move event on the select.
 *
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.m.Select.prototype.ontouchmove = function(oEvent) {
	if (this._bUseCustomSelect) {
		this._ontouchmoveCustom(oEvent);
	}
};

/**
 * Handle the touch end event on the select.
 *
 * @private
 */
sap.m.Select.prototype.ontouchend = function() {

	// remove active state
	this._$SelectCont.removeClass("sapMSltPressed");
};

/**
 * Handle the change event on the select.
 *
 * @private
 */
sap.m.Select.prototype._handleChangeEvent = function() {
	var $NewSeletedOption = this._$SelectOptions.filter(":selected"),
		sItemId = $NewSeletedOption.attr("id"),
		oItem = sap.ui.getCore().byId(sItemId),
		oSelectedItem = this.getSelectedItem();

	if (!oSelectedItem || oSelectedItem.getId() === sItemId) {
		return;
	}

	// remove the old selected attribute
	this._$SeletedOption.removeAttr("selected");

	// add the new selected attribute
	$NewSeletedOption.attr("selected", "selected");

	// update the selected item
	this._$SeletedOption = $NewSeletedOption;

	/*
	 * Update and synchronize "selectedItem" association "setSelectedItemId"
	 * and "selectedKey" properties.
	 * Re-rendering is not needed.
	 */
	this.setAssociation("selectedItem", sItemId, true);
	this.setProperty("selectedItemId", sItemId, true);
	this.setProperty("selectedKey", sap.ui.getCore().byId(sItemId).getKey(), true);

	this._$SelectLabel.text(oItem.getText());

	this.fireChange({ selectedItem : oItem });
};

/* ============================================================ */
/*                      end: event handlers                  	*/
/* ============================================================ */


/* =========================================================== */
/*             begin: internal methods and properties          */
/* =========================================================== */

sap.m.Select.prototype._oRb = sap.ui.getCore().getLibraryResourceBundle("sap.m");

sap.m.Select.prototype._sNoData = sap.m.Select.prototype._oRb.getText("SELECT_NO_DATA");

sap.m.Select.prototype._bUseCustomSelect = (jQuery.os.android && jQuery.os.fVersion === 2.3) || !sap.ui.core.theming.Parameters.get("sapMPlatformDependent");

sap.m.Select.prototype._sLang = sap.ui.getCore().getConfiguration().getLanguage().split("-")[0];

sap.m.Select.prototype._unbindChangeEvent = function() {
	if (this._$Select) {
		this._$Select.off("change.sapMSelect", this._handleChangeEvent);
	}
};

sap.m.Select._getItemByKey = function(aItems, sKey) {
	for (var i = 0; i < aItems.length; i++) {
		if (aItems[i].getKey() === sKey) {
			return aItems[i];
		}
	}
};

/**
 * Update and synchronize "selectedItem" association, "selectedItemId"
 * and "selectedKey" properties, by selecting the first item.
 *
 * @param {sap.ui.core.Item} [oItem]
 * @private
 */
sap.m.Select.prototype._setDefaultSelectedItem = function(oItem) {
	var oItem = oItem || this.getItems()[0];

	if (oItem) {

		// Re-rendering is not needed
		this.setAssociation("selectedItem", oItem.getId(), true);
		this.setProperty("selectedItemId", oItem.getId(), true);
		this.setProperty("selectedKey", oItem.getKey(), true);
	}
};

/* ========================================================== */
/*              end: internal methods and properties          */
/* ========================================================== */


/* =========================================================== */
/*                   begin: API method                         */
/* =========================================================== */

/**
 * Setter for association <code>selectedItem</code>.
 *
 * @param {string | sap.ui.core.Item | null} vSelectedItem new value for association <code>selectedItem</code>
 *    Id of an sap.ui.core.Item which becomes the new target of this <code>selectedItem</code> association.
 *    Alternatively, an sap.ui.core.Item instance may be given.
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#setSelectedItem
 * @function
 */
sap.m.Select.prototype.setSelectedItem = function(vItem) {

	if (typeof vItem === "string") {
		vItem = sap.ui.getCore().byId(vItem);
	}

	if (!(vItem instanceof sap.ui.core.Item) && vItem !== null) {
		jQuery.sap.log.warning('Warning: "vItem" needs to be an instance of sap.ui.core.Item, a valid sap.ui.core.Item id, or null on', this);
		return this;
	}

	/*
	 * Update and synchronize "selectedItem" association,
	 * "selectedKey" and "selectedItemId" properties.
	 * Re-rendering is needed.
	 */
	this.setAssociation("selectedItem", vItem || null);
	this.setProperty("selectedItemId", vItem ? vItem.getId() : "");
	this.setProperty("selectedKey", vItem ? vItem.getKey() : "");
	return this;
};

/**
 * Setter for property <code>selectedItemId</code>.
 *
 * Default value is an empty string <code>""</code> or <code>undefined</code>
 *
 * @param {string | sap.ui.core.Item | undefined} sSelectedItemId new value for property <code>selectedItemId</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @since 1.12
 * @name sap.m.Select#setSelectedItemId
 * @function
 */
sap.m.Select.prototype.setSelectedItemId = function(sItem) {
	var oItem = sap.ui.getCore().byId(sItem);

	if (!(oItem instanceof sap.ui.core.Item) && sItem !== "" && sItem !== undefined) {
		jQuery.sap.log.warning('Warning: "sItem" must be a string id of an sap.ui.core.Item instance, an empty string or undefined on', this);
		return this;
	}

	/*
	 * Update and synchronize "selectedItem" association,
	 * "selectedKey" and "selectedItemId" properties.
	 * Re-rendering is needed.
	 */
	this.setAssociation("selectedItem", oItem || null);
	this.setProperty("selectedItemId", sItem || "");
	this.setProperty("selectedKey", oItem ? oItem.getKey() : "");
	return this;
};

/**
 * Setter for property <code>selectedKey</code>.
 *
 * Default value is an empty string <code>""</code> or <code>undefined</code>
 *
 * @param {string} sSelectedKey new value for property <code>selectedKey</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @since 1.11
 * @name sap.m.Select#setSelectedKey
 * @function
 */
sap.m.Select.prototype.setSelectedKey = function(sKey) {

	/*
	 * Note: the "selectedItem" association and "selectedItemId" property
	 * need to be updated in onBeforeRendering(), because when this method
	 * is called, the aggregation "items" may be outdated.
	 */
	return this.setProperty("selectedKey", sKey);	// update "selectedKey" property, re-rendering is needed
};

sap.m.Select.prototype.getSelectedItem = function() {
	var sSelectedItemId = this.getAssociation("selectedItem");

	return (sSelectedItemId === null) ? null : sap.ui.getCore().byId(sSelectedItemId);
};

sap.m.Select.prototype.removeItem = function(vItem) {
	if (typeof vItem === "string") {
		vItem = sap.ui.getCore().byId(vItem);
	}

	if (!(vItem instanceof sap.ui.core.Item)) {
		jQuery.sap.log.warning('Warning: "vItem" must be a sap.ui.core.Item object or a valid item id on', this);
		return null;
	}

	// remove the select item
	vItem = this.removeAggregation("items", vItem);

	// if the removed item is selected
	if (vItem && vItem.getId() === this.getAssociation("selectedItem")) {
		this._setDefaultSelectedItem();
	}

	return vItem;
};

/* =========================================================== */
/*                     end: API method                         */
/* =========================================================== */