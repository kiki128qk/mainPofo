$(document).ready(function(){

//   PromoreCon button js

    $(".tabbutton>button").click(function(){
      var index = $(this).index();
      $(".tabcons>.tabcon").hide();
      $(".tabcons>.tabcon").eq(index).show();
    });

    $(".tabbutton>button").eq(0).trigger("click");
    
});