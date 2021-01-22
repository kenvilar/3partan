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
    reset: true,
    duration: 1000,
    scale: 1,
    origin: 'bottom',
    distance: '100px',
    viewFactor: 0.2,
    container: '#rules-scroll-horizontal',
  });
ScrollReveal().reveal('.item .content-text',
  {
    reset: true,
    duration: 1000,
    scale: 1,
    origin: 'right',
    distance: '100px',
    viewFactor: 0.2,
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
    reset: true,
    duration: 1000,
    scale: 0.8,
    origin: 'top',
    distance: '0',
    viewFactor: 0.2,
    container: '#future-tools-scroll-horizontal',
  });
ScrollReveal().reveal('.item .title',
  {
    reset: true,
    duration: 1000,
    scale: 1,
    origin: 'bottom',
    distance: '100px',
    viewFactor: 0.2,
    container: '#future-tools-scroll-horizontal',
  });
ScrollReveal().reveal('.item .content-text',
  {
    reset: true,
    duration: 1000,
    scale: 1,
    origin: 'left',
    distance: '100px',
    viewFactor: 0.2,
    container: '#future-tools-scroll-horizontal',
  });

// How It Works
ScrollReveal().reveal('.item img',
  {
    reset: true,
    duration: 1000,
    scale: 0.8,
    origin: 'top',
    distance: '0',
    viewFactor: 0.2,
    container: '#how-it-works-scroll-horizontal',
  });
ScrollReveal().reveal('.item .title',
  {
    reset: true,
    duration: 1000,
    scale: 1,
    origin: 'bottom',
    distance: '100px',
    viewFactor: 0.2,
    container: '#how-it-works-scroll-horizontal',
  });
ScrollReveal().reveal('.item .content-text',
  {
    reset: true,
    duration: 1000,
    scale: 1,
    origin: 'left',
    distance: '100px',
    viewFactor: 0.2,
    container: '#how-it-works-scroll-horizontal',
  });

// Testimonials
ScrollReveal().reveal('.item .testimonials-image-wrapper',
  {
    reset: true,
    duration: 1000,
    scale: 1,
    origin: 'bottom',
    distance: '100px',
    viewFactor: 0.2,
    container: '#testimonials-scroll-horizontal',
  });
ScrollReveal().reveal('.item .content-text',
  {
    reset: true,
    duration: 1000,
    scale: 1,
    origin: 'right',
    distance: '100px',
    viewFactor: 0.2,
    container: '#testimonials-scroll-horizontal',
  });
