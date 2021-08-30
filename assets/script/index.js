function Animate(){
  const itens = document.querySelectorAll('[data-animateUp]');
  itens.forEach((el, index) => {
    setTimeout(() => el.classList.add('active'), index * 300)
  });
}Animate();

let slideIndex = 0;
function sliderHeader(){
  const slides = document.querySelectorAll("[data-slider] > div");
  
  slides.forEach(el => {
    el.classList.remove("activeSlider");
  })
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex - 1].classList.add("activeSlider");  
  setTimeout(sliderHeader, 2000);

}sliderHeader();

function scrollAnimate(){
  const element = document.querySelector('[data-scroll]');
  window.addEventListener("scroll", e => {
    const distance = window.pageYOffset;
    if(distance > element.offsetTop - 300){
      const itens = element.querySelectorAll('div');
      itens.forEach((el, index) => {
        el.classList.add("activeDown");
      });
    }
  });

}scrollAnimate();

function productsMenu(){
  const navButton = document.querySelector("[data-buttonOpen]");
  const productScreen = document.querySelector("[data-menuProduct]");
  navButton.addEventListener("click", e => {
    productScreen.classList.toggle("activeProduct");
  });
  
}productsMenu();