/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.TileContainer.
jQuery.sap.declare("sap.m.TileContainer");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new TileContainer.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getEditable editable} : boolean</li>
 * <li>{@link #getAllowAdd allowAdd} : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTiles tiles} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.TileContainer#event:tileMove tileMove} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.TileContainer#event:tileDelete tileDelete} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.TileContainer#event:tileAdd tileAdd} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A container that arranges same-size tiles nicely on carousel pages
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.12.1
 *
 * @constructor   
 * @public
 * @since 1.12
 * @experimental Since version 1.12. 
 * API is not yet finished and might change completely
 * @name sap.m.TileContainer
 */
sap.ui.core.Control.extend("sap.m.TileContainer", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"moveTile", "scrollIntoView", "getPageFirstTileIndex"
	],

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"editable" : {type : "boolean", group : "Misc", defaultValue : null},
		"allowAdd" : {type : "boolean", group : "Misc", defaultValue : null}
	},
	defaultAggregation : "tiles",
	aggregations : {
    	"tiles" : {type : "sap.ui.core.Control", multiple : true, singularName : "tile"}
	},
	events : {
		"tileMove" : {}, 
		"tileDelete" : {}, 
		"tileAdd" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.TileContainer with name <code>sClassName</code> 
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
 * @name sap.m.TileContainer.extend
 * @function
 */

sap.m.TileContainer.M_EVENTS = {'tileMove':'tileMove','tileDelete':'tileDelete','tileAdd':'tileAdd'};


/**
 * Getter for property <code>width</code>.
 * The width of the container in pixel
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.m.TileContainer#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileContainer#setWidth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * The height of the container in pixel
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.m.TileContainer#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileContainer#setHeight
 * @function
 */


/**
 * Getter for property <code>editable</code>.
 * Whether the tile container is editable and you can move or delete or add tiles.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * @name sap.m.TileContainer#getEditable
 * @function
 */

/**
 * Setter for property <code>editable</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileContainer#setEditable
 * @function
 */


/**
 * Getter for property <code>allowAdd</code>.
 * Determines whether the user is allowed to add tiles in edit mode (editable = true)
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>allowAdd</code>
 * @public
 * @name sap.m.TileContainer#getAllowAdd
 * @function
 */

/**
 * Setter for property <code>allowAdd</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bAllowAdd  new value for property <code>allowAdd</code>
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileContainer#setAllowAdd
 * @function
 */


/**
 * Getter for aggregation <code>tiles</code>.<br/>
 * The tiles to be displayed by the tile container
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.m.TileContainer#getTiles
 * @function
 */


/**
 * Inserts a tile into the aggregation named <code>tiles</code>.
 *
 * @param {sap.ui.core.Control}
 *          oTile the tile to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the tile should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the tile is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the tile is inserted at 
 *             the last position        
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileContainer#insertTile
 * @function
 */

/**
 * Adds some tile <code>oTile</code> 
 * to the aggregation named <code>tiles</code>.
 *
 * @param {sap.ui.core.Control}
 *            oTile the tile to add; if empty, nothing is inserted
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileContainer#addTile
 * @function
 */

/**
 * Removes an tile from the aggregation named <code>tiles</code>.
 *
 * @param {int | string | sap.ui.core.Control} vTile the tile to remove or its index or id
 * @return {sap.ui.core.Control} the removed tile or null
 * @public
 * @name sap.m.TileContainer#removeTile
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>tiles</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.TileContainer#removeAllTiles
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>tiles</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oTile the tile whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.TileContainer#indexOfTile
 * @function
 */
	

/**
 * Destroys all the tiles in the aggregation 
 * named <code>tiles</code>.
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileContainer#destroyTiles
 * @function
 */


/**
 * Fired if a tile was moved 
 *
 * @name sap.m.TileContainer#tileMove
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.m.Tile} oControlEvent.getParameters.tile The tile that has been moved
 * @param {int} oControlEvent.getParameters.newIndex The new index of the tile in the tiles aggregation
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'tileMove' event of this <code>sap.m.TileContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.TileContainer</code>.<br/> itself. 
 *  
 * Fired if a tile was moved 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.TileContainer</code>.<br/> itself.
 *
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileContainer#attachTileMove
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'tileMove' event of this <code>sap.m.TileContainer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileContainer#detachTileMove
 * @function
 */

/**
 * Fire event tileMove to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'tile' of type <code>sap.m.Tile</code> The tile that has been moved</li>
 * <li>'newIndex' of type <code>int</code> The new index of the tile in the tiles aggregation</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.TileContainer#fireTileMove
 * @function
 */


/**
 * Fired if a tile is deleted during edit mode. 
 *
 * @name sap.m.TileContainer#tileDelete
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.m.Tile} oControlEvent.getParameters.tile The tile

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'tileDelete' event of this <code>sap.m.TileContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.TileContainer</code>.<br/> itself. 
 *  
 * Fired if a tile is deleted during edit mode. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.TileContainer</code>.<br/> itself.
 *
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileContainer#attachTileDelete
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'tileDelete' event of this <code>sap.m.TileContainer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileContainer#detachTileDelete
 * @function
 */

/**
 * Fire event tileDelete to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'tile' of type <code>sap.m.Tile</code> The tile
</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.TileContainer#fireTileDelete
 * @function
 */


/**
 * Fired if a Tile is added 
 *
 * @name sap.m.TileContainer#tileAdd
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'tileAdd' event of this <code>sap.m.TileContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.TileContainer</code>.<br/> itself. 
 *  
 * Fired if a Tile is added 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.TileContainer</code>.<br/> itself.
 *
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileContainer#attachTileAdd
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'tileAdd' event of this <code>sap.m.TileContainer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileContainer#detachTileAdd
 * @function
 */

/**
 * Fire event tileAdd to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.TileContainer#fireTileAdd
 * @function
 */


/**
 * Moves a given tile to the given index
 *
 * @name sap.m.TileContainer.prototype.moveTile
 * @function
 * @param {int} 
 *         iTile
 *         The tile or tile index to move
 * @param {int} 
 *         iNewIndex
 *         The new Tile position in the tiles aggregation

 * @type void
 * @public
 */


/**
 * Scrolls to the page where the given tile or tile index is included.
 * Optionally this can be done animated or not. With IE9 the scroll is never animated.
 *
 * @name sap.m.TileContainer.prototype.scrollIntoView
 * @function
 * @param {int} 
 *         iTile
 *         The tile or tile index to be scrolled into view
 * @param {boolean} 
 *         bAnimated
 *         Whether the scroll should be animated

 * @type void
 * @public
 */


/**
 * Returns the index of the first tile that is visible in the current page
 *
 * @name sap.m.TileContainer.prototype.getPageFirstTileIndex
 * @function

 * @type int
 * @public
 */


// Start of sap/m/TileContainer.js

jQuery.sap.require("sap.ui.core.IconPool");
sap.ui.core.IconPool.insertFontFaceStyle();


/**
 * Initializes the control
 * @private
 */
sap.m.TileContainer.prototype.init = function() {
	
	this._bRendered = false; // whether the control is rendered or not
	this._iCurrentTileStartIndex = 0;
	this._iCurrentPage = 0;
	this._iPages = 0;
	this._iScrollLeft = 0;
	this._iScrollGap = 0; //gap to the left and right that is allowed to be moved while touchmove event if max scrollwidth or min scrollwidth is already reached
	if (!jQuery.device.is.desktop) {
		this._iScrollGap = 0; 
	}
	this.bAllowTextSelection = false;
	//ugly but needed, initial timeout to wait until all elements are resized. 
	//TODO: Check whether this is needed in no less mode
	this._iInitialResizeTimeout = 400; //needed
	
	this._oDragSession = null;
	this._oTouchSession = null;
	
	this._bAvoidChildTapEvent = false;
	
	this._iEdgeShowStart = jQuery.device.is.phone ? 10 : 20; //the amount on the left and right during drag drop of a tile needed to start showing the edge of the page
	this._iTriggerScrollOffset = jQuery.device.is.phone ? 10 : jQuery.device.is.desktop ? -40 : 20; //the amount of pixels a tile needs to be moved over the left or right edge to trigger a scroll 
	
};

/**
 * Handles the internal event onBeforeRendering
 * @private
 */
sap.m.TileContainer.prototype.onBeforeRendering = function() {
	
	//unregister the resize listener
	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}
};

