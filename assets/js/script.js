$(document).ready(function() {
  $('div.hidden_title').fadeIn(2000).removeClass('hidden_title');

  $('div.hidden_text').fadeIn(6000).removeClass('hidden_text');


  $('#sidebar-button').click(function() {

    if ($(".sidebar-container").hasClass('sidebar-active')) {
      $('body').removeClass('no-scroll');
      $('#sidebar-button').removeClass('button-active');
      $('.sidebar-container').removeClass('sidebar-active');
      $('.page-wrapper').removeClass('wrapper-active');
    }

    else {
      $('#sidebar-button').addClass('button-active');
      $('.sidebar-container').addClass('sidebar-active');
      $('.page-wrapper').addClass('wrapper-active');
      setTimeout(function() {
        $('body').addClass('no-scroll');
      }, 300);
    };});

//   $('#move_down').mouseover(function(){
//     $(this).addClass('grow_muddahfucka'); 
//   });
//   $('#move_down').mouseleave(function(){
//     $(this).removeClass('grow_muddahfucka');        
//   });
// });
// var move_click=False

//   $('move_down').function(){
//     if move_click == False.
//   }
  // $('#move_down').hover(function() {
  //   $('#welcome_section').addClass('see_more')
  // }
  //   )

  $('#move_down').click(function() {
    $('html, body').animate({
      scrollTop: $('#about_section').position().top}, 'slow');
    $("sidebar-container").removeClass('sidebar-active');
  });
  
  $('#carousel-next').click(function() {
    var x = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (x == -3480) {
      return false;
    }
    else {
      $('#carousel').css('margin-left', x-960);
    }
  });

  //Implement the "slide to right" when the user clicks on #carousel-prev here

  $('#carousel-prev').click(function() {
    var y = parseInt($('#carousel').css('margin-left').replace("px", ""));

    if (y == 0) {
      return false;
    }
    else {
      $('#carousel').css('margin-left', y+960);
    }
  });




});