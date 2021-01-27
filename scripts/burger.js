function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".ul_second");
  const navLinks = document.querySelectorAll(".ul_second li a");
  // closes  Links
  nav.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
  });
  // Animate Links
  burger.addEventListener("click", () => {
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    //Toggle Nav
    nav.classList.toggle("nav-active");

    // Burger Animation
    burger.classList.toggle("toggle");
  });
}
navSlide();
