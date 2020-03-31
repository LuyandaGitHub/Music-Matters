const mobileNav =  document.querySelector('.mobile-nav');
const openMobileNavBtn = document.querySelector('.open-mobile-nav-icon');
const closeMobileNavBtn = document.querySelector('.close-mobile-nav-icon');

closeMobileNavBtn.addEventListener('click', function() {
     mobileNav.classList.remove('active');
})

openMobileNavBtn.addEventListener('click', function() {
     mobileNav.classList.add('active');
})