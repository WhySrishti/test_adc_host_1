/* Please ❤ this if you like it! */
(function ($) {
	"use strict";
  
	//Page cursors
  
	document
	  .getElementsByTagName("body")[0]
	  .addEventListener("mousemove", function (n) {
		(t.style.left = n.clientX + "px"),
		  (t.style.top = n.clientY + "px"),
		  (e.style.left = n.clientX + "px"),
		  (e.style.top = n.clientY + "px"),
		  (i.style.left = n.clientX + "px"),
		  (i.style.top = n.clientY + "px");
	  });
	var t = document.getElementById("cursor"),
	  e = document.getElementById("cursor2"),
	  i = document.getElementById("cursor3");
	function n(t) {
	  e.classList.add("hover"), i.classList.add("hover");
	}
	function s(t) {
	  e.classList.remove("hover"), i.classList.remove("hover");
	}
	s();
	for (
	  var r = document.querySelectorAll(".hover-target"), a = r.length - 1;
	  a >= 0;
	  a--
	) {
	  o(r[a]);
	}
	function o(t) {
	  t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
	}
  
	//Switch light/dark
  
	$(".switch").on("click", function () {
	  if ($("body").hasClass("light")) {
		$("body").removeClass("light");
		$(".switch").removeClass("switched");
	  } else {
		$("body").addClass("light");
		$(".switch").addClass("switched");
	  }
	});
  
	$(document).ready(function () {
	  /* Hero Case study images */
  
	  $(".slide-buttons li:nth-child(1)").on("mouseenter", function () {
		$(".slide-buttons li.active").removeClass("active");
		$(".hero-center-section.show").removeClass("show");
		$(".hero-center-section:nth-child(1)").addClass("show");
		$(".slide-buttons li:nth-child(1)").addClass("active");
	  });
	  $(".slide-buttons li:nth-child(2)").on("mouseenter", function () {
		$(".slide-buttons li.active").removeClass("active");
		$(".hero-center-section.show").removeClass("show");
		$(".hero-center-section:nth-child(2)").addClass("show");
		$(".slide-buttons li:nth-child(2)").addClass("active");
	  });
	  $(".slide-buttons li:nth-child(3)").on("mouseenter", function () {
		$(".slide-buttons li.active").removeClass("active");
		$(".hero-center-section.show").removeClass("show");
		$(".hero-center-section:nth-child(3)").addClass("show");
		$(".slide-buttons li:nth-child(3)").addClass("active");
	  });
	  $(".slide-buttons li:nth-child(4)").on("mouseenter", function () {
		$(".slide-buttons li.active").removeClass("active");
		$(".hero-center-section.show").removeClass("show");
		$(".hero-center-section:nth-child(4)").addClass("show");
		$(".slide-buttons li:nth-child(4)").addClass("active");
	  });
	  $(".slide-buttons li:nth-child(5)").on("mouseenter", function () {
		$(".slide-buttons li.active").removeClass("active");
		$(".hero-center-section.show").removeClass("show");
		$(".hero-center-section:nth-child(5)").addClass("show");
		$(".slide-buttons li:nth-child(5)").addClass("active");
	  });
	  $(".slide-buttons li:nth-child(6)").on("mouseenter", function () {
		$(".slide-buttons li.active").removeClass("active");
		$(".hero-center-section.show").removeClass("show");
		$(".hero-center-section:nth-child(6)").addClass("show");
		$(".slide-buttons li:nth-child(6)").addClass("active");
	  });
	  $(".slide-buttons li:nth-child(1)").trigger("mouseenter");
	});
  })(jQuery);
  
  const swiper = new Swiper(".swiper-slider", {
	// Optional parameters
	centeredSlides: true,
	slidesPerView: 1,
	grabCursor: true,
	freeMode: false,
	loop: true,
	mousewheel: false,
	keyboard: {
	  enabled: true,
	},
  
	// Enabled autoplay mode
	autoplay: {
	  delay: 3000,
	  disableOnInteraction: false,
	},
  
	// If we need pagination
	pagination: {
	  el: ".swiper-pagination",
	  dynamicBullets: false,
	  clickable: true,
	},
  
	// If we need navigation
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
  
	// Responsive breakpoints
	breakpoints: {
	  640: {
		slidesPerView: 1.25,
		spaceBetween: 20,
	  },
	  1024: {
		slidesPerView: 2,
		spaceBetween: 20,
	  },
	},
  });

  var $body = $('body'),
	$panel = $('.panel'),
	$pContent = $('.panel__content'),
	$img = $('.panel__img-col');

function initTilt() {
	TweenMax.set([$pContent, $img], { transformStyle: "preserve-3d" });

	$body.mousemove(function(e) {
		tilt(e.pageX, e.pageY) 
	});
};

function tilt(cx, cy) {
	// var sxPos = cx / $panel.width() * 100 - 100;
	// var syPos = cy / $panel.height() * 100 - 100;
	var sxPos = (cx / $body.width()*100 - 50)*2 ;
	var syPos = (cy / $body.height()*100 - 50)*2;
	TweenMax.to($pContent, 2, {
		rotationY: -0.03 * sxPos,
		rotationX: 0.03 * syPos,
		transformPerspective: 500,
		transformOrigin: "center center -400",
		ease: Expo.easeOut
	});
	TweenMax.to($img, 2, {
		rotationY: -0.03 * sxPos,
		rotationX: 0.03 * syPos,
		transformPerspective: 500,
		transformOrigin: "center center -200",
		ease: Expo.easeOut
	});
}

$body.mouseleave(function() {
	tilt($body.width()/2, $body.height()/2);
})

initTilt();

console.clear();