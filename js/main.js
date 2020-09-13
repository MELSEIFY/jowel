$("#lastSection input, #textArea").click(function () {	
    $(this).css("border-bottom", "1px red solid");	
  })	

$("#lastSection input, #textArea").blur(function () {	
    $(this).css("border-bottom", "1px #ced4da solid");	
});	


$("a[href^='#']").click(function(){

  let aHerf = $(this).attr("href");

  let sectionOffset = $(aHerf).offset().top-70;

  $("html,body").animate( {scrollTop:sectionOffset} , 2000);

});



// ====== Mahmoud Ezat section ======== 




$(document).ready(function(){
 $(".forloading").fadeOut( 2000 , function(){
   $("html,body").css({overflow : "auto"})
 });
})


$(window).scroll(function(){

  var myScrollTop = $(window).scrollTop()  ;
 
  if( myScrollTop >= 650)
  {
      $(".swipUp").fadeIn(650)
  }
  else
  {
      $(".swipUp").fadeOut(650)
  }
  

})


$(".swipUp").click(function(){

  $("html , body").animate( {scrollTop : "0"} ,500 )
})


// ====== Mahmoud Ezat section ======== 


