$(".goTop").click(function(){
	$('body,html').animate({scrollTop:0},400); // 숫자는 움직이는 시간 클릭한 곳에서 Top 까지의 이동시간이라 보면 되겠다.
	return false;
});