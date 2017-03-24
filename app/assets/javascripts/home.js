
$(document).on('turbolinks:load', function(){
//bounce icons when mouse over
  $('.btn').hover(function(){
    $(this).toggleClass('pulsate-fwd');
  });

  $('.head').hover(function(){
    $(this).toggleClass('bg-pan-top');
  });


});
