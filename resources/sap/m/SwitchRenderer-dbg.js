/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.m.SwitchRenderer");

/**
 * @class Switch renderer.
 * @static
 */
sap.m.SwitchRenderer = {};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oSwitch an object representation of the control that should be rendered
 */
sap.m.SwitchRenderer.render = function(oRm, oSwitch) {
	var bState = oSwitch.getState(),
		sState = bState ? oSwitch._sOn : oSwitch._sOff,
		sTooltip = oSwitch.getTooltip_AsString(),
		sType = oSwitch.getType(),
		bDefault = (sType === "Default"),
		bEnabled = oSwitch.getEnabled();

	// suppress rendering if not visible
	if (!oSwitch.getVisible()) {
		return;
	}

	oRm.write('<div');
	oRm.addClass("sapMSwtCont");

	if (!bEnabled) {
		oRm.addClass("sapMSwtContDisabled");
	}

	oRm.writeClasses();
	oRm.writeStyles();
	oRm.writeControlData(oSwitch);

	if (sTooltip) {
		oRm.writeAttributeEscaped("title", sTooltip);
	}

	oRm.write(">");

		oRm.write("<div");
		oRm.addClass("sapMSwt");
		bState ? oRm.addClass("sapMSwtOn") : oRm.addClass("sapMSwtOff");
		oRm.addClass("sapMSwt" + sType);

		if (!bEnabled) {
			oRm.addClass("sapMSwtDisabled");
		}

		oRm.writeClasses();
		oRm.write('>');
			oRm.write('<div class="sapMSwtInner">');

				// on
				oRm.write('<div class="sapMSwtText sapMSwtTextOn">');
					oRm.write("<span>");
						if (bDefault) {
							oRm.writeEscaped(oSwitch._sOn);
						}
					oRm.write("</span>");
				oRm.write("</div>");

				// off
				oRm.write('<div class="sapMSwtText sapMSwtTextOff">');
					oRm.write("<span>");
						if (bDefault) {
							oRm.writeEscaped(oSwitch._sOff);
						}
					oRm.write("</span>");
				oRm.write("</div>");

				// handle
				oRm.write('<div class="sapMSwtHandle"');
				oRm.writeAttribute("data-sap-ui-swt", sState);
				oRm.write("></div>");

			oRm.write("</div>");

		oRm.write("</div>");

		// checkbox
		oRm.write('<input type="checkbox"');

		if (oSwitch.getName() !== "") {
			oRm.writeAttributeEscaped("name", oSwitch.getName());
		}

		oRm.writeAttribute("id", oSwitch.getId() + "-input");

		if (bState) {
			oRm.writeAttribute("checked", "checked");
		}

		if (!bEnabled) {
			oRm.writeAttribute("disabled", "disabled");
		}

		oRm.writeAttribute("value", sState);
		oRm.write(">");

	oRm.write("</div>");
};