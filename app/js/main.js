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

let burgerBtn = document.querySelector('.burger');
let menuPopup = document.querySelector('.header__popup');
let closePopup = document.querySelector('.popup__close')

burgerBtn.addEventListener("click", function() {
  menuPopup.classList.add("popup-show");
});

closePopup.addEventListener("click", function () {
  menuPopup.classList.remove("popup-show");
});


const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})
