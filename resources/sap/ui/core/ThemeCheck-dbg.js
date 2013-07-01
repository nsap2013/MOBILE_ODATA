/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides class sap.ui.core.ThemeCheck
jQuery.sap.declare("sap.ui.core.ThemeCheck");

jQuery.sap.require("sap.ui.base.Object");
jQuery.sap.require("jquery.sap.script");

(function() {
	
sap.ui._maxThemeCheckCycles = 100;

/**
 * Creates a new ThemeCheck object.
 *
 * @class Helper class used by the UI5 Core to check whether the themes are applied correctly.
 *
 * It could happen that e.g. in onAfterRendering not all themes are available. In these cases the
 * check waits until the CSS is applied and fires an onThemeChanged event.
 *
 * @extends sap.ui.base.Object
 * @since 1.10.0
 * @author SAP AG
 * @constructor
 * @protected
 * @name sap.ui.core.ThemeCheck
 */
sap.ui.base.Object.extend("sap.ui.core.ThemeCheck", /** @lends sap.ui.core.ThemeCheck.prototype */ {

	constructor : function(oCore) {
		this._oCore = oCore;
		this._iCount = 0; // Prevent endless loop
	},
	
	getInterface : function() {
		return this;
	},
	
	fireThemeChangedEvent : function(bOnlyOnInitFail, bForceCheck) {
		clear(this);
		
		var bUseThemeCheck = sap.ui._maxThemeCheckCycles > 0; //Possibility to switch off theme check (except of force mode (for Core.applyTheme))
		
		if(bUseThemeCheck || bForceCheck){
			delayedCheckTheme.apply(this, [true]);
		}
		
		if(!bOnlyOnInitFail && !this._sThemeCheckId){
			this._oCore.fireThemeChanged({theme: this._oCore.getConfiguration().getTheme()});
		}
	}

});

sap.ui.core.ThemeCheck.checkStyle = function(oStyle, bLog){
	if(typeof(oStyle) === "string"){
		oStyle = jQuery.sap.domById(oStyle);
	}
	var $Style = jQuery(oStyle);
	
	try {
		var res = !!oStyle && !!((oStyle.sheet && oStyle.sheet.cssRules.length > 0) || 
        		!!(oStyle.styleSheet && oStyle.styleSheet.cssText.length > 0) || 
        		!!(oStyle.innerHTML && oStyle.innerHTML.length > 0));
		var res2 = $Style.attr("sap-ui-ready");
		res2 = !!(res2 === "true" || res2 === "false");
		if(bLog){
			jQuery.sap.log.debug("ThemeCheck: Check styles '"+$Style.attr("id")+"': "+res+"/"+res2+"/"+!!oStyle);
		}
		return res || res2;
	}catch(e){}
	
	if(bLog){
		jQuery.sap.log.debug("ThemeCheck: Error during check styles '"+$Style.attr("id")+"': false/false/"+!!oStyle);
	}
	return false;
};

function clear(oThemeCheck){
	if(oThemeCheck._sThemeCheckId){
		jQuery.sap.clearDelayedCall(oThemeCheck._sThemeCheckId);
		oThemeCheck._sThemeCheckId = null;
		oThemeCheck._iCount = 0;
	}
};

function checkTheme(oThemeCheck) {
	var mLibs = oThemeCheck._oCore.getLoadedLibraries();
	var res = true;
	for(var lib in mLibs){
		res = res && sap.ui.core.ThemeCheck.checkStyle("sap-ui-theme-"+lib, true);
	}
	
	if(!res){
		jQuery.sap.log.warning("ThemeCheck: Theme not yet applied.");
	}
	return res;
};

function delayedCheckTheme(bFirst) {
	this._iCount++;
	
	var bEmergencyExit = this._iCount > sap.ui._maxThemeCheckCycles;
	
	if(!checkTheme(this) && !bEmergencyExit){
		this._sThemeCheckId = jQuery.sap.delayedCall(2, this, delayedCheckTheme);
	}else if(!bFirst){
		clear(this);
		this._oCore.fireThemeChanged({theme: this._oCore.getConfiguration().getTheme()});
		if(bEmergencyExit){
			jQuery.sap.log.warning("ThemeCheck: max. check cycles reached.");
		}
	}
};

})();