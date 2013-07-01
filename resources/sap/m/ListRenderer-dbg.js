/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.m.ListRenderer");
jQuery.sap.require("sap.ui.core.theming.Parameters");


/**
 * @class List renderer.
 * @static
 */
sap.m.ListRenderer = {};

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
sap.m.ListRenderer.render = function(rm, oControl) {

    // return immediately if control is invisible
    if (!oControl.getVisible()) {
        return;
    }
    
    var bInset = oControl.getInset(),
        isTable = !!oControl.getColumns().length;

    rm.write("<div");
    rm.addClass("sapMList");
    if (bInset) {
        rm.addClass("sapMListInsetBG");
    }
    if (isTable) {
    	oControl._bRendering = true;
    	rm.addClass("sapMListTblCnt");
    }

    rm.writeClasses();
    rm.writeControlData(oControl);
    if (oControl.getWidth()) {
        rm.addStyle("width", oControl.getWidth());
        rm.writeStyles();
    }
    rm.write(">");

    // header
    if (oControl.getHeaderText()) {
        rm.write("<header");
        rm.writeAttribute("id", oControl.getId() + "-listHeader");
        if(oControl.getHeaderDesign() == sap.m.ListHeaderDesign.Plain)
        	rm.addClass((bInset ? "sapMListHdrPlainInset" : "sapMListHdrPlain"));
        else{
        	rm.addClass((bInset ? "sapMListHdrInset" : "sapMListHdr"));
        }
        rm.writeClasses();
        rm.write(">");
        rm.writeEscaped(oControl.getHeaderText());
        rm.write("</header>");
    }

    // start building list/table
    if (isTable) {
        rm.write("<table");
        rm.addClass("sapMListTbl");
    } else {
        rm.write("<ul");
    }
    rm.writeAttribute("id", oControl.getId() + "-listUl");
    rm.addClass("sapMListUl");

    //separators
    switch(oControl.getShowSeparators()){
    case sap.m.ListSeparators.All:
    	rm.addClass("sapMListShowSeparatorsAll");
    	break;
    case sap.m.ListSeparators.Inner:
    	rm.addClass("sapMListShowSeparatorsInner");
    	break;
    case sap.m.ListSeparators.None:
    	rm.addClass("sapMListShowSeparatorsNone");
    	break;
    
    }
    
    // for theming add selection name as class
    if (isTable && oControl.getMode() != "None") {
        rm.addClass("sapMListTbl" + oControl.getMode());
    }

    if (bInset) {
        rm.addClass("sapMListInset");
        if (oControl.getHeaderText()) {
            rm.addClass("sapMListInsetHdr");
        }
        if (oControl.getFooterText()) {
            rm.addClass("sapMListInsetFtr");
        }
    }

    rm.writeClasses();
    rm.write(">");

    if (isTable) {
        this._renderColumns(rm, oControl, "Head");
    }

    // check if selection mode has changed - remove current selection
    if (oControl._mode != sap.m.ListMode.None && oControl._mode != oControl.getMode()) {
        oControl._removeCurrentSelection();
    }

    // set new current selection mode
    oControl._mode = oControl.getMode();
    if (oControl._mode == sap.m.ListMode.SingleSelectMaster) {
        oControl.setIncludeItemInSelection(true);
    }

    // render child controls
    var aItems = oControl.getItems();
    for (var i = 0; i < aItems.length; i++) {
        aItems[i]._mode = oControl.getMode();
        aItems[i]._includeItemInSelection = oControl.getIncludeItemInSelection();
        aItems[i]._select = oControl._select;
        aItems[i]._delete = oControl._delete;
        aItems[i]._listId = oControl.getId();
        aItems[i]._showUnread = oControl.getShowUnread();
        aItems[i]._modeAnimationOn = oControl.getModeAnimationOn();
        aItems[i]._showSeparators = oControl.getShowSeparators();
        rm.renderControl(aItems[i]);
    }

    // render no-data if needed
    if (aItems.length <= 0 && oControl.getShowNoData()) {
        var oRB = sap.ui.getCore().getLibraryResourceBundle("sap.m");
        if (!oControl.getNoDataText()) {
            oControl.setNoDataText(oRB.getText("LIST_NO_DATA"));
        }

        if (isTable) {
            rm.write("<tr class='sapMLIB sapMListTblRow'>");
            rm.write("<td id='" + oControl.getId() + "-listNoData' colspan='" + oControl._colCount + "' class='sapMListTblCell sapMListTblCellNoData'>");
            rm.writeEscaped(oControl.getNoDataText());
            rm.write("</td></tr>");
        } else {
            rm.write("<li id="+ oControl.getId() + "-listNoData" +" class='sapMListNoData'>");
            rm.writeEscaped(oControl.getNoDataText());
            rm.write("</li>");
        }
    }

    if (isTable) {
    	oControl._bRendering = false;
    	rm.write("</table>");
    } else {
    	rm.write("</ul>");
    }

    // growing list render hook
    if (this.renderGrowingListContent) {
        this.renderGrowingListContent(rm, oControl);
    }

    // footer
    if (oControl.getFooterText()) {
        rm.write("<footer");
        rm.writeAttribute("id", oControl.getId() + "-listFooter");
        rm.addClass((bInset ? "sapMListFtrInset" : "sapMListFtr"));
        rm.writeClasses();
        rm.write(">");
        rm.writeEscaped(oControl.getFooterText());
        rm.write("</footer>");
    }

    rm.write("</div>");
};


