/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.FeedListItem");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.m.ListItemBase");sap.m.ListItemBase.extend("sap.m.FeedListItem",{metadata:{library:"sap.m",properties:{"icon":{type:"sap.ui.core.URI",group:"Data",defaultValue:null},"sender":{type:"string",group:"Data",defaultValue:null},"text":{type:"string",group:"Data",defaultValue:null},"info":{type:"string",group:"Data",defaultValue:null},"timestamp":{type:"string",group:"Data",defaultValue:null},"senderActive":{type:"boolean",group:"Behavior",defaultValue:true},"iconActive":{type:"boolean",group:"Behavior",defaultValue:true}},events:{"senderPress":{},"iconPress":{}}}});sap.m.FeedListItem.M_EVENTS={'senderPress':'senderPress','iconPress':'iconPress'};
sap.m.FeedListItem.prototype.exit=function(e){if(this._oLinkControl){this._oLinkControl.destroy()}sap.m.ListItemBase.prototype.exit.apply(this)};
sap.m.FeedListItem.prototype.ontap=function(e){if(e.srcElement.id===this.getId()+"-icon"&&this.getIconActive()){var f=jQuery.sap.domById(this.getId()+"-figure");this.fireIconPress({domRef:f})}else if(!this._oLinkControl||!this.getSenderActive()||e.srcElement.id!==this._oLinkControl.getId()){sap.m.ListItemBase.prototype.ontap.apply(this,[e])}};
sap.m.FeedListItem.prototype._getLinkControl=function(){if(!this._oLinkControl){jQuery.sap.require("sap.m.Link");var t=this;this._oLinkControl=new sap.m.Link({press:function(){var s=jQuery.sap.domById(this.getId());t.fireSenderPress({domRef:s})}});this._oLinkControl.setParent(this,null,true)}this._oLinkControl.setProperty("text",this.getSender(),true);this._oLinkControl.setProperty("enabled",this.getSenderActive(),true);return this._oLinkControl};
