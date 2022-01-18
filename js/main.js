// "use strict";

// var sampelPembeli = [{
//   id: 1,
//   name: "Anton",
//   kota: "Bandung",
//   pesan: "Tourmalion Sparta",
//   time: -3,
//   icon: "https://cdn1.iconfinder.com/data/icons/main-ui-elements-with-colour-bg/512/male_avatar-512.png"
// }, {
//   id: 2,
//   name: "Budi",
//   kota: "Jakarta",
//   pesan: "Tourmalion Medea",
//   time: -34,
//   icon: "https://cdn1.iconfinder.com/data/icons/main-ui-elements-with-colour-bg/512/male_avatar-512.png"
// }, {
//   id: 3,
//   name: "Dono",
//   kota: "Surabaya",
//   pesan: "Tourmalion Medea",
//   time: -75,
//   icon: "https://cdn1.iconfinder.com/data/icons/main-ui-elements-with-colour-bg/512/male_avatar-512.png"
// }, {
//   id: 3,
//   name: "Dono",
//   kota: "Medan",
//   pesan: "Tourmalion Sparta",
//   time: -7500,
//   icon: "https://cdn1.iconfinder.com/data/icons/main-ui-elements-with-colour-bg/512/male_avatar-512.png"
// }];

// function closePopup() {
//   event.target.parentNode.classList.remove("active");
// }

// function _initSuscribeModal() {
//   MicroModal.init({
//     disableScroll: true // [5]

//   });
//   setTimeout(function () {
//     MicroModal.show('modal-1');
//   }, 2000);
// }

// window.addEventListener("load", _initSuscribeModal);

// function _initFakeSales(dummyData) {
//   /* 
//        _      _      _
//      >(.)__ <(.)__ =(.)__
//       (___/  (___/  (___/  Madey
//   */
//   var $$$ = function $$$(x) {
//     return document.querySelector(x);
//   };

//   var _iteratorNormalCompletion = true;
//   var _didIteratorError = false;
//   var _iteratorError = undefined;

//   try {
//     for (var _iterator = dummyData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
//       var x = _step.value;
//       var card = document.createElement("span");
//       card.innerHTML = "\n<div class=\"popupCards\">\n<span onclick=\"closePopup()\" class=\"popupCards-close\">&times;</span>\n<div class=\"w-100 wrapper d-flex align-items-center\">\n<div class=\"px-3 picture\">\n<img src=".concat(x.icon, " alt=\"tourmalion\" style=\"width:52px;\"/>\n</div>\n<div class=\"content\">\n<small><strong>").concat(x.name, "</strong> di <strong>").concat(x.kota, "</strong>  membeli</small>\n<h5>").concat(x.pesan, "</h5>\n<small>").concat(moment.duration(x.time, "minute").humanize(true), "</small>\n</div>\n</div>\n</div>");
//       $$$("#dummypopup").appendChild(card);
//     }
//   } catch (err) {
//     _didIteratorError = true;
//     _iteratorError = err;
//   } finally {
//     try {
//       if (!_iteratorNormalCompletion && _iterator.return != null) {
//         _iterator.return();
//       }
//     } finally {
//       if (_didIteratorError) {
//         throw _iteratorError;
//       }
//     }
//   }

//   var cardPopupIndex = -1;
//   var cardArray = document.querySelectorAll(".popupCards");

//   function activatingPopup() {
//     // iterating popupindex
//     if (cardPopupIndex == cardArray.length - 1) {
//       cardPopupIndex = -1;
//     }

//     cardPopupIndex++;
//     console.log(cardPopupIndex);

//     if (cardPopupIndex == 0) {
//       cardArray[cardArray.length - 1].classList.remove("active");
//       setTimeout(function () {
//         cardArray[cardPopupIndex].classList.add("active");
//       }, 2000);
//     } else {
//       cardArray[cardPopupIndex - 1].classList.remove("active");
//       setTimeout(function () {
//         cardArray[cardPopupIndex].classList.add("active");
//       }, 2000);
//     }
//   }

//   window.setInterval(function () {
//     activatingPopup();
//   }, 8000);
// }

// window.addEventListener("load", function () {
//   _initFakeSales(sampelPembeli);
// });

// function _initSwiperSlider() {
//   var swiper = new Swiper('.hero-carousel', {
//     navigation: {
//       nextEl: '.next a',
//       prevEl: '.prev a'
//     },
//     loop: true,
//     effect: 'fade',
//     speed: 2000,
//     autoplay: {
//       delay: 7000
//     },
//     centeredSlides: true,
//     slidesPerGroup: 1
//   });
//   var swiper2 = new Swiper('.testimony-swiper', {
//     loop: true,
//     autoplay: {
//       delay: 3000
//     },
//     navigation: {
//       nextEl: '.testi-next',
//       prevEl: '.testi-prev'
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       dynamicBullets: true
//     }
//   });
//   var swiper3 = new Swiper('.aboutproduct-carousel', {
//     loop: true,
//     autoplay: {
//       delay: 2500
//     },
//     speed: 1000,
//     navigation: {}
//   });
// }

