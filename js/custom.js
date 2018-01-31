$(function(){
    $(window).load(function () {
		$('.section.fp-section').hide();
		setTimeout(function () {
		$('.loader').fadeOut();
		$('#banner_page').addClass('banner_page');
    	setTimeout(function(){ 
			 $("#banner_page").removeClass("banner_page"); 
			 $('.section.fp-section').show();
			}, 1500);
		
		}, 3000);

	});
    var images = [];
    function preload() {
        for (var i = 0; i < arguments.length; i++) {
            images[i] = new Image();
            images[i].src = preload.arguments[i];
            console.log(images[i].src)
        }
    }

    //-- usage --//
    preload(
        "../design/imgs/11.png",
        "../design/imgs/22.png",
        "../design/imgs/33.png",
    )
    // $(".section.fp-section").hasClass('active',function(){
    //     console.log('aa');
    // });



    // $('section').hasClass('active',function(){
    //     console.log('aaaaa');
    // });
    // $(window).on('resize scroll', function() {
    //     console.log('aaa');
    //     });

    $("#my_hamburger").click(function(){
        console.log('adsd');
        $('#my_hamburger').addClass('is_open');
        $('#banner_page').addClass('banner_page');
        setTimeout(function(){  $("#banner_page").removeClass("banner_page"); }, 1500);
    
    });
    $('.cool-link').mouseenter(function(){
        var id = $(this).attr('id');
        $('.back-image-anim').css({'background':'url(imgs/'+ id +'.png','transform': 'scale(1.05,1.05)','transition-duration':'1000ms','opacity':'0.2'});
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
$('.section.fp-section').on('classadded', function(ev, newClasses) {
    if(newClasses=='active'){
    $('#banner_page').addClass('banner_page');
    setTimeout(function(){  $("#banner_page").removeClass("banner_page"); }, 1500);
    };

});
