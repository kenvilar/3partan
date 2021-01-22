import '../js/vendor/modernizr-3.11.2.min';
import '../js/plugins';
import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import '../css/sass/main.scss';

import '../js/custom';
import '../js/slick-carousel';
import '../js/touchscroll';

import ScrollReveal from 'scrollreveal';

ScrollReveal().reveal('.item .item-number',
  {
    duration: 1000,
    scale: 1,
    origin: 'bottom',
    distance: '100px',
    viewFactor: 0.2,
    reset: true,
    container: '#rules-scroll-horizontal',
  });
ScrollReveal().reveal('.item .content-text',
  {
    duration: 1000,
    scale: 1,
    origin: 'right',
    distance: '100px',
    viewFactor: 0.2,
    reset: true,
    container: '#rules-scroll-horizontal',
  });
ScrollReveal().reveal('.item:last-child .content-text',
  {
    mobile: false,
    container: '#rules-scroll-horizontal',
  });

// Future Tools
ScrollReveal().reveal('.item img',
  {
    duration: 1000,
    scale: 0.8,
    origin: 'top',
    distance: '0',
    viewFactor: 0.2,
    reset: true,
    container: '#future-tools-scroll-horizontal',
  });
ScrollReveal().reveal('.item .title',
  {
    duration: 1000,
    scale: 1,
    origin: 'bottom',
    distance: '100px',
    viewFactor: 0.2,
    reset: true,
    container: '#future-tools-scroll-horizontal',
  });
ScrollReveal().reveal('.item .content-text',
  {
    duration: 1000,
    scale: 1,
    origin: 'left',
    distance: '100px',
    viewFactor: 0.2,
    reset: true,
    container: '#future-tools-scroll-horizontal',
  });
