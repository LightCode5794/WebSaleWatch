// toggle for search button
let btnSearch = document.querySelector(".btn-search");
let searchProductDiv = document.querySelector(".search-product");
btnSearch.addEventListener("click", () => {
    btnSearch.classList.toggle("show-search")
     searchProductDiv.classList.toggle("show-search")
})


