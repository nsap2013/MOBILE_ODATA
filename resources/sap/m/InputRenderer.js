/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.require("sap.m.InputBaseRenderer");jQuery.sap.declare("sap.m.InputRenderer");sap.m.InputRenderer=sap.ui.core.Renderer.extend(sap.m.InputBaseRenderer);
sap.m.InputRenderer.addClasses=function(r,c){sap.m.InputBaseRenderer.addClasses(r,c);r.addClass("sapMInput")};
sap.m.InputRenderer.writeAttributes=function(r,c){r.writeAttribute("type",c.getType().toLowerCase());if(c.getMaxLength()>0){r.writeAttribute("maxlength",c.getMaxLength())}};
