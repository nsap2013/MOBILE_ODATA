/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.m.ColumnListItemRenderer");
jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.m.ListRenderer");
jQuery.sap.require("sap.m.ListItemBaseRenderer");

/**
 * @class ColumnListItem renderer.
 * @static
 */
sap.m.ColumnListItemRenderer = sap.ui.core.Renderer.extend(sap.m.ListItemBaseRenderer);

/**
 * Renders the HTML for the given control, using the provided
 * {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager}
 *            oRenderManager the RenderManager that can be used for writing to
 *            the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */
sap.m.ColumnListItemRenderer.renderLIAttributes = function(rm, oLI) {
	rm.addClass("sapMListTblRow");
};


sap.m.ColumnListItemRenderer.renderLIContent = function(rm, oLI, oList) {
	var aColumns = oList.getColumns();

	// remove cloned headers
	oLI.destroyAggregation("_clonedHeaders", true);

	// remove pop-in if list is not in rendering phase
	// in rendering phase all pop-ins are already removed
	if (!oList._bRendering) {
		oLI.removePopin();
	}

	oLI.getCells().forEach(function(oCell, i) {
		var cls, oColumn = aColumns[i];
		if (!oColumn || !oColumn.getVisible() || oColumn.isNeverVisible(true) || oColumn.isPopin()) {
			return;
		}

		rm.write("<td");
		rm.addClass("sapMListTblCell");
		rm.writeAttribute("id", oLI.getId() + "_cell" + i);

		// check column properties
		if (oColumn) {
			cls = oColumn.getStyleClass(true);
			cls && rm.addClass(cls);
			oColumn.getVAlign() != "Middle" && rm.addStyle("vertical-align", oColumn.getVAlign().toLowerCase());
			rm.addStyle("text-align", oColumn.getCssAlign());
			rm.writeStyles();
		}

		rm.writeClasses();
		rm.write(">");
		rm.renderControl(oColumn.applyAlignTo(oCell));
		rm.write("</td>");
	});
};


/**
 * Renders pop-ins for Table Rows
 *
 * @private
 *
 * @param {sap.ui.core.RenderManager} rm RenderManager
 * @param {sap.m.List} oList List control
 * @param {sap.m.ListItemBase} oLI List item
 * @param {string} cursor class for LI
 */
sap.m.ColumnListItemRenderer.renderPopin = function(rm, oLI, oList) {
	oLI._popinId = oLI.getId() + "-sub";
	rm.write("<tr class='sapMListTblSubRow'");
	rm.writeAttribute("id", oLI._popinId);
	rm.write("><td");
	rm.writeAttribute("colspan", oList._colCount);
	rm.write("><div class='sapMListTblSubCnt'>");

	oList.getColumns().forEach(function(oColumn, i) {
		if (!oColumn.getVisible() || !oColumn.isPopin()) {
			return;
		}

		var cls = oColumn.getStyleClass(),
			hAlign = oColumn.getPopinHAlign(),
			textAlign = oColumn.getCssAlign(hAlign),
			header = oColumn.getHeader(),
			cell = oLI.getCells()[i];

		/* row start */
		rm.write("<div");
		rm.addClass("sapMListTblSubCntRow");
		cls && rm.addClass(cls);
		rm.writeClasses();
		rm.write(">");

		/* header cell */
		rm.write("<div");
		rm.addStyle("text-align", textAlign);
		rm.addClass("sapMListTblSubCntHdr");
		rm.writeClasses();
		rm.writeStyles();
		rm.write(">");
		if (header) {
			header = header.clone();
			oLI.addAggregation("_clonedHeaders", header, true);
			oColumn.applyAlignTo(header, hAlign);
			rm.renderControl(header);
		}
		rm.write("</div>");

		/* separator cell */
		if (header) {
			rm.write("<div class='sapMListTblSubCntSpr'>:</div>");
		}

		/* value cell */
		rm.write("<div");
		rm.addStyle("text-align", textAlign);
		rm.addClass("sapMListTblSubCntVal");
		rm.writeClasses();
		rm.writeStyles();
		rm.write(">");
		if (cell) {
			oColumn.applyAlignTo(cell, hAlign);
			rm.renderControl(cell);
		}
		rm.write("</div>");

		/* row end */
		rm.write("</div>");
	});

	rm.write("</div></td></tr>");
};