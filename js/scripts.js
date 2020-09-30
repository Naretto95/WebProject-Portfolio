jQuery(document).ready(function() {
	
	/*
	    Sidebar
	*/
	$('.dismiss').on('click', function() {
        $('.sidebar').removeClass('active');
	});

	$('.sidebar .scroll-link').click(function() {
		if(window.matchMedia("(max-width: 992px)").matches){
			$(".sidebar").removeClass("active");
			$(".scroll-link").removeClass("active");
		};
	});


    $('.open-menu').on('click', function(e) {
    	e.preventDefault();
        $('.sidebar').addClass('active');
        // close opened sub-menus
        $('.collapse.show').toggleClass('show');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    /* change sidebar style */
	$('a.btn-customized-dark').on('click', function(e) {
		e.preventDefault();
		$('.sidebar').removeClass('light');
	});
	$('a.btn-customized-light').on('click', function(e) {
		e.preventDefault();
		$('.sidebar').addClass('light');
	});
	
	// Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 1000, "easeInOutExpo");
			return false;
		  }
		}
	  });
	
	  // Scroll to top button appear
	  $(document).scroll(function() {
		var scrollDistance = $(this).scrollTop();
		if (scrollDistance > 100) {
		  $('.scroll-to-top').fadeIn();
		} else {
		  $('.scroll-to-top').fadeOut();
		}
	  });
});

var $trigger =$('.skillbar');

if(window.matchMedia("(max-width: 992px)").matches){
	$(".wow").removeClass("wow");
	$(".animated").removeClass("animated");
};

$trigger.waypoint(function(){
	jQuery(document).ready(function(){
		jQuery('.skillbar').each(function(){
			jQuery(this).find('.skillbar-bar').animate({
				width:jQuery(this).attr('data-percent')
			},6000);
		});
	});
},{offset:'100%'})