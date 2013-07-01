/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.m.InputBaseRenderer");
jQuery.sap.declare("sap.m.InputRenderer");

/**
 * @class Input renderer.
 * @static
 *
 * InputRenderer extends the InputBaseRenderer
 */
sap.m.InputRenderer = sap.ui.core.Renderer.extend(sap.m.InputBaseRenderer);

/**
 * Adds control specific class
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.InputRenderer.addClasses = function(rm, oControl) {
	sap.m.InputBaseRenderer.addClasses(rm, oControl);
	rm.addClass("sapMInput");
};

/**
 * add extra attributes to Input
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.InputRenderer.writeAttributes = function(rm, oControl) {
	rm.writeAttribute("type", oControl.getType().toLowerCase());
	if (oControl.getMaxLength() > 0) {
		rm.writeAttribute("maxlength", oControl.getMaxLength());
	}
};
