$('.fabricator-slider_top').slick({
  arrows: false,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToScroll: 1,
  asNavFor: '.fabricator-slider_bottom'
});
$('.fabricator-slider_bottom').slick({
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<div class="slider-arrow slider-arrow_left"></div>',
  nextArrow: '<div class="slider-arrow slider-arrow_right"></div>',
  asNavFor: '.fabricator-slider_top',
});

$('.document-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  prevArrow: '<div class="slider-arrow__document slider-arrow__document-left"></div>',
  nextArrow: '<div class="slider-arrow__document slider-arrow__document-right"></div>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$(document).ready(function($) {
	$('.header-btn').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		

	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});	
});