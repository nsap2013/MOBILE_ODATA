/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.Tile");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.m.Tile",{metadata:{library:"sap.m",properties:{"removable":{type:"boolean",group:"Misc",defaultValue:true}},events:{"press":{}}}});sap.m.Tile.M_EVENTS={'press':'press'};
sap.m.Tile.prototype.onAfterRendering=function(x,y){if(this._rendered&&!this._bIsDragged&&this.getParent()instanceof sap.m.TileContainer){this.setPos(this._posX,this._posY)}this._rendered=true};
sap.m.Tile.prototype.setPos=function(x,y){this._posX=x=Math.floor(x);this._posY=y=Math.floor(y);if(!this._rendered)return;var o=this.getDomRef();if("webkitTransform"in o.style){this.$().css('-webkit-transform','translate3d('+x+'px,'+y+'px,0)')}else if("transform"in o.style){this.$().css('transform','translate3d('+x+'px,'+y+'px,0)')}else if("msTransform"in o.style){this.$().css('msTransform','translate('+x+'px,'+y+'px)')}else if("MozTransform"in o.style){this.$().css('-moz-transform','translate3d('+x+'px,'+y+'px,0)')}};
sap.m.Tile.prototype.setSize=function(w,h){this._width=w;this._height=h};
sap.m.Tile.prototype.isEditable=function(i){if(i===true||i===false){this._bIsEditable=i}return this._bIsEditable};
sap.m.Tile.prototype.isDragged=function(i){if(!this._bIsEditable)return;if(i===true||i===false){var o=this.$();setTimeout(function(){o.toggleClass("sapMTileDrag",i)},1);this._bIsDragged=i}return this._bIsDragged};
sap.m.Tile.prototype.ontouchstart=function(e){if(!this.isEditable()){var p=this.getParent();while(p){if(p._bAvoidChildTapEvent||(p instanceof sap.m.Tile&&p.isEditable())){return}p=p.getParent()}this.$().toggleClass("sapMTileActive",true);this.$().toggleClass("sapMTileActive-CTX",true)}};
sap.m.Tile.prototype.ontouchend=function(e){if(!this.isEditable()){this.$().toggleClass("sapMTileActive",false);this.$().toggleClass("sapMTileActive-CTX",false)}};
sap.m.Tile.prototype.ontouchmove=function(e){if(!this.isEditable()){var p=this.getParent();while(p){if(p._bAvoidChildTapEvent||(p instanceof sap.m.Tile&&p.isEditable())){return}p=p.getParent()}this.$().toggleClass("sapMTileActive",false);this.$().toggleClass("sapMTileActive-CTX",false)}};
sap.m.Tile.prototype.ontap=function(e){if(!this.isEditable()){var p=this.getParent();while(p){if(p._bAvoidChildTapEvent||(p instanceof sap.m.Tile&&p.isEditable())){return}p=p.getParent()}this.firePress({})}};
