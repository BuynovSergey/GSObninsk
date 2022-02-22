$(document).ready(function(){
	var owl = $('#slider');
	owl.owlCarousel({
		items:1,
		margin:0,
		loop:true,navText: ['', ''],
		dots:true,
		nav:true,
		autoplay:false,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
	});
	var owl2 = $('#slider-footer');
	owl2.owlCarousel({
		items:3,
		margin:0,
		loop:true,navText: ['', ''],
		dots:true,
		nav:true,
		autoplay:false,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			860:{
				items:3
			}
		}
	});	
});