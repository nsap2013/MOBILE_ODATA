/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.Input.
jQuery.sap.declare("sap.m.Input");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.m.InputBase");

/**
 * Constructor for a new Input.
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
 * <li>{@link #getType type} : sap.m.InputType (default: sap.m.InputType.Text)</li>
 * <li>{@link #getMaxLength maxLength} : int (default: 0)</li>
 * <li>{@link #getValueStateText valueStateText} : string</li>
 * <li>{@link #getShowValueStateMessage showValueStateMessage} : boolean (default: true)</li>
 * <li>{@link #getDateFormat dateFormat} : string (default: 'YYYY-MM-dd')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Input#event:liveChange liveChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.m.InputBase#constructor sap.m.InputBase}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Enables users to input data.
 * @extends sap.m.InputBase
 *
 * @author SAP AG 
 * @version 1.12.1
 *
 * @constructor   
 * @public
 * @name sap.m.Input
 */
sap.m.InputBase.extend("sap.m.Input", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"type" : {type : "sap.m.InputType", group : "Data", defaultValue : sap.m.InputType.Text},
		"maxLength" : {type : "int", group : "Behavior", defaultValue : 0},
		"valueStateText" : {type : "string", group : "Misc", defaultValue : null},
		"showValueStateMessage" : {type : "boolean", group : "Misc", defaultValue : true},
		"dateFormat" : {type : "string", group : "Misc", defaultValue : 'YYYY-MM-dd', deprecated: true}
	},
	events : {
		"liveChange" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.Input with name <code>sClassName</code> 
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
 * @name sap.m.Input.extend
 * @function
 */

sap.m.Input.M_EVENTS = {'liveChange':'liveChange'};


/**
 * Getter for property <code>type</code>.
 * Type of input (e.g. Text, Number, Email, Phone)
 *
 * Default value is <code>Text</code>
 *
 * @return {sap.m.InputType} the value of property <code>type</code>
 * @public
 * @name sap.m.Input#getType
 * @function
 */

/**
 * Setter for property <code>type</code>.
 *
 * Default value is <code>Text</code> 
 *
 * @param {sap.m.InputType} oType  new value for property <code>type</code>
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Input#setType
 * @function
 */


/**
 * Getter for property <code>maxLength</code>.
 * Maximum number of characters. Value '0' means the feature is switched off.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>maxLength</code>
 * @public
 * @name sap.m.Input#getMaxLength
 * @function
 */

/**
 * Setter for property <code>maxLength</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iMaxLength  new value for property <code>maxLength</code>
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Input#setMaxLength
 * @function
 */


/**
 * Getter for property <code>valueStateText</code>.
 * The text which is shown in the value state message popup. If not specfied a default text is shown.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>valueStateText</code>
 * @public
 * @name sap.m.Input#getValueStateText
 * @function
 */

/**
 * Setter for property <code>valueStateText</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sValueStateText  new value for property <code>valueStateText</code>
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Input#setValueStateText
 * @function
 */


/**
 * Getter for property <code>showValueStateMessage</code>.
 * Whether the value state message should be shown.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showValueStateMessage</code>
 * @public
 * @name sap.m.Input#getShowValueStateMessage
 * @function
 */

/**
 * Setter for property <code>showValueStateMessage</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowValueStateMessage  new value for property <code>showValueStateMessage</code>
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Input#setShowValueStateMessage
 * @function
 */


/**
 * Getter for property <code>dateFormat</code>.
 * Only used if type=date and no datepicker is available.
 * The data is displayed and the user input is parsed according to this format.
 * NOTE: The value property is always of the form RFC 3339 (YYYY-MM-dd).
 *
 * Default value is <code>YYYY-MM-dd</code>
 *
 * @return {string} the value of property <code>dateFormat</code>
 * @public
 * @deprecated Since version 1.9.1. 
 * sap.m.DateTimeInput should be used for date/time inputs and formating.
 * @name sap.m.Input#getDateFormat
 * @function
 */

/**
 * Setter for property <code>dateFormat</code>.
 *
 * Default value is <code>YYYY-MM-dd</code> 
 *
 * @param {string} sDateFormat  new value for property <code>dateFormat</code>
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.9.1. 
 * sap.m.DateTimeInput should be used for date/time inputs and formating.
 * @name sap.m.Input#setDateFormat
 * @function
 */


/**
 * This event is fired when the value of the input is changed - e.g. at each keypress 
 *
 * @name sap.m.Input#liveChange
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.newValue the new value of the input
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'liveChange' event of this <code>sap.m.Input</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Input</code>.<br/> itself. 
 *  
 * This event is fired when the value of the input is changed - e.g. at each keypress 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Input</code>.<br/> itself.
 *
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Input#attachLiveChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'liveChange' event of this <code>sap.m.Input</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Input#detachLiveChange
 * @function
 */

/**
 * Fire event liveChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'newValue' of type <code>string</code> the new value of the input</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Input#fireLiveChange
 * @function
 */


// Start of sap/m/Input.js
jQuery.sap.require("sap.ui.core.EnabledPropagator");
jQuery.sap.require("sap.ui.core.IconPool");
sap.ui.core.IconPool.insertFontFaceStyle();

sap.m.Input.prototype.init = function() {
	sap.m.InputBase.prototype.init.call(this);
	this._inputProxy = jQuery.proxy(this._onInput, this);
};

sap.m.Input.prototype.onAfterRendering = function() {
	sap.m.InputBase.prototype.onAfterRendering.call(this);
	this._$input.bind("input.input", this._inputProxy);
};

sap.m.Input.prototype._onInput = function(oEvent) {
	var value = this._$input.val();
	this.setProperty("value", value, true);
	this._setLabelVisibility();
	this.fireLiveChange({
		newValue : value
	});
};


(function(){

	function closeMessage(oInput){
		if(oInput._popup){
			oInput._popup.close();
		}
	};
	
	function openMessage(oInput){
		var oState = oInput.getValueState();
		
		if (oInput.getShowValueStateMessage() && oState && ((oState === sap.ui.core.ValueState.Warning)
				|| (oState === sap.ui.core.ValueState.Error)) && oInput.getEnabled() && oInput.getEditable()) { 
			var sText = oInput.getValueStateText();
			if(!sText){
				sText = sap.ui.core.ValueStateSupport.getAdditionalText(oInput);
			}
			if(!sText){
				return;
			}
		
			var messageId = oInput.getId()+"-message";
			if(!oInput._popup){
				jQuery.sap.require("sap.ui.core.Popup");
				jQuery.sap.require("jquery.sap.encoder");
				oInput._popup = new sap.ui.core.Popup("<span></span>" /*Just some dummy*/, false, false, false);
				oInput._popup.attachClosed(function(){
					jQuery.sap.byId(messageId).remove();
				});
			}
			
			var $Input = jQuery(oInput.getFocusDomRef());
			var dock = sap.ui.core.Popup.Dock;
			var bIsRightAligned = $Input.css("text-align") === "right";
			
			var sClass = "sapMInputMessage " + ((oState === sap.ui.core.ValueState.Warning) ? "sapMInputMessageWarning" : "sapMInputMessageError");
			
			oInput._popup.setContent(jQuery("<div style=\"max-width:"+$Input.outerWidth()+"px;\" class=\""+sClass+"\" id=\""+messageId+"\"><span id=\""+messageId+"-text\">"+jQuery.sap.encodeHTML(sText)+"</span></div>"));
			
			oInput._popup.close(0);
			oInput._popup.open(
					200,
					bIsRightAligned ? dock.EndTop : dock.BeginTop,
					bIsRightAligned ? dock.EndBottom : dock.BeginBottom,
					oInput.getFocusDomRef(),
					null,
					null,
					function(){
						oInput._popup.close();
					}
			);
		}
	};

	sap.m.Input.prototype.setValueState = function(sValueState) {
		var sOldValueState = this.getValueState();
	
		sap.m.InputBase.prototype.setValueState.apply(this, arguments);
		
		var sNewValueState = this.getValueState();
	
		if(this.getDomRef() && sNewValueState != sOldValueState && this.getFocusDomRef() === document.activeElement){
			switch(sNewValueState){
				case sap.ui.core.ValueState.Error:
				case sap.ui.core.ValueState.Warning:
					openMessage(this);
					break;
				default:
					closeMessage(this);
			}
			
		}
	
		return this;
	};
	
	sap.m.Input.prototype.setValueStateText = function(sText) {
		jQuery.sap.byId(this.getId()+"-message-text").text(sText);
		return this.setProperty("valueStateText", sText, true);
	};
	
	sap.m.Input.prototype.onfocusin = function(oEvent) {
		openMessage(this);
	};
	
	sap.m.Input.prototype.onkeydown = function(oEvent) {
		closeMessage(this);
	};
	
	sap.m.Input.prototype.onfocusout = function(oEvent) {
		closeMessage(this);
	};

})();