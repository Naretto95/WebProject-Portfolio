jQuery(document).ready(function() {
	const select = (el, all = false) => {
		el = el.trim()
		if (all) {
		  return [...document.querySelectorAll(el)]
		} else {
		  return document.querySelector(el)
		}
	  }
	
	   // Easy event listener function
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
	
	   // Easy on scroll event listener 
	  const onscroll = (el, listener) => {
		el.addEventListener('scroll', listener)
	  }
	
	   // Navbar links active state on scroll
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
	
	   // Mobile nav toggle
	  on('click', '.mobile-nav-toggle', function(e) {
		select('body').classList.toggle('mobile-nav-active')
		this.classList.toggle('bi-list')
		this.classList.toggle('bi-x')
	  })
	
	  // Scroll to top button appear
	  $(document).scroll(function() {
		var scrollDistance = $(this).scrollTop();
		if (scrollDistance > 100) {
		  $('.scroll-to-top').fadeIn();
		} else {
		  $('.scroll-to-top').fadeOut();
		}
	  });
	  let skilsContent = select('.skills-content');


	  window.addEventListener('load', () => {
		if (window.location.hash) {
		  if (select(window.location.hash)) {
			scrollto(window.location.hash)
		  }
		}
	  });
	  
	if (skilsContent) {
		new Waypoint({
		element: skilsContent,
		offset: '80%',
		handler: function(direction) {
			let progress = select('.progress .progress-bar', true);
			progress.forEach((el) => {
			el.style.width = el.getAttribute('aria-valuenow') + '%'
			});
		}
		})
	}

	const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }
});


window.onload = function(){
	//hide the preloader
	document.querySelector("#preloader").style.display = "none";
	document.getElementById('contactform').addEventListener('submit', function(event) {
		event.preventDefault();
		$("#btnload").prop("disabled", true);
		$("#btnload").html(
			'<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Envois...'
			);
		// generate a five digit number for the contact_number variable
		this.contact_number.value = Math.random() * 100000 | 0;
		// these IDs from the previous steps
		emailjs.sendForm('service_z9yfyma', 'template_aza6wwj', this)
			.then(function() {
				console.log('SUCCESS!');
				alert("Message envoyé. Merci!");
				location.reload();
			}, function(error) {
				console.log('FAILED...', error);
				alert(error);
				location.reload();
			});
	});
}

window.addEventListener('load', () => {
	AOS.init({
	  duration: 1000,
	  easing: 'ease-in-out',
	  once: true,
	  mirror: false,
	  disable: 'mobile'
	})
  });