$(document).ready(function(){
	$('#morebutton').click(function(){ // ID가 toggleButton인 요소를 클릭하면
		var state = $('.PromoreCon').css('display'); // state 변수에 ID가 moreMenu인 요소의 display의 속성을 '대입'
		if(state == 'none'){ // state가 none 상태일경우 
			$('.PromoreCon').show(); // ID가 moreMenu인 요소를 show();
		}else{ // 그 외에는
			$('.PromoreCon').hide(); // ID가 moreMenu인 요소를 hide();			
		}
	});

//   PromoreCon button js

    $(".tabbutton>button").click(function(){
      var index = $(this).index();
      $(".tabcons>.tabcon").hide();
      $(".tabcons>.tabcon").eq(index).show();
    });

    $(".tabbutton>button").eq(0).trigger("click");
});