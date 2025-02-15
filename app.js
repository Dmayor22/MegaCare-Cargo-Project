const hero = document.getElementById("hero");
const images = [
  "Assets/Images/IMG-20250112-WA0000.jpg",
  "Assets/Images/ship.jpeg",
  "Assets/Images/truck.jpeg",
  "Assets/Images/download.jpeg",
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

// Function to animate the counter
function animateCounter(id, target, duration) {
  const counterElement = document.getElementById(id);
  let start = 0;
  const increment = target / (duration / 16); // 16ms for 60fps

  const updateCounter = () => {
    start += increment;
    if (start < target) {
      counterElement.textContent = Math.ceil(start);
      requestAnimationFrame(updateCounter);
    } else {
      counterElement.textContent = target;
    }
  };

  updateCounter();
}

// Start counters when the section is in view
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounter("counter1", 1500, 2000); // 1500 shipments in 2 seconds
      animateCounter("counter2", 1200, 2000); // 1200 customers in 2 seconds
      animateCounter("counter3", 15, 2000); // 15 years in 2 seconds
      animateCounter("counter4", 50, 2000); // 50 partners in 2 seconds
      observer.disconnect(); // Stop observing after animation starts
    }
  });
});

observer.observe(document.getElementById("counter"));
