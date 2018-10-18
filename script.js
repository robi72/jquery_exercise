
$(document).ready(function() {
  $(".container-link2").hide();
  $(".container-link3").hide();

  $("#link1").click(function() {
    $(".container-link2").hide();
    $(".container-link3").hide();
    $(".container-link1").show();
  });
  

  $("#link2").click(function() {
    $(".container-link1").hide();
    $(".container-link3").hide();
    $(".container-link2").show();
  });
  

  $("#link3").click(function() {
    $(".container-link1").hide();
    $(".container-link2").hide();
    $(".container-link3").show();
  });

});
