jQuery(document).ready(function() {
	createElements();
  doMasonry();
});

$(window).on('resize', function() { doMasonry() });

function createElements() {
  for(let i = 0; i < 10; i++) {
		$('.masonry').append('<div></div>', {
			id: 'masonry-div' + i,
			"class": 'masonry-div',
			text: i,
		});
  }
}

function doMasonry() {
	$('.masonry').attr("style", "");
	$('.masonry-div').attr("style", "");

	var divHeight = $('.masonry').outerHeight();
	$('.masonry').height(divHeight+400);
	console.log(divHeight);
 
 if($(window).width() > 768) {
 	 $('.masonry').css({
	 	"display": "flex",
	 	"width": "100%",
	 	"flex-flow": "column wrap",
	 });
	 
	 $('.masonry-div').css({
	 	"display": "initial",
	 	"margin": "10px 1%",
	 });
	 
 	if($(window).width() <= 1024) {
 		$('.masonry-div').css("width", "48%");
 	} else { //If greater than 1024px
  		$('.masonry-div').css("width", "31%");
 	}
 }	
}
