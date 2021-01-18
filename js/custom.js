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
  horizontalScrolling();

  // click menu
  clickMenu();

  // Close the page content
  pageClose();

  // Show Page Content
  pageContent();
});

// Introduction
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

// Menu horizontal scrolling
function horizontalScrolling() {
  $('.nav-center-menu').hScroll(60);
  $('.scroll-horizontal').hScroll(60);
}

// click menu
function clickMenu() {
  $('[data-show-page]').click(function(e) {
    e.preventDefault();
    console.log('$(this).data()', $(this).data().showPage);
    let pageValue = $(this).data().showPage;
    if (pageValue) {
      $('.cover-container').toggleClass('hide-content');
      $('.page-content').toggleClass('show');
      $('.page-content [data-content="' + pageValue + '"]').addClass('active');
    }
  });
}

// Close the page content
function pageClose() {
  $('[data-hide-page-content]').click(function(e) {
    e.preventDefault();
    $('.cover-container').toggleClass('hide-content');
    $('.page-content').toggleClass('show');
  });
}

// Show Page Content
function pageContent() {
  $('[data-show-content]').click(function(e) {
    e.preventDefault();
    console.log('$(this).data().showContent', $(this).data().showContent);
    let pageValue = $(this).data().showContent;
    if (pageValue) {
      if ($('.page-content section').hasClass('active')) {
        $('.page-content section.active').removeClass('active');
      }
      $('[data-content="' + pageValue + '"]').addClass('active');
    }
  });
}
