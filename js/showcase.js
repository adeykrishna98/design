$(document).ready(function() {
	$(".loader-ring").fadeOut("slow");
	const $cont = $('.cont');
	const $slide = $('.slide');
	const $closeBtn = $('.slide__close')
	const $text = $('.slide__text');
	const $iconTwitter = $('.icon-link--twitter');
	const numSlides = 3;
	const initialAnimDur = 5705;
	const animDelay = 1000;
	let initialAnim = true;
	let clickAnim = false;
	
	$(document).on('click', '.slide__bg-dark', function() {
		if (initialAnim || clickAnim) return;
		let _this = $(this).parent();
		let target = +_this.attr('data-target');
		clickAnim = true;
		
		_this.css({
			'transform': 'translate3d(-100%, 0, 0)',
			'transition': '750ms',
			'cursor': 'default'
		})
		
		_this.find('.slide__img-wrapper').css({
			'transform': 'translate3d(0, 0, 0) scale(.95, .95)',
			'transition': '2000ms'
		})
		
		for(let i = target, length = $slide.length; i < length; i++) {
			$('.slide--' + (i + 1)).css({
				'transform': 'translate3d(0, 0, 0)',
				'transition': '750ms'
			})
		}
		
		for(let i = target, length = $slide.length; i > 1; i--) {
			$('.slide--' + (i - 1)).css({
				'transform': 'translate3d(-125%, 0, 0)',
				'transition': '750ms'
			})
		}
		
		setTimeout(function() {
			$slide.not(_this).find('.slide__bg-dark').css({
				'opacity': '0'
			})
		}, 750)
		
		$closeBtn.addClass('show-close');
		$iconTwitter.addClass('icon-show');
		
		_this.find('.slide__text').css({
			'transform': 'translate3d(150px, -40%, 0)',
			'opacity': '1',
			'transition': '2000ms',
			'-webkit-transition': '2000ms'
		})
	});

	$(document).on('mousemove', '.slide', function() {
		if(initialAnim || clickAnim) return;
		let _this = $(this);
		let target = +_this.attr('data-target');
		
		_this.css({
			'transform': 'translate3d(-' + (((100 / numSlides) * (numSlides - (target - 1))) + 5) + '%, 0, 0)',
			'transition': '750ms'
		})
		
		_this.find('.slide__text').css({
			'transform': 'translate3d(0, -40%, 0) rotate(0.01deg)',
			'-moz-transform': 'translate3d(0, -40%, 0) rotate(0.01deg)',
			'opacity': '1',
			'transition': '750ms',
			'-webkit-transition': '750ms'
		})

		for(let i = target, length = $slide.length; i < length; i++) {
			$('.slide--' + (i + 1)).css({
				'transform': 'translate3d(-' + (((100 / numSlides) * (numSlides - ((i + 1) - 1))) - 5) + '%, 0, 0)',
				'transition': '750ms'
			})
		}

		for(let i = target; i > 1; i--) {
			$('.slide--' + (i - 1)).css({
				'transform': 'translate3d(-' + (((100 / numSlides) * (numSlides - ((i - 1) - 1))) + 5) + '%, 0, 0)',
				'transition': '750ms'
			})
		}
		
		_this.find('.slide__img-wrapper').css({
			'transform': 'translate3d(-200px, 0, 0) scale(.85, .85)',
			'transition': '750ms'
		})
		
		$slide.not(_this).find('.slide__img-wrapper').css({
			'transform': 'translate3d(-200px, 0, 0) scale(.90, .90)',
			'transition': '1000ms'
		})
		
		$slide.not(_this).find('.slide__bg-dark').css({
			'opacity': '.75'
		})
	});
	
	$(document).on('mouseleave', '.slide', function() {
		if(initialAnim || clickAnim) return;
		let _this = $(this);
		let target = +_this.attr('data-target');
		
		for(let i = 1, length = $slide.length; i <= length; i++) {
			$('.slide--' + i).css({
				'transform': 'translate3d(-' + (100 / numSlides) * (numSlides - (i - 1)) + '%, 0, 0)',
				'transition': '1000ms'
			})
		}
		
		$slide.find('.slide__img-wrapper').css({
			'transform': 'translate3d(-200px, 0, 0) scale(1, 1)',
			'transition': '750ms'
		})
		
		$slide.find('.slide__bg-dark').css({
			'opacity': '0'
		})
		
		$text.css({
			'transform': 'translate3d(0, -50%, 0) rotate(0.01deg)',
			'opacity': '0',
			'transition': '200ms',
			'-webkit-transition': '200ms'
		})
	});
	
	$(document).on('click', '.slide__close', function() {
		
		setTimeout(function() {
			clickAnim = false;
		}, 1000);
		
		$closeBtn.removeClass('show-close');
		$iconTwitter.removeClass('icon-show');
		
		for(let i = 1, length = $slide.length; i <= length; i++) {
			$('.slide--' + i).css({
				'transform': 'translate3d(-' + (100 / numSlides) * (numSlides - (i - 1)) + '%, 0, 0)',
				'transition': '1000ms',
				'cursor': 'pointer'
			})
		}
		
		$text.css({
			'transform': 'translate3d(150px, -40%, 0)',
			'opacity': '0',
			'transition': '200ms',
			'-webkit-transition': '200ms'
		})
		
		setTimeout(function() {
			$text.css({
				'transform': 'translate3d(0, -50%, 0)'
			})
		}, 200)
	})
	
	setTimeout(function() {
		$cont.addClass('active');
	}, animDelay);
	
	setTimeout(function() {
		initialAnim = false;
	}, initialAnimDur + animDelay);
	
});
















