var slideIndex = 1;
var d = new Date();
var month = d.getMonth();
showConstSlides(slideIndex);

function plusCSlides(n) {
  showConstSlides(slideIndex += n);
}

function currentCSlide(n) {
  showConstSlides(slideIndex = n);
}

function showConstSlides(n) {
  var i;
  var slides = document.getElementsByClassName(month + "c");
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
