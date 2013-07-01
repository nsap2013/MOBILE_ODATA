/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.StandardTile");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.m.Tile");sap.m.Tile.extend("sap.m.StandardTile",{metadata:{library:"sap.m",properties:{"title":{type:"string",group:"Misc",defaultValue:null},"info":{type:"string",group:"Misc",defaultValue:null},"icon":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"activeIcon":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"number":{type:"string",group:"Misc",defaultValue:null},"numberUnit":{type:"string",group:"Misc",defaultValue:null},"infoState":{type:"sap.ui.core.ValueState",group:"Misc",defaultValue:sap.ui.core.ValueState.None},"type":{type:"sap.m.StandardTileType",group:"Misc",defaultValue:sap.m.StandardTileType.None}}}});jQuery.sap.require("sap.ui.core.IconPool");
sap.m.StandardTile.prototype.exit=function(){if(this._icon){this._icon.destroy();this._icon=null}if(this._image){this._image.destroy();this._image=null}};
sap.m.StandardTile.prototype.getIcon=function(){if(!this.getProperty("icon")&&this.getType()==="Create"){return sap.ui.core.IconPool.getIconURI("add")}else{return this.getProperty("icon")}};
sap.m.StandardTile.prototype._getImage=function(){var i;var s=jQuery.device.is.phone?"1.3rem":"2rem";var u=this.getIcon();if(sap.ui.core.IconPool.isIconURI(u)){i=this._icon||sap.ui.core.IconPool.createControlByURI({src:u,id:this.getId()+"-icon",size:s},sap.m.Image);this._icon=i}else{i=this._image||sap.ui.core.IconPool.createControlByURI({src:u,id:this.getId()+"-img",height:s,width:s},sap.m.Image);this._image=i}i.setSrc(u);return i};
