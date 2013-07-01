/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.m.SelectRenderer");

/**
 * @class Select renderer.
 * @static
 */
sap.m.SelectRenderer = {};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oSelect an object representation of the select that should be rendered
 */
sap.m.SelectRenderer.render = function(oRm, oSelect) {
	var	sName = oSelect.getName(),
		sTitle = oSelect.getTitle(),
		aItems = oSelect.getItems(),
		oSelectedItem = oSelect.getSelectedItem(),
		sSelectedItemText = oSelectedItem ? oSelectedItem.getText() : oSelect._sNoData,
		sSelectedItemId = oSelect.getAssociation("selectedItem"),
		aItemsLength = aItems.length,
		sTooltip = oSelect.getTooltip_AsString(),
		sId = oSelect.getId() + "-nat",
		i = 0;

	// suppress rendering if not visible
	if (!oSelect.getVisible()) {
		return;
	}

	oRm.write("<div");
	oRm.addClass("sapMSlt");

	if (!oSelect.getEnabled()) {
		oRm.addClass("sapMSltDisabled");
	}

	oRm.addStyle("width", oSelect.getWidth());
	oRm.addStyle("max-width", oSelect.getMaxWidth());
	oRm.addStyle("visibility", "hidden");

	oRm.writeControlData(oSelect);

	oRm.writeStyles();
	oRm.writeClasses();

	if (sTooltip) {
		oRm.writeAttributeEscaped("title", sTooltip);
	}

	oRm.write(">");
		oRm.write('<label class="sapMSltLabel"');
		oRm.writeAttribute("for", sId);
		oRm.write(">");
			oRm.writeEscaped(sSelectedItemText);
		oRm.write('</label>');

		oRm.write('<span class="sapMSltIcon"></span>');

		oRm.write("<select");

		oRm.writeAttribute("id", sId);

		if (sName !== "") {
			oRm.writeAttributeEscaped("name", sName);
		}

		if (sTitle !== "") {
			oRm.writeAttributeEscaped("title", sTitle);
		}

		if (!oSelect.getEnabled()) {
			oRm.write(" disabled");
		}

		oRm.write(">");

			// rendering items
			for (; i < aItemsLength; i++) {
				oRm.write("<option");
					oRm.writeAttribute("id", aItems[i].getId());
					oRm.writeAttributeEscaped("value", (aItems[i].getKey() !== "") ? aItems[i].getKey() : aItems[i].getId());

					if (aItems[i].getId() === sSelectedItemId) {
						oRm.write(" selected");
					}

					if (!aItems[i].getEnabled()) {
						oRm.write(" disabled");
					}

					oRm.write(">");
					oRm.writeEscaped(aItems[i].getText());
				oRm.write("</option>");
			}

			if (aItemsLength === 0) {
				oRm.write("<option>" + sSelectedItemText + "</option>");
			}

		oRm.write("</select>");

	oRm.write("</div>");
};