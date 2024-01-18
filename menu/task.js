document.addEventListener("DOMContentLoaded", function() {
    let menuLinks = document.querySelectorAll('.menu__link');

    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            let menuItem = link.closest('.menu__item');
            if (menuItem && menuItem.querySelector('.menu_sub')) {
                event.preventDefault(); 
                menuItem.querySelector('.menu_sub').classList.toggle('menu_active');
            } else {
                event.preventDefault();
            }
        });
    });
});

