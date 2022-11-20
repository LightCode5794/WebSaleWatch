
// event for click sidebar
function openSidebar() {

  document.getElementById("myOverlay").style.display = "block";
  var mySidebar = document.getElementById("mySidebar");
  mySidebar.style.display = "block";
  // appear the sidebar
  mySidebar.animate({
    opacity: 1,
    left: 0,

  },

    {
      duration: 300,
      fill: 'forwards'
    })


  // disapear the header
  var header = document.getElementById("header");
  header.animate({
    opacity: 0,
    transform: 'translateY(-100%)',
  },
    {
      duration: 300,
      fill: 'forwards'
    })
}

function closeSidebar() {

  document.getElementById("myOverlay").style.display = "none";
  var header = document.getElementById("header");

  // disapear the sidebar
  var mySidebar = document.getElementById("mySidebar");
  mySidebar.animate(
    {
      left: '-40%',
      opacity: 0,
      // transform: 'translateX(-100%)',
    },

    {
      duration: 300,
      fill: 'forwards'
    })
  
  // re-appear the sidebar
  header.animate({
    opacity: 1,
    transform: 'translateY(0)',
  },
    {
      duration: 300,
      fill: 'forwards'
    })
}

// toggle for search button
let iconSearch = document.querySelector(".search__toggle");
iconSearch.addEventListener("click", () => iconSearch.classList.toggle("toggled"))

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 7000); // Change image every 2 seconds
// }


$(document).ready(function(){
  $('.slideshow-container').slick({
    dots:true,    
    cssEase: 'linear',
  });

});



