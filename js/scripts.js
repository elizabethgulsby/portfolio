$(document).ready(function() {
	
	//$('.navlink').css({"color": "black"});
	//$('.navlink').css({"padding-top": "20px"});

	//handling scroll animation when nav links are clicked
	    $('a.page-scroll').bind('click', function(event) {
	        var $anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: ($($anchor.attr('href')).offset().top - 63)
	        }, 1500, 'easeInOutExpo');
	        event.preventDefault();
	    });


	    //handling navbar CSS transitions (To Do: fix animated scroll when name in top left is clicked)
		$(window).scroll(function () {
			var elem = $('.fixed');
			var color = $('.page-scroll');
			var windowWidth = $(window).width();
			if ($(this).scrollTop() > 0) {
				elem.css({"background-color":"black","transition":"2s"});
				color.css({"color": "white"});
			}
			else {
				elem.css({"background-color":"transparent","transition":".8s"});
				color.css({"color": "black"});
			}
		});

		// $(window).resize(function(){
		// 	var color = $('.page-scroll');
		// 	var elem = $('.fixed');
		// 	var windowWidth = $(window).width();
		// 	if (windowWidth <= 768) {
		// 		color.css({"color": "black", "background-color": "white"});
		// 		elem.css({"background-color":"transparent"});
		// 	}
		// 	else {
		// 		color.css({"color": "black"});
		// 		elem.css({"background-color":"transparent"});
		// 	}
		// });

});
