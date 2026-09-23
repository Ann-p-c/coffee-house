// Preloader
$(window).on("load", function () {
  $(".preloader").delay(1000).fadeOut('slow');
});

$(function () {

  // Header scroll
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 10) {
      $(".header").addClass("is-scrolled");
    } else {
      $(".header").removeClass("is-scrolled");
    }
  });

  // Mobile menu
  $(".header__burger").on("click", function () {
    $(".header__navigation").addClass("active");
    $("body").addClass("lock");
  });

  $(".nav__close-btn").on("click", function () {
    $(".header__navigation").removeClass("active");
    $("body").removeClass("lock");
  });

  $(window).on("resize", function() {
    $(".header__navigation").removeClass("active");
    $("body").removeClass("lock");
  })

  // Specials Slider
  const swiperSpecials = new Swiper(".specials__slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });

  // Testimonials Slider
  const swiperTestimonial = new Swiper(".testimonials__slider", { 
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    autoHeight: true,
    grabCursor: true,
    allowTouchMove: true,
    speed: 500,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {

        // when window width is <= 700px
        700: {
            slidesPerView: 2,
        },

        // when window width is <= 992px
        992: {
            slidesPerView: 3,
        },
    }
  });

  // Team Slider
  const swiperTeam = new Swiper(".team__slider", { 
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    autoHeight: true,
    grabCursor: true,
    allowTouchMove: true,
    speed: 500,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {

        // when window width is <= 600px
        600: {
            slidesPerView: 2,
        },

        // when window width is <= 992px
        992: {
            slidesPerView: 3,
        },
    }
  });

  // Portfolio Popup
  $(".gallery__grid").magnificPopup({
    delegate: "a",
    type: "image",
    closeOnContentClick: false,
    closeBtnInside: false,
    image: {
    verticalFit: true,
    cursor: null,
    },
    gallery: {
    enabled: true,
    },
    zoom: {
    enabled: true,
    duration: 300,
    easing: 'ease-in',
    opener: function (element) {
        return element.find("img");
      },
    },
  });

  // Tabs
  $(".tabs__item a").on("click", function(event) {
    event.preventDefault();
    $(".tabs__item").removeClass("active");
    $(".tabs__content").removeClass("active"),
    $(this).parent().addClass("active");
    $($(this).attr("href")).addClass("active");
  })

	// Scroll Up
  $(window).on('scroll', function() {
    if($(this).scrollTop() > 200) {
      $('.scroll-up').addClass('active');
    }
    else {
      $('.scroll-up').removeClass('active');
    }
  });

  $('.scroll-up').on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
});

// Email send
const mailPath = 'mail.php';

document.querySelectorAll('.ajax-form').forEach( (e) => {

	e.addEventListener('submit', function(e) {

		let th      = this,
		    params  = new FormData(this),
		    request = new XMLHttpRequest()

		request.open('POST', mailPath, true)
		request.send(params)

		request.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				setTimeout(function() { th.reset() }, 1000)
				alert('Thank you!');
			}
		}
		e.preventDefault();
	})
});