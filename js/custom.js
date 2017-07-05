/*=============================================================================
                                    SERVICES
=============================================================================*/
// jQuery for "wow" animations for activating on scrolling to that part of the page
$(function () {
  
  //initiate the WOW plug-in with jQuery
  // animation fire on scroll 
  // when the element has the "wow" class
  // together with an animte.css animation
  new WOW().init();
  
});

/*=============================================================================
                                    OUR WORK
=============================================================================*/


// magnificPopupcode is not working for me.

$(function () {
  
  $("#work").magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery:{
      enabled:true
    }
  });
  
});


/*=============================================================================
                                    OUR TEAM CAROUSEL
=============================================================================*/

// create carousel-effect with the OwlCarousel jQuery library
$(function(){
  
  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 600,
    loop: true,
//    autoplayHoverPause: true,
  });
  
});


/*=============================================================================
                                    TESTIMONIALS
=============================================================================*/

// create carousel-effect with the OwlCarousel jQuery library
$(function(){
  
  $("#customers-testimonials").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 600,
    loop: true,
//    autoplayHoverPause: true,
  });
  
});





