$(document).ready(function(){
	document.body.addEventListener('touchstart', () => {})
	
	// anchor tag jump smooth
	$('.nav__item').on('click', function(e) {
		var href = $(this).attr('href');
		var pos = $(href).offset().top;

		$('html, body').animate({
			scrollTop: pos
		}, 1000);

		e.preventDefault();

		$('.nav__icon').click();
	})

	//menu animation
	var toggle = 0;
	$('.nav__icon').click(function(){
		if(toggle === 0){
			$('.icon--top').addClass('icon__line--animate__top').fadeOut();
			$('.icon--bottom').addClass('icon__line--animate__top').fadeOut();
			setTimeout(function(){
				$('.icon__line').removeClass("rotate-opposite");
				$('.icon__line').addClass("rotate");
				$('.nav__item').delay(600).fadeIn();

				// var fadeTime = 250 * ($('.nav__item').length - 1);
				// for (var i = 0; i <= $('.nav__item').length - 1; i++) {
				// 	$('.nav__item')[i].delay(fadeTime).fadeIn();
				// 	fadeTime -= 250;
				// }
				setTimeout(function(){
					$('.icon__arrow').fadeIn();
				},600);
			},500);
			toggle = 1
		}else{
			$('.icon__arrow').fadeOut();
			setTimeout(function(){
				$('.icon__line').removeClass("rotate");
				$('.icon__line').addClass("rotate-opposite");
				$('.nav__item').fadeOut();
				// var fadeTime = 0;
				// for (var i = 0; i <= $('.nav__item').length - 1; i++) {
				// 	$('.nav__item')[i].delay(fadeTime).fadeOut();
				// 	fadeTime += 100;
				// }
				setTimeout(function(){
					$('.icon--top').addClass('icon__line--animate__width').fadeIn();
					$('.icon--bottom').addClass('icon__line--animate__width').fadeIn();
					$('.icon--top').removeClass('icon__line--animate__top').fadeIn();
					$('.icon--bottom').removeClass('icon__line--animate__top').fadeIn();

					setTimeout(function(){
						$('.icon--top').removeClass('icon__line--animate__width').fadeIn();
						$('.icon--bottom').removeClass('icon__line--animate__width').fadeIn();
					},500)
				},500)
			},500);
			toggle = 0;
		}
	})

	$('.work__filter li').click(function(){
		$('.work__filter li').removeClass('line-through--active');
		$(this).addClass('line-through--active');
	})
})
