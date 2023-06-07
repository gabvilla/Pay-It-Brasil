let hamburger = document.querySelector('.hamburger');
   

   hamburger.addEventListener('click', (e) => {
      navItems = document.querySelector('.nav-bar-items');
      navNav = document.querySelector('.nav-bar-nav');

      navItems.classList.toggle('active');
      navNav.classList.toggle('active')
   })

const controls = document.querySelectorAll('.btn');
let currentSlide = 0
const slides = document.querySelectorAll('.slide');
let maxSlides = slides.length;

controls.forEach((btn) => {
   btn.addEventListener('click', (e) => {
      let isLeft = btn.classList.contains('left-btn');

      if (isLeft) {
         currentSlide--
      } else{
         currentSlide++
      };

      if (currentSlide >= maxSlides){
         currentSlide = 0
      } else if (currentSlide < 0){
         currentSlide = maxSlides - 1
      };

      slides.forEach((slide) => {slide.classList.remove('current-slide')});

      slides[currentSlide].scrollIntoView({
         behavior: "smooth",
         inline: "center"
      });

      
      slides[currentSlide].classList.add('current-slide');
   });
});
