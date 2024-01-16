const navbarToggle = document.querySelector('.hamburger-menu');
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('nav');

navbarToggle.addEventListener('click', function() {
   menu.classList.toggle("active-nav");
   hamburger.classList.toggle("active-nav");
});


// dark theme

document.addEventListener('DOMContentLoaded', function () {
    const switchModeButton = document.querySelector('.switch-mode');
    const sunIcon = document.querySelector('.sun');
    const moonIcon = document.querySelector('.moon');
    const body = document.body;

    switchModeButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        // Toggle visibility of sun and moon icons
        sunIcon.classList.toggle('hidden');
        moonIcon.classList.toggle('hidden');
    });
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





 
 
        
 