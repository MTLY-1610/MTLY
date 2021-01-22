function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".ul_second");
    const navLinks = document.querySelectorAll(".ul_second li a");
    
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        // Burger Animation
        burger.classList.toggle("toggle");

    });
   
    
}

navSlide();
// const navLinks = document.querySelectorAll(".ul_second li a");
// navLinks.on("click", function(){
//     $('burger').click();
//   });

// function navHide() {
//     const toggles = document.querySelector(".toggle");
//     const navLinks = document.querySelectorAll(".ul_second li a");
    
//     navLinks.addEventListener("click", () => {
//         //Toggle Nav
//         toggles.classList.toggle("burger");

//     });
   
    
// }
// navHide();