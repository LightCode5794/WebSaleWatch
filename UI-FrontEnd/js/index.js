
// event for click sidebar
function openSidebar() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
  var header = document.getElementById("header");
  if(header.className === "header"){
    header.style.position = "fixed";
    header.style.left = "0";
    header.style.right = "0";
    header.className += " animate-hide-to-top";
   
  }
}

function closeSidebar() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
  var header = document.getElementById("header");
  if(header.className === "header animate-hide-to-top"){
    header.className = "header";
  }
}


  let iconSearch = document.querySelector(".search__toggle");
  iconSearch.addEventListener( "click", () => iconSearch.classList.toggle("toggled") )


  // let button = document.querySelector(".hamburger__toggle");
  // button.addEventListener( "click", () => button.classList.toggle("toggled") );




