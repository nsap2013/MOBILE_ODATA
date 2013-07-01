/*
 * @copyright
 */
jQuery.sap.declare("sap.m.ObjectHeaderRenderer");

/**
 * @class ObjectHeader renderer.
 * @static
 */
sap.m.ObjectHeaderRenderer = {};

/**
 * Renders the HTML for single line of Attribute and Status.
 * 
 * @param {sap.ui.core.RenderManager}
 *            rm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.m.ObjectHeader}
 *            oOH an object to be rendered
 * @param {sap.m.ObjectAttribute}
 *            oAttribute an attribute to be rendered
 * @param {sap.m.ObjectStatus}
 *            oStatus a status to be rendered
 */
sap.m.ObjectHeaderRenderer.renderAttributeStatus = function(rm, oOH, oAttribute, oStatus) {

	if ((!oAttribute || oAttribute._isEmpty()) && (!oStatus || oStatus._isEmpty())) {
		return; // nothing to render
	}

	rm.write("<div"); // Start attribute row container
	rm.addClass("sapMOHAttrRow");
	rm.writeClasses();
	rm.write(">");

	if (oAttribute && !oAttribute._isEmpty()) {
		rm.write("<div");
		rm.addClass("sapMOHAttr");
		rm.writeClasses();
		if (!oStatus || oStatus._isEmpty()) {
			rm.addStyle("width", "100%");
			rm.writeStyles();
		}
		rm.write(">");
		rm.renderControl(oAttribute);		
		rm.write("</div>");
	}

	if (oStatus && !oStatus._isEmpty()) {
		rm.write("<div");		
		rm.addClass("sapMOHStatus");		
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
 * Renders the HTML for attributes and statuses, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager}
 *            rm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.m.ObjectHeader}
 *            oOH an object to be rendered
 */
sap.m.ObjectHeaderRenderer.renderAttributesAndStatuses = function(rm, oOH) {

	var aAttribs = oOH.getAttributes();
	var iAttribsLength = aAttribs && aAttribs.length ? aAttribs.length : 0;

	// render the first line of attribute and status
	if (iAttribsLength > 0) {
		this.renderAttributeStatus(rm, oOH, aAttribs[0], oOH.getFirstStatus());
	} else {
		this.renderAttributeStatus(rm, oOH, null, oOH.getFirstStatus());
	}

	// render the second line of attribute and status
	if (iAttribsLength > 1) {
		this.renderAttributeStatus(rm, oOH, aAttribs[1], oOH.getSecondStatus());
	} else {
		this.renderAttributeStatus(rm, oOH, null, oOH.getSecondStatus());
		return;
	}

	// render the rest of the attributes
	for ( var i = 2; i < aAttribs.length; i++) {
		this.renderAttributeStatus(rm, oOH, aAttribs[i]);
	}
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager}
 *            rm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.m.Control}
 *            oOH an object representation of the control that should be rendered
 */
sap.m.ObjectHeaderRenderer.render = function(rm, oOH) {

	// return immediately if control is invisible
	if (!oOH.getVisible()) {
		return;
	}

	rm.write("<div"); // Start Main container
	rm.writeControlData(oOH);
	rm.addClass("sapMOH");	
	rm.writeClasses();
	var sTooltip = oOH.getTooltip_AsString();
	if (sTooltip) {
	      rm.writeAttributeEscaped("title", sTooltip);
	}
	
	rm.write(">");

	// Introductory text at the top of the item, like "On behalf of Julie..."
	if (oOH.getIntro()) {
		rm.write("<div");
		rm.addClass("sapMOHIntro");
		if (oOH.getIntroActive()) {
			rm.addClass("sapMOHIntroActive");
		}
		rm.writeClasses();
		rm.write(">");
		rm.write("<span");
		rm.writeAttribute("id", oOH.getId() + "-intro");
		rm.write(">");
		rm.writeEscaped(oOH.getIntro());
		rm.write("</span>");
		rm.write("</div>");
	}

	// Container for fields placed on the top half of the item, below the intro. This
	// includes title, number, and number units.
	rm.write("<div"); // Start Top row container
	rm.addClass("sapMOHTopRow");
	rm.writeClasses();
	rm.write(">");

	// Title container displayed to the left of the number and number units container.
	rm.write("<div"); // Start Title container
	rm.writeAttribute("id", oOH.getId() + "-titlediv");
	rm.addClass("sapMOHTitleDiv");
	if (oOH._hasIcon()){
		rm.addClass("sapMOHTitleIcon");
	}
	if (!oOH.getNumber()){
		rm.addClass("sapMOHTitleDivFull");
	}
	rm.writeClasses();
	rm.write(">");

	// Container for icon
	if (oOH._hasIcon()) {
		rm.write("<div"); // Start icon container
		rm.addClass("sapMOHIcon");
		if (oOH.getIconActive()) {
			rm.addClass("sapMPointer");
		}
		rm.writeClasses();
		rm.write(">");
		rm.renderControl(oOH._getImage());
		rm.write("</div>"); // end icon container
	}

	if (oOH.getTitle()) {
		rm.write("<span"); // Start Title Text container
		rm.writeAttribute("id", oOH.getId() + "-title");
		rm.addClass("sapMOHTitle");
		if (oOH.getTitleActive()) {
			rm.addClass("sapMOHTitleActive");
		}
		rm.writeClasses();
		rm.write(">");
		rm.writeEscaped(oOH.getTitle());
		rm.write("</span>"); // End Title Text container
	}
	rm.write("</div>"); // End Title container

	if (oOH.getNumber()) {
	// Container for a number and a units qualifier.
	rm.write("<div"); // Start Number/units container
	rm.writeAttribute("id", oOH.getId() + "-numberdiv");
	rm.addClass("sapMOHNumberDiv");
	rm.writeClasses();
	rm.write(">");

		rm.write("<span");
		rm.writeAttribute("id", oOH.getId() + "-number");
		rm.addClass("sapMOHNumber");

		rm.writeClasses();
		rm.write(">");
		rm.writeEscaped(oOH.getNumber());

		rm.write("</span>");

		if (oOH.getNumberUnit()) {
			rm.write("<span");
			rm.writeAttribute("id", oOH.getId() + "-numberUnit");
			rm.addClass("sapMOHNumberUnit");

			rm.writeClasses();
			rm.write(">");
			rm.writeEscaped(oOH.getNumberUnit());
			rm.write("</span>");
		}

	rm.write("</div>"); // End Number/units container
	}
	rm.write("<div style='clear:both'/>");
	rm.write("</div>"); // End Top row container
	
	if (oOH._hasBottomContent()) {
		rm.write("<div"); // Start Bottom row container
		rm.addClass("sapMOHBottomRow");
		rm.writeClasses();
		rm.write(">");

		this.renderAttributesAndStatuses(rm, oOH);

		rm.write("<div style='clear:both'/>");
		rm.write("</div>"); // End Bottom row container
	}
	rm.write("<div style='clear:both'/>");
	rm.write("</div>"); // End Main container
};