/**
 * Renders the Header and/or Footer of the Table like List Control
 *
 * @private
 *
 * @param {sap.ui.core.RenderManager} rm RenderManager
 * @param {sap.m.List} oList List control
 * @param {String|undefined} type Whether "Head" or "Foot"
 */
sap.m.ListRenderer._renderColumns = function(rm, oList, type) {
    var index = 0,
        hiddens = 0,
        hasPopin = false,
        hasFooter = false,
        mode = oList.getMode(),
        clsPrefix = "sapMListTbl",
        idPrefix = oList.getId() + "-tbl",
        cellTag = (type == "Head") ? "th" : "td",
        groupTag = "t" + type.toLowerCase(),
        aColumns = oList.getColumns(),
        isHeaderHidden = (type == "Head") && aColumns.every(function(oColumn) {
            return	!oColumn.getHeader() ||
                    !oColumn.getVisible() ||
                    oColumn.isPopin() ||
                    oColumn.isNeverVisible() ||
                    oColumn.isHidden();
        }),
        hasOneHeader = (type == "Head") && aColumns.filter(function(oColumn) {
            return	oColumn.getVisible() &&
                    !oColumn.isPopin() &&
                    !oColumn.isNeverVisible() &&
                    !oColumn.isHidden();
        }).length == 1,
        createBlankCell = function(cls, id, noWidth) {
            rm.write("<");
            rm.write(cellTag);
            id && rm.writeAttribute("id", idPrefix + id);
            if (noWidth) {
                rm.addStyle("width", "0");
                rm.writeStyles();
            }
            rm.addClass(clsPrefix + cls);
            rm.writeClasses();
            rm.write("></");
            rm.write(cellTag);
            rm.write(">");
            index++;
        };

    rm.write("<" + groupTag + ">");
    rm.write("<tr");

    if (isHeaderHidden) {
        rm.addClass("sapMListTblHeaderNone");
    } else {
        rm.addClass("sapMListTblRow sapMListTbl" + type + "er");
    }

    rm.writeClasses();
    rm.write(">");

    if (mode != "None" && mode != "SingleSelect") {
        if (mode == "SingleSelectMaster") {
            createBlankCell("None");
            hiddens++;
        } else {
            createBlankCell("SelCol");
        }
    }

    if (sap.ui.core.theming.Parameters.get("sapUiLIUnreadAsBubble") == "true" && oList.getShowUnread()) {
        createBlankCell("UnreadCol");
    }

    aColumns.forEach(function(oColumn) {
        if (!oColumn.getVisible()) {
            return;
        }
        if (oColumn.isPopin()) {
            hasPopin = true;
            return;
        }
        if (oColumn.isNeverVisible()) {
            return;
        }
        if (oColumn.isHidden()) {
            hiddens++;
        }

        var control = oColumn["get" + type + "er"](),
            width = hasOneHeader ? "" : oColumn.getWidth(),
            cls = oColumn.getStyleClass(true);

        rm.write("<" + cellTag);
        cls && rm.addClass(cls);
        rm.addClass(clsPrefix + "Cell");
        rm.writeAttribute("id", idPrefix + type + index);
        rm.writeAttribute("data-sap-orig-width", oColumn.getWidth());
        width && rm.addStyle("width", width);
        rm.addStyle("text-align", oColumn.getCssAlign());
        rm.writeClasses();
        rm.writeStyles();
        rm.write(">");
        if (control) {
            oColumn.applyAlignTo(control);
            rm.renderControl(control);
            if (type == "Head" && !hasFooter) {
                hasFooter = !!oColumn.getFooter();
            }
        }
        rm.write("</" + cellTag + ">");
        oColumn.setIndex(index++);
    });

    createBlankCell("NavCol", type + "Nav", true);

    if (mode == "SingleSelect") {
        createBlankCell("SelCol");
    }

    rm.write("</tr></" + groupTag + ">");

    if (type == "Head") {
        oList._hasPopin = hasPopin;
        oList._colCount = index - hiddens;
        hasFooter && this._renderColumns(rm, oList, "Foot");
    }
};

