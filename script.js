const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
      const navLinks = document.querySelector(".nav-links");

      mobileMenuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });

      window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });

      gsap.from(".header-content h1", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
      });

      gsap.from(".header-content p", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.8,
      });

      gsap.from(".social-icons", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 1,
      });

      const projectCards = document.querySelectorAll(".project-card");
      projectCards.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2,
        });
      });

      document.querySelectorAll(".nav-links a").forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const section = document.querySelector(this.getAttribute("href"));
          window.scrollTo({
            top: section.offsetTop - 70,
            behavior: "smooth",
          });
          navLinks.classList.remove("active");
        });
      });

      document
        .querySelector(".contact-form")
        .addEventListener("submit", function (e) {
          e.preventDefault();
          alert("Thank you for your message! I will get back to you soon.");
          this.reset();
        });

      const backToTop = document.getElementById("backToTop");

      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          backToTop.classList.add("show");
        } else {
          backToTop.classList.remove("show");
        }
      });

      backToTop.addEventListener("click", () => {
        gsap.to(window, { duration: 1, scrollTo: { y: 0, autoKill: true } });
      });