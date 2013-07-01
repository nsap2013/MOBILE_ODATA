/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.m.ObjectListItemRenderer");
jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.m.ListItemBaseRenderer");
jQuery.sap.require("sap.m.ObjectAttribute");

/**
 * @class ObjectListItem renderer.
 * @static
 */
sap.m.ObjectListItemRenderer = sap.ui.core.Renderer.extend(sap.m.ListItemBaseRenderer);

/**
 * Renders the HTML for single line of Attribute and Status.
 * 
 * @param {sap.ui.core.RenderManager}
 *            rm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.m.ObjectListItem}
 *            oLI an object to be rendered
 * @param {sap.m.ObjectAttribute}
 *            oAttribute an attribute to be rendered
 * @param {sap.m.ObjectStatus}
 *            oStatus a status to be rendered
 */
sap.m.ObjectListItemRenderer.renderAttributeStatus = function(rm, oLI, oAttribute, oStatus) {

	if (!oAttribute && !oStatus || (oAttribute && oAttribute._isEmpty() && oStatus && oStatus._isEmpty())) {
		return; // nothing to render
	}

	rm.write("<div"); // Start attribute row container
	rm.addClass("sapMObjLAttrRow");
	rm.writeClasses();
	rm.write(">");

	if (oAttribute && !oAttribute._isEmpty()) {
		rm.write("<div");
		rm.addClass("sapMObjLAttrDiv");
		rm.writeClasses();
		if (!oStatus || oStatus._isEmpty()) {
			rm.addStyle("width", "100%");
			rm.writeStyles();
		}
		rm.write(">");
		rm.renderControl(oAttribute);		
		rm.write("</div>");
	}

	if (oStatus && (!oStatus._isEmpty())) {
		rm.write("<div");		
		rm.addClass("sapMObjLStatusDiv");		
		rm.writeClasses();
		if (!oAttribute || oAttribute._isEmpty()) {
			rm.addStyle("width", "100%");
			rm.writeStyles();
		}
		rm.write(">");
		rm.renderControl(oStatus);
		rm.write("</div>");
	}

	rm.write("</div>"); // Start attribute row container
};

/**
 * Renders the HTML for the given control, using the provided
 * {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager}
 *          oRenderManager the RenderManager that can be used for writing to the
 *          Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *          oControl an object representation of the control that should be
 *          rendered
 */
sap.m.ObjectListItemRenderer.renderLIAttributes = function(rm, oLI) {
	rm.addClass("sapMObjLItem");
	rm.addClass("sapMObjLListModeDiv");
};

sap.m.ObjectListItemRenderer.renderLIContent = function(rm, oLI) {
	
	rm.write("<div"); // Start Main container
	rm.writeControlData(oLI);
	rm.write(">");

	// Introductory text at the top of the item, like "On behalf of Julie..."
	if(oLI.getIntro()) {
		rm.write("<div");
		rm.addClass("sapMObjLIntro");
		rm.writeClasses();
		rm.writeAttribute("id", oLI.getId() + "-intro");
		rm.write(">");
		rm.write("<span>");
		rm.writeEscaped(oLI.getIntro());
		rm.write("</span>");
		rm.write("</div>");
	}

	
	// Container for fields placed on the top half of the item, below the intro. This
	// includes title, number, and number units.
	rm.write("<div");  // Start Top row container     
	rm.addClass("sapMObjLTopRow");
	rm.writeClasses();
	rm.write(">");
			
	
	// Container for a number and a units qualifier.
	rm.write("<div"); // Start Number/units container
	rm.addClass("sapMObjLNumberDiv");
	rm.writeClasses();
	rm.write(">");
	
	if (oLI.getNumber()) {
		rm.write("<div");
		rm.writeAttribute("id", oLI.getId() + "-number");
		rm.addClass("sapMObjLNumber");
		rm.writeClasses();
		
		rm.write(">");
		rm.writeEscaped(oLI.getNumber());
		rm.write("</div>");
		
		if (oLI.getNumberUnit()) {
			rm.write("<div");
			rm.writeAttribute("id", oLI.getId() + "-numberUnit");
			rm.addClass("sapMObjLNumberUnit");
			rm.writeClasses();
			rm.write(">");
			rm.writeEscaped(oLI.getNumberUnit());
			rm.write("</div>");
		}
	}
	
	rm.write("</div>"); // End Number/units container
	
	// Title container displayed to the left of the number and number units container.
	rm.write("<div"); // Start Title container
	rm.writeAttribute("id", oLI.getId() + "-title");
	rm.addClass("sapMObjLTitle");
	rm.writeClasses();
	rm.write(">");
	
	if(oLI.getIcon()) {
		rm.renderControl(oLI._getImage());
	}		
		
	if (oLI.getTitle()) {
		rm.writeEscaped(oLI.getTitle());
	}
	rm.write("</div>"); // End Title container	
	
	rm.write("</div>"); // End Top row container
	
	rm.write('<div style="clear:both"/>');
	
	// Bottom row container.
	if(oLI._hasBottomContent()) {
		rm.write("<div"); // Start Bottom row container
		rm.addClass("sapMObjLBottomRow");
		rm.writeClasses();
		rm.write(">");

		var aAttribs = oLI.getAttributes();
		var iAttribsLength = aAttribs && aAttribs.length ? aAttribs.length : 0;

		// render the first line of attribute and status
		if (iAttribsLength > 0) {
			this.renderAttributeStatus(rm, oLI, aAttribs[0], oLI.getFirstStatus());
		} else {
			this.renderAttributeStatus(rm, oLI, null, oLI.getFirstStatus());
		}

		// render the second line of attribute and status
		if (iAttribsLength > 1) {
			this.renderAttributeStatus(rm, oLI, aAttribs[1], oLI.getSecondStatus());
		} else {
			this.renderAttributeStatus(rm, oLI, null, oLI.getSecondStatus());
		}

		// render the rest of the attributes
		for ( var i = 2; i < iAttribsLength; i++) {
			this.renderAttributeStatus(rm, oLI, aAttribs[i]);
		}
		rm.write("</div>"); // End Bottom row container
	}
	rm.write("</div>"); // End Main container
};
