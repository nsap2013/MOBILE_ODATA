/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.TileGroup.
jQuery.sap.declare("sap.m.TileGroup");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new TileGroup.
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
 * <li>{@link #getTileWidth tileWidth} : sap.ui.core.CSSSize</li>
 * <li>{@link #getTileHeight tileHeight} : sap.ui.core.CSSSize</li>
 * <li>{@link #getTilePadding tilePadding} : sap.ui.core.CSSSize</li>
 * <li>{@link #getTitle title} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTiles tiles} : sap.ui.core.Control[]</li></ul>
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
 * This concept is still under discussion so this can be changed in future.
 * @name sap.m.TileGroup
 */
sap.ui.core.Control.extend("sap.m.TileGroup", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"tileWidth" : {type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : null},
		"tileHeight" : {type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : null},
		"tilePadding" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null},
		"title" : {type : "string", group : "Misc", defaultValue : null}
	},
	aggregations : {
    	"tiles" : {type : "sap.ui.core.Control", multiple : true, singularName : "tile"}
	}
}});


/**
 * Creates a new subclass of class sap.m.TileGroup with name <code>sClassName</code> 
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
 * @name sap.m.TileGroup.extend
 * @function
 */


/**
 * Getter for property <code>tileWidth</code>.
 * The width of a tile in pixel
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>tileWidth</code>
 * @public
 * @name sap.m.TileGroup#getTileWidth
 * @function
 */

/**
 * Setter for property <code>tileWidth</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sTileWidth  new value for property <code>tileWidth</code>
 * @return {sap.m.TileGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileGroup#setTileWidth
 * @function
 */


/**
 * Getter for property <code>tileHeight</code>.
 * The height of a tile in pixel
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>tileHeight</code>
 * @public
 * @name sap.m.TileGroup#getTileHeight
 * @function
 */

/**
 * Setter for property <code>tileHeight</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sTileHeight  new value for property <code>tileHeight</code>
 * @return {sap.m.TileGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileGroup#setTileHeight
 * @function
 */


/**
 * Getter for property <code>tilePadding</code>.
 * The distance between two tiles in pixel
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>tilePadding</code>
 * @public
 * @name sap.m.TileGroup#getTilePadding
 * @function
 */

/**
 * Setter for property <code>tilePadding</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sTilePadding  new value for property <code>tilePadding</code>
 * @return {sap.m.TileGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileGroup#setTilePadding
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * the title of the group
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.m.TileGroup#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.TileGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileGroup#setTitle
 * @function
 */


/**
 * Getter for aggregation <code>tiles</code>.<br/>
 * tiles to be displayed
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.m.TileGroup#getTiles
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
 * @return {sap.m.TileGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileGroup#insertTile
 * @function
 */

/**
 * Adds some tile <code>oTile</code> 
 * to the aggregation named <code>tiles</code>.
 *
 * @param {sap.ui.core.Control}
 *            oTile the tile to add; if empty, nothing is inserted
 * @return {sap.m.TileGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileGroup#addTile
 * @function
 */

/**
 * Removes an tile from the aggregation named <code>tiles</code>.
 *
 * @param {int | string | sap.ui.core.Control} vTile the tile to remove or its index or id
 * @return {sap.ui.core.Control} the removed tile or null
 * @public
 * @name sap.m.TileGroup#removeTile
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>tiles</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.TileGroup#removeAllTiles
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
 * @name sap.m.TileGroup#indexOfTile
 * @function
 */
	

/**
 * Destroys all the tiles in the aggregation 
 * named <code>tiles</code>.
 * @return {sap.m.TileGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileGroup#destroyTiles
 * @function
 */


// Start of sap/m/TileGroup.js

/**
 * @private
 */

sap.m.TileGroup.prototype.init = function() {
}



sap.m.TileGroup.prototype.onBeforeRendering = function() {

	this._createTilePages();

	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}
}

sap.m.TileGroup.prototype.onAfterRendering = function() {
	this._renderTiles(false);
	this._sResizeListenerId = sap.ui.core.ResizeHandler.register(this.getDomRef().parentElement,  jQuery.proxy(this._resize, this));
}


sap.m.TileGroup.prototype._resize = function() {
	this._renderTiles(true);
}


sap.m.TileGroup.prototype.exit = function() {
	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}
}

sap.m.TileGroup.prototype._renderTiles = function(bResize) {

	var maxtiles = this._getMaxTiles();
	



	// rendering
//	
//	if (bResize && !bzoom && tiles <= this._maxtilex && tiles <= maxtilex) return;
//	if (bResize && !bzoom && maxtilex === this._maxtilex && maxtiles === this._maxtiles) return;
//	if (bResize && !bzoom && maxtilex === this._maxtilex && tiles <= maxtiles && tiles <= this._maxtiles) return;
//	
//	if (bResize && (maxtiles == this._maxtiles || (tiles <= maxtiles && tiles <= this._maxtiles))){
//		sap.ui.getCore().byId(this._carousel.getActivePage()).setWidth(wwidth).setHeight(wheight);
//	} else {
//		this._carousel.destroyPages();
//		if (maxtiles > 0){
//			var pages = Math.ceil(tiles / maxtiles);
//			this._carousel.setShowPageIndicator(pages>1);
//			for (var p=0; p<pages;p++){
//				var tileGroup = new sap.m.internal.TileGroup({
//					tileWidthPx: tilewidth, 
//					tileHeightPx: tileheight, 
//					tilePaddingPx: tilepadding, 
//					width: wwidth, 
//					height: wheight,
//					tileWidth: this.getTileWidth(),
//					tileHeight: this.getTileHeight()
//				});
//				for (var i=p*maxtiles; i<Math.min(p*maxtiles+maxtiles,tiles); i++) {
//						tileGroup.addAssociation("tiles",aTiles[i], true);
//				}
//				this._carousel.addPage(TileGroup);
//			}
//		}
//	}
//	this._maxtiles = maxtiles;
//	this._maxtilex = maxtilex;
//	
}


