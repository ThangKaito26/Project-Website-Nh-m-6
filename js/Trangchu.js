let currentSlide = 0;  

function showSlide(index) {  
  const slides = document.querySelectorAll('.carousel-item');  
  const totalSlides = slides.length;  

  // Wrap around the index if out of bounds  
  if (index >= totalSlides) {  
    currentSlide = 0;  
  } else if (index < 0) {  
    currentSlide = totalSlides - 1;  
  } else {  
    currentSlide = index;  
  }  

  const offset = -currentSlide * 100;  
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;  

  slides.forEach((slide, i) => {  
    slide.classList.remove('active');  
    if (i === currentSlide) {  
      slide.classList.add('active');  
    }  
  });  
}  

function nextSlide() {  
  showSlide(currentSlide + 1);  
}  

function prevSlide() {  
  showSlide(currentSlide - 1);  
}