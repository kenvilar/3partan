// Use for touch scroll or draggable menus and page contents
import mousecase from 'mousecase';

const menuTouchScroll = mousecase('.nav-center-menu');
menuTouchScroll.init();

const rulesScroll = mousecase('#rules-scroll-horizontal');
rulesScroll.init();

const futureToolsScroll = mousecase('#future-tools-scroll-horizontal');
futureToolsScroll.init();

const worksScroll = mousecase('#how-it-works-scroll-horizontal');
worksScroll.init();

const testimonialsScroll = mousecase('#testimonials-scroll-horizontal');
testimonialsScroll.init();
