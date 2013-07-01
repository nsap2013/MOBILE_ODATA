/*
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.app.Application");jQuery.sap.require("sap.ui.base.ManagedObject");(function(w,u){sap.ui.base.ManagedObject.extend("sap.ui.app.Application",{metadata:{properties:{root:"string"}},constructor:function(s){sap.ui.base.ManagedObject.apply(this,arguments);if(this.main){jQuery(jQuery.proxy(this.main,this))}if(this.onBeforeExit){jQuery(w).on('beforeunload',jQuery.proxy(this.onBeforeExit,this))}if(this.onExit){jQuery(w).on('unload',jQuery.proxy(this.onExit,this))}if(this.onError){w.onerror=jQuery.proxy(function(m,f,l){this.onError(m,f,l)},this)}}})})(window);
