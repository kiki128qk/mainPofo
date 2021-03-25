
$(document).ready(function(){
for(i = 1 ; i <= 4 ; i++){
  $('#toggleBox0'+i).click(function(){
    $(this).find('.hide_buttons').toggle(500);
  });
}
})
;