/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.m.IconTabBarRenderer");

/**
 * @class HBox renderer.
 * @static
 */
sap.m.IconTabBarRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.IconTabBarRenderer.render = function(oRM, oControl){
	
	var aItems = oControl.getItems();
	
	oRM.write("<div ");
	oRM.addClass("sapMITB");
	oRM.writeControlData(oControl);
	oRM.writeClasses();
	oRM.write(">")
	oRM.write("<div class=\"sapMITBHead\">");
	jQuery.each(aItems, function(iIndex, oItem) {
		oRM.write("<div ");
		oRM.writeElementData(oItem)
		oRM.addClass("sapMIT")
		if (oItem instanceof sap.m.IconTabFilter) {
			if (oItem.getShowAll()) {
				oRM.addClass("sapMITAll");
			} else {
				oRM.addClass("sapMITFilter");
			}
			if (oItem.getCount() == "0") {
				oRM.addClass("sapMITDisabled");
			}
 			oRM.writeClasses();
			oRM.write(">");
			if (!oItem.getShowAll()) {
				var sIconClass = "sapMITFilterIcon sapMITFilter" + oItem.getIconColor();
				oRM.writeIcon(oItem.getIcon(), sIconClass);
			}
			oRM.write("<span class=\"sapMITDesc\">");
			oRM.write("<span class=\"sapMITCount\">");
			oRM.writeEscaped(oItem.getCount());
			oRM.write("</span>");
			oRM.write("<span class=\"sapMITText\">");
			oRM.writeEscaped(oItem.getText());
			oRM.write("</span>");
			oRM.write("</span>")
		} 
		else if (oItem instanceof sap.m.IconTabSeparator) {
			oRM.addClass("sapMITSep")
			if (!oItem.getIcon()) {
				oRM.addClass("sapMITSepLine");
			}
			oRM.writeClasses();
			oRM.write(">");
			if (oItem.getIcon()) {
				oRM.writeIcon(oItem.getIcon(), "sapMITSepIcon");
			}
		}
		oRM.write("</div>");
	});
	oRM.write("</div>");
	if (oControl.getContent()) {
		oRM.write("<div id=\"" + oControl.getId() + "-arrow\" class=\"sapMITBArrow\"></div>");
		oRM.write("<div id=\"" + oControl.getId() + "-content\" class=\"sapMITBContent\">");
		oRM.renderControl(oControl.getContent());
		oRM.write("</div>");
	}
	oRM.write("</div>");
};
