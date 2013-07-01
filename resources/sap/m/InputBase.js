/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.InputBase");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.m.InputBase",{metadata:{library:"sap.m",properties:{"value":{type:"string",group:"Data",defaultValue:null,bindable:"bindable"},"width":{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:'100%'},"enabled":{type:"boolean",group:"Behavior",defaultValue:true},"visible":{type:"boolean",group:"Appearance",defaultValue:true},"valueState":{type:"sap.ui.core.ValueState",group:"Data",defaultValue:sap.ui.core.ValueState.None},"name":{type:"string",group:"Misc",defaultValue:null},"placeholder":{type:"string",group:"Misc",defaultValue:null},"editable":{type:"boolean",group:"Misc",defaultValue:true}},events:{"change":{}}}});sap.m.InputBase.M_EVENTS={'change':'change'};jQuery.sap.require("sap.ui.core.EnabledPropagator");jQuery.sap.require("sap.ui.core.IconPool");sap.ui.core.IconPool.insertFontFaceStyle();
sap.m.InputBase.prototype.init=function(){this._changeProxy=jQuery.proxy(this._onChange,this)};
sap.m.InputBase.prototype._showLabelAsPlaceholder=(function($){if($.browser.msie&&$.browser.fVersion<=9){return true}var u=$.support.touch;if(u&&(($.os.ios&&$.os.fVersion>=6)||($.os.android&&$.browser.chrome))||($.os.blackberry&&$.os.fVersion>=10)){u=null}return u}(jQuery));
sap.m.InputBase.prototype.onBeforeRendering=function(){this._unbind()};
sap.m.InputBase.prototype.onAfterRendering=function(){this._$input=this.$().find('input');this._$input.bind("change.input",this._changeProxy);if(this._showLabelAsPlaceholder){this._$label=this.$().find('label');this._setLabelVisibility()}};
sap.m.InputBase.prototype.exit=function(){this._unbind();delete this._$input;delete this._$label};
sap.m.InputBase.prototype.getFocusDomRef=function(){return jQuery.sap.domById(this.getId()+'-inner')};
sap.m.InputBase.prototype.getIdForLabel=function(){return this.getId()+'-inner'};
sap.m.InputBase.prototype.ontouchstart=function(e){e.originalEvent._sapui_handledByControl=true};
sap.m.InputBase.prototype.setValueState=function(v){var o=this.getValueState();if(v==o){return this}if(!(this._$input instanceof jQuery)){return this.setProperty("valueState",v)}this.setProperty("valueState",v,true);var $=this._$input,a=this.$();if(o&&o!="None"){a.removeClass("sapMInputBase"+o);$.removeClass("sapMInputBase"+o+"Inner")}if(v&&v!="None"){a.addClass("sapMInputBase"+v);$.addClass("sapMInputBase"+v+"Inner")}return this};
sap.m.InputBase.prototype._onChange=function(e){var v=this._$input.val();this.setProperty("value",v,true);this._setLabelVisibility();this.fireChange({newValue:v})};
sap.m.InputBase.prototype._setLabelVisibility=function(){if(this._showLabelAsPlaceholder){this._$label.css("display",this.getProperty("value")?"none":"inline")}};
sap.m.InputBase.prototype._unbind=function(){if(this._$input instanceof jQuery){this._$input.unbind(".input")}};
