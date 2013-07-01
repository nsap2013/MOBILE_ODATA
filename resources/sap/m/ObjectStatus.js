/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.ObjectStatus");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.m.ObjectStatus",{metadata:{library:"sap.m",properties:{"text":{type:"string",group:"Misc",defaultValue:null},"state":{type:"sap.ui.core.ValueState",group:"Misc",defaultValue:sap.ui.core.ValueState.None},"icon":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null}}}});
sap.m.ObjectStatus.prototype.exit=function(){if(this._icon){this._icon.destroy();this._icon=null}};
sap.m.ObjectStatus.prototype._getImage=function(){var u=this.getIcon();if(this._icon){this._icon.setSrc(u)}else{var i=this.getId()+"-icon";if(sap.ui.core.IconPool.isIconURI(u)){this._icon=sap.ui.core.IconPool.createControlByURI({src:u,id:i},sap.m.Image)}else{this._icon=new sap.m.Image(i,{src:u})}}return this._icon};
sap.m.ObjectStatus.prototype._isEmpty=function(){return!(this.getText().trim()||this.getIcon().trim())};
