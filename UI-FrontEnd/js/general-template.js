// create sidebar
class MySidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      
   `
    }
}
customElements.define('my-sidebar', MySidebar);

//create header
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `   
        <!-- Header desktop -->
        <div class="container-menu-desktop">
            <div class="header-top">
                <!-- Topbar -->
                <div class="top-bar">
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
                    <div class="nav-main-menu">
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
                                <div onclick="openSidebar()"><i class="ti-menu"></i> </div>
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

//create header
class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
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
                <a class="hover-underline-animation" >Women</a>
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
        Copyright <i class="fa-regular fa-copyright"></i> Team 5 | Made with <i class="ti-heart"></i> by Tran Trong
        Hoang and Bui Le Hoai An
    </div>
</div>
</div>
      `
    }
}
customElements.define('my-footer', MyFooter);

//js for header
// toggle for search button
let iconSearch = document.querySelector(".search__toggle");
iconSearch.addEventListener("click", () => iconSearch.classList.toggle("toggled"))
