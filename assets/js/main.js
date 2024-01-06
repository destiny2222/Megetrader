const navbarToggle = document.querySelector('.hamburger-menu');
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('nav');
const overlay = document.querySelector('.menu-overlay');
const Closemenu = document.querySelector('.mobile-menu-close');

navbarToggle.addEventListener('click', function() {
   menu.classList.add("active-nav");
   hamburger.classList.add("active-nav");
   overlay.classList.add("active-nav");
});


Closemenu.addEventListener("click", function(){
    menu.classList.remove("active-nav");
    hamburger.classList.remove("active-nav");
   overlay.classList.remove("active-nav");
});
  
   
   /* ==================================================
           #  Testimonials Carousel
    ===============================================*/
    $('#partner-silder').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay:true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    });





 
 
        
 