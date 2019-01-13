let slideIndex = 1;
const vid = document.getElementById('videoSlide');
const audio = document.getElementById('musicSlide');
playMusic();

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' activated', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' activated';

  if (slideIndex === 2) {
    playVid();
  } else {
    pauseVid();
  }
  if (slideIndex === 1) {
    playMusic();
  } else {
    pauseMusic();
  }
}

function playVid() {
  vid.play();
}

function pauseVid() {
  vid.pause();
  vid.currentTime = 0;
}
function playMusic() {
  audio.play();
}

function pauseMusic() {
  audio.pause();
}