// window.addEventListener("load", _initSwiperSlider); // SMOOTH SCROLL

// $(document).ready(function () {
//   $('a[href^="#"]').on('click', function (e) {
//     e.preventDefault();
//     var target = this.hash,
//         $target = $(target);
//     $('html, body').stop().animate({
//       'scrollTop': $target.offset().top
//     }, 900, 'swing', function () {
//       window.location.hash = target;
//     });
//   });
// }); // Refresh page ke atas

// $(window).on('beforeunload', function () {
//   $(window).scrollTop(0);
// });
// window.addEventListener("scroll", function () {
//   var stickynav = document.querySelector(".sticky-nav");
//   var waFloat = document.querySelector("#wa-float");

//   if (window.pageYOffset >= 400) {
//     stickynav.classList.add('active');
//     waFloat.classList.add('active');
//   } else {
//     stickynav.classList.remove('active');
//     waFloat.classList.remove('active');
//   }
// });

// var ssOffCanvas = function ssOffCanvas() {
//   var menuTrigger = $('.header-menu-trigger'),
//       nav = $('.drawer-container'),
//       closeButton = nav.find('.close-button'),
//       siteBody = $('body'),
//       mainContents = $('section, footer'); // open-close menu by clicking on the menu icon

//   menuTrigger.on('click', function (e) {
//     e.preventDefault();
//     menuTrigger.toggleClass('is-clicked');
//     siteBody.toggleClass('menu-is-open');
//   }); // close menu by clicking the close button

//   closeButton.on('click', function (e) {
//     e.preventDefault();
//     menuTrigger.trigger('click');
//   }); // close menu clicking outside the menu itself

//   siteBody.on('click', function (e) {
//     if (!$(e.target).is('.header-menu-trigger, .header-menu-trigger span')) {
//       menuTrigger.removeClass('is-clicked');
//       siteBody.removeClass('menu-is-open');
//     }
//   });
// };

// ssOffCanvas();

// var clPreloader = function clPreloader() {
//   $("html").addClass('ss-preload');
//   $(window).on('load', function () {
//     //force page scroll position to top at page refresh
//     // $('html, body').animate({ scrollTop: 0 }, 'normal');
//     // will first fade out the loading animation 
//     $("#loader").fadeOut("slow", function () {
//       // will fade out the whole DIV that covers the website.
//       $("#preloader").delay(100).fadeOut("slow"); //    $("#preloader").delay(300).fadeOut(function() {
//       //     if (!once) {
//       //         tr$.hide();
//       //         once = true;
//       //     });
//     });
//   });
// };

// clPreloader();

"use strict";

var sampelPembeli = [{
  id: 1,
  name: "Anton",
  kota: "Bandung",
  pesan: "Tourmalion Sparta",
  time: -3,
  icon: "https://cdn1.iconfinder.com/data/icons/main-ui-elements-with-colour-bg/512/male_avatar-512.png"
}, {
  id: 2,
  name: "Budi",
  kota: "Jakarta",
  pesan: "Tourmalion Medea",
  time: -34,
  icon: "https://cdn1.iconfinder.com/data/icons/main-ui-elements-with-colour-bg/512/male_avatar-512.png"
}, {
  id: 3,
  name: "Dono",
  kota: "Surabaya",
  pesan: "Tourmalion Medea",
  time: -75,
  icon: "https://cdn1.iconfinder.com/data/icons/main-ui-elements-with-colour-bg/512/male_avatar-512.png"
}, {
  id: 3,
  name: "Dono",
  kota: "Medan",
  pesan: "Tourmalion Sparta",
  time: -7500,
  icon: "https://cdn1.iconfinder.com/data/icons/main-ui-elements-with-colour-bg/512/male_avatar-512.png"
}];

function closePopup() {
  event.target.parentNode.classList.remove("active");
}

function _initSuscribeModal() {
  MicroModal.init({
    disableScroll: true // [5]

  });
  setTimeout(function () {
    MicroModal.show('modal-1');
  }, 2000);
}

window.addEventListener("load", _initSuscribeModal);

