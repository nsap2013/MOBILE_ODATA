/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.m.SliderRenderer");

/**
 * @class Slider renderer.
 * @static
 */
sap.m.SliderRenderer = {};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oSlider an object representation of the slider that should be rendered
 */
sap.m.SliderRenderer.render = function(oRm, oSlider) {
	var fMin = oSlider.getMin(),
		fMax = oSlider.getMax(),
		fStep = oSlider.getStep(),
		sName = oSlider.getName(),
		bEnabled = oSlider.getEnabled();

	// avoid render when not visible
	if (!oSlider.getVisible()) {
		return;
	}

	oRm.write("<div");
	oRm.addClass("sapMSliCont");

	if (!bEnabled) {
		oRm.addClass("sapMSliContDisabled");
	} else {
		oRm.addClass("sapMPointer");
	}

	oRm.addStyle("width", oSlider.getWidth());
	oRm.addStyle("visibility", "hidden");
	oRm.writeClasses();
	oRm.writeStyles();
	oRm.writeControlData(oSlider);
	var sTooltip = oSlider.getTooltip_AsString();
	if (sTooltip) {
		oRm.writeAttributeEscaped("title", sTooltip);
	}
	oRm.write(">");

		oRm.write('<div');
			oRm.addClass("sapMSli");

			if (!bEnabled) {
				oRm.addClass("sapMSliDisabled");
			}

			oRm.writeClasses();
			oRm.writeStyles();

			oRm.write(">");

			if (oSlider.getProgress()) {
				oRm.write('<div class="sapMSliProgress" style="width: ' +  oSlider._fProgressValue + '%"></div>');
			}

			// start render slider handle
			oRm.write('<span class="sapMSliHandle"');
				oRm.addStyle("left", oSlider._fProgressValue + "%");
				oRm.writeStyles();
			oRm.write('><span class="sapMSliHandleInner"></span></span>');
			// end render slider handle
		oRm.write("</div>");

		// start render input range for screen readers
		oRm.write('<input type="range" class="sapMSliInput"');

			if (!bEnabled) {
				oRm.write("disabled");
			}

			if (sName !== "") {
				oRm.writeAttributeEscaped("name", sName);
			}

			oRm.writeAttribute("min", fMin);
			oRm.writeAttribute("max", fMax);
			oRm.writeAttribute("step", fStep);
			oRm.writeAttribute("value", oSlider.getValue());
		oRm.write("/>");
		// end render input range for screen readers

	oRm.write("</div>");
};