
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.m.TileGroupRenderer");

/**
 * @class Bar renderer. 
 * @static
 */
sap.m.TileGroupRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.TileGroupRenderer.render = function(rm, oControl) { 

	rm.write('<div '); 
	rm.writeControlData(oControl);
	rm.addStyle("height",oControl.getWidth());
	rm.addStyle("width",oControl.getHeight());
	rm.writeStyles();
	rm.writeClasses();
	rm.write(">");
	rm.write("</div>");
		
};
