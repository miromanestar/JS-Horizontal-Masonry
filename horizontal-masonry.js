jQuery(document).ready(function() {
	createElements();
  doMasonry();
});

function createElements() {
  for(let i = 0; i < 10; i++) {
    var masonryDiv = document.createElement("div");
    masonryDiv.setAttribute("class", "masonry-div");
    masonryDiv.setAttribute("id", "masonry-div-" + i);
    masonryDiv.innerText = i;
    document.getElementById("masonry").appendChild(masonryDiv);
  }
}

jQuery(document).ready(function() {
	doMasonry();	
});

$(window).on('resize', function() { doMasonry() });

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
