/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.ObjectIdentifierRenderer");sap.m.ObjectIdentifierRenderer={};
sap.m.ObjectIdentifierRenderer.render=function(r,o){r.write("<div");r.writeControlData(o);r.addClass("sapMObjectIdentifier");r.writeClasses();r.write(">");r.write("<div");r.addClass("sapMObjectIdentifierTopRow");r.writeClasses();r.write(">");r.write("<div");r.addClass("sapMObjectIdentifierIcons");r.writeClasses();r.write(">");if(o.getBadgeAttachments()){r.write("<span");r.addClass("sapMObjectIdentifierIconSpan");r.writeClasses();r.write(">");r.renderControl(o._getAttachmentsIcon());r.write("</span>")}if(o.getBadgeNotes()){r.write("<span");r.addClass("sapMObjectIdentifierIconSpan");r.writeClasses();r.write(">");r.renderControl(o._getNotesIcon());r.write("</span>")}if(o.getBadgePeople()){r.write("<span");r.addClass("sapMObjectIdentifierIconSpan");r.writeClasses();r.write(">");r.renderControl(o._getPeopleIcon());r.write("</span>")}r.write("</div>");r.write("<div");r.addClass("sapMObjectIdentifierTitle");r.writeClasses();r.write(">");r.writeEscaped(o.getTitle());r.write("</div>");r.write("</div>");r.write("<div");r.addClass("sapMObjectIdentifierText");r.writeClasses();r.write(">");r.writeEscaped(o.getText());r.write("</div>");r.write("</div>")};
