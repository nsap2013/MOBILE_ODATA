/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.TextArea");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.m.TextArea",{metadata:{library:"sap.m",properties:{"rows":{type:"int",group:"Appearance",defaultValue:2},"cols":{type:"int",group:"Appearance",defaultValue:20},"width":{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:null},"height":{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:null},"value":{type:"string",group:"Data",defaultValue:'',bindable:"bindable"},"enabled":{type:"boolean",group:"Behavior",defaultValue:true},"editable":{type:"boolean",group:"Behavior",defaultValue:true},"visible":{type:"boolean",group:"Appearance",defaultValue:true},"maxLength":{type:"int",group:"Behavior",defaultValue:0},"valueState":{type:"sap.ui.core.ValueState",group:"Data",defaultValue:sap.ui.core.ValueState.None},"placeholder":{type:"string",group:"Appearance",defaultValue:null},"wrapping":{type:"sap.ui.core.Wrapping",group:"Behavior",defaultValue:null}},events:{"change":{},"liveChange":{}}}});sap.m.TextArea.M_EVENTS={'change':'change','liveChange':'liveChange'};sap.m.TextArea._bExperimentalScroll=false;
sap.m.TextArea.prototype.onBeforeRendering=function(){this._unbindEvents()};
sap.m.TextArea.prototype.onAfterRendering=function(){this._$textarea=this.$().find('textarea');this._$textarea.on("change input",jQuery.proxy(this._onChange,this));if(jQuery.support.touch){if(!sap.m.TextArea._bExperimentalScroll){jQuery.os.ios&&this._$textarea.keyup(function(e){if(this.scrollTop+this.clientHeight+parseFloat(jQuery(this).css("font-size"))>=this.scrollHeight){this.scrollTop=this.scrollHeight-this.clientHeight+1}})}if(this._behaviour.INSIDE_SCROLLABLE_WITHOUT_FOCUS){delete this._oIScroll;this._oIScroll=null;this._$textarea.on("touchstart",jQuery.proxy(this._onTouchStart,this));this._$textarea.on("touchmove",jQuery.proxy(this._onTouchMove,this))}else if(this._behaviour.PAGE_NON_SCROLLABLE_AFTER_FOCUS){this._$textarea.on("touchmove",function(e){if(jQuery(this).is(":focus")){e.stopPropagation()}})}}else{this._$textarea.on("mousedown mousewheel",function(e){e.stopPropagation()})}};
sap.m.TextArea.prototype.exit=function(){this._unbindEvents()};
sap.m.TextArea.prototype._behaviour=(function(){return{INSIDE_SCROLLABLE_WITHOUT_FOCUS:jQuery.os.ios||jQuery.os.blackberry||jQuery.browser.chrome,PAGE_NON_SCROLLABLE_AFTER_FOCUS:jQuery.os.android&&parseFloat(jQuery.os.version)>=4.1}}());
sap.m.TextArea.prototype._onChange=function(e){var v=this._$textarea.val();this.setProperty("value",v,true);if(e.type=="change"){this.fireChange({value:v})}else{this.fireLiveChange({value:v})}};
sap.m.TextArea.prototype._onTouchStart=function(e){if(this._oIScroll===null){this._oIScroll=sap.m.getIScroll(this)}this._startY=e.touches[0].pageY;this._iDirection=0};
sap.m.TextArea.prototype._onTouchMove=function(e){var t=this._$textarea[0],p=e.touches[0].pageY,i=t.scrollTop<=0,a=t.scrollTop+t.clientHeight>=t.scrollHeight,b=this._startY>p,c=this._startY<p;this._startY=p;if((i&&c)||(a&&b)){var d=(c)?-1:1;if(!(this._iDirection==d)&&this._oIScroll){this._oIScroll.pointY=p;this._iDirection=d}e.preventDefault();return}e.stopPropagation()};
sap.m.TextArea.prototype._unbindEvents=function(){if(this._$textarea){this._$textarea.off("change input keyup touchstart touchmove mousedown")}};
