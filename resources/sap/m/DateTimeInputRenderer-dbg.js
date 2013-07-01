/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.m.InputBaseRenderer");
jQuery.sap.declare("sap.m.DateTimeInputRenderer");


/**
 * @class DateTimeInput renderer.
 * @static
 *
 * For a common look & feel,
 * DateTimeInputRenderer extends the InputRenderer
 */
sap.m.DateTimeInputRenderer = sap.ui.core.Renderer.extend(sap.m.InputBaseRenderer);

/**
 * Adds control specific class
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.DateTimeInputRenderer.addClasses = function(rm, oControl) {
	rm.addClass("sapMDTI");
	if (oControl.getEnabled() && oControl.getEditable()) {
		rm.addClass("sapMPointer");
	}
};