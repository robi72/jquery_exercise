
$(document).ready(function() {
  $(".container-link2").hide();
  $(".container-link3").hide();

  $("#link1").css("color", "red").click(function() {
    $(".container-link2").slideUp(2000);
    $(".container-link3").slideUp(2000);
    $(".container-link1").slideDown(2000);
  });
  

  $("#link2").click(function() {
    $(".container-link1").slideUp(2000);
    $(".container-link3").slideUp(2000);
    $(".container-link2").slideDown(2000);
  });
  

  $("#link3").click(function() {
    $(".container-link1").slideUp(2000);
    $(".container-link2").slideUp(2000);
    $(".container-link3").slideDown(2000);
  });

});