/**
 * Handles the internal event onAfterRendering
 * @private
 */
sap.m.TileContainer.prototype.onAfterRendering = function() {
	
	this._bRendered = true;
	//init resizing
	this._sResizeListenerId = sap.ui.core.ResizeHandler.register(this.getDomRef().parentElement,  jQuery.proxy(this._resize, this));
	//init the dimensions to the container scoll area 
	this._applyDimension();
	this.$().toggleClass("sapMTCEditable",this.getEditable() === true);
	var that = this;
	setTimeout(function() {
		that._update(true);
	},this._iInitialResizeTimeout);
};

/**
 * Sets the editable property to the tile container that allows to move icons
 * This is currently also set with a long tap
 * @param {boolean} Whether the container is in edit mode or not.
 * @returns {sap.m.TileContainer} This tile container.
 * @public
 */
sap.m.TileContainer.prototype.setEditable = function(bValue) {
	var aTiles = this.getTiles();
	//set the property
	this.setProperty("editable",bValue,true);
	var bEditable = this.getEditable();
	this.$().toggleClass("sapMTCEditable",bEditable);
	for (var i=0;i<aTiles.length; i++) {
		var oTile = aTiles[i];
		if (oTile instanceof sap.m.Tile) {
			oTile.isEditable(bEditable);
		}
	}
	return this; //allow chaining;
};

/**
 * Applies the containers dimensions
 * @private
 */
sap.m.TileContainer.prototype._applyDimension = function() {
	var oDim = this._getContainerDimension(),
		oScroll = jQuery.sap.byId( this.getId() + "-scrl")[0],
		oContent = jQuery.sap.byId( this.getId() + "-cnt")[0],
		oPager = jQuery.sap.byId( this.getId() + "-pager")[0];
	oScroll.style.width = oDim.outerwidth + "px";
	oScroll.style.height = (oDim.outerheight - oPager.offsetHeight) + "px";
	oContent.style.height = (oDim.outerheight - oPager.offsetHeight) + "px";
	this.getDomRef().style.visibility = "visible";
	oContent.style.visibility = "visible";
	
	var oBlind = jQuery.sap.byId( this.getId() + "-blind");
	var iOffset = 10;
	if (jQuery.device.is.phone) {
		iOffset = 2;
	} else if (jQuery.device.is.desktop) {
		iOffset = 0;
	}
	
	oBlind.css("top",(oContent.offsetTop + iOffset) + "px");
	oBlind.css("left",(oContent.offsetLeft + iOffset) + "px");
	oBlind.css("width",(oContent.offsetWidth - iOffset) + "px");
	oBlind.css("height",(oContent.offsetHeight - iOffset) + "px");
	
	var oRight = jQuery.sap.byId( this.getId() + "-rightedge");
	oRight.css("top",(this.getDomRef().offsetTop + iOffset) + "px");
	oRight.css("right", iOffset + "px");
	oRight.css("height",(oContent.offsetHeight - iOffset) + "px");

	var oLeft = jQuery.sap.byId( this.getId() + "-leftedge");
	oLeft.css("top",(this.getDomRef().offsetTop + iOffset) + "px");
	oLeft.css("left",(this.getDomRef().offsetLeft + iOffset) + "px");
	oLeft.css("height",(oContent.offsetHeight - iOffset) + "px");
};

