var isCollapsed = $.cookie('sliderCollapsed');
function sliderCollapsedCookie(sliderState){
	$.cookie('sliderCollapsed', sliderState, {
	    expires: 182 
	});
}
// свернуть слайдер
function minimize(){
	$('.hide-slide').slideUp(function(){	
	});
	sliderCollapsedCookie('true'); //запомнить: слайдер свернут
	isCollapsed = true;
	$('.main-row-1 .container .slider-1 .slide-item').css("heith", "250px !important");
	$('slick-initialized').css("heith", "250px !important");
	$('draggable').css("heith", "250px !important");
}
$('.minimize-btn').click(function(){
	minimize();
});

// развернуть слайдер
function maximize(){
	$('.hide-slide').slideDown(function(){
	sliderCollapsedCookie('false'); //запомнить: слайдер развернут
	isCollapsed = false;
	});
}
$('.show-slide').click(function(){
	maximize();
});

if(isCollapsed === null)
{
	sliderCollapsedCookie('false'); //запомнить: слайдер развернут
  	isCollapsed = false; //запомнить: слайдер развернут
}
else
{
	if(isCollapsed == 'false'){
		maximize();
	}   		
	else{
		minimize();
	}
}
