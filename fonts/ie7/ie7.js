/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-leaf2': '&#xf06c;',
		'icon-plane': '&#xf072;',
		'icon-group': '&#xf0c0;',
		'icon-users2': '&#xf0c0;',
		'icon-bolt': '&#xf0e7;',
		'icon-flash': '&#xf0e7;',
		'icon-archive': '&#xf187;',
		'icon-graduation-cap': '&#xf19d;',
		'icon-mortar-board': '&#xf19d;',
		'icon-automobile': '&#xf1b9;',
		'icon-car': '&#xf1b9;',
		'icon-home3': '&#xe902;',
		'icon-camera': '&#xe90f;',
		'icon-music': '&#xe911;',
		'icon-cart': '&#xe93a;',
		'icon-coin-pound': '&#xe93d;',
		'icon-phone-hang-up': '&#xe943;',
		'icon-address-book': '&#xe944;',
		'icon-location2': '&#xe948;',
		'icon-clock': '&#xe94e;',
		'icon-alarm': '&#xe950;',
		'icon-calendar': '&#xe953;',
		'icon-undo2': '&#xe967;',
		'icon-redo2': '&#xe968;',
		'icon-user': '&#xe971;',
		'icon-users': '&#xe972;',
		'icon-hour-glass': '&#xe979;',
		'icon-search': '&#xe986;',
		'icon-zoom-in': '&#xe987;',
		'icon-zoom-out': '&#xe988;',
		'icon-stats-dots': '&#xe99b;',
		'icon-spoon-knife': '&#xe9a3;',
		'icon-leaf': '&#xe9a4;',
		'icon-airplane': '&#xe9af;',
		'icon-power': '&#xe9b5;',
		'icon-earth': '&#xe9ca;',
		'icon-star-empty': '&#xe9d7;',
		'icon-heart': '&#xe9da;',
		'icon-man': '&#xe9dc;',
		'icon-woman': '&#xe9dd;',
		'icon-man-woman': '&#xe9de;',
		'icon-smile': '&#xe9e1;',
		'icon-volume-high': '&#xea26;',
		'icon-volume-mute2': '&#xea2a;',
		'icon-mail': '&#xea83;',
		'icon-mail2': '&#xea84;',
		'icon-mail4': '&#xea86;',
		'icon-google-plus': '&#xea8b;',
		'icon-facebook': '&#xea90;',
		'icon-facebook2': '&#xea91;',
		'icon-instagram': '&#xea92;',
		'icon-spotify': '&#xea94;',
		'icon-twitter': '&#xea96;',
		'icon-youtube': '&#xea9d;',
		'icon-youtube2': '&#xea9e;',
		'icon-tumblr': '&#xeab9;',
		'icon-tumblr2': '&#xeaba;',
		'icon-linkedin': '&#xeac9;',
		'icon-linkedin2': '&#xeaca;',
		'icon-pinterest': '&#xead1;',
		'icon-file-pdf': '&#xeadf;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
