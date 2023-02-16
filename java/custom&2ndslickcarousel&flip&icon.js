$(document).ready(function(){
  $('.slickcarousel_box').slick({
  slidesToShow: 4,
  autoplay:true,
	prevArrow:'<span class="prev_arrow"><i class="fas fa-angle-left"</i></span>',
	nextArrow:'<span class="next_arrow"><i class="fas fa-angle-right"</i></span>',

   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
		slidesToScroll: 1,
      }
    },
	{
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
		slidesToScroll: 1,
      }
    },
	{
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
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