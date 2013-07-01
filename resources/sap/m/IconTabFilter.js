/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.IconTabFilter");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Item");sap.ui.core.Item.extend("sap.m.IconTabFilter",{metadata:{interfaces:["sap.m.IconTab"],library:"sap.m",properties:{"count":{type:"string",group:"Data",defaultValue:''},"showAll":{type:"boolean",group:"Misc",defaultValue:false},"icon":{type:"sap.ui.core.URI",group:"Misc",defaultValue:''},"iconColor":{type:"sap.ui.core.IconColor",group:"Appearance",defaultValue:sap.ui.core.IconColor.Default}}}});
sap.m.IconTabFilter.prototype.ontouchstart=function(e){if(this.getCount()!="0"){this.highlight()}};
sap.m.IconTabFilter.prototype.ontouchend=function(e){if(this.getCount()!="0"){this.unhighlight();this.getParent().setSelectedItem(this)}};
sap.m.IconTabFilter.prototype.ontouchcancel=function(e){if(this.getCount()!="0"){this.unhighlight()}};
sap.m.IconTabFilter.prototype.highlight=function(e){this.$().addClass("sapMITHighlight")};
sap.m.IconTabFilter.prototype.unhighlight=function(e){this.$().removeClass("sapMITHighlight")}
