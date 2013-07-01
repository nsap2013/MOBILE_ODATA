/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.TileGroupRenderer");sap.m.TileGroupRenderer={};
sap.m.TileGroupRenderer.render=function(r,c){r.write('<div ');r.writeControlData(c);r.addStyle("height",c.getWidth());r.addStyle("width",c.getHeight());r.writeStyles();r.writeClasses();r.write(">");r.write("</div>")};
