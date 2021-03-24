$(document).ready(function(){

//   PromoreCon button js

    $(".tabbutton>button").click(function(){
      var index = $(this).index();
      $(".tabcons>.tabcon").hide();
      $(".tabcons>.tabcon").eq(index).show();
    });

    $(".tabbutton>button").eq(0).trigger("click");
    
  // show,hide js
  $(document).ready(function() {
    //content 클래스를 가진 div를 표시/숨김(토글)
    $("#cli_button").click(function()
    {
    $("#hide_buttons").not($(this).fond("#hide_buttons").slideToggle(500)).slideUp();
    });
    });
// $(btn).addEventListener('click', function(){
// if( $(layer).hasClass('show')){
//   $(layer).addClass('hide');
//   alert(true);
// }else{
//   $(layer).addClass('show'); 
//   alert('no');
// }
// });
// $(document).ready(function(){
//   btn.click(function(){
//     $("layer").toggle();
//     if(layer.css("display") == "none"){
//         $(layer).show();
//       }else{
//         $(layer).hide();
//       }
     
//   });

  

});
