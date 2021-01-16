jQuery(function($) {
  $.fn.hScroll = function(amount) {
    amount = amount || 120;
    $(this).bind('DOMMouseScroll mousewheel', function(event) {
      var oEvent = event.originalEvent,
        direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta,
        position = $(this).scrollLeft();
      position += direction > 0 ? -amount : amount;
      $(this).scrollLeft(position);
      event.preventDefault();
    });
  };
});

$(document).ready(function() {
  //Animate loader off screen / Logo Display when website load
  /*$(window).on('load', function() {
    $('.preloader-image').fadeOut('fast');
  });*/
  startIntro(5000);

  $('.nav-center-menu').hScroll(60); // You can pass (optionally) scrolling amount
});

function startIntro(timer) {
  setTimeout(() => {
    $('.cover-container').addClass('start-animate');
  }, timer);
  setTimeout(function() {
    $('.logo-image-wrapper').addClass('start-animate');
    $('.nav-center-menu').addClass('start-animate');
  }, timer + 500);
  /*setTimeout(function() {
    $('.hero-section').addClass('start-animate');
  }, timer);
  setTimeout(function() {
    $('.logo-image-wrapper').addClass('start-delay');
  }, timer + 1000);*/
}
