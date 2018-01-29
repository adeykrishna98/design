$(window).load(function() {
    $(".loader-ring").fadeOut("slow");
});

$(document).keyup(function(e) {
	if (e.keyCode == 27) {
		console.log('called');
		$('input:checkbox[name=dismiss_menu_overlay]').attr('checked',false);
	}   
});