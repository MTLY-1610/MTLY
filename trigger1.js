const trigger1 = document.querySelector('.trigger_1');
const img1 = document.querySelectorAll('.img_1');

const TL = gsap.timeline({paused: true});

TL 
.to(img1, {scale: 1, duration: 0.4, stagger: 0.1, ease: "back.out(1.7)"});

trigger1.addEventListener('mouseenter', () => {

    TL.play();

})
trigger1.addEventListener('ontouchstart', () => {

    TL.play();

})
trigger1.addEventListener('click', () => {

    TL.reverse();

})


