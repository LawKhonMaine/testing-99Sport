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
  

  // scrolling animation

  $(".js--wp-1").waypoint(function (direction) {
   $(".js--wp-1").addClass("animate__zoomIn");
  },{offset:"100%"});

  $(".js--wp-2").waypoint(function (direction) {
    $(".js--wp-2").addClass("animate__zoomIn"); 
  },{offset:"100%"});

  $('.js--wp-3').waypoint(function(direction){
    $('.js--wp-3').addClass('animate__fadeInUp');
  },{offset:'100%'})

  $('.js--wp-box').waypoint(function(direction){
    $('.js--wp-box').addClass('animate__fadeInBottomRight');
  },{offset:'100%'})

  $('.js--wp-rules-img').waypoint(function(direction){
    $('.js--wp-rules-img').addClass('animate__fadeInLeft');
  },{offset:'100%'})

  $('.js--wp-rules-text').waypoint(function(direction){
    $('.js--wp-rules-text').addClass('animate__fadeInUp');
  },{offset:'100%'})

  $('.js--wp-gallery-box-1').waypoint(function(direction){
    $('.js--wp-gallery-box-1').addClass('animate__fadeInBottomRight');
  },{offset:'100%'})

  $('.js--wp-gallery-box-2').waypoint(function(direction){
    $('.js--wp-gallery-box-2').addClass('animate__fadeInBottomLeft');
  },{offset:'100%'})

   // Scrolling btn

   $('.js--btn-gallery').click(function (){
    $('html,body').animate({scrollTop:$('.js--section-gallery').offset().top},1000); 
})

   $('.js--btn-home').click(function(){
    $('html,body').animate({scrollTop:$('.js--section-main').offset().top},500)
})

   $('.js--btn-features').click(function(){
    $('html,body').animate({scrollTop:$('.js--section-feature').offset().top},500)
})

});

