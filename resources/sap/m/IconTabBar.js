/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.IconTabBar");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.m.IconTabBar",{metadata:{library:"sap.m",properties:{"showSelection":{type:"boolean",group:"Misc",defaultValue:true}},aggregations:{"items":{type:"sap.m.IconTab",multiple:true,singularName:"item"},"content":{type:"sap.ui.core.Control",multiple:false}},events:{"select":{}}}});sap.m.IconTabBar.M_EVENTS={'select':'select'};
sap.m.IconTabBar.prototype.init=function(){};
sap.m.IconTabBar.prototype.exit=function(){};
sap.m.IconTabBar.prototype.setSelectedItem=function(i){this.oSelectedItem=i;this.adjustArrow();this.fireSelect({selectedItem:this.oSelectedItem,selectedKey:this.oSelectedItem.getKey()})};
sap.m.IconTabBar.prototype.adjustArrow=function(){var $=jQuery.sap.byId(this.getId()+"-arrow"),a;if(this.oSelectedItem){a=this.oSelectedItem.$();var l=a[0].offsetLeft+a.outerWidth()/2-$.width()/2;$.css("left",l+"px")}};
sap.m.IconTabBar.prototype.onAfterRendering=function(){if(!this.oSelectedItem){this.oSelectedItem=this.getItems()[0]}this.adjustArrow()};
sap.m.IconTabBar.prototype.onThemeChanged=function(e){this.adjustArrow()};
