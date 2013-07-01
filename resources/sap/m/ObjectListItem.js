/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.ObjectListItem");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.m.ListItemBase");sap.m.ListItemBase.extend("sap.m.ObjectListItem",{metadata:{library:"sap.m",properties:{"title":{type:"string",group:"Misc",defaultValue:null},"number":{type:"string",group:"Misc",defaultValue:null},"numberUnit":{type:"string",group:"Misc",defaultValue:null},"intro":{type:"string",group:"Misc",defaultValue:null},"icon":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"activeIcon":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null}},defaultAggregation:"attributes",aggregations:{"attributes":{type:"sap.m.ObjectAttribute",multiple:true,singularName:"attribute"},"firstStatus":{type:"sap.m.ObjectStatus",multiple:false},"secondStatus":{type:"sap.m.ObjectStatus",multiple:false}}}});jQuery.sap.require("sap.ui.core.IconPool");
sap.m.ObjectListItem.prototype.exit=function(e){if(this._image){this._image.destroy()}if(this._icon){this._icon.destroy()}sap.m.ListItemBase.prototype.exit.apply(this)};
sap.m.ObjectListItem.prototype._hasBottomContent=function(){return(this._hasAttributes()||this._hasStatus())};
sap.m.ObjectListItem.prototype._hasAttributes=function(){var a=this.getAttributes();if(a&&a.length>0){for(var i=0;i<a.length;i++){if(!a[i]._isEmpty()){return true}}}return false};
sap.m.ObjectListItem.prototype._hasStatus=function(){return((this.getFirstStatus()&&!this.getFirstStatus()._isEmpty())||(this.getSecondStatus()&&!this.getSecondStatus()._isEmpty()))};
sap.m.ObjectListItem.prototype._getImage=function(){var i;var s="3rem";var u=this.getIcon();if(sap.ui.core.IconPool.isIconURI(u)){i=this._icon||sap.ui.core.IconPool.createControlByURI({src:u,id:this.getId()+"-img",size:s},sap.m.Image);this._icon=i}else{i=this._image||sap.ui.core.IconPool.createControlByURI({src:u,id:this.getId()+"-img",height:s,width:s},sap.m.Image);this._image=i}i.addStyleClass("sapMObjLIcon",true);i.setSrc(u);return i};
sap.m.ObjectListItem.prototype._activeHandlingInheritor=function(){var i=sap.ui.getCore().byId(this.getId()+"-img");if((i instanceof sap.m.Image)&&this.getActiveIcon()){i.setSrc(this.getActiveIcon())}};
sap.m.ObjectListItem.prototype._inactiveHandlingInheritor=function(){var i=sap.ui.getCore().byId(this.getId()+"-img");if(i instanceof sap.m.Image){i.setSrc(this.getIcon())}};