/**
 * Handles the resize event for the tile container. 
 * This is be called whenever the orientation of browser size changes.
 * @private
 */
sap.m.TileContainer.prototype._resize = function() {
	if (this._oDragSession) {
		return;
	}
	var that = this;
	setTimeout(function() {
		that._update(true);
	},this._iInitialResizeTimeout);
	this._iInitialResizeTimeout = 0; //now we do not need to wait
};

/**
 * Called from parent if the control is destroyed
 * @private
 */
sap.m.TileContainer.prototype.exit = function() {
	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}
};

/**
 * Updates all tiles
 * @private
 */
sap.m.TileContainer.prototype._update = function(bAnimated) {
	if (!this._bRendered) return;
	
	this._updateTilePositions();
	if (this._oTileDimension) {
		jQuery.sap.byId( this.getId() + "-cnt")[0].style.width = ((this._iPages * this._iOffsetX * 2) + (this._iPages * this._iMaxTilesX * this._oTileDimension.width)) + "px";
	}
	if (!this._oDragSession) {
		this.scrollIntoView(this._iCurrentTileStartIndex || 0, bAnimated);
	}
};

/**
 * Returns the index of the first tile that is visible in the current page
 * @returns {sap.m.TileContainer} The index of the first tile that is visible in the current page.
 * @public
 */
sap.m.TileContainer.prototype.getPageFirstTileIndex = function() {
	return this._iCurrentTileStartIndex || 0;
};

/**
 * Moves a given tile to the given index
 * @param {sap.m.Tile} oTile The tile to move
 * @param {int} iIndex The new Tile position in the tiles aggregation.
 * @returns {sap.m.TileContainer} This tile container.
 * @public
 */
sap.m.TileContainer.prototype.moveTile = function(vTile, iNewIndex) {
	if (!isNaN(vTile)) {
		vTile = this.getTiles()[vTile];
	}
	if (!vTile) {
		jQuery.sap.log.info("No Tile to move");
		return this;
	}
	this.deleteTile(vTile);
	this.insertTile(vTile,iNewIndex);
	return this;
};

/**
 * Adds a tile to the end of the tiles collection
 * @param {sap.m.Tile} oTile The tile to add
 * @returns {sap.m.TileContainer} This tile container.
 * @override
 * @public
 */
sap.m.TileContainer.prototype.addTile = function(oTile) {
	this.insertTile(oTile,this.getTiles().length);
};

/**
 * Inserts a tile to the given index
 * @param {sap.m.Tile} oTile The tile to insert
 * @param {int} iIndex The new Tile position in the tiles aggregation.
 * @returns {sap.m.TileContainer} This tile container.
 * @override
 * @public
 */
sap.m.TileContainer.prototype.insertTile = function(oTile, iIndex) {
	if (this._bRendered) {
		this.insertAggregation("tiles",oTile,iIndex,true);
		if (!this._oDragSession) {
			var oRm = sap.ui.getCore().createRenderManager(),
				oContent = jQuery.sap.byId( this.getId() + "-cnt" )[0]; 
			oRm.render(oTile, oContent);
			oRm.destroy();
		}
		//this._applyPageStartIndex(iIndex);
		this._update(false);
	} else {
		this.insertAggregation("tiles",oTile,iIndex);
	}
	return this;
};

/**
 * Deletes a tile
 * @param {sap.m.Tile} oTile The tile to move
 * @returns {sap.m.TileContainer} This tile container.
 * @override
 * @public
 */
sap.m.TileContainer.prototype.deleteTile = function(oTile) {
	if (this._bRendered) {
		var iIndex = this.indexOfAggregation("tiles",oTile)-1;
		this.removeAggregation("tiles",oTile,true);
		if (!this._oDragSession) {
			oTile.getDomRef().parentNode.removeChild(oTile.getDomRef());
		}
		this._applyPageStartIndex(iIndex < 0 ? 0 : iIndex);
		this._update(false);
	} else {
		this.removeAggregation("tiles",oTile,false);
	}
	return this;
};

sap.m.TileContainer.prototype.rerender = function() {
	if (!this._oDragSession || this._oDragSession.bDropped) {
		sap.ui.core.Control.prototype.rerender.apply(this);
	} 
};

/**
 * Scrolls one page to the left
 * @public
 */ 
sap.m.TileContainer.prototype.scrollLeft = function() {
	this.scrollIntoView(this._iCurrentTileStartIndex - this._iMaxTiles);
};

/**
 * Scrolls one page to the right
 * @public
 */ 
