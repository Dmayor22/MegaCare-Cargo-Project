const hero = document.getElementById("hero");
const images = [
  "Assets/Images/Banner.jpg",
  "Assets/Images/Banner.jpg",
  "Assets/Images/Banner.jpg",
];
let currentImageIndex = 0;

function changeBackground() {
  hero.style.backgroundImage = `url(${images[currentImageIndex]})`;
  currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Change background every 5 seconds
setInterval(changeBackground, 5000);

// Set initial background
changeBackground();
