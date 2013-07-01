/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides helper sap.ui.core.LocalBusyIndicatorSupport
jQuery.sap.declare("sap.ui.core.LocalBusyIndicatorSupport");
jQuery.sap.require("sap.ui.core.Popup");

/**
 * This support class extends the calling control with a local BusyIndicator.
 * After the control called this class (within the init-function), the control
 * is able to easily set a LocalBusyIndicator that only blocks the current
 * control.
 * 
 * @returns {sap.ui.core.LocalBusyIndicatorSupport}
 * @constructor
 * @public
 */
sap.ui.core.LocalBusyIndicatorSupport = function() {
	// "this" is the prototype now when called with apply()

	// Ensure only Controls are enhanced
	if (this instanceof sap.ui.core.Control) {
		this._sapUiCoreLocalBusy_isBusy = false;
		this._sapUiCoreLocalBusy_oPopup;
		this._sapUiCoreLocalBusy_busyIndicator;

		this._sapUiCoreLocalBusy_delay = 1000;

		/**
		 * This function starts or ends the LocalBusyIndicator depending on the
		 * given parameter value.
		 * 
		 * @param {boolean}
		 *            bBusy whether the control should be set as busy or not
		 * @public
		 */
		this.setBusy = function(bBusy) {
			if (this._sapUiCoreLocalBusy_isBusy === bBusy) {
				// if the status should be set as it already is -> nothing needs
				// to be done
				return;
			}

			this._sapUiCoreLocalBusy_isBusy = bBusy;

			if (bBusy) {
				if (this._sapUiCoreLocalBusy_busyIndicator) {
					delete this._sapUiCoreLocalBusy_busyIndicator;
				}

				var $this = this.$();
				var w = $this.outerWidth() + "px";
				var h = $this.outerHeight() + "px";
				this._sapUiCoreLocalBusy_busyIndicator = new sap.ui.core.LocalBusyIndicator({
					width : w,
					height : h
				});

				// content, bModal, bShadow, bAutoclose
				this._sapUiCoreLocalBusy_oPopup = new sap.ui.core.Popup(this._sapUiCoreLocalBusy_busyIndicator, false, false, false);
				this._sapUiCoreLocalBusy_oPopup.attachOpened(jQuery.proxy(this._sapUiCoreLocalBusyPopupOpened, this));
				this._sapUiCoreLocalBusy_oPopup.attachClosed(jQuery.proxy(this._sapUiCoreLocalBusyPopupClosed, this));

				this._delayedCallId = jQuery.sap.delayedCall(this._sapUiCoreLocalBusy_delay, this, "_sapUiCoreLocalBusyPopupOpen");
			} else {
				if (this._delayedCallId) {
					/*
					 * This stuff is needed if the LocalBusyIndicator was
					 * started and a delay was used and the delay hasn't passed
					 * yet. So everything needs to be tidied up.
					 */
					jQuery.sap.clearDelayedCall(this._delayedCallId);
					delete this._delayedCallId;

					if (this._sapUiCoreLocalBusy_busyIndicator) {
						this._sapUiCoreLocalBusy_busyIndicator.destroy();
						delete this._sapUiCoreLocalBusy_busyIndicator;
					}
				}

				this._sapUiCoreLocalBusy_oPopup.close();
			}
		};

		/**
		 * Checks if the control is currently busy.
		 * 
		 * @returns {boolean} whether the contol is currently busy or not
		 * @public
		 */
		this.isBusy = function() {
			return this._sapUiCoreLocalBusy_isBusy;
		};

		/**
		 * This function set the delay until the BusyIndicator is being shown
		 * 
		 * @public
		 * @param iDelay
		 */
		this.setDelay = function(iDelay) {
			this._sapUiCoreLocalBusy_delay = iDelay;
		};

		/**
		 * @returns {Number} delay that will be waited for until the
		 *          BusyIndicator is shown
		 */
		this.getDelay = function() {
			return this._sapUiCoreLocalBusy_delay;
		};

		this._sapUiCoreLocalBusyPopupOpen = function() {
			// iDuration, my, at, of, offset, collision, followOf
			this._sapUiCoreLocalBusy_oPopup.open(sap.ui.core.Popup.Dock.BeginTop, sap.ui.core.Popup.Dock.BeginTop, this, "0 0", null, true);
		};

		/**
		 * @private
		 */
		this._sapUiCoreLocalBusyPopupOpened = function() {
			jQuery.sap.clearDelayedCall(this._delayedCallId);
			delete this._delayedCallId;
		};

		/**
		 * This function destroys the previously created BusyIndicator after the
		 * Popup is closed
		 * 
		 * @private
		 */
		this._sapUiCoreLocalBusyPopupClosed = function() {
			jQuery.sap.clearDelayedCall(this._delayedCallId);
			delete this._delayedCallId;

			if (this._sapUiCoreLocalBusy_busyIndicator) {
				this._sapUiCoreLocalBusy_busyIndicator.destroy();
				delete this._sapUiCoreLocalBusy_busyIndicator;
			}
		};

		// TODO edit this comment accordingly to the comment in Element.js
		/**
		 * 
		 * This function is called from Element.js (a temporary hook) to
		 * remove/delete all stuff that was added before
		 * 
		 * @private
		 */
		this._sapUiCoreLocalBusy_Exit = function() {
			delete this._sapUiCoreLocalBusy_isBusy;

			if (this._delayedCallId) {
				jQuery.sap.clearDelayedCall(this._delayedCallId);
				delete this._delayedCallId;
			}

			if (this._sapUiCoreLocalBusy_busyIndicator) {
				this._sapUiCoreLocalBusy_busyIndicator.destroy();
				delete this._sapUiCoreLocalBusy_busyIndicator;
			}

			if (this._sapUiCoreLocalBusy_oPopup) {
				this._sapUiCoreLocalBusy_oPopup.detachClosed(jQuery.proxy(this.sapUiCoreLocalBusyPopupClosed, this));

				this._sapUiCoreLocalBusy_oPopup.destroy();
				delete this._sapUiCoreLocalBusy_oPopup;
			}
		};
	} else {
		jQuery.sap.log.error("Only controls can use the LocalBusyIndicator", this);
	}
};