sap.m.TileContainer.prototype.scrollRight = function() {
	this.scrollIntoView(this._iCurrentTileStartIndex + this._iMaxTiles);
};


/**
 * Scrolls to the page where the given tile or tile index is included. 
 * Optionally this can be done animated or not. With IE9 the scroll is never animated.
 * @param {sap.m.Tile|int} vTile The tile or tile index to be scrolled into view
 * @param {boolean} bAnimated Whether the scroll should be animated.
 * @public
 */ 
sap.m.TileContainer.prototype.scrollIntoView = function(vTile, bAnimated){
    var iIndex = vTile;
    if (isNaN(vTile)) {
    	iIndex = this.indexOfAggregation("tiles",vTile);
    }
    
    var oTile = this.getTiles()[iIndex];
    if (!oTile) return;
    
    this._applyPageStartIndex(iIndex);
    var oScroll = jQuery.sap.byId( this.getId() + "-scrl")[0];
    
    oScroll.scrollLeft = 0;
    var oTopTile = this.getTiles()[this._iCurrentTileStartIndex];
    
	this._scrollTo(oTopTile._posX - (this._iOffsetX || 0),bAnimated);
	this._iCurrentPage = Math.floor(this._iCurrentTileStartIndex / this._iMaxTiles);
	this._updatePager();
};

/**
 * Updates the tile positions
 * @private
 */
sap.m.TileContainer.prototype._updateTilePositions = function(){
	
	if (this.getTiles().length == 0) return; // no tiles
	
	this._applyPageStartIndex(this._iCurrentTileStartIndex);
	this._applyDimension();

	var aTiles = this.getTiles(),
		oContentDimension = this._getContentDimension();
	for (var i=0; i < aTiles.length; i++) {
		if (aTiles[i].isDragged()) {
			continue;
		}
		var iPage =  Math.floor(i / this._iMaxTiles),
			oTile = aTiles[i],
			iLeft = (iPage * oContentDimension.outerwidth) + this._iOffsetX + i % this._iMaxTilesX * this._oTileDimension.width,
			iTop =  this._iOffsetY + Math.floor(i / this._iMaxTilesX) * this._oTileDimension.height - (iPage * this._iMaxTilesY * this._oTileDimension.height);
		
		oTile.setPos(iLeft,iTop);
		oTile.setSize(this._oTileDimension.width, this._oTileDimension.height);
		oTile.$().css("visibility","visible");
	}
	this._iPages = Math.ceil(aTiles.length / this._iMaxTiles);
}; 

/**
 * Updates the pager part of the tile container.
 * This is done dynamically 
 */
sap.m.TileContainer.prototype._updatePager = function() {

	var oPager = jQuery.sap.byId(this.getId() + "-pager")[0],
		oScrollLeft = jQuery.sap.byId(this.getId() + "-leftscroller")[0],
		oScrollRight = jQuery.sap.byId(this.getId() + "-rightscroller")[0];
	if (this._iPages > 1) {
		var aHTML = [""];
		for (var i=0;i<this._iPages;i++) {
			aHTML.push("");
		}
		oPager.innerHTML = aHTML.join("<span></span>");
		oPager.style.display = "block";
		oPager.childNodes[this._iCurrentPage].className = "sapMTCActive";
		if (jQuery.device.is.desktop) {
			oScrollRight.style.right = this._iCurrentPage == this._iPages-1 ? "-100px" : "1rem";
			oScrollLeft.style.left = this._iCurrentPage == 0  ? "-100px" : "1rem";
			oScrollLeft.style.display = "block";
			oScrollRight.style.display = "block";
			if (this._iCurrentPage == this._iPages-1 ) {
				oScrollRight.style.display = "none";
			} 
			if (this._iCurrentPage == 0 ) {
				oScrollLeft.style.display = "none";
			} 
			
		}
	} else {
		oPager.innerHTML = "";
		oScrollRight.style.right = "-100px";
		oScrollLeft.style.left = "-100px";
		oScrollLeft.style.display = "none";
		oScrollRight.style.display = "none";
	}
};

/**
 * Returns the dimension (width and height) of the pages content
 * @returns {object} width and height of the pages content
 * @private
 */
sap.m.TileContainer.prototype._getContentDimension = function() {
	
	if (!this._bRendered) return;
	
	var oScroll = jQuery.sap.byId( this.getId() + "-scrl");
	return {
		width  		: oScroll.width(),
		height 		: oScroll.height()-20,
		outerheight : oScroll.outerHeight()-20,
		outerwidth 	: oScroll.outerWidth()
	};
};

/**
 * Returns the dimension (width and height) of the tile container content
 * @returns {object} width and height of the pages content
 * @private
 */
sap.m.TileContainer.prototype._getContainerDimension = function() {
	
	if (!this._bRendered) return;
	
	var oDomRef = this.$();
	return {
		width  		: oDomRef.width(),
		height 		: oDomRef.height(),
		outerheight : oDomRef.outerHeight(),
		outerwidth 	: oDomRef.outerWidth()
	};
};

/**
 * Returns the dimension (width and height) of a tile
 * @returns {object} width and height of a tile
 * @private
 */
sap.m.TileContainer.prototype._getTileDimension = function() {
	
	if (!this._bRendered) return;
	if (this._oTileDim) return this._oTileDim;
	
	var oTile = this.getTiles()[0];
	this._oTileDim = {
		width  : oTile.$().outerWidth(true),
		height : oTile.$().outerHeight(true)
	};
	return this._oTileDim;
};

