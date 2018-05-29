var wW;
var wH;
var small = 600;

var prodImg = document.getElementsByClassName('product-img');
var prodAmounth = prodImg.length;
var div = document.getElementsByClassName('fullscreen');
var fullImg;
var drag= document.getElementsByClassName('drag-around');
var picBox = document.getElementsByClassName('photo');
var picHeight;

$(window).on('resize',function(){
	wW = $(window).width();
	wH = $(window).height();
	picHeight = $(picBox).outerHeight();
}).trigger('resize');


$(document).ready(function() {

	$(drag[0]).draggable();

	function showHideImg(){	
		if(wW>small){
			var pic = $('<img />', {src: $(this).attr('src')});
			$(div).css('display', 'block');
			$(div).html(pic).show();
			fullImg = $(div[0]).children('img');
			// hide img after click
			if(fullImg){
				fullImg[0].addEventListener('click', function(){
					$(this).hide();
					$(div).hide();
				},false);
			}
		}
		if(wW<=small){
			$(this).toggleClass('drag-around');
			$(picBox).css('height',picHeight);
		}
	}

	for(var i=0; i<prodAmounth; i++){
		prodImg[i].addEventListener('click',showHideImg,false);
	}
 
});


