/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

 
jQuery.sap.declare("sap.m.SplitAppRenderer");
jQuery.sap.require("sap.ui.core.Renderer");

/**
 * @class SplitApp renderer. 
 * @static
 */
sap.m.SplitAppRenderer = {
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.SplitAppRenderer.render = function(rm, oControl){
	rm.write("<div");
	rm.writeControlData(oControl);
	rm.addClass("sapMSplitApp");
	
	sap.m.BackgroundHelper.addBackgroundColorStyles(rm, oControl.getBackgroundColor(),  oControl.getBackgroundImage());
	
	if(!jQuery.device.is.phone) {
		if(jQuery.device.is.portrait) {
			rm.addClass("sapMSplitAppPortrait");
		}
		switch(oControl.getMode()) {
			case "ShowHideMode":
				rm.addClass("sapMSplitAppShowHide");
				break;
			case "StretchCompress":
				rm.addClass("sapMSplitAppStretchCompress");
				break;
			case "PopoverMode":
				rm.addClass("sapMSplitAppPopover");
				break;
		}
	}
	rm.writeClasses();
	rm.writeStyles();
	var sTooltip = oControl.getTooltip_AsString();
	if (sTooltip) {
		rm.writeAttributeEscaped("title", sTooltip);
	}
	rm.write(">"); // div element
	
	sap.m.BackgroundHelper.renderBackgroundImageTag(rm, oControl, "sapMAppBG",  oControl.getBackgroundImage(), oControl.getBackgroundRepeat(), oControl.getBackgroundOpacity());
	
	if(!jQuery.device.is.phone) {
		if(oControl.getMode() === "PopoverMode" && jQuery.device.is.portrait) {
			oControl._oDetailNav.addStyleClass("sapMSplitAppDetail");
			rm.renderControl(oControl._oDetailNav);
			//add master to popover if it's not yet added
			if(oControl._oPopOver.getContent().length === 0){
				oControl._oPopOver.addAggregation("content", oControl._oMasterNav, true);
			}
		} else {
			oControl._oMasterNav.addStyleClass("sapMSplitAppMaster");
			rm.renderControl(oControl._oMasterNav);
			
			oControl._oDetailNav.addStyleClass("sapMSplitAppDetail");
			rm.renderControl(oControl._oDetailNav);
		}
	}else {
		oControl._oMasterNav.addStyleClass("sapMSplitAppMobile");
		rm.renderControl(oControl._oMasterNav);
	}
	
	 rm.write("</div>");
};