import AOS from "aos";
AOS.init({
  duration: 1000, // animation speed
  once: true      // only animate once
});
const boxes = document.querySelectorAll('.box');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // stops re-triggering
    }
  });
}, { threshold: 0.1 });

boxes.forEach(box => {
  observer.observe(box);
});