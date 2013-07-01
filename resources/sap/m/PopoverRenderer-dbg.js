/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.PopoverRenderer");

/**
 * @class Popover renderer. 
 * @static
 */
sap.m.PopoverRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.PopoverRenderer.render = function(rm, oControl){ 
	var sId = oControl.getId(),
		i = 0,
		contents = oControl.getContent(),
		oFooter = oControl.getFooter(),
		oHeaderControl,
		sContentWidth = oControl.getContentWidth(),
		sContentHeight = oControl.getContentHeight(),
		bScrollable = oControl.getEnableScrolling() && !oControl._forceDisableScrolling,
		sFooterClass = "sapMPopoverFooter ";
		
	if(oControl.getShowHeader()){
		oHeaderControl = oControl._getAnyHeader();
	}

	//container
	rm.write("<div");
	rm.writeControlData(oControl);
	rm.addClass("sapMPopover");
	if(oHeaderControl){
		rm.addClass("sapMPopoverWithBar");
	}else{
		rm.addClass("sapMPopoverWithoutBar");
	}
	if(oControl._hasSingleNavContent()){
		rm.addClass("sapMPopoverNav");
	}
	
	if(oControl._hasSinglePageContent()){
		rm.addClass("sapMPopoverPage");
	}
	if(oFooter){
		rm.addClass("sapMPopoverWithFooter");
	}else{
		rm.addClass("sapMPopoverWithoutFooter");
	}
	
	if(oControl.getPlacement() === sap.m.PlacementType.Top){
		rm.addClass("sapMPopoverPlacedTop");
	}
	rm.writeClasses();
	var sTooltip = oControl.getTooltip_AsString();
	if (sTooltip) {
		rm.writeAttributeEscaped("title", sTooltip);
	}
	rm.write(">");
	
	
	if(!jQuery.os.ios && !sap.m.Popover._bOneDesign){
		//arrow
		rm.write("<span");
		rm.writeAttribute("id", sId+"-arrow");
		rm.addClass("sapMPopoverArr");
		rm.writeClasses();
		rm.write("></span>");//arrow tip
	}

	//header
	if(oHeaderControl){
		rm.renderControl(oControl._getAnyHeader().addStyleClass("sapMPopoverHeader sapMPageHeader"));
	}//header
	
	// content container
	rm.write("<div");
	rm.writeAttribute("id",sId + "-cont");
	if(sContentWidth){
		rm.addStyle("width",sContentWidth);
	}
	if(sContentHeight){
		rm.addStyle("height",sContentHeight);
	}
	rm.writeStyles();
	rm.addClass("sapMPopoverCont");
	rm.writeClasses();
	rm.write(">");
	
	//scroll area
	rm.write("<div id='" + oControl.getId() + "-scroll" +"' class='sapMPopoverScroll " + (bScrollable ? '' : "sapMPopoverScrollDisabled")  +"'>");
	for(i = 0 ; i < contents.length ; i++){
		rm.renderControl(contents[i]);
	}
	rm.write("</div>");//scrollArea
	
	rm.write("</div>");//content container
	
	//footer
	if (oFooter) {
		oFooter._context = 'footer';
		if(this.isButtonFooter(oFooter)){
			sFooterClass += "sapMPopoverSpecialFooter";
		}
		rm.renderControl(oFooter.addStyleClass(sFooterClass));
	}//footer
	
	if(jQuery.os.ios || sap.m.Popover._bOneDesign){
		//arrow
		rm.write("<span");
		rm.writeAttribute("id", sId+"-arrow");
		rm.addClass("sapMPopoverArr");
		rm.writeClasses();
		rm.write("></span>");//arrow tip
	}
	

	rm.write("</div>");// container
};

sap.m.PopoverRenderer.isButtonFooter = function(footer){
	if(footer instanceof sap.m.Bar){
		var aContentLeft = footer.getContentLeft(),
			aContentRight = footer.getContentRight(),
			aContentMiddle = footer.getContentMiddle(),
			bLeftEmpty = (!aContentLeft || aContentLeft.length === 0),
			bRightEmpty = (!aContentRight || aContentRight.length === 0),
			bMiddleTwoButtons = false;

		if(aContentMiddle && aContentMiddle.length ===2){
			if((aContentMiddle[0] instanceof sap.m.Button) && (aContentMiddle[1] instanceof sap.m.Button)){
				bMiddleTwoButtons = true;
			}
		}
		
		return bLeftEmpty && bRightEmpty && bMiddleTwoButtons;
	}else{
		return false;
	}
};
