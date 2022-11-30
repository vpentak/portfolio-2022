let slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex > slides.length) {slideIndex = 1}
  if (slideIndex <= 0) {slideIndex = slides.length}
  slides[slideIndex-1].style.display = "flex";
  //setTimeout(showSlides, 5000); //4 seconds
}