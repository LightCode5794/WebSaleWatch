// create sidebar
class MySidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="sidebar" id="mySidebar">
        <div class="content-sidebar">
            <div class="bar-logo">
                <a href="#" class="logo">
                    <img src="assets/images/LogoShopWatch.png" alt="IMG_LOGO">
                </a>
            </div>
            <!-- logo -->
            <div class="menu-sidebar">
                <!-- <button class="bar-item bar-button xxlarge" onclick="closeSidebar()">Close &times;</button> -->
                <div class="search-button-group">
                    <i class="fa-solid fa-magnifying-glass " id="icon_search"></i>
                    <input type="search" class="search-field" placeholder="Search watches…" value="" name=""
                        autocomplete="off">
                </div>
                <a href="#" class="bar-item bar-button hover-underline-animation">Home</a>
                <a href="#" class="bar-item bar-button hover-underline-animation">Watches</a>
                <a href="#" class="bar-item bar-button hover-underline-animation">About</a>
                <a href="#" class="bar-item bar-button hover-underline-animation">Blog</a>
                <a href="#" class="bar-item bar-button hover-underline-animation">Contact</a>
            </div>

            <div class="bottom-extras">
                <div class="menu-divider"></div>
                <div class="account-menu hover-underline-animation">

                    <a href="#" class="">Login</a>
                    <i class="ti-user"></i>

                </div>
                <div class="menu-divider"></div>
                <div class="cart-menu hover-underline-animation">

                    <a href="#" class="">Cart</a>
                    <i class="ti-shopping-cart"></i>

                </div>
                <div class="menu-divider "></div>
                <div class="language-menu hover-underline-animation">

                    <div class = "caption">Language</div>
                    <div class = "pick-language-btn">
                        <label class="language-selected" style = "cursor: pointer">English</label>
                        <i class="ti-angle-down"></i>
                        <ul class="language-sub-menu">
                             <li><a href="#">English</a></li>
                             <li><a href="#">Tiếng Việt</a></li>
                        </ul>
                    </div>
                
                </div>
            </div>
        </div>

    </div>
    <!-- overlay -->
    <div class="overlay" id="myOverlay"></div>
   `
    }
}
customElements.define('my-sidebar', MySidebar);

//create header
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `   
        <!-- Header desktop -->
        <div class="container-menu-desktop" id = "myHeader">
            <div class="header-top" >
                <!-- Topbar -->
                <div class="top-bar" id="topBar">
                    <div class="content-topbar">
                        <div class="left-top-bar">
                             <p><i class="fa-solid fa-phone"></i> 012343569 </p>
                        </div>
        
                        <div class="right-top-bar">
        
                            <!--  account -->
                            <div class="menu-top-bar account">
        
                                <a href="#">My Account <i class="arrow-down-icon fa-solid fa-caret-down"></i></a>
                                <ul class="sub-menu-top-bar">
                                    <li><a href="my-account.html">My Account </a> </li>
                                    <li><a href="login.html">Login</a></li>
                                    <li><a href="register.html">Register</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                </ul>
                            </div>
                            <!-- languages -->
                            <div class="menu-top-bar languages">
        
                                <a href="#">English <i class="arrow-down-icon fa-solid fa-caret-down"></i></i></a>
                                <ul class="sub-menu-top-bar">
                                    <li><a href="#">Tiếng Việt</a> </li>
                                    <li><a href="#">Tiếng Trung</a></li>
                                </ul>
                            </div>
        
                            <!-- currentcy -->
                            <div class="menu-top-bar currentcy">
        
                                <a href="#">USD <i class="arrow-down-icon fa-solid fa-caret-down"></i></i></a>
                                <ul class="sub-menu-top-bar">
                                    <li><a href="#">VND</a> </li>
                                    <li><a href="#">EUR</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- menu-header -->
                <nav class="container-menu-header">
        
                    <!-- logo -->
                    <a href="index.html" class="logo">
                        <img src="assets/images/LogoShopWatch.png" alt="IMG_LOGO">
                    </a>
        
        
                    <!-- menu -->
                    <div id="nav-main-menu" >
                        <ul>
                            <li><a class="hover-underline-animation" href="index.html">Home</a></li>
                            <li><a class="hover-underline-animation" href="watches.html">Watches</a></li>
                            <li><a class="hover-underline-animation" href="about.html">About</a></li>
                            <li><a class="hover-underline-animation" href="blog.html">Blog</a></li>
                            <li><a class="hover-underline-animation" href="contact.html">Contact</a></li>
                        </ul>
        
                    </div>
                    <div class="nav-icon-menu">
                        <ul>
                            <li class="icon-search">
        
                                <div class="search__toggle">
                                    <span class="icon-cancel-search">
        
                                    </span>
                                    <i class="fa-solid fa-magnifying-glass " id="icon_search"></i>
        
                                </div>
                            </li>
                            <li class="icon-cart">
                                <div><i class="fa-solid fa-cart-shopping"></i></div>
                            </li>
        
                            <li class="icon-hamburger">
                                
                                <i class="ti-menu"></i> 
                            </li>
        
                        </ul>
                    </div>
                </nav>
        
            </div>
        
        </div>
   `
    }
}
customElements.define('my-header', MyHeader);

//create footer
class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="footer-container">
  <div class="container">
    <div class="content-footer">
      <div class="widget-list">
        <div class="widget">
          <div class="widget-title">
            <h2>Store</h2>
          </div>
          <div class="widget-content">
            <a class="hover-underline-animation">Man</a>
            <br>
            <a class="hover-underline-animation">Women</a>
            <br>
            <a class="hover-underline-animation" href="contact.html">Store location</a>
            <br>
            <a class="hover-underline-animation" href="blog.html">Blog</a>
            <br>
            <a class="hover-underline-animation" href="about.html">About</a>
            <br>
          </div>
        </div>

        <div class="widget">
          <div class="widget-title">
            <h2>Information team</h2>
          </div>
          <div class="widget-content">
            <p>Trần Trọng Hoàng</p>
            <p>Bùi Lê Hoài An</p>
          </div>
        </div>

        <div class="widget">
          <div class="widget-title">
            <h2>Follow Us</h2>
          </div>
          <div class="widget-content">
            <p>Help us serve more customers</p>
            <ul>
              <li><i class="fa-brands fa-square-facebook"></i></li>
              <li><i class="fa-brands fa-twitter"></i></li>
              <li><i class="fa-brands fa-instagram"></i></li>
              <li><i class="fa-brands fa-pinterest"></i></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="copyright">
        Copyright <i class="fa-regular fa-copyright"></i> Team 7 | Made with <i class="ti-heart"></i> by Tran Trong
        Hoang and Bui Le Hoai An
      </div>
    </div>
  </div>
</div>
      `
    }
}
customElements.define('my-footer', MyFooter);


