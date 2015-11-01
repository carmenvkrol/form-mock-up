$(document).ready(function(){
  
  $('form').keyup(function(){
    var filled = false;
    $('input').each(function(){
      if($(this).val() == '') {
        filled = false;
      } else {
        filled = true;
      }
    });
    if (filled === true) {
      $('button[type="submit"]').removeAttr('disabled');
    }
  });
  
  $('#pa-form-container').submit(function(e){
    e.preventDefault();
    $(this).fadeOut();
    $('#loading-container').fadeIn(1000, function(){
      var progress = 0;
      setInterval(function () {
        if (progress === 100) {
          $('.progress').removeClass('active');
        } else {
          progress += 12;
          $('.progress-bar').width(progress.toString() + '%');
        }
      }, 500);      
      setTimeout( function() {
        $('#loading-container').fadeOut();
        $('#pa-header').fadeOut();
        $('#approved-container').fadeIn(1000);
      }, 5000);
    }); 
  });
});

 