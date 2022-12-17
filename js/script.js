
$(function(){

  // Menu Fixed
  let navbar = document.querySelector(".navbar");
  let back_to_top = document.querySelector(".back_to_top");


  window.addEventListener("scroll", function(){
    let value = window.scrollY;
    if (value > 250) {
      navbar.classList.add("menu_fixed");
      back_to_top.classList.add("show");

    }else{
      navbar.classList.remove("menu_fixed")
      back_to_top.classList.remove("show");
    }
    // console.log(Math.floor(value));
  })

  // BG video
  $('#banner').vide('/video/ocean.mp4');








    feather.replace();
    $('.popular_slider').slick({
        slidesToShow:3,
        arrows:false,
        centerMode: true,
        centerPadding: "200px",
        focusOnSelect: true,
        dots: true,
      });



$('.explore_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
})