/**
 * Calculates the tile page sizes
 * @private
 */
sap.m.TileContainer.prototype._calculatePositions = function() {
	
	if (this.getTiles().length == 0) return;
	
	this._oTileDimension = this._getTileDimension();
	
	var oContentDimension = this._getContainerDimension(),
		iTiles = this.getTiles().length,
		iPagerHeight = jQuery.sap.byId( this.getId() + "-pager")[0].offsetHeight;
	if (oContentDimension.height == 0) return; //nothing to do because the height of the content is not (yet) available
	if (jQuery.device.is.desktop) {
		oContentDimension.width  -= 45 * 2;
	}
	var iMaxTilesX = Math.max( Math.floor( oContentDimension.width / this._oTileDimension.width ),1), 		  //at least one tile needs to be visible
		iMaxTilesY = Math.max( Math.floor((oContentDimension.height - iPagerHeight) / this._oTileDimension.height),1), //at least one tile needs to be visible
		iNumTileX = (iTiles < iMaxTilesX)  ? iTiles : iMaxTilesX,
		iNumTileY = (iTiles / iNumTileX < iMaxTilesY)  ? Math.ceil(iTiles / iNumTileX) : iMaxTilesY;
	
	//set the member vars for further usage
	this._iMaxTiles = iMaxTilesX * iMaxTilesY;
	this._iMaxTilesX = iMaxTilesX;
	this._iMaxTilesY = iMaxTilesY;
	this._iOffsetX = Math.floor(( oContentDimension.width  -  (this._oTileDimension.width * iNumTileX)) / 2);
	if (jQuery.device.is.desktop) {
		this._iOffsetX += 45;
	}
	this._iOffsetY = Math.floor(( oContentDimension.height - iPagerHeight - (this._oTileDimension.height * iNumTileY )) / 2);
	jQuery.sap.log.debug("maxtiles "+ this._iMaxTiles +" on page " + this.getId());

};

/**
 * Returns an array for a given pixel position in the tile container.
 * Normally there is only one tile for a position.
 * @param {int} x position in pixels 
 * @param {int} y position in pixels 
 * @returns {array} Array of tiles for the given position
 * @private
 */
sap.m.TileContainer.prototype._getTilesFromPosition = function(iX, iY) {
	
	if (!this.getTiles().length) return [];
	iX = iX + this._iScrollLeft;
	
	var aTiles = this.getTiles(),
		aResult = [];
	for (var i=0;i<aTiles.length;i++) {
		var oTile = aTiles[i],
			oRect = {
				top: oTile._posY,
				left: oTile._posX,
				width: oTile._width,
				height: oTile._height
			};
		if (!aTiles[i].isDragged() && iY > oRect.top && iY < oRect.top + oRect.height && iX > oRect.left && iX < oRect.left + oRect.width) {
			aResult.push(aTiles[i]);
		}
	}
	return aResult;
};

/**
 * Applies the start index of the pages first tile according to the given index
 * @param {int} iIndex The index of the tile that should be visible
 */
sap.m.TileContainer.prototype._applyPageStartIndex = function(iIndex) {
	this._calculatePositions();
	var iLength = this.getTiles().length;
	
	if (iIndex < 0) {
		iIndex = 0;
	} else if (iIndex > iLength-1) {
		iIndex = iLength-1;
	}
	//where does the page start
	var iCurrentPage = Math.floor(iIndex / this._iMaxTiles || 0);
	this._iCurrentTileStartIndex = iCurrentPage * (this._iMaxTiles  || 0);
	jQuery.sap.log.info("current index " + this._iCurrentTileStartIndex);
};

/**
 * Scrolls to the given position 
 * @param {int} The new scroll position
 * @private
 */
sap.m.TileContainer.prototype._scrollTo = function(iScrollLeft,bAnimated) {
	if (bAnimated !== false) bAnimated = true; //animated needs to be set explicitly to false
	if (this._oDragSession && this._oDragSession.oTile) {
		//this._oDragSession.iDiffX = this._oDragSession.iDiffX + iScrollLeft;
		//this._oDragSession.oTile.setPos(this._oDragSession.oTile._posX + iScrollLeft,this._oDragSession.oTile._posY);
		//this._oDragSession.iOffsetLeft = iScrollLeft;
	}
	this._applyTranslate(jQuery.sap.byId( this.getId() + "-cnt"),-iScrollLeft,0,bAnimated);
	this._iScrollLeft = iScrollLeft;
};

/**
 * Applies the translate x and y to the given jQuery object.
 * @param {object} o$ The jQuery object
 * @param {int} iX The pixel x value for the translate
 * @param {int} iY The pixel y value for the translate
 * @param {boolean} bAnimated Whether the translate should be animated or not.
 * @private
 */
sap.m.TileContainer.prototype._applyTranslate = function(o$,iX,iY,bAnimated) {
	var o = o$[0];
	jQuery.sap.byId( this.getId() + "-cnt").toggleClass("sapMTCAnim",bAnimated);
	if ("webkitTransform" in o.style) {
		o$.css('-webkit-transform','translate3d('+iX+'px,'+iY+'px,0)');
	} else if ("transform" in o.style) {
		o$.css('transform','translate3d('+iX+'px,'+iY+'px,0)');
	} else if ("msTransform" in o.style) {
		o$.css('-ms-transform','translate('+iX+'px,'+iY+'px)');
	} else if ("MozTransform" in o.style) {
		o$.css('-moz-transform','translate3d('+iX+'px,'+iY+'px,0)');
	}
};

