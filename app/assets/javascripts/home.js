
$(document).on('turbolinks:load', function(){
//bounce icons when mouse over
  $('.btn').hover(function(){
    $(this).toggleClass('pulsate-fwd');
  });

  $('.head').addClass('bg-pan-top');
  $( '.head' ).hover(function() {
    $( '.head' ).toggleClass('pause');
  });

});
