// script.js
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animate-up");
  animatedElements.forEach(el => {
    el.style.opacity = 0;
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 500);
  });
});