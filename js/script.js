const socialIcons = document.querySelectorAll('.social-icon');

socialIcons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    icon.classList.add('rotate');
  });
  icon.addEventListener('mouseout', () => {
    icon.classList.remove('rotate');
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
  
    const handleFadeIn = () => {
      fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          el.classList.add("fade-in-visible");
        }
      });
    };
  
    handleFadeIn();
  
    window.addEventListener("scroll", handleFadeIn);
  });
  