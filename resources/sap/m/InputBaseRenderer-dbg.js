/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.m.InputBaseRenderer");
jQuery.sap.require("sap.ui.core.ValueStateSupport");

/**
 * @class Input renderer.
 * @static
 */
sap.m.InputBaseRenderer = {};

sap.m.InputBaseRenderer.render = function(rm, oInput) {

	if(!oInput.getVisible()) {
		return;
	}

	rm.write("<div ");
	rm.writeControlData(oInput);
	oInput.getWidth() && rm.addStyle("width", oInput.getWidth()) && rm.writeStyles();
	!oInput.getEnabled() && rm.addClass("sapMInputBaseDisabled");
	!oInput.getEditable() && rm.addClass("sapMInputBaseReadonly");
	oInput.getValueState() != "None" && rm.addClass("sapMInputBase" + oInput.getValueState());
	rm.addClass("sapMInputBase");
	this.addClasses(rm, oInput);
	
	rm.writeClasses();
	var sTooltip = sap.ui.core.ValueStateSupport.enrichTooltip(oInput, oInput.getTooltip_AsString());
	if (sTooltip) {
		rm.writeAttributeEscaped("title", sTooltip);
	}
	rm.write(">");
	
	// enable self-made placeholder
	if (oInput._showLabelAsPlaceholder) {
		rm.write("<label ");
		rm.writeAttribute("id", oInput.getId() + "-placeholder");
		rm.writeAttribute("for", oInput.getId() + "-inner");
		
		rm.addClass("sapMInputBasePlaceholder");
		rm.writeClasses();
		rm.write(">");
		rm.writeEscaped(oInput.getPlaceholder());
		rm.write("</label>");
	}

	rm.write("<input id=" + oInput.getId() + "-inner");
	rm.writeStyles();

	if (!oInput.getEnabled()) {
		rm.writeAttribute ("disabled", "disabled");
		if (oInput.getType() == "Password") {
			// required for JAWS reader on password fields on desktop:
			rm.writeAttribute("readonly", "readonly");
		}
		rm.addClass("sapMInputBaseDisabled");
	}

	// let the browser handle placeholder
	if (!oInput._showLabelAsPlaceholder && oInput.getPlaceholder()) {
		rm.writeAttribute("placeholder", oInput.getPlaceholder());
	}
	
	this.writeAttributes(rm, oInput);
	
	oInput.getValue() && rm.writeAttributeEscaped("value", oInput.getValue());
	rm.addClass("sapMInputBaseInner");
	if (!oInput.getEditable()) {
		if(oInput.getEnabled()) {
			rm.addClass("sapMInputBaseReadonlyInner");
		}
		rm.writeAttribute("readonly","readonly");
	}
	oInput.getValueState() != "None" && rm.addClass("sapMInputBase" + oInput.getValueState() + "Inner");
	!oInput.getEnabled() && rm.addClass("sapMInputBaseDisabled");
	rm.writeClasses();
	rm.write("></div>");
};

/**
 * This function is reserved for derived class to add extra attributes to Input
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.InputBaseRenderer.writeAttributes = function(rm, oControl) {
};

/**
 * Adds extra CSS class
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.InputBaseRenderer.addClasses = function(rm, oControl) {
	if (oControl.getEnabled()) {
		rm.addClass("sapMInputBaseCursor");
	}
};