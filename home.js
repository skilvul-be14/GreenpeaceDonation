const mainElement = document.getElementById("navbar_menu");

// background
var slideIndex = 1;
showSlide(slideIndex);

function nextslide(n) {
  showSlide((slideIndex += n));
}

function dotslide(n) {
  showSlide((slideIndex = n));
}

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("imgslide");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

// otomatis slider

let start = 0;
otomatis();

function otomatis() {
  const sliders = document.querySelectorAll(".imgslide");

  for (let i = 0; i < sliders.length; i++) {
    sliders[i].style.display = "none";
  }

  if (start >= sliders.length) {
    start = 0;
  }

  sliders[start].style.display = "block";
  console.log("gambar ke" + start);
  start++;

  setTimeout(otomatis, 2000);
}

// mainElement.innerHTML = `
//         <div class="menu">
//           <ul>
//             <li><a href="home.html">Home</a></li>
//             <li><a href="donasi page.html">Donasi</a></li>
//             <li><a href="">Login</a></li>
//             <li><a href="">Sign Up</a></li>
//           </ul>
//         </div>

// `;
