$(document).ready(function () {


  //preloader
  $(window).on("load", function () {

    $('.card').delay(600).fadeOut();
    $('.preloader').addClass('close').delay(3000).fadeOut();
  });

  //navbar
  $('.navbar .navbar-nav li a').click(function () {
    $('.navbar .navbar-collapse').removeClass('show')
  })

  //==============================
  // smooth scroll
  //==============================
  $(".navbar-nav li a[href^='#']").on("click", function (e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000);

  });


  //projects

  $('.project-menu li').click(function () {
    $('.project-menu li').removeClass('active')
    $(this).addClass('active')
  })

  //==============================
  //on-scroll
  //==============================
  $(window).on('scroll', function () {
    var wscroll = $(this).scrollTop();
    //fixed-nav
    wscroll > 1 ? $("#site-header").addClass("fixed") : $("#site-header").removeClass("fixed");

    // go top appear
    wscroll > 700 ? $("#goTop").fadeIn() : $("#goTop").fadeOut();

  });

  //go top
  $("#goTop").click(function () {
    $("body, html").animate({
      scrollTop: 0
    }, 600);
  });




  $('#btn1').hover(function () {
    $(this).removeClass('hmm')
    $("#btn2").addClass('hmm')
    $('#btn2').toggleClass('shrink')

  });

  $('#btn2').hover(function () {
    $(this).removeClass('hmm')
    $("#btn1").addClass('hmm')
    $('#btn1').toggleClass('shrink')
  });
  $(".go-down").click(function () {
    $('html, body').animate({
      scrollTop: $("#About").offset().top
    }, 2000, );
  });


  //mix it up
  var mixer = mixitup('.img-gallery');

  //price slide
  $('#price-slide').owlCarousel({
    items: 3,
    autoplay: false,
    margin: 50,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
});
