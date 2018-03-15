/*SCROLL down*/
(function($) {
	function in_view(el) {
		var m = $(window).scrollTop() + $(window).height();
		return m > el.offset().top;
	};

	var timer;
	$(window).on('scroll', function(){
		if ($(window).scrollTop()>10) {
			$('#site-header').addClass('scrolled');
		} else {
			$('#site-header').removeClass('scrolled');
		} if (in_view($('.main').find('.left-nav'))) {
			$('.main').addClass('active');
		} else {
			$('.main').removeClass('active');
		}
	})
})(jQuery)


/*SMOOTH SCROLLING*/

$("#link1").click(function(){
	$('html, body').animate({
		scrollTop:$("#title-01").offset().top},
		'slow');
});

$("#link2").click(function(){
	$('html, body').animate({
		scrollTop:$("#bodies").offset().top},
		'slow');
});

$("#link3").click(function(){
	$('html, body').animate({
		scrollTop:$("#find-stories").offset().top},
		'slow');
});

/*INCREASE/DECREASE VALUE*/
function increaseValue() {
	var value = parseInt(document.getElementById('number').value, 10);
	value = isNaN(value) ? 0 : value;
	value++;
	document.getElementById('number').value = value;
}

function decreaseValue() {
	var value = parseInt(document.getElementById('number').value, 10);
	value = isNaN(value) ? 0 : value;
	value < 1 ? value = 1 : '';
	value--;
	document.getElementById('number').value = value;
}

/*SIDEBAR*/
$(document).ready(function(){
	$('.sidebarBtn').click(function(){
		$('.main-nav').toggleClass('active');
		$('.sidebarBtn').toggleClass('toggle');
	})
}) (jQuery);

