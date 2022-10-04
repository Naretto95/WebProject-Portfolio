jQuery(document).ready(function() {
	const select = (el, all = false) => {
		el = el.trim()
		if (all) {
		  return [...document.querySelectorAll(el)]
		} else {
		  return document.querySelector(el)
		}
	  }
	
	  /**
	   * Easy event listener function
	   */
	  const on = (type, el, listener, all = false) => {
		let selectEl = select(el, all)
		if (selectEl) {
		  if (all) {
			selectEl.forEach(e => e.addEventListener(type, listener))
		  } else {
			selectEl.addEventListener(type, listener)
		  }
		}
	  }
	
	  /**
	   * Easy on scroll event listener 
	   */
	  const onscroll = (el, listener) => {
		el.addEventListener('scroll', listener)
	  }
	
	  /**
	   * Navbar links active state on scroll
	   */
	  let navbarlinks = select('#navbar .scrollto', true)
	  const navbarlinksActive = () => {
		let position = window.scrollY + 200
		navbarlinks.forEach(navbarlink => {
		  if (!navbarlink.hash) return
		  let section = select(navbarlink.hash)
		  if (!section) return
		  if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
			navbarlink.classList.add('active')
		  } else {
			navbarlink.classList.remove('active')
		  }
		})
	  }
	  window.addEventListener('load', navbarlinksActive)
	  onscroll(document, navbarlinksActive)
	
	  /**
	   * Mobile nav toggle
	   */
	  on('click', '.mobile-nav-toggle', function(e) {
		select('body').classList.toggle('mobile-nav-active')
		this.classList.toggle('bi-list')
		this.classList.toggle('bi-x')
	  })
	
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

$trigger.waypoint(function(){
	jQuery(document).ready(function(){
		jQuery('.skillbar').each(function(){
			jQuery(this).find('.skillbar-bar').animate({
				width:jQuery(this).attr('data-percent')
			},6000);
		});
	});
},{offset:'100%'})

window.onload = function(){
	//hide the preloader
	document.querySelector("#preloader").style.display = "none";
}