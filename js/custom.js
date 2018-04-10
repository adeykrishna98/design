$(function(){
    
    var images = [];
    function preload() {
        for (var i = 0; i < arguments.length; i++) {
            images[i] = new Image();
            images[i].src = preload.arguments[i];
            // console.log(images[i].src)
        }
    }

    //-- usage --//
    preload(
        "imgs/11.png",
        "imgs/22.png",
        "imgs/33.png",
        "imgs/casestudy_bg.png",
        "imgs/culture_bg.png",
        "imgs/home_bg.png",
        "imgs/start_project.png",
        "imgs/culture_bg.png",
        "imgs/home_bg.png"
    )
    // $(".section.fp-section").hasClass('active',function(){
    //     console.log('aa');
    // });



    // $('section').hasClass('active',function(){
    //     console.log('aaaaa');
    // });
    // $(window).on('resize scroll', function() {
    //     console.log('aaa');
    //     });'

       /**
 * @function removeClass
 * @description remove class from Dom element/s
 * @param {Object} elem - Dom element
 * @param {String} className - class name to remove
 *
 **/
function removeClass(elem, className) {
    let l = elem.length;

    if (l == undefined) {
        _removeClass(elem, className);
    } else {
        let i = l - 1;

        while (i >= 0) {
            _removeClass(elem[i], className);
            i--;
        }
    }
}

/**
 * @function _removeClass
 * @description internal method to remove class from Dom element
 * @param {Object} elem - Dom element
 * @param {String} newClass - class name to remove
 *
 **/
function _removeClass(elem, newClass) {
    if (elem.classList) {
        elem.classList.remove(newClass);
    } else {
        let exp = '(^|\\b)' + newClass.split(' ').join('|') + '(\\b|$)';
        elem.className = elem.className.replace(new RegExp(exp, 'gi'), ' ');
    }
}

/**
 * @function addClass
 * @description add class to Dom element
 * @param {Object} elem - Dom element
 * @param {String} className - class name to add
 *
 **/
function addClass(elem, className) {
   let l = elem.length;

   if (l == undefined) {
      _addClass(elem, className);
   } else {
      let i = l - 1;

      while (i >= 0) {
         _addClass(elem[i], className);
         i--;
      }
   }
}


/**
 * @function _addClass
 * @description internal method add class to Dom element
 * @param {Object} elem - Dom element
 * @param {String} newClass - class name to add
 *
 **/
function _addClass(elem, newClass) {
   if (elem.classList) {
      elem.classList.add(newClass);
   } else {
      elem.className += ' ' + className;
   }
}


let loaderDashoffsetTotal = 502;
let preloader = document.querySelector('.preloader');
let preloaderOuter = preloader.querySelector('.outer');
let logo = preloader.querySelector('.logo');
let loaded = 0;
let total = 10;

function onProgress() {
  let percentLoaded = Math.round(( loaded / total ) * 100);
        let calc = (loaderDashoffsetTotal /100);
        let percent = Math.round(calc * percentLoaded);
        let offset = loaderDashoffsetTotal - percent;
        preloaderOuter.style.strokeDashoffset =offset + 'px';
}

function init() {
   let startLength = loaderDashoffsetTotal + 'px';
   preloaderOuter.style.strokeDashoffset = startLength;
   preloaderOuter.style.opacity = 1;

   setTimeout(() => {
      let newLength = (loaderDashoffsetTotal) + 'px';
      preloaderOuter.style.strokeDashoffset = newLength;
      addClass(preloaderOuter, 'loading');
      loadImages();


   }, 500);
}

init();

function loadImages() {

    load();
    
  
}

function load() {
  
  
  loaded++;
  onProgress();
  
  if(loaded == total){
    setTimeout(() => {
      onDone();
    }, 1000);
  } else {
    setTimeout(() => {
      load();
    }, 100);
  }
 
}

function onDone() {
   addClass(preloader, 'out');
   removeClass(logo, 'fade-in');
   addClass(logo, 'fade-out');
  
  setTimeout(() => {
    loaded = 0;
    removeClass(preloader, 'out');
   addClass(logo, 'fade-in');
   removeClass(logo, 'fade-out');
    preloaderOuter.style.strokeDashoffset = loaderDashoffsetTotal + 'px';
   removeClass(preloaderOuter, 'loading');
   
      init();
    
    
  }, 1000);
};

    $("#my_hamburger").click(function(){
        console.log('adsd');
        $('#my_hamburger').addClass('is_open');
        $('#banner_page').addClass('banner_page');
        setTimeout(function(){  $("#banner_page").removeClass("banner_page"); }, 1500);
    
    });
    $('.cool-link').mouseenter(function(){
        var id = $(this).attr('id');
        $('.back-image-anim').css({'background':'url(imgs/'+ id +'.png','transform': 'scale(1.05,1.05)','transition-duration':'1000ms','opacity':'0.2'});
        // ,'background-position':'50% 50%','  background-size: cover':'cover','  background-repeat': 'no-repeat'
    });
    $('.cool-link').mouseleave(function(){
        var id = $(this).attr('id');
        console.log(id);
        $('.back-image-anim').css({'transform':'scale(1,1)','opacity':'0','transition-duration':'0ms','background':"black"});
    });

});
(function() {
    var ev = new $.Event('classadded'),
        orig = $.fn.addClass;
    $.fn.addClass = function() {
        $(this).trigger(ev, arguments);
        return orig.apply(this, arguments);
    }
})();
// $('.section.fp-section').on('classadded', function(ev, newClasses) {
//     if(newClasses=='active'){
//     $('#banner_page').addClass('banner_page');
//     setTimeout(function(){  $("#banner_page").removeClass("banner_page"); }, 1500);
//     };

// });
