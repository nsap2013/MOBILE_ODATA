/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

(function($) {

	var sOS, oDefaults,
		oCore = sap.ui.getCore(),
		oLocale = sap.m.getLocale(),
		sLanguage = oLocale.getLanguage(),
		oLocaleData = sap.m.getLocaleData(),
		oResourceBundle = oCore.getLibraryResourceBundle("sap.m"),
		_ = function(sText) {
			return oResourceBundle.getText("MOBISCROLL_" + sText);
		},
		rgxExcludeLiteral = "(?=([^']*'[^']*')*[^']*$)",
		sJsPath = "sap.ui.thirdparty.mobiscroll.js.",
		sCssPath = $.sap.getModulePath("sap.ui.thirdparty.mobiscroll", "/css/"),
		oSettings = {
			endYear : new Date().getFullYear() + 10,
			lang : sLanguage
		},
		oi18n = {
			setText : _("SET"),
			cancelText : _("CANCEL"),
			monthText : _("MONTH"),
			dayText : _("DAY"),
			yearText : _("YEAR"),
			hourText : _("HOURS"),
			minuteText : _("MINUTES"),
			secText : _("SECONDS"),
			nowText : _("NOW"),
			dayNames : oLocaleData.getDays("wide"),
			dayNamesShort : oLocaleData.getDays("abbreviated"),
			monthNames : oLocaleData.getMonths("wide"),
			monthNamesShort : oLocaleData.getMonths("abbreviated")
		},
		oThemeParams = sap.ui.core.theming.Parameters.get();
		
	// inject resources
	$.sap.includeStyleSheet(sCssPath + "mobiscroll-core.css");
	$.sap.require(sJsPath + "mobiscroll-core");
	$.sap.require(sJsPath + "mobiscroll-datetime");
	
	// get default settings
	oDefaults = $("<input>").scroller({}).scroller("getInst").settings;

	// check platform dependency and OS then do the required settings
	if (oThemeParams["sapMPlatformDependent"] != "true") {
		var device = ["phone", "tablet", "desktop"].filter(function(d) {
				return $.device.is[d];
			})[0],
			ucfirst = function(str) {
				if (!str) {
					return "";
				}
				return str.charAt(0).toUpperCase() + str.substr(1);
			},
			setDefaultsByTheme = function(key, type, prefix) {
				var value = oThemeParams["sapUiDTICustom" + ucfirst(prefix) + ucfirst(key)];
				if (value) {
					if (type == "bool") {
						oSettings[key] = (value.toLowerCase() == "true" ? true : false);
					} else if (type == "int") {
						value = parseInt(value, 10);
						!isNaN(value) && (oSettings[key] = value);
					} else {
						oSettings[key] = value;
					}
				}
				if (!prefix && device) {
					setDefaultsByTheme(key, type, device);
				}
			};

		oSettings.mode = "mixed";
		oSettings.display = "modal";
		oSettings.theme = "sapMDTICustom";
		setDefaultsByTheme("mode");
		setDefaultsByTheme("display");
		setDefaultsByTheme("animate");
		setDefaultsByTheme("rows", "int");
		setDefaultsByTheme("width", "int");
		setDefaultsByTheme("height", "int");
		setDefaultsByTheme("showLabel", "bool");
		setDefaultsByTheme("headerText", "bool");
		if (oSettings.headerText) {
			// mobiscroll needs text to replace
			oSettings.headerText = "{value}";
		}

		// load custom fonts
		$.sap.require("sap.ui.core.IconPool");
		sap.ui.core.IconPool.insertFontFaceStyle();
	} else if ($.os.ios) {
		sOS = "ios";
		oSettings.display = "bubble";
	} else if ($.os.android) {
		sOS = "android-ics";
		if ($.os.fVersion == 2.3) {
			// scroll mode is not responsive
			oSettings.mode = "clickpick";
			// 5 rows feels like scrollable
			oSettings.rows = 3;
		} else if ($.os.fVersion == 3.2) {
			// mixed mode has overlapping bug
			oSettings.mode = "scroller";
		}
	} else if ($.browser.msie) {
		sOS = "wp";
	}
	
	// enable language settings
	$.scroller.i18n[sLanguage] = $.extend(oi18n);
	
	// do OS settings
	if (sOS) {
		oSettings.theme = ($.os.android) ? sOS + " light" : sOS;
		$.sap.includeStyleSheet(sCssPath + "mobiscroll-" + sOS + ".css");
		$.sap.require(sJsPath + "mobiscroll-" + sOS);
		oSettings = $.extend({}, $.mobiscroll.themes[oSettings.theme].defaults, oSettings);
	}	

	// enable instance management
	$.sap.require("sap.m.InstanceManager");

	// Add custom datetime methods to prototype
	$.extend(sap.m.DateTimeInput.prototype, {
		/**
		 * This method gets called from sap.m.InstanceManager,
		 * to close the opened mobiscroll dialog when the back button is clicked
		 *
		 * @private
		 */
		close : function() {
			this._$input.scroller("hide");
		},

		/**
		 * Mobiscroll title reformatter to support all cldr formats
		 * We can only get string value onChange/onWheel event
		 */
		_setScrollerHeader : function(sValue) {
			try {
				var oConfig = this._$input.scroller("getInst").settings,
					sFormat = !this.getType().indexOf("Date") ? oConfig.dateFormat : oConfig.timeFormat,
					oDate = $.mobiscroll.parseDate(sFormat, sValue);

				return sap.ui.core.format.DateFormat.getDateInstance({
					pattern : this.getDisplayFormat()
				}).format(oDate);
			} catch (e) {
				return sValue;
			}
		},
		
		/**
		 * Auto close for bubbles
		 */
		_autoClose : function(oEvent) {		
			if (this.getDomRef().contains(oEvent.target)) {
				oEvent.stopPropagation();
				oEvent.preventDefault();
				return;
			}
			
			if (!document.querySelector(".sapMDTICustom .dwwr").contains(oEvent.target)) {
				this._$input.scroller("hide");
			}
		},
		
		/**
		 * if page is scrolling then set the dialog middle
		 * 
		 */		
		_centralizeOnScroll : function($dialog) {
			var $container = $dialog.find(".dw"),
				dialogHeight = $container.outerHeight(true),
				dialogWidth = $container.outerWidth(true),
				windowHeight = document.documentElement.clientHeight,
				windowWidth = document.documentElement.clientWidth,
				$persp = $dialog.find(".dw-persp");
			
			// if page is scrolling hide arrow and centralize modal
			if ($persp.height() > windowHeight) {				
				$persp.height(windowHeight);
				$dialog.find(".dw-arrw-i").css("display", "none");				
				$container.css({
					top : Math.max((windowHeight - dialogHeight) / 2, 0),
					left : Math.max((windowWidth - dialogWidth) / 2, 0)
				});
			}
		},
		
		/**
		 * Restrict max width of the dialog
		 */
		_restrictMaxWidth : function($dialog) {
			//TODO : Find a better way to find out 22 instead of hard coding
			$dialog[0].querySelector(".dwwr").style.maxWidth = (document.documentElement.clientWidth - 22) + "px";
		}, 
		
		/**
		 * Handle window resize event
		 */
		_handleResize : function(oEvent) {
			this._restrictMaxWidth(oEvent.data.$dialog);
			//TODO: run the this._centralizeOnScroll for resizing
		},

		/**
		 * Date-time conversion for mobiscroll configuration
		 */
		_getScrollerConfig : function() {			
			var that = this,
				sType = this.getType(),
				sFormat = this.getDisplayFormat(),
				fnAutoCloseProxy = $.proxy(this._autoClose, this),
				fnHandleResize = $.proxy(this._handleResize, this),
				oConfig = $.extend({}, oSettings, {
					preset : sType.toLowerCase(),
					onShow : function($dialog) {
						sap.m.InstanceManager.addDialogInstance(that);
						$(window).on("resize.sapMDTICustom", {$dialog : $dialog}, fnHandleResize);
						if (oSettings.display == "bubble") {
							that._centralizeOnScroll($dialog);
							document.addEventListener($.support.touch ? "touchstart" : "mousedown", fnAutoCloseProxy, true);
						}
					},
					onClose : function() {
						sap.m.InstanceManager.removeDialogInstance(that);
						$(window).off("resize.sapMDTICustom", fnHandleResize);
						if (oSettings.display == "bubble") {
							document.removeEventListener($.support.touch ? "touchstart" : "mousedown", fnAutoCloseProxy, true);
						}
					},
					onMarkupReady : function($dialog, inst) {
						that._restrictMaxWidth($dialog);
						if (oSettings.headerText !== false) {
							$dialog.addClass("sapMDTICustomHdr");
						}						
					}
				});

			if (sType == "Date") {
				sFormat = this._convertDatePattern(sFormat);
				$.extend(oConfig, {
					dateFormat : sFormat,
					dateOrder : this._getLongDatePattern(sFormat.replace(/'.*?'/g, "")).replace(/[^ymd ]/ig, ""),
				});
			} else if (sType == "Time") {
				sFormat = this._convertTimePattern(sFormat);
				$.extend(oConfig, {
					timeFormat : sFormat,
					timeWheels : sFormat.replace(/'.*?'/g, "").replace(/[^hisa]/ig, "")
				});
			} else if (sType == "DateTime") {
				sFormat = this._convertDatePattern(this._convertTimePattern(sFormat));

				// date-time hack
				$.extend(oConfig, {
					dateFormat : sFormat,
					dateOrder : this._getLongDatePattern(sFormat.replace(/'.*?'/g, "")).replace(/[^ymd ]/ig, ""),
					rows :  this._getRowForDateTime(), 
					timeWheels : sFormat,
					timeFormat : "",
					separator : ""
				});								
			}

			// check given format is not supported by mobiscroll
			if (/[^ymdhisa\W]/i.test(sFormat)) {
				this._reformat = true;
				if (oSettings.headerText !== false) {
					oConfig.headerText = $.proxy(this._setScrollerHeader, this);
				}
			} else {
				this._reformat = false;
			}

			return oConfig;
		},

		/**
		 * Until mobiscroll fixes min height(360px) problem for date time
		 * we just decrease the row count to 3
		 */
		_getRowForDateTime : function() {
			var rows = oSettings.rows || oDefaults.rows;
			if (!rows || rows <= 3) {
				return 3;
			}			
			return Math.min(window.innerWidth, window.innerHeight) < 360 ? 3 : rows;
		},

		/**
		 * cache often used regular expressions
		 */
		_rgxYear : new RegExp("y+" + rgxExcludeLiteral, "ig"),
		_rgxMonth : new RegExp("m+" + rgxExcludeLiteral, "ig"),
		_rgxDay : new RegExp("d+" + rgxExcludeLiteral, "g"),
		_rgxMinute : new RegExp("m" + rgxExcludeLiteral, "g"),
		_rgxAmPm : new RegExp("a" + rgxExcludeLiteral, "g"),
		_rgxDayOfWeekLong : new RegExp("EEEE" + rgxExcludeLiteral, "g"),
		_rgxDayOfWeekShort : new RegExp("E+" + rgxExcludeLiteral, "g"),


		/**
		 * Convert date pattern to long month name, 4 digit year, 2 digit day
		 */
		_getLongDatePattern : function(sPattern) {
			sPattern = (sPattern || this.getDisplayFormat()).replace(this._rgxYear, "YY");
			if (sOS == "wp") {	// for IE show day and month names to mimic native picker
				return sPattern.replace(this._rgxMonth, "mm MM").replace(this._rgxDay, "dd DD");
			}
			return sPattern.replace(this._rgxMonth, "MM").replace(this._rgxDay, "dd");
		},


		/**
		 * Converts the time pattern from CLDR to the mobiscroll time picker
		 * m is short month name, i = minute
		 */
		_convertTimePattern : function(sPattern) {
			sPattern = sPattern || this.getDisplayFormat();
			return sPattern.replace(this._rgxMinute, "i").replace(this._rgxAmPm, "A");
		},


		/**
		 * Converts the date pattern from CLDR to the one of the jQuery datePicker
		 * Month is coded in the different way
		 * TODO: Copied from core talk with core team to call method from somewhere else shared
		 * TODO: This implementation ignores the literals usage case, talk also with core team
		 */
		_convertDatePattern : function(sPattern) {
			sPattern = sPattern || this.getDisplayFormat();

			var iIndex1 = sPattern.indexOf('M'),
				iIndex2 = sPattern.lastIndexOf('M'),
				sFormat = sPattern,
				sNewMonth;

			if (iIndex1 == -1) {
				// no month defined with M, maybe using L (standalone)
				iIndex1 = sPattern.indexOf('L');
				iIndex2 = sPattern.lastIndexOf('L');
			}

			if (iIndex1 > -1) {
				switch (iIndex2-iIndex1) {
				case 0:
					sNewMonth = 'm';
					break;
				case 1:
					sNewMonth = 'mm';
					break;
				case 2:
					sNewMonth = 'M';
					break;
				case 5:
					//narrow state not available in jQuery DatePicker -> use shortest one
					sNewMonth = 'm';
					break;
				default:
					sNewMonth = 'MM';
				break;
				}
				sFormat = sPattern.substring(0, iIndex1) + sNewMonth + sPattern.substring(iIndex2 + 1);
			}

			var sNewYear;
			iIndex1 = sFormat.indexOf('y');
			if (iIndex1 > -1) {
				iIndex2 = sFormat.lastIndexOf('y');
				if (iIndex2-iIndex1 == 1) {
					// two chanrs
					sNewYear = 'y';
				}else{
					sNewYear = 'yy';
				}
				var sFormat = sFormat.substring(0, iIndex1) + sNewYear + sFormat.substring(iIndex2 + 1);
			}

			var sNewYearDay;
			iIndex1 = sFormat.indexOf('D');
			if (iIndex1 > -1) {
				iIndex2 = sFormat.lastIndexOf('D');

				if (iIndex2-iIndex1 == 1) {
					// two chanrs
					sNewYearDay = 'o';
				}else{
					sNewYearDay = 'oo';
				}
				var sFormat = sFormat.substring(0, iIndex1) + sNewYearDay + sFormat.substring(iIndex2 + 1);
			}

			// EEEE = DD = day of week(long)
			// EEE, EE, E = D = day of week(short)
			sFormat = sFormat.replace(this._rgxDayOfWeekLong, "DD").replace(this._rgxDayOfWeekShort, "D");

			return sFormat;
		}
	});

})(jQuery);