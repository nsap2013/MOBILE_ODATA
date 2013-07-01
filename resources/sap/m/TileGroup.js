/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.TileGroup");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.m.TileGroup",{metadata:{library:"sap.m",properties:{"tileWidth":{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:null},"tileHeight":{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:null},"tilePadding":{type:"sap.ui.core.CSSSize",group:"Misc",defaultValue:null},"title":{type:"string",group:"Misc",defaultValue:null}},aggregations:{"tiles":{type:"sap.ui.core.Control",multiple:true,singularName:"tile"}}}});
sap.m.TileGroup.prototype.init=function(){};
sap.m.TileGroup.prototype.onBeforeRendering=function(){this._createTilePages();if(this._sResizeListenerId){sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);this._sResizeListenerId=null}};
sap.m.TileGroup.prototype.onAfterRendering=function(){this._renderTiles(false);this._sResizeListenerId=sap.ui.core.ResizeHandler.register(this.getDomRef().parentElement,jQuery.proxy(this._resize,this))};
sap.m.TileGroup.prototype._resize=function(){this._renderTiles(true)};
sap.m.TileGroup.prototype.exit=function(){if(this._sResizeListenerId){sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);this._sResizeListenerId=null}};
sap.m.TileGroup.prototype._renderTiles=function(r){var m=this._getMaxTiles()}