/**
 * Initializes the touch session for the tile container
 * @param {jQuery.EventObject} oEvent The event object that started the touch
 * @private
 */
sap.m.TileContainer.prototype._initTouchSession = function(oEvent) {
	
	this._oTouchSession = {
			dStartTime : new Date(),
			fStartX : oEvent.targetTouches[0].pageX,
			fStartY : oEvent.targetTouches[0].pageY,
			fDiffX : 0,
			fDiffY : 0,
			oControl : oEvent.srcControl,
			iOffsetX :  oEvent.targetTouches[0].pageX - oEvent.srcElement.offsetLeft
	};
};

/**
 * Initializes the drag session for the tile container
 * @param {jQuery.EventObject} oEvent The event object that started the drag
 * @private
 */
sap.m.TileContainer.prototype._initDragSession = function(oEvent) {
	while (oEvent.srcControl && oEvent.srcControl.getParent() != this) {
		 oEvent.srcControl =  oEvent.srcControl.getParent();
	}
	var iIndex = this.indexOfAggregation("tiles",oEvent.srcControl);
	this._oDragSession = {
		oTile  : oEvent.srcControl,
		oTileElement  : oEvent.srcControl.$()[0],
		iOffsetLeft : oEvent.targetTouches[0].pageX - oEvent.srcControl._posX + this._iScrollLeft,
		iOffsetTop  : oEvent.targetTouches[0].pageY - oEvent.srcControl._posY,
		iIndex : iIndex,
		iOldIndex : iIndex,
		iDiffX : oEvent.targetTouches[0].pageX,
		iDiffY : oEvent.targetTouches[0].pageY
	};
};

/**
 * Handle click events for scollers in desktop case
 * @param {jQuery.EventObject} oEvent The event object that started the drag
 * @private
 */
sap.m.TileContainer.prototype.onclick = function(oEvent) {
	var oPager = jQuery.sap.byId( this.getId() + "-pager")[0];
	if (oEvent.srcElement.id == this.getId() + "-leftscroller" || oEvent.srcElement.parentNode.id == this.getId() + "-leftscroller") {
		this.scrollLeft();
	} else if (oEvent.srcElement.id == this.getId() + "-rightscroller" || oEvent.srcElement.parentNode.id == this.getId() + "-rightscroller") {
		this.scrollRight();
	} else if (oEvent.srcElement == oPager && jQuery.device.is.desktop) {
		if (oEvent.offsetX < oPager.offsetWidth/2) {
			this.scrollLeft();
		} else {
			this.scrollRight();
		}
	}
};


/**
 * Handle the touch start event on the TileContainer.
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.m.TileContainer.prototype.ontouchstart = function(oEvent) {
	if (oEvent.targetTouches.length > 1 || this._oTouchSession) return; //allow only one touch session
	while (oEvent.srcControl && oEvent.srcControl.getParent() != this) {
		 oEvent.srcControl =  oEvent.srcControl.getParent();
	}
	if ( oEvent.srcControl instanceof sap.m.Tile && this.getEditable()===true) {
		if (oEvent.srcElement.className != "sapMTCRemove") {
			this._initDragSession(oEvent);
			this._initTouchSession(oEvent);
			this._oDragSession.oTile.isDragged(true);
		} else {
			this._initTouchSession(oEvent);
		}
		this._bAvoidChildTapEvent = true;
	} else {
		this._initTouchSession(oEvent);
	}
};

/**
 * Handle the touch move event on the TileContainer.
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.m.TileContainer.prototype.ontouchmove = function(oEvent) {
	if (document.selection && document.selection.clear) {
		document.selection.clear();
	}
	if (oEvent.targetTouches && oEvent.targetTouches.length > 1) return; //allow only one touch session
	if (!oEvent.targetTouches) {
		oEvent.targetTouches=[{pageX:oEvent.pageX,pageY:oEvent.pageY}];
	}
	var oTouchSession = this._oTouchSession;
	oTouchSession.fDiffX = oTouchSession.fStartX - oEvent.targetTouches[0].pageX;
	oTouchSession.fDiffY = oTouchSession.fStartY - oEvent.targetTouches[0].pageY;
	if (this._oDragSession) {
		if (Math.abs(oTouchSession.fDiffX)>5) {
			if (!this._oDragSession.bStarted) {
				this._oDragSession.bStarted = true;
				this._onDragStart(oEvent);
			} else {
				this._onDrag(oEvent);
			}
			this._bAvoidChildTapEvent = true;
		}
	} else if (oTouchSession){
		var iNewLeft = -this._iScrollLeft - oTouchSession.fDiffX;
		if (iNewLeft > this._iScrollGap) {
			return;
		} else if (iNewLeft < -(((this._iPages-1) * this._getContentDimension().outerwidth) + this._iScrollGap)) {
		    return;
		}
		this._applyTranslate(jQuery.sap.byId( this.getId() + "-cnt"),iNewLeft,0,false);
	}
};

/**
 * Handle the touch end event on the TileContainer.
 * @param {jQuery.EventObject} The event object.
 * @private
 */
