/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.SliderRenderer");sap.m.SliderRenderer={};
sap.m.SliderRenderer.render=function(r,s){var m=s.getMin(),M=s.getMax(),S=s.getStep(),n=s.getName(),e=s.getEnabled();if(!s.getVisible()){return}r.write("<div");r.addClass("sapMSliCont");if(!e){r.addClass("sapMSliContDisabled")}else{r.addClass("sapMPointer")}r.addStyle("width",s.getWidth());r.addStyle("visibility","hidden");r.writeClasses();r.writeStyles();r.writeControlData(s);var t=s.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t)}r.write(">");r.write('<div');r.addClass("sapMSli");if(!e){r.addClass("sapMSliDisabled")}r.writeClasses();r.writeStyles();r.write(">");if(s.getProgress()){r.write('<div class="sapMSliProgress" style="width: '+s._fProgressValue+'%"></div>')}r.write('<span class="sapMSliHandle"');r.addStyle("left",s._fProgressValue+"%");r.writeStyles();r.write('><span class="sapMSliHandleInner"></span></span>');r.write("</div>");r.write('<input type="range" class="sapMSliInput"');if(!e){r.write("disabled")}if(n!==""){r.writeAttributeEscaped("name",n)}r.writeAttribute("min",m);r.writeAttribute("max",M);r.writeAttribute("step",S);r.writeAttribute("value",s.getValue());r.write("/>");r.write("</div>")};
