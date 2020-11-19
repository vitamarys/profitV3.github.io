$(function() {
  

 
 $(".building__facade__btn").click(function(){
 let x = "-4%"
 let xEnd = "-90%"
 var p = $('.building__facade').position();
 
  if( $('.building__facade').offset().left >= -76.796875){
    $('.building__facade').css("left", xEnd);
   
  }
 else{
  $('.building__facade').css("left", x);
 }
//  $('.building__under').toggleClass('active');
 })
       
});