sap.m.TileContainer.prototype.ontouchend = function(oEvent) {
	
	if (this._oDragSession) {
		this._onDrop(oEvent);
		delete this._oTouchSession;
		return;
	}

	if (!this._oTouchSession) return;
	var oTouchSession = this._oTouchSession,
		oDate = new Date(),
		bFast = (oDate - oTouchSession.dStartTime < 600);
	//handle fast swipe or tap
	if (bFast) {
		var oPager = jQuery.sap.byId( this.getId() + "-pager")[0];
		if (Math.abs(oTouchSession.fDiffX) > 30) {
			this._applyPageStartIndex(this._iCurrentTileStartIndex + ((oTouchSession.fDiffX > 0 ? 1 : -1) * this._iMaxTiles));
			this._bAvoidChildTapEvent = true;
		} else if (oEvent.srcElement == oPager && !jQuery.device.is.desktop) {
			if (oTouchSession.iOffsetX < oPager.offsetWidth/2) {
				this.scrollLeft();
			} else {
				this.scrollRight();
			}
			this._bAvoidChildTapEvent = true;
		} else if (oEvent.srcElement.className == "sapMTCRemove") {
			this.fireTileDelete({tile:oTouchSession.oControl});
		}
	} else {
		this._bAvoidChildTapEvent = true;
		var oContentDimension = this._getContentDimension();
		if (Math.abs(oTouchSession.fDiffX) > oContentDimension.outerwidth/2) {
			this._applyPageStartIndex(this._iCurrentTileStartIndex + ((oTouchSession.fDiffX > 0 ? 1 : -1) * this._iMaxTiles));
		}
	}
	this._update();
	// remove unused properties
	delete this._oDragSession;
	delete this._oTouchSession;
	var that = this;
	setTimeout(function(){
		that._bAvoidChildTapEvent = false;
	},100);
};

/**
 * Handles the drag start of an item in edit mode
 * @param {jQuery.EventObject} oEvent The event object
 * @private 
 */
sap.m.TileContainer.prototype._onDragStart = function(oEvent) {
	this.$().append(this._oDragSession.oTileElement);
	this._oDragSession.iDiffX = this._oTouchSession.fStartX - this._oTouchSession.fDiffX;
	this._oDragSession.iDiffY = this._oTouchSession.fStartY - this._oTouchSession.fDiffY;
	this._oDragSession.oTile.setPos(this._oDragSession.iDiffX - this._oDragSession.iOffsetLeft,this._oDragSession.iDiffY - this._oDragSession.iOffsetTop);
	jQuery.sap.byId( this.getId() + "-blind").css("display","block");
};

/**
 * Handles the dragging of an item
 * @param {jQuery.EventObject} oEvent The event object
 * @private 
 */