// event for sidebar
let menuBtn = document.querySelector(".icon-hamburger");
var sidebar = document.getElementById("mySidebar");
//var contentPage = document.getElementById("content-page");
var widthSidebar = getComputedStyle(document.documentElement).getPropertyValue('--width-sidebar');
var overlay = document.getElementById("myOverlay");

menuBtn.addEventListener("click", () => {

    //open sidebar
    if (sidebar.offsetLeft < 0) {
        openSidebar();
        overlay.style.display = "block";

    }
    //close sidebar
    else {
        closeSidebar();
    }
})

overlay.addEventListener("click", () => {
    // close sidebar
    closeSidebar();
    overlay.style.display = "none";

})

function openSidebar() {
    sidebar.style.left = '0';
    // if (screen.width > 992) {
    //     contentPage.style.marginLeft = widthSidebar;
    // }

}
function closeSidebar() {
    sidebar.style.left = ('-' + widthSidebar).replace(/\s/g, '');
    // contentPage.style.marginLeft = '0';
}



//js for header
// toggle for search button
let iconSearch = document.querySelector(".search__toggle");
iconSearch.addEventListener("click", () => iconSearch.classList.toggle("toggled"))

// funtion for highlight navigation header

var current = 0;
for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].className != "logo" && document.links[i].href === document.URL) {
        current = i;
        break;
        
    }
}
document.links[current].className += " actived-page";


// // make header sticky when scroll
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var headerTop = document.getElementById("topBar");
//var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > 40) {
    header.classList.add("sticky");
    if(window.getComputedStyle(headerTop).display == "none"){
        header.style.top = '0';
    }
   
    
  } else {
    header.classList.remove("sticky");
  }
  
  
}
