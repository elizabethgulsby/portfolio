$(document).ready(function() {
	//handling scroll animation when nav links are clicked

	// $(function() {
	    $('a.page-scroll').bind('click', function(event) {
	        var $anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: ($($anchor.attr('href')).offset().top - 40)
	        }, 1500, 'easeInOutExpo');
	        event.preventDefault();
	    });
	// });


});