sap.m.TileContainer.prototype._onDrag = function(oEvent) {
	//calculate the center and middle position of the dragged tile
	if (!this._oTouchSession) {
		//if onDrag is fired after an scroll interval but the drag session was already ended.
		clearTimeout(this.iScrollTimer);
		this._oDragSession = null;
		this.iScrollTimer = null;
		this._bTriggerScroll = false;
		return;
	}
	this._oDragSession.iDiffX = this._oTouchSession.fStartX - this._oTouchSession.fDiffX;
	this._oDragSession.iDiffY = this._oTouchSession.fStartY - this._oTouchSession.fDiffY;

	var oContentDimension = this._getContentDimension(),
		iTop = this._oDragSession.iDiffY - this._oDragSession.iOffsetTop,
		iLeft = this._oDragSession.iDiffX - this._oDragSession.iOffsetLeft,
		iMiddle = iTop + (this._oDragSession.oTileElement.offsetHeight/2),
		iCenter = iLeft + (this._oDragSession.oTileElement.offsetWidth/2),
		bScrollRight = iLeft +  this._oDragSession.oTileElement.offsetWidth - this._iTriggerScrollOffset > oContentDimension.width,
		bScrollLeft =  iLeft  < -this._iTriggerScrollOffset,
		iNearRight = oContentDimension.width - (iLeft +  this._oDragSession.oTileElement.offsetWidth),
		iNearLeft =  iLeft;
		//jQuery.sap.log.info("ScrollLeft = " + this._iScrollLeft + " Left = " + iLeft + " Top = " + iTop);
	this._oDragSession.oTile.setPos(iLeft,iTop);
	
	//reset the clipping of the tile
	this._oDragSession.oTile.$().css("clip","auto");
	
	//clip the right part of the tile if it is near the right edge
	var oRight = jQuery.sap.byId( this.getId() + "-rightedge")[0];
	if (iLeft + this._oDragSession.oTile._width > oRight.offsetLeft + oRight.offsetWidth && this._iCurrentPage < this._iPages-1) {
		var iClipRight =oRight.offsetLeft + oRight.offsetWidth - iLeft - ((this._oDragSession.oTile._width-this._oDragSession.oTile.$().outerWidth(false))/2)-2;
		this._oDragSession.oTile.$().css("clip","rect(-25px,"+iClipRight+"px," + (this._oDragSession.oTile._height +20) + "px,-25px)");
	} 

	//clip the left part of the tile if it is near the left edge
	var oLeft = jQuery.sap.byId( this.getId() + "-leftedge")[0];
	if (iLeft < oLeft.offsetLeft + 2 + ((this._oDragSession.oTile._width - this._oDragSession.oTile.$().outerWidth(false))/2) && this._iCurrentPage > 0) {
		var iClipLeft = oLeft.offsetLeft + 4 - iLeft - ((this._oDragSession.oTile._width-this._oDragSession.oTile.$().outerWidth(false))/2);
		this._oDragSession.oTile.$().css("clip","rect(-25px,"+this._oDragSession.oTile._width+"px," + (this._oDragSession.oTile._height +20) + "px,"+iClipLeft+"px)");	
	} 
	
	//increase the opacity of the right edge the closer the tile is moved 
	if (iNearRight < this._iEdgeShowStart && this._iCurrentPage < this._iPages-1) {
		var iOpacity = (this._iEdgeShowStart-iNearRight) / (this._iEdgeShowStart + this._iTriggerScrollOffset);
		jQuery.sap.byId( this.getId() + "-rightedge").css("opacity","" + iOpacity);
	} else {
		//not near the edge
		jQuery.sap.byId( this.getId() + "-rightedge").css("opacity","0.01");
	}

	//increase the opacity of the left edge the closer the tile is moved 
	if (iNearLeft < this._iEdgeShowStart && this._iCurrentPage > 0) {
		var iOpacity = (this._iEdgeShowStart-iNearLeft) / (this._iEdgeShowStart + this._iTriggerScrollOffset);
		jQuery.sap.byId( this.getId() + "-leftedge").css("opacity",""+iOpacity);
	} else {
		//not near the edge
		jQuery.sap.byId( this.getId() + "-leftedge").css("opacity","0.01");
	}
	
	//check if scrolling needed
	if ( (bScrollLeft && this._iCurrentPage > 0) || (bScrollRight && this._iCurrentPage < this._iPages-1) ) {
		//jQuery.sap.log.info("ScrollRight = " + iLeft + " > " + iLeft +  this._oDragSession.oTileElement.offsetWidth - this._iTriggerScrollOffset);
		//jQuery.sap.log.info("ScrollLeft  = " + iLeft + " < " + (-this._iTriggerScrollOffset));
		if (this._bTriggerScroll) {
			if (bScrollLeft) {
				this.scrollLeft();
			} else {
				this.scrollRight();
			}
		} else {
			//start the interval timer
			var that = this;
			if (!this.iScrollTimer) {
				this.iScrollTimer = setInterval(function () {
					that._bTriggerScroll = true;
					that._onDrag(oEvent); //retrigger the event
					that._bTriggerScroll = false;
				},1000);
			}
		}
		//do not process further to avoid hovered tiles from the next page to be processed
		return;
	} else {
		//reset the interval timer
		if (this.iScrollTimer) {
			clearTimeout(this.iScrollTimer);
			this._bTriggerScroll = false;
			this.iScrollTimer = null;
		}
	}
	
	//get the hovered tile
	var aHoveredTiles = this._getTilesFromPosition(iCenter,iMiddle);
	if (aHoveredTiles && aHoveredTiles.length > 0) {
		//insert the tile after if center is on the right half of the target tile
		var oHoveredTile = aHoveredTiles[0],
			oRect = {
				top: oHoveredTile._posY,
				left: oHoveredTile._posX,
				width: oHoveredTile._width,
				height: oHoveredTile._height
			};
		var iIndex = this.indexOfAggregation("tiles",oHoveredTile);
		//(iIndex % this._iMaxTilesX) != 0 = Not a start tile in a row to avoid inserting in previous row which would flicker if 
		// drag right before the first tile in a row.
		if (iCenter + this._iScrollLeft < ((oRect.left + oRect.width)/2) && (iIndex % this._iMaxTilesX) != 0) {
			iIndex--;
		} 
		this._oDragSession.iIndex = iIndex;
		this.moveTile(this._oDragSession.oTile,this._oDragSession.iIndex);
	} else if (this._iCurrentPage == this._iPages-1){
		//check whether the dragged tile is at the end of the tile container
		var aTiles = this.getTiles(),
			oLastTile = aTiles[aTiles.length-1];
		if (oLastTile && iCenter > oLastTile._posX - this._iScrollLeft && iMiddle > oLastTile._posY) {
			this._oDragSession.iIndex = aTiles.length-1;
			this.moveTile(this._oDragSession.oTile,this._oDragSession.iIndex);
		}
	}
};

/**
 * Handles the drop of a tile
 * @param {jQuery.EventObject} oEvent The event object
 * @private 
 */
sap.m.TileContainer.prototype._onDrop = function(oEvent) {
	if (this._oDragSession) {
		var oTile = this._oDragSession.oTile,
			iIndex = this._oDragSession.iIndex;
		this._oDragSession.oTile.isDragged(false);
		if (this._oDragSession.iOldIndex != this._oDragSession.iIndex) {
			this.fireTileMove({tile:oTile,newIndex: iIndex});
		}
		jQuery.sap.byId( this.getId() + "-blind").css("display","block");
		if (this._oDragSession.bStarted) {
			this._oDragSession.oTile.setPos(this._oDragSession.oTile._posX + this._iScrollLeft, this._oDragSession.oTile._posY);
		}
		//reset the clipping
		this._oDragSession.oTile.$().css("clip","auto");

		//reset the edges
		jQuery.sap.byId( this.getId() + "-rightedge").css("opacity","0.01");
		jQuery.sap.byId( this.getId() + "-leftedge").css("opacity","0.01");
		
		jQuery.sap.byId( this.getId() + "-cnt").append(this._oDragSession.oTileElement);
		delete this._oDragSession;
		this.moveTile(oTile,iIndex);
		this.scrollIntoView(oTile, false);
		jQuery.sap.byId( this.getId() + "-blind").css("display","none");
	}
	
};