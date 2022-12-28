// toggle for search button
let btnSearch = document.querySelector(".btn-search");
let searchProductDiv = document.querySelector(".search-product");

btnSearch.addEventListener("click", () => {
    btnSearch.classList.toggle("show-search");
    searchProductDiv.classList.toggle("show-search");
  
})


// init Isotope
$(window).on('load', function () {
     $grid = 
        $('.product-content').isotope({
            itemSelector: '.product-box',
            layoutMode: 'fitRows',
            percentPosition: true,
            animationEngine : 'best-available',
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });
    }
    
    );

// filter for watches grid


function filterSelection(filterClass) {
    //   var x, i;
    //   x = document.getElementsByClassName("product-box");
    //   if (c == "all") c = "";
    //   for (i = 0; i < x.length; i++) {
    //     w3RemoveClass(x[i], "show-product");
    //     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show-product");
    //}
    if (filterClass != '*') filterClass = '.' + filterClass;
    $grid.isotope({ filter: filterClass })

}



// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("filter-btns-text");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.querySelectorAll(".filter-actived");
        current[0].className = current[0].className.replace(" filter-actived", "");
        console.log(current[0].className);
        this.className += " filter-actived";
    });
}




// debounce so filtering doesn't happen every millisecond
function debounce(fn, threshold) {
    var timeout;
    threshold = threshold || 100;
    return function debounced() {
        clearTimeout(timeout);
        var args = arguments;
        var _this = this;
        function delayed() {
            fn.apply(_this, args);
        }
        timeout = setTimeout(delayed, threshold);
    };
}