function _initFakeSales(dummyData) {
  /* 
       _      _      _
     >(.)__ <(.)__ =(.)__
      (___/  (___/  (___/  Madey
  */
  var $$$ = function $$$(x) {
    return document.querySelector(x);
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = dummyData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var x = _step.value;
      var card = document.createElement("span");
      card.innerHTML = "\n<div class=\"popupCards\">\n<span onclick=\"closePopup()\" class=\"popupCards-close\">&times;</span>\n<div class=\"w-100 wrapper d-flex align-items-center\">\n<div class=\"px-3 picture\">\n<img src=".concat(x.icon, " alt=\"tourmalion\" style=\"width:52px;\"/>\n</div>\n<div class=\"content\">\n<small><strong>").concat(x.name, "</strong> di <strong>").concat(x.kota, "</strong>  membeli</small>\n<h5>").concat(x.pesan, "</h5>\n<small>").concat(moment.duration(x.time, "minute").humanize(true), "</small>\n</div>\n</div>\n</div>");
      $$$("#dummypopup").appendChild(card);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var cardPopupIndex = -1;
  var cardArray = document.querySelectorAll(".popupCards");

  function activatingPopup() {
    // iterating popupindex
    if (cardPopupIndex == cardArray.length - 1) {
      cardPopupIndex = -1;
    }

    cardPopupIndex++;
    console.log(cardPopupIndex);

    if (cardPopupIndex == 0) {
      cardArray[cardArray.length - 1].classList.remove("active");
      setTimeout(function () {
        cardArray[cardPopupIndex].classList.add("active");
      }, 2000);
    } else {
      cardArray[cardPopupIndex - 1].classList.remove("active");
      setTimeout(function () {
        cardArray[cardPopupIndex].classList.add("active");
      }, 2000);
    }
  }

  window.setInterval(function () {
    activatingPopup();
  }, 8000);
}

window.addEventListener("load", function () {
  _initFakeSales(sampelPembeli);
});

function _initSwiperSlider() {
  var swiper = new Swiper('.hero-carousel', {
    navigation: {
      nextEl: '.next a',
      prevEl: '.prev a'
    },
    loop: true,
    effect: 'fade',
    speed: 2000,
    autoplay: {
      delay: 7000
    },
    centeredSlides: true,
    slidesPerGroup: 1
  });
  var swiper2 = new Swiper('.testimony-swiper', {
    loop: true,
    autoplay: {
      delay: 3000
    },
    navigation: {
      nextEl: '.testi-next',
      prevEl: '.testi-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true
    }
  });
  var swiper3 = new Swiper('.aboutproduct-carousel', {
    loop: true,
    autoplay: {
      delay: 2500
    },
    speed: 1000,
    navigation: {}
  });
  var swiper4 = new Swiper('.vidplay-carousel', {
    navigation: {
      nextEl: '.next a',
      prevEl: '.prev a'
    },
    loop: true,
    effect: 'fade',
    speed: 2000,
    autoplay: {
      delay: 7000
    },
    centeredSlides: true,
    slidesPerGroup: 1
  });
}

window.addEventListener("load", _initSwiperSlider); // SMOOTH SCROLL

$(document).ready(function () {
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var target = this.hash,
        $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
      window.location.hash = target;
    });
  });
}); // Refresh page ke atas

$(window).on('beforeunload', function () {
  $(window).scrollTop(0);
});
window.addEventListener("scroll", function () {
  var stickynav = document.querySelector(".sticky-nav");
  var waFloat = document.querySelector("#wa-float");

  if (window.pageYOffset >= 400) {
    stickynav.classList.add('active');
    waFloat.classList.add('active');
  } else {
    stickynav.classList.remove('active');
    waFloat.classList.remove('active');
  }
});

var ssOffCanvas = function ssOffCanvas() {
  var menuTrigger = $('.header-menu-trigger'),
      nav = $('.drawer-container'),
      closeButton = nav.find('.close-button'),
      siteBody = $('body'),
      mainContents = $('section, footer'); // open-close menu by clicking on the menu icon

  menuTrigger.on('click', function (e) {
    e.preventDefault();
    menuTrigger.toggleClass('is-clicked');
    siteBody.toggleClass('menu-is-open');
  }); // close menu by clicking the close button

  closeButton.on('click', function (e) {
    e.preventDefault();
    menuTrigger.trigger('click');
  }); // close menu clicking outside the menu itself

  siteBody.on('click', function (e) {
    if (!$(e.target).is('.header-menu-trigger, .header-menu-trigger span')) {
      menuTrigger.removeClass('is-clicked');
      siteBody.removeClass('menu-is-open');
    }
  });
};

ssOffCanvas();

var clPreloader = function clPreloader() {
  $("html").addClass('ss-preload');
  $(window).on('load', function () {
    //force page scroll position to top at page refresh
    // $('html, body').animate({ scrollTop: 0 }, 'normal');
    // will first fade out the loading animation 
    $("#loader").fadeOut("slow", function () {
      // will fade out the whole DIV that covers the website.
      $("#preloader").delay(100).fadeOut("slow"); //    $("#preloader").delay(300).fadeOut(function() {
      //     if (!once) {
      //         tr$.hide();
      //         once = true;
      //     });
    });
  });
};

clPreloader();