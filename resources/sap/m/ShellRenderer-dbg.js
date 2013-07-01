/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
 
 jQuery.sap.declare("sap.m.ShellRenderer");

/**
 * @class Shell renderer. 
 * @static
 */
sap.m.ShellRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.ShellRenderer.render = function(rm, oControl) { 
	rm.write("<div");
	rm.writeControlData(oControl);
	rm.addClass("sapMShell");
	if (oControl.getAppWidthLimited()) {
		rm.addClass("sapMShellAppWidthLimited");
	}
	
	sap.m.BackgroundHelper.addBackgroundColorStyles(rm, oControl.getBackgroundColor(),  oControl.getBackgroundImage());
	
	rm.writeClasses();
	rm.writeStyles();
	
	var sTooltip = oControl.getTooltip_AsString();
	if (sTooltip) {
		rm.writeAttributeEscaped("title", sTooltip);
	}
	
	rm.write(">");
	
	sap.m.BackgroundHelper.renderBackgroundImageTag(rm, oControl, "sapMShellBG",  oControl.getBackgroundImage(), oControl.getBackgroundRepeat(), oControl.getBackgroundOpacity());
	
	rm.write("<div class='sapMShellBrandingBar'></div>");
	
	
	
	// header
	rm.write("<header class='sapMShellHeader'>");
	
	// logo
	var sImage = oControl.getLogo(); // configured logo
	if (!sImage) {
		jQuery.sap.require("sap.ui.core.theming.Parameters");
		sImage = sap.ui.core.theming.Parameters.get('sapUiGlobalLogo'); // theme logo
		if (sImage) {
			var match = /url[\s]*\('?"?([^\'")]*)'?"?\)/.exec(sImage);
			if (match) {
				sImage = match[1];
			} else if (sImage === "''"){ // theme default
				sImage = null;
			}
		}
	}
	
	if (sImage) {
		rm.write("<div class='sapMShellLogo'>");
		if (jQuery.browser.msie) {
			rm.write("<span class='sapMShellLogoImgAligner'></span>");
		}
		rm.write("<img id='" + oControl.getId() + "-logo' class='sapMShellLogoImg' src='");
		rm.writeEscaped(sImage);
		rm.write("' /></div>");
	}
	
	// header title
	rm.write("<h1 id='" + oControl.getId() + "-hdrTxt' class='sapMShellHeaderText'>");
	rm.writeEscaped(oControl.getTitle());
	rm.write("</h1>");
	
	// header right area
	rm.write("<span class='sapMShellHeaderRight'>");
	
	// headerRightText
	if (oControl.getHeaderRightText()) {
		rm.write("<span class='sapMShellHeaderRightText'>" + oControl.getHeaderRightText() + "</span>");
	}
	
	// logout button
	if (oControl.getShowLogout()) {
		var rb = sap.ui.getCore().getLibraryResourceBundle("sap.m");
		rm.write("<a id='" + oControl.getId() + "-logout' tabindex='0' role='button' class='sapMShellHeaderLogout'>" + rb.getText("SHELL_LOGOUT") + "</a>");
	}
	
	rm.write("</span></header>");
	
	
	
	// content
	rm.write("<section class='sapMShellContent' id='" + oControl.getId() + "-content'>");

	rm.renderControl(oControl.getApp());
	
	rm.write("</section></div>");
};
