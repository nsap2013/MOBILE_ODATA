/*
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides base class sap.ui.core.Component for all components
jQuery.sap.declare("sap.ui.core.UIComponent");
jQuery.sap.require("sap.ui.core.Component");

/**
 * Creates and initializes a new UI component with the given <code>sId</code> and
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
sap.ui.core.Component.extend("sap.ui.core.UIComponent", /** @lends sap.ui.core.UIComponent */

{
	constructor : function(sId, mSettings) {

		sap.ui.core.Component.apply(this, arguments);

	},

	metadata : {
		"abstract": true,
		version : "0.0",
		includes : [ ],  // css, javascript files that should be used in the component
		dependencies : { // external dependencies
			libs : [ ],
			components : [ ],
			ui5version : ""
		},
		publicMethods: [ "render" ],
		aggregations: {
			"rootControl": { type: "sap.ui.core.Control", multiple: false, visibility: "hidden" }
		},
		library: "sap.ui.core",
		autoDestroy: false, // destroy component when view should be destroyed
		initOnBeforeRender: true
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
 * @name sap.ui.core.UIComponent.prototype.init
 * @protected
 */
sap.ui.core.UIComponent.prototype.init = function() {
	sap.ui.core.Component.prototype.init.apply(this); 
	var that = this;
	return sap.ui.base.ManagedObject.runWithPreprocessors(
		function() {
			that.setAggregation("rootControl", that.createContent());
		},
		{
			id: function(sId) {
				return that.createId(sId);
			},
			settings: function(oSettings) {
				if (oSettings.component) {
					oSettings.component = that.createId(oSettings.component);
				}
				return oSettings;
			}
		}
	);
};


/**
 * returns an Element by its id in the context of the View
 *
 * @return Element by its id
 * @public
 */
sap.ui.core.UIComponent.prototype.byId = function(sId) {
	return sap.ui.getCore().byId(this.createId(sId));
};

/**
 * creates an id for an Element prefixed with the view id
 *
 * @return prefixed id
 * @public
 */
sap.ui.core.UIComponent.prototype.createId = function(sId) {
	return this.getId() + "--" + sId;
};

/**
 * The method to create the Content (UI Control Tree) of the Component. 
 * This method has to be overwritten in the implementation of the component.
 *
 * @public
 */
sap.ui.core.UIComponent.prototype.createContent = function() {
	return null;
};

/**
 * Render
 *
 * @return prefixed id
 * @public
 */
sap.ui.core.UIComponent.prototype.render = function(oRenderManager) {
	var oControl = this.getAggregation("rootControl");
	if (oControl) {
		oRenderManager.renderControl(oControl);
	}
};

/**
 * getUIArea
 *
 * @return prefixed id
 * @public
 */
sap.ui.core.UIComponent.prototype.getUIArea = function() {
	return (this.oContainer ? this.oContainer.getUIArea() : null);
};

/**
 * setContainer
 *
 * @return prefixed id
 * @public
 */
sap.ui.core.UIComponent.prototype.setContainer = function(oContainer) {
	this.oContainer = oContainer;
};

/**
 Function is called when the rendering of the Component Container is started.
 *
 * Applications must not call this hook method directly, it is called from ComponentContainer.
 *
 * Subclasses of UIComponent override this hook to implement any necessary actions before the rendering.
 *
 * @function
 * @name sap.ui.core.UIComponent.prototype.onBeforeRendering
 * @protected
 */
sap.ui.core.UIComponent.prototype.onBeforeRendering = function() {};

/**
 * Function is called when the rendering of the Component Container is completed.
 *
 * Applications must not call this hook method directly, it is called from ComponentContainer.
 *
 * Subclasses of UIComponent override this hook to implement any necessary actions after the rendering.
 *
 * @function
 * @name sap.ui.core.UIComponent.prototype.onAfterRendering
 * @protected
 */
sap.ui.core.UIComponent.prototype.onAfterRendering = function() {};
