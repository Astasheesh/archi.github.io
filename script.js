document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const dropdown = document.querySelector('.dropdown');
        
    burgerMenu.addEventListener('click', function(e) {
        dropdown.classList.toggle('active');
        e.stopPropagation();
    });
        
    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target) && !burgerMenu.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
});
