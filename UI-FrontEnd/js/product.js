// event pick picture in nav and scroll the carousel
// external js: flickity.pkgd.js


// dynamicallyLoadScript('https://unpkg.com/flickity-fullscreen@2/fullscreen.js');
var $carousel = $('.carousel').flickity({
    lazyLoad: 2,
    initialIndex: 2,
    pageDots: false,
});

var $carouselNav = $('.carousel-nav');
var $carouselNavCells = $carouselNav.find('.img-mini');

$carouselNav.on('click', '.img-mini', function (event) {
    var index = $(event.currentTarget).index();
    $carousel.flickity('select', index);
});

var flkty = $carousel.data('flickity');
var navTop = $carouselNav.position().top;
var navCellHeight = $carouselNavCells.height();
var navHeight = $carouselNav.height();

$carousel.on('select.flickity', function () {
    // set selected nav cell
    $carouselNav.find('.is-nav-selected').removeClass('is-nav-selected');
    var $selected = $carouselNavCells.eq(flkty.selectedIndex)
        .addClass('is-nav-selected');
    // scroll nav
    var scrollY = $selected.position().top +
        $carouselNav.scrollTop() - (navHeight + navCellHeight) / 2;
    $carouselNav.animate({
        scrollTop: scrollY
    });
});


function dynamicallyLoadScript(url) {
    var script = document.createElement("script");  // create a script DOM node
    script.src = url;  // set its src to the provided URL

    document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}


// event for add select num of product

function incrementValue()
{
    var value = parseInt(document.getElementById('qty-text').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value<10){
        value++;
            document.getElementById('qty-text').value = value;
    }
}
function decrementValue()
{
    var value = parseInt(document.getElementById('qty-text').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById('qty-text').value = value;
    }

}