// For navbar responsive
const toggleButton = document.getElementsByClassName('hamburger-menu')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

var $ = function (id) {
  return document.getElementById(id);
};

// For slideshow
let slideIndex = 1;
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
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


  const countDown = new Date("August 30, 2024 11:45:53").getTime();
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDown - now;
    var days = Math.floor(distance / day);
    var hours = Math.floor((distance % day) / hour);
    var minutes = Math.floor((distance % hour) / minute);
    var seconds = Math.floor((distance % minute) / second);

    console.log(days);
    console.log(hours);
    console.log(minutes);
    console.log(seconds);

    document.getElementById("day-timer").innerHTML = days;
    document.getElementById("hour-timer").innerHTML = hours;
    document.getElementById("minute-timer").innerHTML = minutes;
    document.getElementById("second-timer").innerHTML = seconds;
  }, 1000);

