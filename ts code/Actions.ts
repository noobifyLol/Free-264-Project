import AOS from "aos";
AOS.init({
  duration: 1000, // animation speed
  once: true      // only animate once
});
document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('#boxes .box');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  boxes.forEach(box => observer.observe(box));
});