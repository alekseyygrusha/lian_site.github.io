

  $(document).ready(function() {

    $('.intro_slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1500
      }
    );

    $('.portfolio_works').masonry({
      // options
      itemSelector: '.portfolio_works_item',
      columnWidth: '.portfolio_works_item',
      gutter: 30,
      stagger: 30,
      fitWidth: true,
      percentPosition: true
    });

    $("#hamburger_button").click( (even) => {
      $('.mobile_menu_wrap').toggleClass('menu_open');
      $('.hamburger_button').toggleClass('active_button');
    })

    $('.project_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav',
    });

    $('.slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.project_slider',
      
      focusOnSelect: true,
      
      
    });
    
  });
  