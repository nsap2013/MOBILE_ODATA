/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.model.ContextBinding");jQuery.sap.require("sap.ui.model.Binding");sap.ui.model.Binding.extend("sap.ui.model.ContextBinding",{constructor:function(m,p,c,P){var t=this;sap.ui.model.Binding.call(this,m,p,c,P);m.createBindingContext(p,c,P,function(c){t.oElementContext=c;t._fireChange()})},metadata:{publicMethods:["getElementContext"]}});
sap.ui.model.ContextBinding.prototype.checkUpdate=function(f,e){this._fireChange(e)};
sap.ui.model.ContextBinding.prototype._refresh=function(){var t=this;this.oModel.createBindingContext(this.sPath,this.oContext,this.mParameters,function(c){t.oElementContext=c;t._fireChange()},true)};
sap.ui.model.ContextBinding.prototype.setContext=function(c){var t=this;if(this.oContext!=c){this.oContext=c;this.oModel.createBindingContext(this.sPath,this.oContext,this.mParameters,function(c){t.oElementContext=c;t._fireChange()})}};
sap.ui.model.ContextBinding.prototype.getBoundContext=function(c){return this.oElementContext};
