/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.m.ListItemBaseRenderer");
jQuery.sap.require("sap.ui.core.theming.Parameters");
jQuery.sap.require("sap.ui.core.IconPool");

/**
 * @class ListitemBase renderer.
 * @static
 */
sap.m.ListItemBaseRenderer = {};

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
sap.m.ListItemBaseRenderer.render = function(rm, oLI) {
	// return immediately if control is invisible
	if (!oLI.getVisible()) {
		return;
	}

	var _bShowUnreadBubble = (sap.ui.core.theming.Parameters.get("sapUiLIUnreadAsBubble") == "true");

	// define behavior: list or table
	var sId = oLI.getId(),
		oParent = oLI.getParent(),
		oListTypes = sap.m.ListType,	// cache globals
		oListModes = sap.m.ListMode,
		isTable = !oLI.hasOwnProperty("_renderInList") && oParent && oParent.getColumns && oParent.getColumns().length,
		rowEndTag, rowStartTag, openCellTag, closeCellTag, isColumnLI, hasPopin,
		sTooltip = oLI.getTooltip_AsString();

	if (!isTable) {
		rowEndTag = "</li>";
		rowStartTag = "<li";
		openCellTag = function() {
			rm.write("<div");
		};
		closeCellTag = function() {
			rm.write("</div>");
		};
	} else {
		rowEndTag = "</tr>";
		rowStartTag = "<tr";
		isColumnLI = sap.m.ColumnListItem && oLI instanceof sap.m.ColumnListItem;
		hasPopin = oParent._hasPopin && isColumnLI;
		openCellTag = function(cls) {
			rm.write("<td");
			if (cls) {
				rm.addClass(cls);
				rm.writeClasses();
			}
			rm.write("><div");
		};
		closeCellTag = function() {
			rm.write("</div></td>");
		};
	}

	rm.write(rowStartTag);
	sTooltip && rm.writeAttributeEscaped("title", sTooltip);
	rm.writeControlData(oLI);
	rm.addClass("sapMLIB");
	rm.addClass("sapMLIB-CTX");
	if(oLI._showSeparators  == sap.m.ListSeparators.None){
		rm.addClass("sapMLIBShowSeparatorNone");
	}
	if (oLI._includeItemInSelection || (oLI.getType() != oListTypes.Inactive && oLI.getType() != oListTypes.Detail)) {
		rm.addClass("sapMLIBCursor");
	}

	//unread is shown as bold text
	if (oLI._showUnread && oLI.getUnread() && !_bShowUnreadBubble) {
		rm.addClass("sapMLIBUnread");
	}
	if (hasPopin) {
		rm.addClass("sapMListTblSupRow");
	}

	// TODO: Remove this unnecessary class name sapMLIBUnread is enough
	if (oLI._showUnread && oLI.getUnread()) {
		rm.addClass("sapMLIBUnreadRow");
	}

	// LI attributes hook
	if (this.renderLIAttributes) {
		this.renderLIAttributes(rm, oLI);
	}

	// LI content hook
	if (this.renderLIContent) {

		// depending on the mode of the list a checkbox or radiobutton will be
		// rendered. If a switch between list modes happens, an animation will be
		// added for the selection area
		var oSelectControl = null;

		switch (oLI._mode) {
		case oListModes.SingleSelectLeft:
			oSelectControl = oLI._getRadioButton((sId + "-selectSingle"), oLI._listId + "_selectGroup");
			if (oSelectControl.getSelected()) {
				rm.addClass("sapMLIBSelected");
			}
			rm.writeClasses();
			rm.write(">");

			openCellTag("sapMListTblSelCol");
			rm.addClass("sapMLIBSelectSL");
			if (oLI._oldMode === oListModes.None && oLI._modeAnimationOn) {
				rm.addClass("sapMLIBSelectAnimation");
			}
			rm.writeAttribute("id", sId + "-mode");
			rm.writeClasses();
			rm.write(">");
			rm.renderControl(oSelectControl);
			closeCellTag();
			oLI._oldMode = oLI._mode;
			break;
		case oListModes.SingleSelect:
			oSelectControl = oLI._getRadioButton((sId + "-selectSingle"), oLI._listId + "_selectGroup");
			if (oSelectControl.getSelected()) {
				rm.addClass("sapMLIBSelected");
			}
			rm.writeClasses();
			rm.write(">");
			break;
		case oListModes.SingleSelectMaster:
			oSelectControl = oLI._getRadioButton((sId + "-selectSingleMaster"), oLI._listId + "_selectMasterGroup");
			rm.writeClasses();
			rm.write(">");
			openCellTag("sapMListTblNone");
			rm.addClass("sapMLIBSelectSM");
			rm.writeAttribute("id", sId + "-mode");
			rm.writeClasses();
			rm.write(">");
			rm.renderControl(oSelectControl);
			closeCellTag();
			oLI._oldMode = oLI._mode;
			break;
		case oListModes.MultiSelect:
			oSelectControl = oLI._getCheckBox((sId + "-selectMulti"));
			if (oSelectControl.getSelected()) {
				rm.addClass("sapMLIBSelected");
			}
			rm.writeClasses();
			rm.write(">");
			openCellTag("sapMListTblSelCol");
			rm.addClass("sapMLIBSelectM");
			if (oLI._oldMode === oListModes.None && oLI._modeAnimationOn) {
				rm.addClass("sapMLIBSelectAnimation");
			}
			rm.writeAttribute("id", sId + "-mode");
			rm.writeClasses();
			rm.write(">");
			rm.renderControl(oSelectControl);
			closeCellTag();
			oLI._oldMode = oLI._mode;
			break;
		case oListModes.Delete:
			rm.writeClasses();
			rm.write(">");
			openCellTag("sapMListTblSelCol");
			rm.addClass("sapMLIBSelectD");
			if (oLI._oldMode === oListModes.None && oLI._modeAnimationOn) {
				rm.addClass("sapMLIBSelectAnimation");
			}
			rm.writeAttribute("id", sId + "-mode");
			rm.writeClasses();
			rm.write(">");
			var delIcon = null;
			if (sap.ui.core.theming.Parameters.get("sapUiLIDelIcon") == "false"){
				delIcon = oLI._getDelImage((sId + "-imgDel"), "sapMLIBImgDel", "delete_icon.png");
			}
			else{
				var sURI = sap.ui.core.IconPool.getIconURI("delete");
				delIcon = oLI._delIcon || new sap.ui.core.Icon(sId + "-imgDel",{src:sURI}).setParent(oLI, null, true).addStyleClass("sapMLIBIconDel").attachPress(oLI._delete);;
			}
			if (delIcon) {
				oLI._delIcon = delIcon;
				rm.renderControl(delIcon);
			}
			closeCellTag();
			oLI._oldMode = oLI._mode;
			break;
		case oListModes.None:
			rm.writeClasses();
			rm.write(">");
			if (!isTable && oLI._oldMode && oLI._oldMode !== oListModes.None && oLI._oldMode !== oListModes.SingleSelect && oLI._modeAnimationOn) {
				openCellTag();
				rm.addClass("sapMLIBUnselectAnimation");
				rm.writeAttribute("id", sId + "-mode");
				rm.writeClasses();
				rm.write(">");
				closeCellTag();
			}
			break;
		}

		if (oLI._showUnread && _bShowUnreadBubble) {
			openCellTag("sapMListTblUnreadCol");
			rm.writeAttribute("id", sId + "-unread");
			rm.addClass("sapMLIBUnread");
			if (oLI.getUnread()) {
				rm.addClass("sapMLIBUnreadBG");
			}
			rm.writeClasses();
			rm.write(">");
			closeCellTag();
		}

		var type = oLI.getType(), navIcon;
		switch (type) {
			case oListTypes.Navigation:
				navIcon = "NAV";
				break;
			case oListTypes.Detail:
			case oListTypes.DetailAndActive:
				navIcon = "DET";
				break;
		}

		if (isTable) {
			if (isColumnLI) {
				this.renderLIContent(rm, oLI, oParent);
			} else {
				// this is for spanning all rows except navigation
				// we need colspan calculation if we want to show selection or unread indicator
				this.renderLIContent(rm, oLI, oParent._colCount - 1);
			}
		} else {
			openCellTag();
			rm.addClass("sapMLIBContent");

			// there will be a margin on the right, if no navigation icon or counter is shown
			if ((type == oListTypes.Active || type == oListTypes.Inactive)  && !oLI.getCounter()) {
				rm.addClass("sapMLIBContentMargin");
			}

			rm.writeClasses();
			rm.write(">");
			this.renderLIContent(rm, oLI);
			closeCellTag();
		}

		// if we are not in table mode than counter different than 0 bubble will be shown
		if (!isTable && oLI.getCounter()) {
			rm.write("<div");
			rm.writeAttribute("id", sId + "-counter");
			rm.addClass("sapMLIBCounter");
			if (!navIcon) {
				rm.addClass("sapMLIBContentMargin");
			}
			rm.writeClasses();
			rm.write(">");
			rm.write(oLI.getCounter());
			rm.write("</div>");
		}

		if (navIcon == "NAV" && jQuery.os.ios && oLI.getType() == oListTypes.Navigation) {
			openCellTag("sapMListTblNavCol");
			rm.addClass("sapMLIBImgNav");
			rm.writeAttribute("id", sId + "-imgNav");
			rm.writeClasses();
			rm.write(">");
			closeCellTag();
			oParent._navRenderedBy = sId + "-imgNav";
		} else if (navIcon == "DET") {
			openCellTag("sapMListTblNavCol");
			rm.addClass("sapMLIBCursor");
			rm.writeClasses();
			rm.write(">");
			var detailIcon = null;
			if (sap.ui.core.theming.Parameters.get("sapUiLIDetailIcon") == "false"){
				detailIcon = oLI._getNavImage((sId + "-imgDet"), "sapMLIBImgDet", "detail_disclosure.png", "detail_disclosure_pressed.png");
			}
			else{
				var sURI = sap.ui.core.IconPool.getIconURI("edit");
				detailIcon = oLI._detailIcon || new sap.ui.core.Icon(sId + "-imgDet",{src:sURI}).setParent(oLI, null, true).addStyleClass("sapMLIBIconDet");
			}
			if (detailIcon) {
				oLI._detailIcon = detailIcon;
				rm.renderControl(detailIcon);
			}
			
			closeCellTag();
			oParent._navRenderedBy = sId + "-imgDet";
		} else if (isTable) {
			// create empty cells for table
			rm.write("<td></td>");
		}

		switch (oLI._mode) {
		case oListModes.SingleSelect:
			openCellTag("sapMListTblSelCol");
			rm.addClass("sapMLIBSelectS");
			if (oLI._oldMode === oListModes.None && oLI._modeAnimationOn) {
				rm.addClass("sapMLIBSelectAnimation");
			}
			rm.writeAttribute("id", sId + "-mode");
			rm.writeClasses();
			rm.write(">");
			rm.renderControl(oSelectControl);
			closeCellTag();
			oLI._oldMode = oLI._mode;
			break;
		case oListModes.None:
			if (!isTable && oLI._oldMode && oLI._oldMode !== oListModes.None && oLI._oldMode === oListModes.SingleSelect && oLI._modeAnimationOn) {
				openCellTag();
				rm.addClass("sapMLIBUnselectAnimation");
				rm.writeAttribute("id", sId + "-mode");
				rm.writeClasses();
				rm.write(">");
				closeCellTag();
			}
			oLI._oldMode = oLI._mode;
			break;
		}
	} else {
		rm.writeClasses();
		rm.write(">");
	}
	rm.write(rowEndTag);
	
	if (hasPopin) {
		this.renderPopin(rm, oLI, oParent);
	}
};