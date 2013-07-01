/*
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.ui.app.Application");
jQuery.sap.require("sap.ui.base.ManagedObject");

(function(window, undefined) {

	/**
	 * Abstract application class.
	 * 
	 * @public
	 * 
	 * @class Base class for application classes
	 * @extends sap.ui.base.ManagedObject
	 * @abstract
	 * @author SAP
	 * @version 1.12.1
	 * @name sap.ui.app.Application
	 * @experimental Since 1.11.1. The Application class is still under construction, so some implementation details can be changed in future.
	 */
	sap.ui.base.ManagedObject.extend("sap.ui.app.Application", {

		metadata : {
			properties : {
				root : "string"
			}
		},

		constructor : function(oSettings) {
			sap.ui.base.ManagedObject.apply(this, arguments);

			if (this.main) {
				jQuery(jQuery.proxy(this.main, this));
			}

			if (this.onBeforeExit) {
				jQuery(window).on('beforeunload', jQuery.proxy(this.onBeforeExit, this));
			}

			if (this.onExit) {
				jQuery(window).on('unload', jQuery.proxy(this.onExit, this));
			}

			if (this.onError) {
				window.onerror = jQuery.proxy(function(sMessage, sFile, iLine) {
					this.onError(sMessage, sFile, iLine);
				}, this);
			}
		}
	});
})(window);