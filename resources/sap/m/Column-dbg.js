/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.Column.
jQuery.sap.declare("sap.m.Column");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Element");

/**
 * Constructor for a new Column.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHAlign hAlign} : sap.ui.core.TextAlign (default: sap.ui.core.TextAlign.Begin)</li>
 * <li>{@link #getVAlign vAlign} : sap.ui.core.VerticalAlign (default: sap.ui.core.VerticalAlign.Middle)</li>
 * <li>{@link #getStyleClass styleClass} : string</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getMinScreenWidth minScreenWidth} : string</li>
 * <li>{@link #getDemandPopin demandPopin} : boolean (default: false)</li>
 * <li>{@link #getPopinHAlign popinHAlign} : sap.ui.core.TextAlign (default: sap.ui.core.TextAlign.Begin)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getHeader header} : sap.ui.core.Control</li>
 * <li>{@link #getFooter footer} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The column allows to define column specific properties that will be applied when rendering the List.
 * @extends sap.ui.core.Element
 *
 * @author SAP AG 
 * @version 1.12.1
 *
 * @constructor   
 * @public
 * @since 1.12
 * @experimental Since version 1.12. 
 * This concept is still under discussion so this can be changed in future.
 * @name sap.m.Column
 */
sap.ui.core.Element.extend("sap.m.Column", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"hAlign" : {type : "sap.ui.core.TextAlign", group : "Appearance", defaultValue : sap.ui.core.TextAlign.Begin},
		"vAlign" : {type : "sap.ui.core.VerticalAlign", group : "Appearance", defaultValue : sap.ui.core.VerticalAlign.Middle},
		"styleClass" : {type : "string", group : "Appearance", defaultValue : null},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"minScreenWidth" : {type : "string", group : "Behavior", defaultValue : null},
		"demandPopin" : {type : "boolean", group : "Behavior", defaultValue : false},
		"popinHAlign" : {type : "sap.ui.core.TextAlign", group : "Appearance", defaultValue : sap.ui.core.TextAlign.Begin}
	},
	defaultAggregation : "header",
	aggregations : {
    	"header" : {type : "sap.ui.core.Control", multiple : false}, 
    	"footer" : {type : "sap.ui.core.Control", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.m.Column with name <code>sClassName</code> 
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
 * @name sap.m.Column.extend
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Width of the column.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.m.Column#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Column#setWidth
 * @function
 */


/**
 * Getter for property <code>hAlign</code>.
 * Horizontal alignment of the column content. Available alignment settings are "Begin", "Center", "End", "Left", and "Right".
 * 
 * NOTE: Controls with a text align do not inherit the horizontal alignment. You have to set the text align directly on the control.
 *
 * Default value is <code>sap.ui.core.TextAlign.Begin</code>
 *
 * @return {sap.ui.core.TextAlign} the value of property <code>hAlign</code>
 * @public
 * @name sap.m.Column#getHAlign
 * @function
 */

/**
 * Setter for property <code>hAlign</code>.
 *
 * Default value is <code>sap.ui.core.TextAlign.Begin</code> 
 *
 * @param {sap.ui.core.TextAlign} oHAlign  new value for property <code>hAlign</code>
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Column#setHAlign
 * @function
 */


/**
 * Getter for property <code>vAlign</code>.
 * Vertical alignment of the cells in column. Possible values are "Top", "Middle", "Bottom"
 * This property does not affect the vertical alignment of header and footer.
 *
 * Default value is <code>sap.ui.core.VerticalAlign.Middle</code>
 *
 * @return {sap.ui.core.VerticalAlign} the value of property <code>vAlign</code>
 * @public
 * @name sap.m.Column#getVAlign
 * @function
 */

/**
 * Setter for property <code>vAlign</code>.
 *
 * Default value is <code>sap.ui.core.VerticalAlign.Middle</code> 
 *
 * @param {sap.ui.core.VerticalAlign} oVAlign  new value for property <code>vAlign</code>
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Column#setVAlign
 * @function
 */


/**
 * Getter for property <code>styleClass</code>.
 * CSS class name for column contents(header, cells and footer of column). This property can be used for different column styling. If column is shown as pop-in then this class name is applied to related pop-in row.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>styleClass</code>
 * @public
 * @name sap.m.Column#getStyleClass
 * @function
 */

/**
 * Setter for property <code>styleClass</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sStyleClass  new value for property <code>styleClass</code>
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Column#setStyleClass
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Specifies whether or not the column is visible. Invisible columns are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.Column#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Column#setVisible
 * @function
 */


/**
 * Getter for property <code>minScreenWidth</code>.
 * By default column is always shown. If you set this property, control checks the minimum width of the screen to show or hide this column.
 * As you can give specific CSS sizes(e.g: "480px" or "40em"), you can also use sap.m.ScreenSize enumeration(e.g: "Phone", "Tablet", "Desktop", "Small", "Medium", "Large", ....).
 * 
 * sap.m.Column.MediaQuery1->Range1 = 199
 * 
 * This property can be used for responsive design. e.g: "40em"(or "640px" or "Tablet") setting shows this column in iPad(and Desktop) but hides in iPhone.
 * Please also see "demandPopin" property
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>minScreenWidth</code>
 * @public
 * @name sap.m.Column#getMinScreenWidth
 * @function
 */

/**
 * Setter for property <code>minScreenWidth</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sMinScreenWidth  new value for property <code>minScreenWidth</code>
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Column#setMinScreenWidth
 * @function
 */


/**
 * Getter for property <code>demandPopin</code>.
 * According to your minScreenWidth settings, the column can be hidden in different screen sizes.
 * Setting this property to true, shows this column as pop-in instead of hiding it.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>demandPopin</code>
 * @public
 * @name sap.m.Column#getDemandPopin
 * @function
 */

/**
 * Setter for property <code>demandPopin</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bDemandPopin  new value for property <code>demandPopin</code>
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Column#setDemandPopin
 * @function
 */


/**
 * Getter for property <code>popinHAlign</code>.
 * Horizontal alignment of the pop-in content. Available alignment settings are "Begin", "Center", "End", "Left", and "Right".
 * 
 * NOTE: Controls with a text align do not inherit the horizontal alignment.
 *
 * Default value is <code>sap.ui.core.TextAlign.Begin</code>
 *
 * @return {sap.ui.core.TextAlign} the value of property <code>popinHAlign</code>
 * @public
 * @name sap.m.Column#getPopinHAlign
 * @function
 */

/**
 * Setter for property <code>popinHAlign</code>.
 *
 * Default value is <code>sap.ui.core.TextAlign.Begin</code> 
 *
 * @param {sap.ui.core.TextAlign} oPopinHAlign  new value for property <code>popinHAlign</code>
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Column#setPopinHAlign
 * @function
 */


/**
 * Getter for aggregation <code>header</code>.<br/>
 * Control to be displayed in the column header.
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.m.Column#getHeader
 * @function
 */


/**
 * Setter for the aggregated <code>header</code>.
 * @param oHeader {sap.ui.core.Control}
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Column#setHeader
 * @function
 */
	

/**
 * Destroys the header in the aggregation 
 * named <code>header</code>.
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Column#destroyHeader
 * @function
 */


/**
 * Getter for aggregation <code>footer</code>.<br/>
 * Control to be displayed in the column footer.
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.m.Column#getFooter
 * @function
 */


/**
 * Setter for the aggregated <code>footer</code>.
 * @param oFooter {sap.ui.core.Control}
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Column#setFooter
 * @function
 */
	

/**
 * Destroys the footer in the aggregation 
 * named <code>footer</code>.
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Column#destroyFooter
 * @function
 */


// Start of sap/m/Column.js
jQuery.sap.require("sap.ui.core.Renderer");

// predefined screen size
sap.m.Column.prototype._screen = "";

// default media value
sap.m.Column.prototype._media = null;

// prototype lookup
sap.m.Column.prototype._getTextAlign = sap.ui.core.Renderer.getTextAlign;

/**
 * @private
 */
sap.m.Column.prototype._clearMedia = function() {
	if (this._media && this._minWidth) {
		if (sap.ui.Device.media.removeRangeSet) {
			sap.ui.Device.media.removeRangeSet(this.getId());
		} else {
			sap.ui.Device.media.detachHandler(this.notifyResize, this, this.getId());
		}		
		delete this._media;
	}
};

/**
 * @private
 */
sap.m.Column.prototype._addMedia = function() {
	if (this._minWidth) {		
		sap.ui.Device.media.initRangeSet(this.getId(), [parseInt(this._minWidth, 10)]);
		sap.ui.Device.media.attachHandler(this._notifyResize, this, this.getId());
		this._media = sap.ui.Device.media.getCurrentRange(this.getId());
		if (this._media) {
			this._media.triggered = false;
			this._media.matches = !!this._media.from;
		}
	}
};

/**
 * Notify parent to re-render
 * Also fire media event for listeners
 *
 * @private
 */
sap.m.Column.prototype._notifyResize = function(oMedia) {
	// ignore the first call
	if (!this._media.triggered) {
		this._media.triggered = true;
		return;
	}
	
	// keep media info
	delete this._media;
	this._media = oMedia;
	this._media.triggered = true;
	this._media.matches = !!oMedia.from;

	// wait all events to come
	jQuery.sap.delayedCall(0, this, function() {
		var parent = this.getParent();
		this.fireEvent("media", this);
		if (parent && parent._onColumnResize) {
			parent._onColumnResize(this);
		}
	});
};


/**
 * @private
 */
sap.m.Column.prototype._validateMinWidth = function(sWidth) {
	if (Object.prototype.toString.call(sWidth) != "[object String]") {
		throw new Error('expected string for property "minScreenWidth" of ' + this);
	}
	if (Object.keys(sap.m.ScreenSizes).indexOf(sWidth.toLowerCase()) != -1) {
		return;
	}
	if (!/^\d+(\.\d+)?(px|em|rem)$/i.test(sWidth)) {
		throw new Error('invalid CSS size("px", "em", "rem" required) or sap.m.ScreenSize enumeration for property "minScreenWidth" of ' + this);
	}
};

/**
 * Checks the given width(px or em), if it is a predefined screen value
 *
 * @private
 */
sap.m.Column.prototype._isWidthPredefined = function(sWidth) {
	var that = this,
		unit = sWidth.replace(/[^a-z]/g, ""),
		baseFontSize = parseInt(sap.m.BaseFontSize, 10) || 16;
	
	jQuery.each(sap.m.ScreenSizes, function(screen, size) {
		if (unit != "px") {
			size /= baseFontSize;
		}
		if (size + unit == sWidth) {
			that._minWidth = this + "px";
			that._screen = screen;
			return false;
		}
	});
};

/**
 * Apply alignment of the Column to Text or Label
 * Also set width to 100% to support wrapping
 *
 * @protected
 *
 * @param {sap.ui.core.Control} oControl List control
 * @param {String} [sAlign] TextAlign enumeration
 * @return {sap.ui.core.Control} oControl
 */
sap.m.Column.prototype.applyAlignTo = function(oControl, sAlign) {
	if ((sap.m.Label && oControl instanceof sap.m.Label) || (sap.m.Text && oControl instanceof sap.m.Text)) {
		var width = oControl.getWidth(),
			domref = oControl.getDomRef();
		
		if (!width || width == "auto" || width == "inherit") {
			oControl.setProperty("width", "100%", true);
			domref && (domref.style.width = "100%");
		}
		
		sAlign = sAlign || this.getHAlign();
		oControl.setProperty("textAlign", sAlign, true);
		domref && (domref.style.textAlign = this.getCssAlign(sAlign));
	}

	return oControl;
};


/**
 * Returns CSS alignment according to column hAlign setting or given parameter
 * for Begin/End values checks the locale settings
 *
 * @param {String} [sAlign] TextAlign enumeration
 * @return {String} left|center|right
 * @protected
 */
sap.m.Column.prototype.getCssAlign = function(sAlign) {
	sAlign = sAlign || this.getHAlign();
	if (sAlign == "Begin" || sAlign == "End") {
		sAlign = this._getTextAlign(sAlign);
	}

	return sAlign.toLowerCase();
};

/**
 * Returns styleClass property and extra responsive class
 *
 * @param {Boolean} [bResponsive] Whether responsive class is needed or not
 * @return {String}
 * @protected
 */
sap.m.Column.prototype.getStyleClass = function(bResponsive) {
	var cls = this.getProperty("styleClass");
	if (!bResponsive) {
		return cls;
	}
	if (this._screen && (!this.getDemandPopin() || !window.matchMedia)) {
		cls += " sapMSize-" + this._screen;
	} else if (this._media && !this._media.matches) {
		cls += " sapMListTblNone";
	}
	return cls;
};


/**
 * Returns visible probability of the column
 *
 * @param {Boolean} [bReturnCache] Whether return cache or new result
 * @return {Boolean}
 * @protected
 */
sap.m.Column.prototype.isNeverVisible = function(bReturnCache) {
	if (bReturnCache) {
		return this._isNeverVisible;
	}

	this._isNeverVisible = false;
	if (!this._minWidth) {
		return false;
	}

	var width = parseFloat(this._minWidth),
		unit = this._minWidth.replace(/[^a-z]/g, ""),
		baseFontSize = parseInt(sap.m.BaseFontSize, 10) || 16;

	if (unit != "px") {
		width *= baseFontSize;
	}

	return this._isNeverVisible = (width > Math.max(window.screen.width, window.screen.height));
};


/**
 * Sets the column index
 *
 * @param {Int} nIndex Whether responsive class is needed or not
 * @protected
 */
sap.m.Column.prototype.setIndex = function(nIndex) {
	if (nIndex > 0) {
		this._index = +nIndex;;
	}
};

/**
 * Display or hide the column from given table
 *
 * @param {Object} oTableDomRef Table dom reference
 * @param {String} [sDisplay] given display value
 * @protected
 */
sap.m.Column.prototype.setDisplay = function(oTableDomRef, sDisplay) {
	if (!this.hasOwnProperty("_index")) {
		return;
	}

	var oParent =  this.getParent(),
		bDisplay = this._media && this._media.matches;
		
	if (!this.getDemandPopin() && this._screen && oParent && oParent._setTableHeaderVisibility) {
		// this means CSS media queries already change the column visibility
		// but we still need to set table header visibility
		// make it sure with timeout rendering phase is done 
		return setTimeout(function() {
			oParent._setTableHeaderVisibility(bDisplay);
		}, 0);
	}

	// configure display settings if needed
	sDisplay = sDisplay || (bDisplay ? "table-cell" : "none");

	// go with native we need speed
	var i = this._index + 1,
		cells = oTableDomRef.querySelectorAll("tr > td:nth-child(" + i + ")"),
		header = oTableDomRef.querySelector("tr > th:nth-child(" + i + ")"),
		length = cells.length;

	header.style.display = sDisplay;
	for (i = 0; i < length; i++) {
		cells[i].style.display = sDisplay;
	}
};

/**
 * Decides if we need media query or not according to given settings
 * Checks given value is known screen size
 *
 * @private
 */
sap.m.Column.prototype.setMinScreenWidth = function(sWidth) {
	// check if setting the old value
	if (sWidth == this.getMinScreenWidth()) {
		return this;
	}

	// first validate the value
	this._validateMinWidth(sWidth);

	// initialize

	this._screen = "";
	this._minWidth = 0;
	this._clearMedia();

	if (sWidth) {
		// check given width is known screen-size
		sWidth = sWidth.toLowerCase();
		var width = sap.m.ScreenSizes[sWidth];
		if (width) {
			width += "px";
			this._screen = sWidth;
		} else {
			this._isWidthPredefined(sWidth);
			width = sWidth;
		}

		// keep the minimum width value
		this._minWidth = width;

		/**
		// OLD: if pop-in is requested or if unknown screen-size is given then go with JS media queries
		// NEW: We always need JS media queries to detect table header visibility
		if (this.getDemandPopin() || !this._screen) {
			this._addMedia();
		}
		*/
		this._addMedia();
	}

	return this.setProperty("minScreenWidth", sWidth);
};

/**
 * Decides if we need media query or not according to given settings
 * if pop-in is demanded then we always need JS media queries
 * if not demanded but if screen size is known CSS media query can handle
 *
 * @private
 */
sap.m.Column.prototype.setDemandPopin = function(bValue) {
	// check if setting the old value
	if (bValue == this.getDemandPopin()) {
		return this;
	}

	// minimum width should have been set
	if (!this.getMinScreenWidth()) {
		return this.setProperty("demandPopin", bValue, true);
	}

	/**
	// OLD: if we need to show pop-in and if there is no media query already
	// NEW: We always need JS media queries to detect table header visibility
	if (!this._media && bValue) {
		this._addMedia();
	} else if (this._media && this._screen && !bValue) {
		this._clearMedia();
	}
	*/

	return this.setProperty("demandPopin", bValue);
};


/**
 * Checks the column will be shown as pop-in
 *
 * @protected
 */
sap.m.Column.prototype.isPopin = function() {
	if (!this.getDemandPopin()) {
		return false;
	}
	if (this._media) {
		return !this._media.matches;
	}
	return false;
};

/**
 * Checks the column will be shown as pop-in
 *
 * @protected
 */
sap.m.Column.prototype.isHidden = function() {
	if (this._media) {
		return !this._media.matches;
	}
	if (this._screen && this._minWidth) {
		return parseFloat(this._minWidth, 10) > window.innerWidth;
	}
	return false;
};
