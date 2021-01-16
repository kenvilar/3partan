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
  startIntro(5000);

  $('.nav-center-menu').hScroll(60);
});

function startIntro(timer) {
  setTimeout(() => {
    $('.cover-container').addClass('start-animate');
  }, timer);
  setTimeout(function() {
    $('.logo-image-wrapper').addClass('start-animate');
    $('.nav-center-menu').addClass('start-animate');
  }, timer + 500);
}
