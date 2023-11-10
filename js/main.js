const menuBtn = document.querySelector('.hamburger__btn');
const mobileNav = document.getElementById('navbar');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('close');
    menuOpen = true;
    mobileNav.style.display = 'flex';
    mobileNav.classList.add('active');
    
   }else {
    menuBtn.classList.remove('close');
    menuOpen = false;
    mobileNav.style.display = 'flex';
    mobileNav.classList.remove('active');
   }
})
;

var lastScrollTop = 0;
navbar = document.getElementById("nav");
window.addEventListener('scroll', function(){
  var scrollTop = window.pageYOffset || documentElement.scrollTop;
  if (scrollTop > lastScrollTop){
    navbar.style.top="-700px";
    mobileNav.classList.remove('active');
    menuBtn.classList.remove('close');
  }else{
    navbar.style.top='0';
  }
  lastScrollTop = scrollTop;
})
