/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.core.ComponentContainer.
jQuery.sap.declare("sap.ui.core.ComponentContainer");
jQuery.sap.require("sap.ui.core.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new ComponentContainer.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getUrl url} : sap.ui.core.URI</li>
 * <li>{@link #getSettings settings} : object</li>
 * <li>{@link #getPropagateModel propagateModel} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getComponent component} : string | sap.ui.core.UIComponent</li></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Component Container
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.12.1
 *
 * @constructor   
 * @public
 * @experimental Since version 1.9.2. 
 * The Component concept is still under construction, so some implementation details can be changed in future.
 * @name sap.ui.core.ComponentContainer
 */
sap.ui.core.Control.extend("sap.ui.core.ComponentContainer", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.core",
	properties : {
		"name" : {type : "string", group : "", defaultValue : null},
		"url" : {type : "sap.ui.core.URI", group : "", defaultValue : null},
		"settings" : {type : "object", group : "", defaultValue : null},
		"propagateModel" : {type : "boolean", group : "", defaultValue : false}
	},
	associations : {
		"component" : {type : "sap.ui.core.UIComponent", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.ui.core.ComponentContainer with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.ui.core.ComponentContainer.extend
 * @function
 */


/**
 * Getter for property <code>name</code>.
 * Component name, the package where the component is contained
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>name</code>
 * @public
 * @name sap.ui.core.ComponentContainer#getName
 * @function
 */

/**
 * Setter for property <code>name</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.ui.core.ComponentContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.ComponentContainer#setName
 * @function
 */


/**
 * Getter for property <code>url</code>.
 * The URL of the component
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>url</code>
 * @public
 * @name sap.ui.core.ComponentContainer#getUrl
 * @function
 */

/**
 * Setter for property <code>url</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sUrl  new value for property <code>url</code>
 * @return {sap.ui.core.ComponentContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.ComponentContainer#setUrl
 * @function
 */


/**
 * Getter for property <code>settings</code>.
 * The settings object passed to the component when created
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>settings</code>
 * @public
 * @name sap.ui.core.ComponentContainer#getSettings
 * @function
 */

/**
 * Setter for property <code>settings</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oSettings  new value for property <code>settings</code>
 * @return {sap.ui.core.ComponentContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.ComponentContainer#setSettings
 * @function
 */


/**
 * Getter for property <code>propagateModel</code>.
 * Defines whether binding information is propagated to the component
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>propagateModel</code>
 * @public
 * @name sap.ui.core.ComponentContainer#getPropagateModel
 * @function
 */

/**
 * Setter for property <code>propagateModel</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bPropagateModel  new value for property <code>propagateModel</code>
 * @return {sap.ui.core.ComponentContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.ComponentContainer#setPropagateModel
 * @function
 */


/**
 * The component displayed in this ComponentContainer
 *
 * @return {string} Id of the element which is the current target of the <code>component</code> association, or null
 * @public
 * @name sap.ui.core.ComponentContainer#getComponent
 * @function
 */

/**
 * The component displayed in this ComponentContainer
 *
 * @param {string | sap.ui.core.UIComponent} vComponent 
 *    Id of an element which becomes the new target of this <code>component</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.core.ComponentContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.ComponentContainer#setComponent
 * @function
 */


	
// Start of sap/ui/core/ComponentContainer.js
/*!
 * @copyright@
 */
/**
 * This file defines behavior for the control,
 */

// =============================================================================
// BASIC CONTROL API
// =============================================================================

/**
 * Initialization of the ComponentContainer control
 * @private
 */
sap.ui.core.ComponentContainer.prototype.init = function(){
};

/**
 * Initialization of the ComponentContainer control
 * @private
 */
sap.ui.core.ComponentContainer.prototype.onBeforeRendering = function(){
	if (!this.oComponent) {
		var sName = this.getName(),
			sUrl = this.getUrl(),
			oSettings = this.getSettings();
		if (sName) {
			this.oComponent = sap.ui.getCore().createComponent(sName, sUrl, oSettings);
		}
		
		if (!this.oComponent) {
			this.oComponent = this.getComponentInstance();
		}
		
		if (this.oComponent) {
			this.oComponent.setContainer(this);
			this.setComponent(this.oComponent);
			this.propagateProperties();
		}
	} 
	
	if (this.oComponent) {
		this.oComponent.onBeforeRendering();
	}
};

/**
 * Function is called by the framework when the rendering of the component container is completed. 
 * It calls the onAfterRendering method in the relevant Component, so that you can implement there 
 * any necessary actions after the rendering.
 *
 * @private
 */
sap.ui.core.ComponentContainer.prototype.onAfterRendering = function(){
	if (this.oComponent) {
		this.oComponent.onAfterRendering();
	}
};


/**
 * Exit of the ComponentContainer control
 * @private
 */
sap.ui.core.ComponentContainer.prototype.exit = function(){
	if (this.oComponent) {
		this.oComponent.destroy();
	}
};

/**
 * Get component
 */
sap.ui.core.ComponentContainer.prototype.getComponentInstance = function () {
	var sComponentId = this.getComponent();
	return sap.ui.getCore().getComponent(sComponentId);
};

/**
 * Propagate Properties
 */
sap.ui.core.ComponentContainer.prototype.propagateProperties = function (vName) {
	if (this.oComponent && this.getPropagateModel()) {
		this._propagateProperties(vName, this.oComponent);
		sap.ui.core.Control.prototype.propagateProperties.apply(this, arguments);
	}
};

