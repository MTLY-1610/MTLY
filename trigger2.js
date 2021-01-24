const trigger2 = document.querySelector(".trigger_2");
const img2 = document.querySelectorAll(".img_2");
const T2L = gsap.timeline({ paused: true });

T2L.to(img2, { scale: 1, duration: 0.4, stagger: 0.1, ease: "back.out(1.7)" });

trigger2.addEventListener("mouseenter", () => {
  T2L.play();
});
trigger2.addEventListener("touchstart", () => {
  T2L.play();
});
trigger2.addEventListener("click", () => {
  T2L.reverse();
});
