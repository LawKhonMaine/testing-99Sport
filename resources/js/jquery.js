$(document).ready(function () {
  // Scrolling nav
  $(".js--section-feature").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--section-header").addClass("sticky-nav");
      } else {
        $(".js--section-header").removeClass("sticky-nav");
      }
    },
    { offset: "60%" }
  );
});
