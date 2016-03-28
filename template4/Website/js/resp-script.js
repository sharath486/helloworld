// JavaScript Document
jQuery(document).ready(function() {
		
	jQuery(".menu-trigger").click(function() {
		
		jQuery(".resp-menu").slideToggle(400, function() {
			jQuery(this).toggleClass("resp-expanded").css('display', '');
		});
		
	});
	
});