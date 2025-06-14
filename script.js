// Toggle dark mode and persist across pages
function toggleDarkMode() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Load saved theme
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  // Add hover animation to logo
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.style.cursor = "pointer";
    logo.addEventListener("click", () => {
      window.location.href = "index.html";
    });
    logo.addEventListener("mouseenter", () => {
      logo.style.transform = "scale(1.1) rotate(-2deg)";
      logo.style.transition = "transform 0.3s ease";
    });
    logo.addEventListener("mouseleave", () => {
      logo.style.transform = "scale(1) rotate(0deg)";
    });
  }
});

// Scroll to top button
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Toggle hamburger menu
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("open");
}

// Scroll progress bar
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById("progressBar").style.width = scrollPercent + "%";
});

// Fade-in animations on scroll
const faders = document.querySelectorAll(".fade-in, .slide-in");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

faders.forEach((el) => observer.observe(el));

// Demo contact form submission
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent successfully! (This is a demo.)");
    form.reset();
  });
}
