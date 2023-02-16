$(document).ready(function(){
  $('.slickcarousel1').slick({
  slidesToShow: 5,
	prevArrow:'<span class="prev_arrow"><i class="fas fa-angle-left"</i></span>',
	nextArrow:'<span class="next_arrow"><i class="fas fa-angle-right"</i></span>',

   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
		slidesToScroll: 1,
      }
    },
	{
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
		slidesToScroll: 1,
      }
    },
	{
      breakpoint: 750,
      settings: {
        slidesToShow: 3,
		slidesToScroll: 1,
      }
    },

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
		slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});
