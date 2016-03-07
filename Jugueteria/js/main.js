$(document).bind('mobileinit',function(){
  $.mobile.changePage.defaults.changeHash = false;
  $.mobile.hashListeningEnabled = false;
  $.mobile.pushStateEnabled = false;
});
$(document).ready(function(){
	$(".btn-right").css({"margin-left":$(window).width()-220+"px"});
	$(".col-4").css({"width":(($(window).width())/3)+"px"});
	$(".col-2").css({"width":(($(window).width())/6)+"px"});
	$(".col-10").css({"width":(((($(window).width())/6)*10)/2)-25	+"px"});
});