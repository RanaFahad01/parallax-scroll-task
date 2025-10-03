$(window).on("scroll", function () {
  parallaxScroll();
});

function parallaxScroll() {
  var scrolled = $(window).scrollTop();

  // Background layers move at different speeds
  $(".layer-1").css("top", 0 - scrolled * 0.2 + "px");
  $(".layer-2").css("top", 0 - scrolled * 0.4 + "px");
  $(".layer-3").css("top", 0 - scrolled * 0.6 + "px");

  // Floating cloud emojis drifting
  $(".cloud-1").css("top", 300 - scrolled * 0.3 + "px");
  $(".cloud-2").css("top", 200 - scrolled * 0.5 + "px");
  $(".cloud-3").css("top", 400 - scrolled * 0.4 + "px");
  $(".cloud-4").css("top", 600 - scrolled * 0.2 + "px");
  $(".cloud-5").css("top", 250 - scrolled * 0.6 + "px");
}
