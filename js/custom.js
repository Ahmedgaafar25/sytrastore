$(document).ready(function(){

    /*wow js animation */
 new WOW().init();

 
 
 /*nice scroll */
$("body").niceScroll({
    
    cursorcolor: '#f39c12',
    cursorwidth:'10px',
    cursorborder: 'none'
    
    }); 
 
    });
  
/**loadig animation */
 $(window).on('load', function () {
      $('.overlay-loading').fadeOut(2000);
 });
