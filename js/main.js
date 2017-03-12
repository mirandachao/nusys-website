$(document).ready(function() {
	// fade in the image header
	$("#header").fadeIn(800);

	// scroll to for nav links
	$("#home-nav").click(function() {
		$('html, body').animate({
			scrollTop: $("#header").offset().top
		}, 800);
	});

	$("#about-nav").click(function() {
		$('html, body').animate({
			scrollTop: $("#about").offset().top
		}, 800);
	});

	$("#team-nav").click(function() {
		$('html, body').animate({
			scrollTop: $("#team").offset().top
		}, 800);
	});

	$("#documentation-nav").click(function() {
		$('html, body').animate({
			scrollTop: $("#docs").offset().top
		}, 800);
	});

	$("#support-nav").click(function() {
		$('html, body').animate({
			scrollTop: $("#support").offset().top
		}, 800);
	});

	$("#contact-nav").click(function() {
		$('html, body').animate({
			scrollTop: $("#contact").offset().top
		}, 800);
	});

	// scroll to for section triangles
	$("#header-down").click(function() {
		$('html, body').animate({
			scrollTop: $("#about").offset().top
		}, 800);
	});

	$("#about-down").click(function() {
		$('html, body').animate({
			scrollTop: $("#team").offset().top
		}, 800);
	});

	$("#team-down").click(function() {
		$('html, body').animate({
			scrollTop: $("#support").offset().top
		}, 800);
	});

	$("#docs-down").click(function() {
		$('html, body').animate({
			scrollTop: $("#support").offset().top
		}, 800);
	});

	$("#support-down").click(function() {
		$('html, body').animate({
			scrollTop: $("#contact").offset().top
		}, 800);
	});

	// back to top at page bottom
	$("#back-to-top").click(function() {
		$('html, body').animate({
			scrollTop: $("#header").offset().top
		}, 800);
	});

	// drop down for mobile menu
	$("#menu-icon").click(function() {
		if ($("#dropdownmenu").is(":visible")) {
			$("#dropdownmenu").slideUp();
		} else {
			$("#dropdownmenu").slideDown();
		}
	});

	// drop down links for mobile menu
	$("#dropdown-about").click(function() {
		$('html, body').animate({
			scrollTop: $("#about").offset().top	
		}, 800);
		$("#dropdownmenu").slideUp();
	});

	$("#dropdown-team").click(function() {
		$('html, body').animate({
			scrollTop: $("#team").offset().top	
		}, 800);
		$("#dropdownmenu").slideUp();
	});

	$("#dropdown-docs").click(function() {
		$('html, body').animate({
			scrollTop: $("#docs").offset().top	
		}, 800);
		$("#dropdownmenu").slideUp();
	});

	$("#dropdown-support").click(function() {
		$('html, body').animate({
			scrollTop: $("#support").offset().top	
		}, 800);
		$("#dropdownmenu").slideUp();
	});

	$("#dropdown-contact").click(function() {
		$('html, body').animate({
			scrollTop: $("#contact").offset().top	
		}, 800);
		$("#dropdownmenu").slideUp();
	});

	$("#dropdown-home").click(function() {
		$('html, body').animate({
			scrollTop: $("#header").offset().top	
		}, 800);
		$("#dropdownmenu").slideUp();
	});

});
