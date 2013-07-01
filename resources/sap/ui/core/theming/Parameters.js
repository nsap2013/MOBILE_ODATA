/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.theming.Parameters");(function(){sap.ui.core.theming.Parameters={};var p=null;var r=function(){p=null};var g=function(){if(!p){var J=[];jQuery("link[id^=sap-ui-theme-]").each(function(){J.push(this.href.replace(/\/library([^\/.]*)\.(?:css|less)($|[?#])/,function($,a,b){return"/library-parameters"+a+".json"+(b?b:"")}))});p={};for(var i=0;i<J.length;i++){var u=J[i];var R=jQuery.sap.sjax({url:u,dataType:'json'});if(R.success){var o=(typeof R.data=="string")?jQuery.parseJSON(R.data):R.data;if(jQuery.isArray(o)){for(var j=0;j<o.length;j++){p=jQuery.extend(p,o[j])}}else{p=jQuery.extend(p,o)}}else{jQuery.sap.log.warning("Could not load theme parameters from: "+u)}}}return p};sap.ui.core.theming.Parameters.get=function(n){if(arguments.length==1){return g()[n]}else if(arguments.length==0){var c={};return jQuery.extend(c,g())}else{return undefined}};sap.ui.core.theming.Parameters.reset=function(){r()}}());
