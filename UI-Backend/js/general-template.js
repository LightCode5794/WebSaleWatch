// create sidebar
class MySidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="sidebar">
        <div>
            <div id="sidebar-container" class=" sidebar-container d-flex p-3 flex-column flex-shrink-0  bg-light">
                <div
                    class="sidebar-logo d-flex align-items-center text-decoration-none justify-content-between border-bottom">

                    LOGO
                    <button class="btn btn-close btn-close-sidebar"></button>

                </div>

                <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item">
                        <a href="dashboard.html" class="nav-link link-dark active d-flex align-items-center" aria-current="page">

                            <i class="nav-link__icon ti-dashboard"></i>
                            <span class="nav-link__title">Dashboard</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="btn sub-btn nav-link link-dark align-items-center rounded collapsed text-start d-flex justify-content-between"
                            data-bs-toggle="collapse" data-bs-target="#catalog-collapse" aria-expanded="false">
                            <div class="d-flex align-items-center">
                                <i class="nav-link__icon ti-server"></i>
                                <span class="sub-btn__title">Catalogs</span>
                            </div>

                            <span class="sub-btn__arrow"><i class="ti-angle-right"></i></span>
                        </a>
                        <div class="nav-item__sub-menu collapse" id="catalog-collapse">
                            <ul class="sub-btn-nav list-unstyled fw-normal">
                                <li><a href="productsList.html" class="sub-btn-nav__item nav-link link-dark rounded">Products List</a>
                                </li>
                                <li><a href="#" class="sub-btn-nav__item nav-link link-dark rounded">Categories list</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="btn sub-btn nav-link link-dark align-items-center rounded collapsed text-start d-flex justify-content-between"
                            data-bs-toggle="collapse" data-bs-target="#customer-collapse" aria-expanded="false">
                            <div class="d-flex align-items-center">
                                <i class="nav-link__icon ti-user"></i>
                                <span class="sub-btn__title">Customers</span>
                            </div>
                            <span class="sub-btn__arrow"><i class="ti-angle-right"></i></span>
                        </a>
                        <div class="collapse nav-item__sub-menu" id="customer-collapse">
                            <ul class="sub-btn-nav list-unstyled fw-normal">
                                <li><a href="customersList.html" class="sub-btn-nav__item nav-link link-dark rounded">Customers List</a>
                                </li>
                                <li><a href="#" class="sub-btn-nav__item nav-link link-dark rounded">Customer</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="btn sub-btn nav-link link-dark align-items-center rounded collapsed text-start d-flex justify-content-between"
                            data-bs-toggle="collapse" data-bs-target="#oder-collapse" aria-expanded="false">
                            <div class="d-flex align-items-center">
                                <i class="nav-link__icon ti-shopping-cart-full"></i>
                                <span class="sub-btn__title">Orders</span>
                            </div>
                            <span class="sub-btn__arrow"><i class="ti-angle-right"></i></span>
                        </a>
                        <div class="collapse nav-item__sub-menu" id="oder-collapse">
                            <ul class="sub-btn-nav list-unstyled fw-normal">
                                <li><a href="odersList.html" class="sub-btn-nav__item nav-link link-dark rounded">Orders List</a>
                                </li>
                                <li><a href="#" class="sub-btn-nav__item nav-link link-dark rounded">Order</a></li>
                            </ul>
                        </div>
                    </li>
                    <!-- <li class="nav-item">
                        <a class="btn sub-btn nav-link link-dark align-items-center rounded collapsed text-start d-flex justify-content-between"
                            data-bs-toggle="collapse" data-bs-target="#staff-collapse" aria-expanded="false">
                            <div class="d-flex align-items-center">
                                <i class="nav-link__icon ti-id-badge"></i>
                                <span class="sub-btn__title">Staffs</span>
                            </div>
                            <span class="sub-btn__arrow"><i class="ti-angle-right"></i></span>
                        </a>
                        <div class="collapse nav-item__sub-menu" id="staff-collapse">
                            <ul class="sub-btn-nav list-unstyled fw-normal">
                                <li><a href="#" class="sub-btn-nav__item nav-link link-dark rounded">Staffs List</a>
                                </li>
                                <li><a href="#" class="sub-btn-nav__item nav-link link-dark rounded">Staff</a></li>
                            </ul>
                        </div> --!>
                    </li>
                </ul>
               
                <div class="admin-drop dropdown">
                    <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                        id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?w=1380&t=st=1670534289~exp=1670534889~hmac=bb999a83002a026b60c324104a2233f750aa17fb936fc01f86ed019ab0ea9654"
                            alt="" width="32" height="32" class="rounded-circle me-2">
                        <strong>Admin</strong>
                    </a>
                    <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
   `
    }
}
customElements.define('my-sidebar', MySidebar);

//create header
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `   
        <header id="header">
        <div class="header-container border-bottom shadow">
            <button class="menu-btn btn">
                <i class="fas fa-bars"></i>
            </button>
            <div class="search-conatiner">

                <button class="btn-search">
                    <i class="ti-search" id="icon_search"></i>
                </button>
                <input type="search" class="search-field" placeholder="Search blogs…" value="" name=""
                    autocomplete="off">
            </div>
            <div class="header__permission">Admin</div>
        </div>
    </header>
   `
    }
}
customElements.define('my-header', MyHeader);

//create header
class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer id="footer">
            <div class="footer-container border-top d-flex justify-content-between align-items-center ">

                <span class="copyright p-3 fw-light" style="font-size: 13px;">
                    Copyright <i class="fa-regular fa-copyright"></i> Team 7 - Web Watch Clinic 2023
                </span>

                <span class="author p-3 fw-light" style="font-size: 13px">
                    Made with <i class="ti-heart"></i> by Tran Trong
                    Hoang and Bui Le Hoai An
                </span>
            </div>
        </footer>
      `
    }
}
customElements.define('my-footer', MyFooter);


// event for sidebar
let menuBtn = document.querySelector(".menu-btn");
var sidebar = document.getElementById("sidebar-container");
var contentPage = document.getElementById("content-page");
var widthSidebar = getComputedStyle(document.documentElement).getPropertyValue('--width-sidebar');
let btnCloseSidebar = document.querySelector(".btn-close-sidebar");

menuBtn.addEventListener("click", () => {

    //open sidebar
    if (sidebar.offsetLeft < 0) {
       openSidebar();

    }
    //close sidebar
    else {
       closeSidebar();
    }
})

btnCloseSidebar.addEventListener("click", () => {
    // close sidebar
    closeSidebar();
})

function openSidebar(){
    sidebar.style.left = '0';
    console.log(screen.width)
    if (screen.width > 992) {
        contentPage.style.marginLeft = widthSidebar;
    }

}
function closeSidebar(){
    sidebar.style.left = ('-' + widthSidebar).replace(/\s/g, '');
    contentPage.style.marginLeft = '0';
}




