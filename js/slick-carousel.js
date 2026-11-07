import $ from 'jquery';

import 'slick-carousel';

$('.social-media-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
  adaptiveHeight: true,
  arrows: false,
  variableWidth: true,
});
