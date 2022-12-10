// // toggle for search button
let menuBtn = document.querySelector(".menu-btn");
var sidebar = document.getElementById("sidebar-container");
var contentPage = document.getElementById("content-page");
var widthSidebar = getComputedStyle(document.documentElement).getPropertyValue('--width-sidebar');
let btnCloseSidebar = document.querySelector(".btn-close-sidebar");

menuBtn.addEventListener("click", () =>{
    
   
    if(sidebar.offsetLeft < 0){
        sidebar.style.left = '0';
        console.log(screen.width)
        if(screen.width > 992 ){
             contentPage.style.marginLeft = widthSidebar;
        }
        
    }
    else{
        sidebar.style.left = ('-' + widthSidebar).replace(/\s/g, '');
        contentPage.style.marginLeft = '0';
    }
})

btnCloseSidebar.addEventListener("click", () =>{
    sidebar.style.left = ('-' + widthSidebar).replace(/\s/g, '');
    contentPage.style.marginLeft = '0';
})


