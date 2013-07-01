
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.m.TileContainerRenderer");

/**
 * @class Bar renderer. 
 * @static
 */
sap.m.TileContainerRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.TileContainerRenderer.render = function(rm, oControl) { 

	rm.write("<div tabindex=\"0\""); 
	rm.writeControlData(oControl);
	rm.addStyle("height",oControl.getWidth());
	rm.addStyle("width",oControl.getHeight());
	rm.addStyle("visibility","hidden");
	rm.writeStyles();
	rm.addClass("sapMTC");
	rm.writeClasses();
	rm.write(" >");
	rm.write("<div id=\""+ oControl.getId()+"-scrl\" class=\"sapMTCScrl\" style=\"overflow:hidden;height:0px\" >");
	rm.write("<div id=\""+ oControl.getId()+"-blind\" class=\"sapMTCBlind\"></div>");
	rm.write("<div id=\""+ oControl.getId()+"-cnt\" class=\"sapMTCCnt sapMTCAnim\" style=\"height:0px\">");
	var aTiles = oControl.getTiles();
	for (var i=0;i<aTiles.length;i++) {
		rm.renderControl(aTiles[i]);
	}
	rm.write("</div>");
	rm.write("</div>");
	rm.write("<div id=\""+ oControl.getId()+"-pager\" class=\"sapMTCPager\">"); 
	rm.write("</div>");
	rm.write("<div id=\""+ oControl.getId()+"-leftedge\" class=\"sapMTCEdgeLeft\"></div>"); 
	rm.write("<div id=\""+ oControl.getId()+"-rightedge\" class=\"sapMTCEdgeRight\"></div>"); 
	rm.write("<div id=\""+ oControl.getId()+"-leftscroller\" class=\"sapMTCScroller sapMTCLeft\"><div class=\"sapMTCInner\"></div></div>"); 
	rm.write("<div id=\""+ oControl.getId()+"-rightscroller\" class=\"sapMTCScroller sapMTCRight\"><div class=\"sapMTCInner\"></div></div>"); 
	rm.write("</div>");
};