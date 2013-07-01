/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides default renderer for the sap.m.FeedListItem
jQuery.sap.declare("sap.m.FeedListItemRenderer");
jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.m.ListItemBaseRenderer");

/**
 * @class FeedListItem renderer.
 * @static
 */
sap.m.FeedListItemRenderer = sap.ui.core.Renderer.extend(sap.m.ListItemBaseRenderer);

/**
 * Make sure that parent li is displayed as a horizontal webkit-box.
 * 
 * @param {sap.ui.core.RenderManager}
 *            rm the RenderManager that can be used for writing to the
 *            Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oFeedListItem an object representation of the feed list item that
 *            should be rendered
 */
sap.m.FeedListItemRenderer.renderLIAttributes = function(rm, oFeedListItem) {
	rm.addClass("sapMFeedListItemTitleDiv");
	if(oFeedListItem._showSeparators == sap.m.ListSeparators.None)
		rm.addClass("sapMFeedListShowSeparatorsNone");
	else{
		rm.addClass("sapMFeedListShowSeparatorsAll");
	}
	
};

/**
 * Renders the HTML for the given control, using the provided
 * {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager}
 *            rm the RenderManager that can be used for writing to the
 *            Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oFeedListItem an object representation of the feed list item that
 *            should be rendered
 */
sap.m.FeedListItemRenderer.renderLIContent = function(rm, oFeedListItem) {
	// convenience variable
	var sMyId = oFeedListItem.getId();
	var bIsDesktop = jQuery.device.is.desktop;

	rm.write('<ARTICLE');
	rm.writeControlData(oFeedListItem);
	rm.addClass('sapMFeedListItem');

	rm.writeClasses();
	rm.write('>');
	
	
	// icon
	if(!!oFeedListItem.getIcon()) {
		rm.write('<figure id="' + sMyId + '-figure" class ="sapMFeedListItemFigure">');
		if(bIsDesktop && !!oFeedListItem.getIconActive()) {
			rm.write('<a id="' + sMyId + '-iconRef" ');
			rm.writeAttribute('href', 'javascript:void(0);');
			rm.write('>');
		}
		rm.writeIcon(oFeedListItem.getIcon(), ['sapMFeedListItemImage'], 
			{ 	id:  sMyId + '-icon',
				alt:  oFeedListItem.getSender(),
			});
		if(bIsDesktop && !!oFeedListItem.getIconActive()) {
			rm.write('</a>');
		}
		rm.write('</figure>');
	}

	// text (starting with sender)
	rm.write('<DIV class= "sapMFeedListItemText ');
	if(!!oFeedListItem.getIcon()) {
		rm.write('sapMFeedListItemHasFigure ');
	}
	
	rm.write('" >');
	rm.write('<p id="' + sMyId + '-text" class="sapMFeedListItemTextText">');
	
	
	
	if(!!oFeedListItem.getSender()) {
		rm.renderControl(oFeedListItem._getLinkControl());
		rm.write(': ');
	}
	rm.writeEscaped(oFeedListItem.getText(), true);
	rm.write('</p class="sapMFeedListItemFooter">');
	// info and date
	rm.write('<p class="sapMFeedListItemFooter">');
	if(!!oFeedListItem.getInfo()) {
		rm.write('<span class="sapMFeedListItemInfo">');
		rm.writeEscaped(oFeedListItem.getInfo());
		rm.write('</span>');
		//Write Interpunct separator if necessary
		if(!!oFeedListItem.getTimestamp()) {
			rm.write('<span class="sapMFeedListItemInterpunct">');
			rm.write("&#x00B7");
			rm.write('</span>');
		}
	}
	if(!!oFeedListItem.getTimestamp()) {
		rm.write('<span class="sapMFeedListItemTimestamp">');
		rm.writeEscaped(oFeedListItem.getTimestamp());
		rm.write('</span>');
	}
	
	rm.write('</p>');
	rm.write('</DIV>');

	rm.write('</ARTICLE>');
};


