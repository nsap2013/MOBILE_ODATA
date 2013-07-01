/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.BusyIndicatorRenderer");

/**
 * @class BusyIndicator renderer. 
 * @static
 */
sap.m.BusyIndicatorRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.BusyIndicatorRenderer.render = function(oRm, oControl){ 

	var sSize = oControl.getSize();
	var iSpinBar = (oControl._bIosStyle) ? 13 :4;
	var iDesignClass = "";
	if(oControl.getDesign() == "auto") {
		iDesignClass = "sapMBusyIndicator";
	} else {
		iDesignClass = oControl.getDesign() == "dark" ? "sapMBusyIndicatorDark" : "sapMBusyIndicatorLight";
	}
	
	oRm.write("<div");
	oRm.writeControlData(oControl);
	oRm.addClass(iDesignClass);
	oRm.writeClasses();
	var sTooltip = oControl.getTooltip_AsString();
	if (sTooltip) {
		oRm.writeAttributeEscaped("title", sTooltip);
	}
	if(!oControl.getVisible()) {
		oRm.addStyle("visibility", "hidden");
		oRm.writeStyles();
	}
	oRm.write(">");
	if(oControl.getCustomIcon()){
		if(!oControl._iconImage) {
			var sWidth = oControl.getCustomIconWidth() || '44px';
			var sHeight = oControl.getCustomIconHeight() || '44px';
			oControl._iconImage = new sap.m.Image(oControl.getId() + "-icon", {src: oControl.getCustomIcon(), width: sWidth, height: sHeight, densityAware: oControl.getCustomIconDensityAware()}).addStyleClass('sapMBsyIndIcon');
		}
		oRm.renderControl(oControl._iconImage);
	}else if (oControl._bUseCanvas){
		oRm.write('<canvas');
		oRm.writeAttribute("id", oControl.getId() +  "-canvas");
		oRm.writeAttribute("class","sapMSpinCanvas"); 
		oRm.writeAttribute("width","32"); // initially 2em * 16px
		oRm.writeAttribute("height","32");
		if(sSize){
			oRm.addStyle('width', sSize);
			oRm.addStyle('height', sSize);
			oRm.writeStyles();
		}
		oRm.write('></canvas>');
	}else{ // old mvi style for android and ios
		oRm.write("<div");
		oRm.writeAttribute("class","sapMSpinner"); 
		if(sSize){
			oRm.addStyle('width', oControl.getSize());
			oRm.addStyle('height', oControl.getSize());
			oRm.writeStyles();
		}
		oRm.write(">");

		for (var i=1; i<iSpinBar; i++) {
			var sBarClass = 'sapMSpinBar' + i;
			if(!oControl._bIosStyle) {
				if(i === 3) {
					var sBarClass1 = 'sapMSpinBar' + 4;
					oRm.write('<div class="'+ sBarClass + '"><div class="'+ sBarClass1 + '"></div></div>');
					break;
				}
			}
			oRm.write('<div class="'+ sBarClass + '"></div>');
		}
		oRm.write("</div>");
	}
	if (oControl.getText()) {
		if (!oControl._oLabel) {
			oControl._oLabel = new sap.m.Label(oControl.getId() + "-label", {text: oControl.getText()}).addStyleClass("sapMBsyIndLabel");
			if (oControl.getTextDirection()){
				oControl._oLabel.setTextDirection(oControl.getTextDirection());
			}
		}
		oRm.renderControl(oControl._oLabel);
	}
	
	oRm.write("</div>");
};
