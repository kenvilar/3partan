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

  // esc key
  escapeKey();

  // click home menu
  clickHomeMenu(5000);
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
    $('.scrolling-left-right-container').addClass('start-animate');
  }, timer + 2000);
}

// Menu horizontal scrolling
function horizontalScrolling() {
  $('.nav-center-menu').hScroll(60);
  $('.scroll-horizontal').hScroll(60);
}

// click menu
function clickMenu() {
  let nav, isMove = false, isScroll = false;

  nav = $('.nav-center-menu');
  nav.on('mousedown', () => isMove = false);
  nav.on('mouseup', () => isScroll = isMove);
  nav.on('mousemove', () => isMove = true);

  $('[data-show-page]').click(function(e) {
    e.preventDefault();
    let pageValue = $(this).data().showPage;

    // remove done-with-tv className
    $('.cover-container').removeClass('done-with-zoom-tv');

    if (pageValue && !isScroll) {
      if (pageValue === 'future-tools' || pageValue === 'how-it-works' ||
        pageValue === 'submit-your-music') {
        $('.cover-container').toggleClass('hide-content');
        $('.cover-container').toggleClass('to-tv');
      } else {
        $('.cover-container').toggleClass('hide-content');
      }

      if (pageValue === 'future-tools') {
        // remove the spartan logo
        $('.logo-image-wrapper').find($('.is_active')).removeClass('is_active');
        // show the future-tools logo
        $('.logo-image-wrapper').find($('.future-tools')).addClass('is_active');
      } else if (pageValue === 'how-it-works') {
        // remove the spartan logo
        $('.logo-image-wrapper').find($('.is_active')).removeClass('is_active');
        // show te how-it-works logo
        $('.logo-image-wrapper').find($('.how-it-works')).addClass('is_active');
      }

      $('.page-content').toggleClass('show');
      $('.page-content [data-content="' + pageValue + '"]').addClass('active');
    }
  });
}

// Close the page content
function pageClose() {
  $('[data-hide-page-content]').click(function(e) {
    e.preventDefault();
    let pageValue = $(this).data().hidePageContent;
    console.log('pageValue', pageValue);
    $('.cover-container').toggleClass('hide-content');

    if ($('.cover-container').hasClass('to-tv')) {
      $('.cover-container').toggleClass('to-tv');
      $('.cover-container').addClass('done-with-zoom-tv');
    }

    $('.page-content').toggleClass('show');

    // reset the logo
    $('.logo-image-wrapper').find($('.is_active')).removeClass('is_active');
    $('.logo-image-wrapper').find($('.spartan')).addClass('is_active');

    // hide the section page content
    if ($('.page-content section').hasClass('active')) {
      $('.page-content section.active').removeClass('active');
    }

    if (pageValue === 'home') {
      // removeClass animation
      $('.cover-container').removeClass('start-animate');
      $('.logo-image-wrapper').removeClass('start-animate');
      $('.nav-center-menu').removeClass('start-animate');
      $('.social-media-icons-wrapper').removeClass('start-animate');
      $('.submit-your-music-wrapper').removeClass('start-animate');
      $('.blinking-light').removeClass('start-animate');
      $('.scrolling-left-right-container').removeClass('start-animate');

      // and then put back the animation
      startIntro(5000);
    }
  });
}

// Show Page Content
function pageContent() {
  $('[data-show-content]').click(function(e) {
    e.preventDefault();
    let pageValue = $(this).data().showContent;
    if (pageValue) {
      if ($('.page-content section').hasClass('active')) {
        $('.page-content section.active').removeClass('active');
      }
      $('[data-content="' + pageValue + '"]').addClass('active');
    }
  });
}

// esc key
function escapeKey() {
  $(document).keyup(function(e) {
    if (e.key === 'Escape') {
      $('.cover-container').toggleClass('hide-content');
      $('.page-content').toggleClass('show');

      // hide the section page content
      if ($('.page-content section').hasClass('active')) {
        $('.page-content section.active').removeClass('active');
      }
    }
  });
}

// click home menu
function clickHomeMenu(timer) {
  $('[data-show-page]').click(function(e) {
    e.preventDefault();
    let pageValue = $(this).data().showPage;
    if (pageValue === '') {
      // removeClass animation
      $('.cover-container').removeClass('start-animate');
      $('.logo-image-wrapper').removeClass('start-animate');
      $('.nav-center-menu').removeClass('start-animate');
      $('.social-media-icons-wrapper').removeClass('start-animate');
      $('.submit-your-music-wrapper').removeClass('start-animate');
      $('.blinking-light').removeClass('start-animate');
      $('.scrolling-left-right-container').removeClass('start-animate');

      // and then put back the animation
      startIntro(timer);
    }
  });
}
