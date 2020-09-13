// essam function

$("#lastSection input, #textArea").click(function () {
  $(this).css("border-bottom", "1px red solid");
})

$("#lastSection input, #textArea").blur(function () {
  $(this).css("border-bottom", "1px #ced4da solid");
});

//salah function
$("a[href^='#']").click(function () {
  let aHerf = $(this).attr("href");
  let sectionOffset = $(aHerf).offset().top - 70;
  $("html,body").animate({ scrollTop: sectionOffset }, 1000);
});

// mohamed sami funcion
$("a").click(function () {
  $(this).addClass('active').parent().siblings().find("a").removeClass('active')
})

$(window).scroll(function () {

  $('section').each(function () {

    if ($(window).scrollTop()+125 >= $(this).offset().top)
    {
      let secId ="'"+"#"+$(this).attr('id')+"'";
      $('nav li a').removeClass('active');
      $(`nav li a[href=${secId}`).addClass('active');
    }
  })
})
