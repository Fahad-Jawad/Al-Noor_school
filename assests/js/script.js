const menuToggle = document.getElementById("menu-toggle");
      const mobileNav = document.getElementById("mobile-nav");
      const closeBtn = document.getElementById("close-btn");

      menuToggle.addEventListener("click", () => {
        mobileNav.classList.toggle("show");
      });

      closeBtn.addEventListener("click", () => {
        mobileNav.classList.remove("show");
      });

      

      AOS.init({
        duration: 600,
        once: false,
        mirror: true,
      });

      const swiper = new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        effect: "creative",
        autoplay: {
          delay: 2000,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        creativeEffect: {
          prev: {
            shadow: false,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        },
      });