$("#lastSection input, #textArea").click(function () {	
    $(this).css("border-bottom", "1px red solid");	
  })	

$("#lastSection input, #textArea").blur(function () {	
    $(this).css("border-bottom", "1px #ced4da solid");	
});	


$("a[href^='#']").click(function(){

  let aHerf = $(this).attr("href");

  let sectionOffset = $(aHerf).offset().top;

  $("html,body").animate( {scrollTop:sectionOffset} , 2000);

});


