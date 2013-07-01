/*
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides base class sap.ui.core.Component for all components
jQuery.sap.declare("sap.ui.core.Component");
jQuery.sap.require("sap.ui.base.ManagedObject");
jQuery.sap.require("sap.ui.core.ComponentMetadata");
jQuery.sap.require("sap.ui.core.Core");

/**
 * Creates and initializes a new component with the given <code>sId</code> and
 * settings.
 * 
 * The set of allowed entries in the <code>mSettings</code> object depends on
 * the concrete subclass and is described there. See {@link sap.ui.core.Component}
 * for a general description of this argument.
 * 
 * @param {string}
 *            [sId] optional id for the new control; generated automatically if
 *            no non-empty id is given Note: this can be omitted, no matter
 *            whether <code>mSettings</code> will be given or not!
 * @param {object}
 *            [mSettings] optional map/JSON-object with initial settings for the
 *            new component instance
 * @public
 * 
 * @class Base Class for Component.
 * @extends sap.ui.base.ManagedObject
 * @abstract
 * @author SAP
 * @version 1.12.1
 * @name sap.ui.core.Component
 * @experimental Since 1.9.2. The Component concept is still under construction, so some implementation details can be changed in future.
 */
sap.ui.base.ManagedObject.extend("sap.ui.core.Component", /** @lends sap.ui.core.Component */

{
	constructor : function(sId, mSettings) {

		sap.ui.base.ManagedObject.apply(this, arguments);

	},

	metadata : {
		stereotype : "component",
		"abstract": true,
		version : "0.0",
		includes : [],  // css, javascript files that should be used in the component
		dependencies : { // external dependencies
			libs : [],
			components : [],
			ui5version : ""
		},
		publicMethods: [],
		aggregations: {},
		library: "sap.ui.core"
	}

}, /* Metadata constructor */ sap.ui.core.ComponentMetadata);

/**
 * Initializes the Component instance after creation.
 *
 * Applications must not call this hook method directly, it is called by the
 * framework while the constructor of an Component is executed.
 *
 * Subclasses of Component should override this hook to implement any necessary
 * initialization.
 *
 * @function
 * @name sap.ui.core.Component.prototype.init
 * @protected
 */
sap.ui.core.Component.prototype.init = function() {
	this.loadIncludes();
	this.loadDependencies();
};

/**
 * Load included resources
 */
sap.ui.core.Component.prototype.loadIncludes = function() {

	var aIncludes = this.getMetadata().getIncludes();

	if (aIncludes && aIncludes.length > 0) {

		jQuery.each(aIncludes, function(i, sFile) {			
			var sFileLowCase = sFile.toLowerCase();
			if (sFileLowCase.match(/.css$/)) { 
				var sCssUrl = sap.ui.resource(this.getMetadata().getLibraryName(), sFile);
				jQuery.sap.log.info("Loading CSS from: " + sCssUrl);
				jQuery.sap.includeStyleSheet(sCssUrl);
			} else {
				// load javascript file
				var m = sFileLowCase.match(/.js$/);
				if (m) {
					sFile = sFile.substring(0, m.index);
					jQuery.sap.require(sFile);
				}
			}
		});
	}
};

/**
 * Load external dependencies
 */
sap.ui.core.Component.prototype.loadDependencies = function() {

	var oDep = this.getMetadata().getDependencies();
	if (oDep){
		this.loadLibs(oDep);
		this.loadComponents(oDep);
	}
};

/**
 * Load libraries
 */
sap.ui.core.Component.prototype.loadLibs = function (oDependencies) {
	var aLibs = oDependencies.libs;
	if (aLibs && aLibs.length > 0) {
		jQuery.each(aLibs, function(i, sLib) {
			jQuery.sap.log.info("Loading Library: " + sLib);
			sap.ui.getCore().loadLibrary(sLib);
		});
	}
};


/**
 * Load dependent components
 */
sap.ui.core.Component.prototype.loadComponents = function (oDependencies) {
	var aComps = oDependencies.components;
	if (aComps){
		jQuery.each(aComps, function(i, sName){
			jQuery.sap.log.info(sName);
			jQuery.sap.require(sName + ".Component");
		});
	}
};
/**
 * Cleans up the component instance before destruction.
 *
 * Applications must not call this hook method directly, it is called by the
 * framework when the element is {@link #destroy destroyed}.
 * 
 * Subclasses of Component should override this hook to implement any necessary
 * cleanup.
 *
 * @function
 * @name sap.ui.core.Component.prototype.exit
 * @protected
 */
sap.ui.core.Component.prototype.exit = function() {
};
