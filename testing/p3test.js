let url = "https://api.nasa.gov/planetary/apod?api_key=xeOkA8fAHKg2aQW2sfFy69kVm9l9rcCdXRmXm5zc";

// let randomImg = document.querySelector(".slideshow-container");
// let bb = document.getElementById('bt1')
// let fb = document.getElementById('bt2');

// // bb.addEventListener("click", picForward)

fetch(url) 
  .then(res => res.json())
  .then(data => {
    renderResults(data)
    randomImg.src = data.url
  })


// function renderResults(picData) {
// console.log("test")
// }

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
