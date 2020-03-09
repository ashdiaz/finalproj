function closeForm() {
  document.getElementById("popup").style.display = "none";
}
$(".question").click(function(){
    $('html,body').animate({
           scrollTop: $(".first").offset().top},
           6000);
   });

$(".first").click(function(){
    $('html,body').animate({
          scrollTop: $(".second").offset().top},
          6000);
  });
$(".second").click(function(){
    $('html,body').animate({
          scrollTop: $(".third").offset().top},
          6000);
  });
$(".third").click(function(){
    $('html,body').animate({
        scrollTop: $(".fourth").offset().top},
        6000);
  });
$(".fourth").click(function(){
    $('html,body').animate({
        scrollTop: $(".fifth").offset().top},
        6000);
    });
