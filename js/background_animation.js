var canvas = document.getElementById('noise'),
    ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.onresize = resize;

function noise(ctx) {
    
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        idata = ctx.createImageData(w, h),
        buffer32 = new Uint32Array(idata.data.buffer),
        len = buffer32.length,
        i = 0;

    for(; i < len;)
        buffer32[i++] = ((180 * Math.random())|0) << 24;
    
    ctx.putImageData(idata, 0, 0);
}



// $('section').on('change','.active', function(){
//     $('#banner_page').addClass('banner_page');
//     setTimeout(function(){  $("#banner_page").removeClass("banner_page"); }, 1000);
// });

// $('#nav_open')
// if($('.side_nav').prop('id')=='nav_open'){
//     $('.side_nav').css("opacity",1);
// }
// else{
//     // $('.side_nav').css("opacity",0);
// };

// $('.is_open').click(function(){
//     $('#banner_page').addClass('banner2');
// });
var toggle = true;

// added toggle to get 30 FPS instead of 60 FPS
(function loop() {
    toggle = !toggle;
    if (toggle) {
        requestAnimationFrame(loop);
        return;
    }
    noise(ctx);
    requestAnimationFrame(loop);
})();
