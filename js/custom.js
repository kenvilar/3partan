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
  // Introduction
  startIntro(5000);

  // Menu horizontal scrolling
  $('.nav-center-menu').hScroll(60);
  $('.scroll-horizontal').hScroll(60);

  // click menue
  clickMenu();

  // Close the page content
  pageClose();
});

function startIntro(timer) {
  setTimeout(() => {
    $('.cover-container').addClass('start-animate');
  }, timer);
  setTimeout(() => {
    $('.logo-image-wrapper').addClass('start-animate');
    $('.nav-center-menu').addClass('start-animate');
  }, timer + 500);
  setTimeout(() => {
    $('.social-media-icons-wrapper').addClass('start-animate');
    $('.submit-your-music-wrapper').addClass('start-animate');
    $('.blinking-light').addClass('start-animate');
  }, timer + 2000);
}

function clickMenu() {
  $('[data-show-page]').click(function(e) {
    e.preventDefault();
    console.log('$(this).data()', $(this).data().showPage);
    let pageValue = $(this).data().showPage;
    if (pageValue) {
      $('.cover-container').toggleClass('hide-content');
      $('.page-content').toggleClass('show');
    }
  });
}

function pageClose() {
  $('[data-hide-page-content]').click(function(e) {
    e.preventDefault();
    $('.cover-container').toggleClass('hide-content');
    $('.page-content').toggleClass('show');
  });
}
