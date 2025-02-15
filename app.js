const hero = document.getElementById("hero");
const images = [
  "Assets/Images/IMG-20250112-WA0000.jpg",
  "Assets/Images/ship.jpeg",
  "Assets/Images/truck.jpeg",
  "Assets/Images/download.jpeg"
];
let currentImageIndex = 0;

function changeBackground() {
  // Set the background image
  hero.style.backgroundImage = `url(${images[currentImageIndex]})`;

  // Move to the next image
  currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Change background every 5 seconds
setInterval(changeBackground, 5000);

// Set initial background
changeBackground();

// Adjust background on window resize
window.addEventListener("resize", () => {
  hero.style.backgroundSize = "cover";
  hero.style.backgroundPosition = "center";
});
