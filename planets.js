var slideIndex = 1;
var d = new Date();
var month = d.getMonth();
showPlanetSlides(slideIndex);

function plusPSlides(n) {
  showPlanetSlides(slideIndex += n);
}

function currentPSlide(n) {
  showPlanetSlides(slideIndex = n);
}

function showPlanetSlides(n) {
  var i;
  var slides = document.getElementsByClassName(month + "p");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