// arrow animation


var $linkL = $('.pag-link__prev');
var $linkLB = $('.pag-link__prevB');
var $linkR = $('.pag-link__next');
var $linkRN = $('.pag-link__nextN');

var $linkInnerL = $('.pag-link__inner--prev');
var $linkInnerLB = $('.pag-link__inner--prevB');
var $linkInnerR = $('.pag-link__inner--next');
var $linkInnerRN = $('.pag-link__inner--nextN');

var $arrowG = $('.large-arrow__group'); 

var $arrowLG = $('.large-arrow--prev').find('.large-arrow__group');
var $arrowLGB = $('.large-arrow--prevB').find('.large-arrow__group');
var $arrowRG = $('.large-arrow--next').find('.large-arrow__group');
var $arrowRGN = $('.large-arrow--nextN').find('.large-arrow__group');
var arrOffset = 48;

TweenMax.set($arrowG, {
	x: -(arrOffset)
});

TweenMax.set($linkInnerL , {
	x: -(arrOffset/2) 
});

TweenMax.set($linkInnerLB , {
	x: -(arrOffset/2) 
});



TweenMax.set($linkInnerR , {
	x: arrOffset/2 
});
TweenMax.set($linkInnerRN , {
	x: arrOffset/2 
});
var pagEase = Power2.easeInOut;

pagLeftTL = new TimelineMax();
pagLeftTL.to($arrowLG, 0.3, { x: 0, ease: pagEase })
		 .to($linkInnerL, 0.3, { x: 0, ease: pagEase }, "-=0.3")
		 .pause();

pagLeftTLB = new TimelineMax();
pagLeftTLB.to($arrowLGB, 0.3, { x: 0, ease: pagEase })
		 .to($linkInnerLB, 0.3, { x: 0, ease: pagEase }, "-=0.3")
		 .pause();

pagRightTL = new TimelineMax();
pagRightTL.to($arrowRG, 0.3, { x: 0, ease: pagEase })
		 .to($linkInnerR, 0.3, { x: 0, ease: pagEase }, "-=0.3")
		 .pause();


pagRightTLN = new TimelineMax();
pagRightTLN.to($arrowRGN, 0.3, { x: 0, ease: pagEase })
		 .to($linkInnerRN, 0.3, { x: 0, ease: pagEase }, "-=0.3")
		 .pause();

$linkL.hover(pagLeftOver, pagLeftOut);
$linkLB.hover(pagLeftOverB, pagLeftOutB);
$linkR.hover(pagRightOver, pagRightOut);
$linkRN.hover(pagRightOverN, pagRightOutN);

function pagLeftOver() {
	pagLeftTL.play();
}

function pagLeftOut() {
	pagLeftTL.reverse();
}

function pagLeftOverB() {
	pagLeftTLB.play();
}

function pagLeftOutB() {
	pagLeftTLB.reverse();
}

function pagRightOver() {
	pagRightTL.play();
}

function pagRightOut() {
	pagRightTL.reverse();
}

function pagRightOverN() {
	pagRightTLN.play();
}

function pagRightOutN() {
	pagRightTLN.reverse();
}


console.clear();
