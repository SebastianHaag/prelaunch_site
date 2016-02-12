$(document).ready(function() {

   $(window).load(function() {
      $('#logo, #topText, #newsletterForm, #pos').delay(100).queue(function(){
         $(this).addClass('loaded');
      });
   });

});
