class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        
    <link rel="stylesheet" href="./css/header.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    <link rel="stylesheet" href="../assets/themify-icons/themify-icons.css">
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

                                <a  href="#">My Account <i class="arrow-down-icon fa-solid fa-caret-down"></i></a>
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
                    <a href="#" class="logo">
                        <img src="assets/images/LogoShopWatch.png" alt="IMG_LOGO">
                    </a>


                    <!-- menu -->
                    <div class="nav-main-menu">
                        <ul>
                            <li><a class="hover-underline-animation" href="#">Home</a></li>
                            <li><a class="hover-underline-animation" href="#">Watches</a></li>
                            <li><a class="hover-underline-animation" href="#">About</a></li>
                            <li><a class="hover-underline-animation" href="#">Blog</a></li>
                            <li><a class="hover-underline-animation" href="#">Contact</a></li>
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
    <script src="./js/header.js"></script>
   `
}
}
customElements.define('my-header', MyHeader);