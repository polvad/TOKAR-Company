const swiper = new Swiper('.new__container', {

  loop: true,
  
  navigation: {
    nextEl: '.new__slider-arrow--next',
    prevEl: '.new__slider-arrow--prev',
  },

  // pagination: {
  //   el: '.new__slider-fraction',
  //   type:'fraction',
  // },
  spaceBetween: 30,
 
  breakpoints: {
    320: {
      slidesPerView: 1,
      pagination: {
        el: '.new__navigation-bottom',
        type:'fraction',
      },
    },
    650: {
      slidesPerView: 2,
      navigation: {
        nextEl: '.new__slider-arrow--nextt',
        prevEl: '.new__slider-arrow--prevv',
      },
      pagination: {
        el: '.new__navigation-top',
        type:'fraction',
      },
    },
    992: {
      slidesPerView: 3,
      navigation: {
        nextEl: '.new__slider-arrow--nextt',
        prevEl: '.new__slider-arrow--prevv',
      },
      pagination: {
        el: '.new__navigation-top',
        type:'fraction',
      },
    },
  }

});

