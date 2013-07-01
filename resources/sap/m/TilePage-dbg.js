/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.TilePage.
jQuery.sap.declare("sap.m.TilePage");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.m.Page");

/**
 * Constructor for a new TilePage.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '100%')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTiles tiles} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getGroup group} : string | sap.ui.core.Control</li>
 * <li>{@link #getContainer container} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.m.Page#constructor sap.m.Page}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A container that arranges same-size tiles nicely on carousel pages
 * @extends sap.m.Page
 *
 * @author SAP AG 
 * @version 1.12.1
 *
 * @constructor   
 * @public
 * @since 1.12
 * @experimental Since version 1.12. 
 * This concept is still under discussion so this can be changed in future.
 * @name sap.m.TilePage
 */
sap.m.Page.extend("sap.m.TilePage", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"tileWidth" : {type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : null},
		"tileHeight" : {type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : null},
		"tilePadding" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'}
	},
	aggregations : {
    	"tiles" : {type : "sap.ui.core.Control", multiple : true, singularName : "tile"}
	},
	associations : {
		"group" : {type : "sap.ui.core.Control", multiple : false}, 
		"container" : {type : "sap.ui.core.Control", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.m.TilePage with name <code>sClassName</code> 
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
 * @name sap.m.TilePage.extend
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
 * @name sap.m.TilePage#getTileWidth
 * @function
 */

/**
 * Setter for property <code>tileWidth</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sTileWidth  new value for property <code>tileWidth</code>
 * @return {sap.m.TilePage} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TilePage#setTileWidth
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
 * @name sap.m.TilePage#getTileHeight
 * @function
 */

/**
 * Setter for property <code>tileHeight</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sTileHeight  new value for property <code>tileHeight</code>
 * @return {sap.m.TilePage} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TilePage#setTileHeight
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
 * @name sap.m.TilePage#getTilePadding
 * @function
 */

/**
 * Setter for property <code>tilePadding</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sTilePadding  new value for property <code>tilePadding</code>
 * @return {sap.m.TilePage} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TilePage#setTilePadding
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * The width of the container in pixel
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.m.TilePage#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.TilePage} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TilePage#setWidth
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
 * @name sap.m.TilePage#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.m.TilePage} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TilePage#setHeight
 * @function
 */


/**
 * Getter for aggregation <code>tiles</code>.<br/>
 * tiles on the page
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.m.TilePage#getTiles
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
 * @return {sap.m.TilePage} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TilePage#insertTile
 * @function
 */

/**
 * Adds some tile <code>oTile</code> 
 * to the aggregation named <code>tiles</code>.
 *
 * @param {sap.ui.core.Control}
 *            oTile the tile to add; if empty, nothing is inserted
 * @return {sap.m.TilePage} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TilePage#addTile
 * @function
 */

/**
 * Removes an tile from the aggregation named <code>tiles</code>.
 *
 * @param {int | string | sap.ui.core.Control} vTile the tile to remove or its index or id
 * @return {sap.ui.core.Control} the removed tile or null
 * @public
 * @name sap.m.TilePage#removeTile
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>tiles</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.TilePage#removeAllTiles
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
 * @name sap.m.TilePage#indexOfTile
 * @function
 */
	

/**
 * Destroys all the tiles in the aggregation 
 * named <code>tiles</code>.
 * @return {sap.m.TilePage} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TilePage#destroyTiles
 * @function
 */


/**
 * The group this page belongs to
 *
 * @return {string} Id of the element which is the current target of the <code>group</code> association, or null
 * @public
 * @name sap.m.TilePage#getGroup
 * @function
 */

/**
 * The group this page belongs to
 *
 * @param {string | sap.ui.core.Control} vGroup 
 *    Id of an element which becomes the new target of this <code>group</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.m.TilePage} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TilePage#setGroup
 * @function
 */


	
/**
 * the container this page belongs to
 *
 * @return {string} Id of the element which is the current target of the <code>container</code> association, or null
 * @public
 * @name sap.m.TilePage#getContainer
 * @function
 */

/**
 * the container this page belongs to
 *
 * @param {string | sap.ui.core.Control} vContainer 
 *    Id of an element which becomes the new target of this <code>container</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.m.TilePage} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TilePage#setContainer
 * @function
 */


	
// Start of sap/m/TilePage.js

/**
 * @private
 */

sap.m.TilePage.prototype.addTile = function(tile) {
	var pos = this.getTiles().length;
	if(pos < this._maxtiles){
		this.insertTile(tile,pos);
	} else {
		jQuery.sap.log.debug('Pos '+pos+' maxtiles ' + this._maxtiles);
		this._sendTileToNextPage(tile, false);
	}
}

sap.m.TilePage.prototype.insertTile = function(tile, index) {
	if (index > this.getTiles().length)  {
		jQuery.sap.log.debug('TilePage.insertTile trying to insert a tile too far out');
	}
	tile.setSize(this._tilewidth, this._tileheight);
	var rm = sap.ui.getCore().createRenderManager();
	var jQueryTilesSelector = jQuery.sap.byId( this.getId() + "-cont" ); 
	rm.render(tile, jQueryTilesSelector[0]);
	rm.destroy();
	if (index < this.getTiles().length){
		jQuery(jQueryTilesSelector.children()[index]).before(tile.getDomRef());
	}
	this.insertAggregation("tiles", tile, index, true);
	if (this.getTiles().length > this._maxtiles){
		this._sendTileToNextPage(this.getTiles()[this._maxtiles], true);
	}
	this._updateTilePositions();
}

sap.m.TilePage.prototype.deleteTile = function(tile) {
	var index = this.getTiles().indexOf(tile.getId()); 
	if (index>=0){
		this.removeAggregation("tiles",tile.getId(), false);
		tile.$().remove();
		this._updateTilePositions();
		if (this.getTiles().length < this._maxtiles) this._appendFirstTileFromNextPage();
	} else jQuery.sap.log.debug('TilePage.deleteTile trying to remove nonexisting tile');
}


sap.m.TilePage.prototype._resize = function() {

	this._calculateSpace();
	
	for (var i=this.getTiles().length; i<this._maxtiles; i++){
		if (!this._appendFirstTileFromNextPage()) break;
	}
	for (var i=this.getTiles().length-1; i>=this._maxtiles; i--){
		this._sendTileToNextPage(this.getTiles()[i], true);
	}
	
	this._updateTilePositions();
	
}

sap.m.TilePage.prototype.onBeforeRendering = function() {
//	this.setFooter(null);
//	this.setEnableScrolling(false);
}

sap.m.TilePage.prototype.onAfterRendering = function() {
	this._calculateSpace();
	var tiles = this.getTiles();
	var rm = sap.ui.getCore().createRenderManager();
	this._updateTilePositions();
	for (var t=0; t<tiles.length; t++){
		rm.render(tiles[t], jQuery.sap.byId( this.getId() + "-cont" )[0]);
	}
	rm.destroy();
}



sap.m.TilePage.prototype._appendFirstTileFromNextPage = function(){
	var nextpage = sap.ui.getCore().byId(this.getContainer()).getNextPage(this, false);
	if (nextpage){
		if (nextpage.getTiles().length>0){
			var tile = nextpage.getTiles()[0];
			nextpage.deleteTile(tile);
			this.addTile(tile);
			return true;
		}
		if (nextpage.getTiles().length==0){
			sap.ui.getCore().byId(this.getContainer()).deletePage(nextpage);
		}
	}
	return false;
}

sap.m.TilePage.prototype._sendTileToNextPage = function(tile, bBeggining){
	var nextpage = sap.ui.getCore().byId(this.getContainer()).getNextPage(this, true);
	this.deleteTile(tile);
	bBeggining ? nextpage.insertTile(tile,0) : nextpage.addTile(tile);
}

sap.m.TilePage.prototype._updateTilePositions = function(){
	//this._calculateSpace();
	var tiles = this.getTiles();
	for (var t=0; t<tiles.length; t++){
		tiles[t].setPos(
			this._borderx + t % this._maxtilex * (this._tilewidth + this._tilepadding),
			this._bordery + Math.floor(t / this._maxtilex) * (this._tileheight + this._tilepadding)
		);
		//tiles[t].setSize(this._tilewidth, this._tileheight);
	}
}

sap.m.TilePage.prototype._calculateSpace = function()
{
	var tilewidth = this._tilewidth;
	var tileheight = this._tileheight;
	var tilepadding = this._tilepadding; 
	var wwidth =  jQuery.sap.byId( this.getId() + "-cont" ).width();
	var wheight = jQuery.sap.byId( this.getId() + "-cont" ).height();
	var tiles = this.getTiles().length;

// calculation
	var maxtilex = Math.floor((wwidth  + tilepadding) / (tilewidth + tilepadding));
	var maxtiley = Math.floor((wheight + tilepadding) / (tileheight + tilepadding));
	var maxtiles = maxtilex * maxtiley;

	var numtilex = (tiles < maxtilex)  ? tiles : maxtilex;
	var numtiley = (tiles / numtilex < maxtiley)  ? Math.ceil(tiles / numtilex) : maxtiley;
	var numtiles = tiles < maxtiles ?  tiles : maxtiles;

	var borderx = Math.floor( ( wwidth  - ( tilewidth  + tilepadding ) * numtilex - tilepadding ) / 2);
	var bordery = Math.floor( ( wheight - ( tileheight + tilepadding ) * numtiley - tilepadding ) / 2);

	if (sap.ui.getCore().byId(this.getContainer()).getTileGroups().length>1 || sap.ui.getCore().byId(this.getGroup()).getTiles().length > maxtiles) { 
		wheight = wheight - 30; //30 is the carousel paging area // look at CSS definition!!!!
		var maxtiley = Math.floor((wheight + tilepadding) / (tileheight + tilepadding));
		var maxtiles = maxtilex * maxtiley;
		sap.ui.getCore().byId(this.getContainer())._carousel.setShowPageIndicator(true);
	} else sap.ui.getCore().byId(this.getContainer())._carousel.setShowPageIndicator(false);
	
	this._maxtiles = maxtiles;
	this._maxtilex = maxtilex;
	this._maxtiley = maxtiley;
	this._borderx  = borderx;
	this._bordery  = bordery;
	
	jQuery.sap.log.debug("maxtiles "+ maxtiles +" on page " + this.getId() + ", w:" + wwidth + ", h:" + wheight);

}


sap.m.TilePage.prototype._toPixel = function(size) {
	var test = jQuery('<div style="display:none; width:'+size+';">').appendTo('body');
	var pixelSize = test.width();
	test.remove();
	return pixelSize;
}

sap.m.TilePage.prototype.setTileWidth = function(tileWidth){
	this.setProperty("tileWidth", tileWidth, true);
	this._tilewidth = this._toPixel(tileWidth);
	jQuery.sap.log.debug("Tile width in pixel: " + this._tilewidth);
}
sap.m.TilePage.prototype.setTileHeight = function(tileHeight){
	this.setProperty("tileHeight", tileHeight, true);
	this._tileheight = this._toPixel(tileHeight);
	jQuery.sap.log.debug("Tile height in pixel: " + this._tileheight);
}
sap.m.TilePage.prototype.setTilePadding = function(tilePadding){
	this.setProperty("tilePadding", tilePadding, true);
	this._tilepadding = this._toPixel(tilePadding);
	jQuery.sap.log.debug("Tile padding in pixel: " + this._tilepadding);
}
