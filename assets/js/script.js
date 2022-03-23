$(".education").slick({
    dots: true,
    infinite: false,
    speed: 300,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  
  
  });
  
  
  
  $(function(){
    $('.footer-row h4').click(function(){
  $(this).parents('.widget2').find('.footer-ul').slideToggle();
  $(this).toggleClass('active')

});
});
  
  
  
  
  
  $(".specialties").slick({
    dots: true,
    infinite: false,
    speed: 300,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  
  
  mobileOnlySlider(".folio", false, false, true, 768);
  
  function mobileOnlySlider($slidername, $dots, $arrows, $autoplay, $breakpoint) {
    var slider = $($slidername);
    var settings = {
      mobileFirst: true,
      dots: $dots,
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-long-arrow-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-long-arrow-right' aria-hidden='true'></i></button>",
      autoplay: $autoplay,
      responsive: [
        {
          breakpoint: $breakpoint,
          settings: "unslick"
        }
        
      ]
    };
  
    slider.slick(settings);
  
    $(window).on("resize", function () {
      if ($(window).width() > $breakpoint) {
        return;
      }
      if (!slider.hasClass("slick-initialized")) {
        return slider.slick(settings);
      }
    });
  } // Mobile Only Slider
  
  
  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});