/*!
 * jQuery MobiScroll v2.5.0
 * http://mobiscroll.com
 *
 * Copyright 2010-2013, Acid Media
 * Licensed under the MIT license.
 *
 */
(function($){$.mobiscroll.themes.wp={defaults:{width:70,height:76,accent:'none',dateOrder:'mmMMddDDyy'},init:function(e,i){var c,a;$('.dw',e).addClass('wp-'+i.settings.accent);$('.dwwl',e).bind('touchstart mousedown DOMMouseScroll mousewheel',function(){c=true;a=$(this).hasClass('wpa');$('.dwwl',e).removeClass('wpa');$(this).addClass('wpa')}).bind('touchmove mousemove',function(){c=false}).bind('touchend mouseup',function(){if(c&&a){$(this).removeClass('wpa')}})}};$.mobiscroll.themes['wp light']=$.mobiscroll.themes.wp})(jQuery);
