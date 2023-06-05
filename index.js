/*De primeiro momento, precisamos selecionar os controles e os slides*/
const controls = document.querySelectorAll('button');
let currentItem = 0;
let currentDot = 0;
const dots = document.querySelectorAll('div.dots');
const slides = document.querySelectorAll('div.slide');
const maxSlides = slides.length;
const maxDots = dots.length

/*Depois, testamos se o controle clickado é para a esquerda*/
controls.forEach((button) => {
   button.addEventListener('click', (e) => {
      isLeft = e.target.classList.contains('button-left');
/*Caso sim, nosso índice é alterado em -1*/
      if (isLeft){
         currentItem -= 1;
         currentDot -= 1;
      } else{
         currentItem += 1;
         currentDot += 1;
      }
/*Caso esteja no último índice, ele retorna para o primeiro e vice-versa*/
      if (currentItem >= maxSlides){
         currentItem = 0;
         currentDot = 0;
      }

      if (currentItem < 0){
         currentItem = maxSlides - 1;
         currentDot = maxDots -1;
      }

/*Nesse passo, removemos a classe de slide atual*/
      slides.forEach((slide) =>{slide.classList.remove('current-slide')});

      dots.forEach((dot) => {dot.classList.remove('current-dot')});

      slides[currentItem].scrollIntoView({
         inline: 'center',
         behavior: 'auto',
      })
      slides[currentItem].classList.add('current-slide')
      dots[currentDot].classList.add('current-dot')
   })
})

let hamburger = document.querySelector('.hamburger');
   

   hamburger.addEventListener('click', (e) => {
      navItems = document.querySelector('.nav-bar-items');
      navNav = document.querySelector('.nav-bar-nav');

      navItems.classList.toggle('active');
      navNav.classList.toggle('active')
   })
