
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.m.TilePageRenderer");

/**
 * @class TilePage renderer. 
 * @static
 */
sap.m.TilePageRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */

sap.m.TilePageRenderer = sap.ui.core.Renderer.extend(sap.m.PageRenderer);
//sap.m.TilePageRenderer.render = function(rm, oControl) { 

//			rm.write('<div '); 
//			rm.writeControlData(oControl);
//			rm.addClass('sapMTCP')
//			rm.writeClasses();
//			rm.write(">");
			
//			this.getTiles().forEach(rm.renderControl);
			
//			rm.write("</div>");

//};
