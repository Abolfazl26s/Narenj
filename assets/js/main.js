jQuery(
  (function ($) {
    'use strict';

    // Header Sticky
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 120) {
        $('.navbar-area').addClass('is-sticky');
      } else {
        $('.navbar-area').removeClass('is-sticky');
      }
    });

    // Mean Menu
    jQuery('.mean-menu').meanmenu({
      meanScreenWidth: '1199',
    });

    // Search Popup JS
    $('.close-btn').on('click', function () {
      $('.search-overlay').fadeOut();
      $('.search-btn').show();
      $('.close-btn').removeClass('active');
    });
    $('.search-btn').on('click', function () {
      $(this).hide();
      $('.search-overlay').fadeIn();
      $('.close-btn').addClass('active');
    });

    // Others Option For Responsive JS
    $('.others-option-for-responsive .dot-menu').on('click', function () {
      $('.others-option-for-responsive .container .container').toggleClass(
        'active'
      );
    });

    // Tabs
    (function ($) {
      $('.tab ul.tabs')
        .addClass('active')
        .find('> li:eq(0)')
        .addClass('current');
      $('.tab ul.tabs li a').on('click', function (g) {
        var tab = $(this).closest('.tab'),
          index = $(this).closest('li').index();
        tab.find('ul.tabs > li').removeClass('current');
        $(this).closest('li').addClass('current');
        tab
          .find('.tab_content')
          .find('div.tabs_item')
          .not('div.tabs_item:eq(' + index + ')')
          .slideUp();
        tab
          .find('.tab_content')
          .find('div.tabs_item:eq(' + index + ')')
          .slideDown();
        g.preventDefault();
      });
    })(jQuery);

    // Odometer JS
    $('.odometer').appear(function (e) {
      var odo = $('.odometer');
      odo.each(function () {
        var countNumber = $(this).attr('data-count');
        $(this).html(countNumber);
      });
    });

    // Home Slides
    $('.home-slides').owlCarousel({
      loop: true,
      nav: false,
      rtl: true,
      dots: true,
      autoplayHoverPause: true,
      items: 1,
      smartSpeed: 100,
      autoplay: true,
      navText: [
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-next'></i>",
      ],
    });

    $('.home-slides').on('translate.owl.carousel', function () {
      $('.main-slider-content h1')
        .removeClass('animated fadeInUp')
        .css('opacity', '0');
      $('.main-slider-content p')
        .removeClass('animated fadeInUp')
        .css('opacity', '0');
      $('.main-slider-content a')
        .removeClass('animated fadeInUp')
        .css('opacity', '0');
    });
    $('.home-slides').on('translated.owl.carousel', function () {
      $('.main-slider-content h1')
        .addClass('animated fadeInUp')
        .css('opacity', '1');
      $('.main-slider-content p')
        .addClass('animated fadeInUp')
        .css('opacity', '1');
      $('.main-slider-content a')
        .addClass('animated fadeInUp')
        .css('opacity', '1');
    });

    // Testimonial Slider
    $('.testimonial-slider').owlCarousel({
      loop: true,
      nav: true,
      items: 1,
      rtl: true,
      dots: true,
      smartSpeed: 500,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      margin: 0,
      autoplayHoverPause: true,
      autoplay: true,
      navText: [
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-next'></i>",
      ],
    });

    // Team Slider
    $('.team-slider').owlCarousel({
      loop: true,
      nav: false,
      rtl: true,
      dots: false,
      smartSpeed: 200,
      margin: 30,
      autoplayHoverPause: true,
      autoplay: false,
      navText: [
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-next'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });

    // Portfolio Slider
    $('.portfolio-slider').owlCarousel({
      loop: true,
      nav: false,
      rtl: true,
      dots: true,
      smartSpeed: 200,
      margin: 30,
      autoplayHoverPause: true,
      autoplay: true,
      navText: [
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-next'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });

    // Client Slider
    $('.client-slider').owlCarousel({
      loop: true,
      nav: true,
      rtl: true,
      items: 1,
      dots: false,
      smartSpeed: 500,
      margin: 0,
      autoplayHoverPause: true,
      autoplay: true,
      navText: [
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-next'></i>",
      ],
    });

    // Subscribe form
    $('.newsletter-form')
      .validator()
      .on('submit', function (event) {
        if (event.isDefaultPrevented()) {
          // handle the invalid form...
          formErrorSub();
          submitMSGSub(false, 'Please enter your email correctly.');
        } else {
          // everything looks good!
          event.preventDefault();
        }
      });

    function callbackFunction(resp) {
      if (resp.result === 'success') {
        formSuccessSub();
      } else {
        formErrorSub();
      }
    }

    function formSuccessSub() {
      $('.newsletter-form')[0].reset();
      submitMSGSub(true, 'Thank you for subscribing!');
      setTimeout(function () {
        $('#validator-newsletter').addClass('hide');
      }, 4000);
    }

    function formErrorSub() {
      $('.newsletter-form').addClass('animated shake');
      setTimeout(function () {
        $('.newsletter-form').removeClass('animated shake');
      }, 1000);
    }

    function submitMSGSub(valid, msg) {
      if (valid) {
        var msgClasses = 'validation-success';
      } else {
        var msgClasses = 'validation-danger';
      }
      $('#validator-newsletter').removeClass().addClass(msgClasses).text(msg);
    }
    // AJAX MailChimp
    $('.newsletter-form').ajaxChimp({
      url: 'https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9', // Your url MailChimp
      callback: callbackFunction,
    });

    // Nice Select JS
    $('select').niceSelect();

    // Popup Video
    $('.popup-youtube').magnificPopup({
      disableOn: 320,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });

    // FAQ Accordion
    $(function () {
      $('.accordion')
        .find('.accordion-title')
        .on('click', function () {
          // Adds Active Class
          $(this).toggleClass('active');
          // Expand or Collapse This Panel
          $(this).next().slideToggle('fast');
          // Hide The Other Panels
          $('.accordion-content').not($(this).next()).slideUp('fast');
          // Removes Active Class From Other Titles
          $('.accordion-title').not($(this)).removeClass('active');
        });
    });

    // Input Plus & Minus Number JS
    $('.input-counter').each(function () {
      var spinner = jQuery(this),
        input = spinner.find('input[type="text"]'),
        btnUp = spinner.find('.plus-btn'),
        btnDown = spinner.find('.minus-btn'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.on('click', function () {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find('input').val(newVal);
        spinner.find('input').trigger('change');
      });
      btnDown.on('click', function () {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find('input').val(newVal);
        spinner.find('input').trigger('change');
      });
    });

    // Partner Slider
    $('.partner-slider').owlCarousel({
      loop: true,
      nav: false,
      rtl: true,
      dots: false,
      smartSpeed: 500,
      margin: 30,
      autoplayHoverPause: true,
      autoplay: true,
      responsive: {
        0: {
          items: 2,
        },
        576: {
          items: 2,
        },
        768: {
          items: 3,
        },
        1024: {
          items: 4,
        },
        1200: {
          items: 5,
        },
      },
    });

    // Go to Top
    $(function () {
      // Scroll Event
      $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 600) $('.go-top').addClass('active');
        if (scrolled < 600) $('.go-top').removeClass('active');
      });
      // Click Event
      $('.go-top').on('click', function () {
        $('html, body').animate(
          {
            scrollTop: '0',
          },
          500
        );
      });
    });

   

    // Preloader
    jQuery(window).on('load', function () {
      jQuery('.preloader').fadeOut(500);
    });
  })(jQuery)
);
