$(document).ready(function() {
  $(".menu").click(function() {
    $(".menu").toggleClass("hidden");
    $(".nav").toggleClass("hidden");
    console.log("click");
  });
});
