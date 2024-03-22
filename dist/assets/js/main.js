// Slider Part
$(".team-slider").slick({
	speed: 1000,
  fade: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  pauseOnHover: true,
  centerMode: false,
  dots: false,
  arrows: true,
  nextArrow: '<i class="las la-arrow-right arrow-right"></i>',
  prevArrow: '<i class="las la-arrow-left arrow-left"></i> ',
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
$(".project-slider").slick({
	speed: 1000,
  fade: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  pauseOnHover: true,
  centerMode: false,
  dots: false,
  arrows: true,
  nextArrow: '<i class="las la-arrow-right arrow-right"></i>',
  prevArrow: '<i class="las la-arrow-left arrow-left"></i> ',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

var videoItem = $(".play-btn");
if (videoItem) {
  videoItem.magnificPopup({
    type: "iframe",
  });
}

// header toggle
$(".header-toggle").on("click", function (e) {
  $(".responsive-header").toggleClass("active");
  $("header").toggleClass("active");
  $(".overlay").toggleClass("active");
});
$(".overlay,.header-close").on("click", function (e) {
  $("header").removeClass("active");
  $(".responsive-header").removeClass("active");
  $(".overlay").removeClass("active");
});

// Detect Screen Size
let screenSize = window.innerWidth;
window.addEventListener("resize", function (e) {
  screenSize = window.innerWidth;
});

if (parseInt(screenSize) < parseInt(991)) {
  $("header ul > li > a").on("click", function (e) {
    $(this).siblings("ul").slideToggle();
    var rotation = $(this).children("i").data("rotation") || 0;
    rotation = rotation === 0 ? 90 : 0;
    $(this)
      .children("i")
      .css("transform", "rotate(" + rotation + "deg)");
    $(this).children("i").data("rotation", rotation);
    $(this).children("button").children("i").toggleClass("las la-minus");
    $(this).children("button").children("i").toggleClass("las la-plus");
  });
}



//Scroll back to top

(function($) { "use strict";

	$(document).ready(function(){"use strict";
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
	});
	
})(jQuery); 