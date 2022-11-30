// toggle for search button
let btnSearch = document.querySelector(".btn-search");
let searchProductDiv = document.querySelector(".search-product");

btnSearch.addEventListener("click", () => {
    btnSearch.classList.toggle("show-search");
    searchProductDiv.classList.toggle("show-search");
  
})


// filter for watches grid

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("product-box");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show-product");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show-product");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("filter-btns-text");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.querySelectorAll(".active");
    current[0].className = current[0].className.replace(" active", "");
     console.log(current[0].className);
     this.className += " active";
  });
}