/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.ObjectHeader.
jQuery.sap.declare("sap.m.ObjectHeader");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new ObjectHeader.
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
 * <li>{@link #getIntroActive introActive} : boolean</li>
 * <li>{@link #getTitleActive titleActive} : boolean</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getIconActive iconActive} : boolean</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li></ul>
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
 * <ul>
 * <li>{@link sap.m.ObjectHeader#event:titlePress titlePress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.ObjectHeader#event:introPress introPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.ObjectHeader#event:iconPress iconPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * ObjectHeader contol is used to display brief information about object similar to the StandardListItem
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.12.1
 *
 * @constructor   
 * @public
 * @since 1.12
 * @experimental Since version 1.12. 
 * API is not yet finished and might change completely
 * @name sap.m.ObjectHeader
 */
sap.ui.core.Control.extend("sap.m.ObjectHeader", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"number" : {type : "string", group : "Misc", defaultValue : null},
		"numberUnit" : {type : "string", group : "Misc", defaultValue : null},
		"intro" : {type : "string", group : "Misc", defaultValue : null},
		"introActive" : {type : "boolean", group : "Misc", defaultValue : null},
		"titleActive" : {type : "boolean", group : "Misc", defaultValue : null},
		"icon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"iconActive" : {type : "boolean", group : "Misc", defaultValue : null},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true}
	},
	defaultAggregation : "attributes",
	aggregations : {
    	"attributes" : {type : "sap.m.ObjectAttribute", multiple : true, singularName : "attribute"}, 
    	"firstStatus" : {type : "sap.m.ObjectStatus", multiple : false}, 
    	"secondStatus" : {type : "sap.m.ObjectStatus", multiple : false}
	},
	events : {
		"titlePress" : {}, 
		"introPress" : {}, 
		"iconPress" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.ObjectHeader with name <code>sClassName</code> 
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
 * @name sap.m.ObjectHeader.extend
 * @function
 */

sap.m.ObjectHeader.M_EVENTS = {'titlePress':'titlePress','introPress':'introPress','iconPress':'iconPress'};


/**
 * Getter for property <code>title</code>.
 * title
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.m.ObjectHeader#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#setTitle
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
 * @name sap.m.ObjectHeader#getNumber
 * @function
 */

/**
 * Setter for property <code>number</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sNumber  new value for property <code>number</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#setNumber
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
 * @name sap.m.ObjectHeader#getNumberUnit
 * @function
 */

/**
 * Setter for property <code>numberUnit</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sNumberUnit  new value for property <code>numberUnit</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#setNumberUnit
 * @function
 */


/**
 * Getter for property <code>intro</code>.
 * Introductory text for the object header.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>intro</code>
 * @public
 * @name sap.m.ObjectHeader#getIntro
 * @function
 */

/**
 * Setter for property <code>intro</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sIntro  new value for property <code>intro</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#setIntro
 * @function
 */


/**
 * Getter for property <code>introActive</code>.
 * Indicates that the intro is clickable
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>introActive</code>
 * @public
 * @name sap.m.ObjectHeader#getIntroActive
 * @function
 */

/**
 * Setter for property <code>introActive</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bIntroActive  new value for property <code>introActive</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#setIntroActive
 * @function
 */


/**
 * Getter for property <code>titleActive</code>.
 * Indicates that the title is clickable
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>titleActive</code>
 * @public
 * @name sap.m.ObjectHeader#getTitleActive
 * @function
 */

/**
 * Setter for property <code>titleActive</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bTitleActive  new value for property <code>titleActive</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#setTitleActive
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * Object header icon
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.m.ObjectHeader#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#setIcon
 * @function
 */


/**
 * Getter for property <code>iconActive</code>.
 * Indicates that the iconis clickable
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>iconActive</code>
 * @public
 * @name sap.m.ObjectHeader#getIconActive
 * @function
 */

/**
 * Setter for property <code>iconActive</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bIconActive  new value for property <code>iconActive</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#setIconActive
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible object headers are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.ObjectHeader#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#setVisible
 * @function
 */


/**
 * Getter for aggregation <code>attributes</code>.<br/>
 * The list of Object Attributes
 * 
 * @return {sap.m.ObjectAttribute[]}
 * @public
 * @name sap.m.ObjectHeader#getAttributes
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
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#insertAttribute
 * @function
 */

/**
 * Adds some attribute <code>oAttribute</code> 
 * to the aggregation named <code>attributes</code>.
 *
 * @param {sap.m.ObjectAttribute}
 *            oAttribute the attribute to add; if empty, nothing is inserted
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#addAttribute
 * @function
 */

/**
 * Removes an attribute from the aggregation named <code>attributes</code>.
 *
 * @param {int | string | sap.m.ObjectAttribute} vAttribute the attribute to remove or its index or id
 * @return {sap.m.ObjectAttribute} the removed attribute or null
 * @public
 * @name sap.m.ObjectHeader#removeAttribute
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>attributes</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.ObjectAttribute[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.ObjectHeader#removeAllAttributes
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
 * @name sap.m.ObjectHeader#indexOfAttribute
 * @function
 */
	

/**
 * Destroys all the attributes in the aggregation 
 * named <code>attributes</code>.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#destroyAttributes
 * @function
 */


/**
 * Getter for aggregation <code>firstStatus</code>.<br/>
 * First status shown on the right side of the attributes above the second status.
 * If it is not set the first attibute will expand to take the entire row.
 * 
 * @return {sap.m.ObjectStatus}
 * @public
 * @name sap.m.ObjectHeader#getFirstStatus
 * @function
 */


/**
 * Setter for the aggregated <code>firstStatus</code>.
 * @param oFirstStatus {sap.m.ObjectStatus}
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#setFirstStatus
 * @function
 */
	

/**
 * Destroys the firstStatus in the aggregation 
 * named <code>firstStatus</code>.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#destroyFirstStatus
 * @function
 */


/**
 * Getter for aggregation <code>secondStatus</code>.<br/>
 * Second status shown on the right side of the attributes below the first status.
 * If it is not set the second attibute will expand to take the entire row.
 * 
 * @return {sap.m.ObjectStatus}
 * @public
 * @name sap.m.ObjectHeader#getSecondStatus
 * @function
 */


/**
 * Setter for the aggregated <code>secondStatus</code>.
 * @param oSecondStatus {sap.m.ObjectStatus}
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#setSecondStatus
 * @function
 */
	

/**
 * Destroys the secondStatus in the aggregation 
 * named <code>secondStatus</code>.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#destroySecondStatus
 * @function
 */


/**
 * Event is fired when the title is active and the user tap/click on it 
 *
 * @name sap.m.ObjectHeader#titlePress
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.domRef Dom reference of the object header' title to be used for positioning.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'titlePress' event of this <code>sap.m.ObjectHeader</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ObjectHeader</code>.<br/> itself. 
 *  
 * Event is fired when the title is active and the user tap/click on it 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.ObjectHeader</code>.<br/> itself.
 *
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#attachTitlePress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'titlePress' event of this <code>sap.m.ObjectHeader</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#detachTitlePress
 * @function
 */

/**
 * Fire event titlePress to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'domRef' of type <code>string</code> Dom reference of the object header' title to be used for positioning.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.ObjectHeader#fireTitlePress
 * @function
 */


/**
 * Event is fired when the title is active and the user tap/click on it 
 *
 * @name sap.m.ObjectHeader#introPress
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.domRef Dom reference of the object header' intro to be used for positioning.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'introPress' event of this <code>sap.m.ObjectHeader</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ObjectHeader</code>.<br/> itself. 
 *  
 * Event is fired when the title is active and the user tap/click on it 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.ObjectHeader</code>.<br/> itself.
 *
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#attachIntroPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'introPress' event of this <code>sap.m.ObjectHeader</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#detachIntroPress
 * @function
 */

/**
 * Fire event introPress to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'domRef' of type <code>string</code> Dom reference of the object header' intro to be used for positioning.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.ObjectHeader#fireIntroPress
 * @function
 */


/**
 * Event is fired when the title icon is active and the user tap/click on it 
 *
 * @name sap.m.ObjectHeader#iconPress
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.domRef Dom reference of the object header' icon to be used for positioning.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'iconPress' event of this <code>sap.m.ObjectHeader</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ObjectHeader</code>.<br/> itself. 
 *  
 * Event is fired when the title icon is active and the user tap/click on it 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.ObjectHeader</code>.<br/> itself.
 *
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#attachIconPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'iconPress' event of this <code>sap.m.ObjectHeader</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#detachIconPress
 * @function
 */

/**
 * Fire event iconPress to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'domRef' of type <code>string</code> Dom reference of the object header' icon to be used for positioning.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.ObjectHeader#fireIconPress
 * @function
 */


// Start of sap/m/ObjectHeader.js
///**
// * This file defines behavior for the control,
// */
//sap.m.ObjectHeader.prototype.init = function(){
//   // do something for initialization...
//};

sap.m.ObjectHeader.prototype.init = function() {
	this._fNumberWidth = undefined;
};

sap.m.ObjectHeader.prototype.ontap = function(oEvent) { 

	var sourceId = oEvent.target.id;
	if (this.getIntroActive() && sourceId === this.getId() + "-intro") {
		this.fireIntroPress({
			domRef : jQuery.sap.domById(sourceId)
		});
	} else if (this.getTitleActive() && sourceId === this.getId() + "-title") {
		this.fireTitlePress({
			domRef : jQuery.sap.domById(sourceId)
		});
	} else if (this.getIconActive() && (sourceId === this.getId() + "-img" || sourceId === this.getId() + "-icon")) {
		this.fireIconPress({
			domRef : jQuery.sap.domById(sourceId)
		});
	}
};

/**
 * Called when the control is destroyed.
 * 
 * @private
 */
sap.m.ObjectHeader.prototype.exit = function() {

	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}

	if (this._image) {
		this._image.destroy();
		this._image = null;
	}

	if (this._icon) {
		this._icon.destroy();
		this._icon = null;
	}
};

/**
 * Lazy load tile icon image.
 * 
 * @private
 */
sap.m.ObjectHeader.prototype._getImage = function() {

	var sURI = this.getIcon();
	var sSize = jQuery.device.is.phone ? "2.5rem" : "3rem";
	var bIsIcon = sap.ui.core.IconPool.isIconURI(sURI);
	var oImage;

	if (bIsIcon) {
		oImage = this._icon || sap.ui.core.IconPool.createControlByURI({
			src : sURI,
			id : this.getId() + "-icon",
			size : sSize
		}, sap.m.Image);
		this._icon = oImage;
	} else {
		oImage = this._image || sap.ui.core.IconPool.createControlByURI({
			src : sURI,
			id : this.getId() + "-img",
			height : sSize,
			width : sSize
		}, sap.m.Image);
		this._image = oImage;
	}

	oImage.setSrc(sURI);

	return oImage;
};

sap.m.ObjectHeader.prototype.onBeforeRendering = function() {
	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}
};

sap.m.ObjectHeader.prototype.onAfterRendering = function() {
	if (jQuery.sap.byId(this.getId() + "-number").length > 0){
		this._sResizeListenerId = sap.ui.core.ResizeHandler.register(this.getDomRef(),  jQuery.proxy(this._resizeElements, this));
	}
};

sap.m.ObjectHeader.prototype._resizeElements = function() {

	if (!this.getDomRef())
		return;

	var id = this.getId();
	var $numberDiv = jQuery.sap.byId(id + "-numberdiv");
	var bHasWrap = $numberDiv.hasClass("sapMOHNumberWrap");
	
	if (this._fNumberWidth === undefined) {		
		this._fNumberWidth = $numberDiv.width();
	}

	var bOverflow = $numberDiv.parent().width() * 35 / 100 < this._fNumberWidth;

	if (bOverflow != bHasWrap) {
		$numberDiv.toggleClass("sapMOHNumberWrap");
		jQuery.sap.byId(id + "-titlediv").toggleClass("sapMOHNumberWrap");
		
		jQuery(sap.m.ObjectHeader._escapeId(id) + " .sapMOHBottomRow").css("margin-top", bOverflow && jQuery.device.is.phone ? ".25rem" : "");		
	}
};

/**
 * @param [string] sId control id to be escaped
 * @returns escaped control id with "#" prefix 
 * @private
 */
sap.m.ObjectHeader._escapeId = function (sId){
	return sId ? "#"+sId.replace(/(:|\.)/g,'\\$1') : "";
}; 

/**
 * @private
 * @returns {Boolean}
 */
sap.m.ObjectHeader.prototype._hasBottomContent = function() {
	
	return (this._hasAttributes() || this._hasStatus());
};

/**
 * @private
 * @returns {Boolean}
 */
sap.m.ObjectHeader.prototype._hasIcon = function() {
	
	return !!this.getIcon().trim();
};

/**
 * @private
 * @returns {Boolean}
 */
sap.m.ObjectHeader.prototype._hasAttributes = function() {
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
sap.m.ObjectHeader.prototype._hasStatus = function() {
	
	return ((this.getFirstStatus() && !this.getFirstStatus()._isEmpty())
			|| (this.getSecondStatus() && !this.getSecondStatus()._isEmpty() ));
};
