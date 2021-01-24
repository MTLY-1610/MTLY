let balls = document.getElementsByClassName("zero");

document.onmousemove = function () {
  let x = (window.event.clientX * 20) / window.innerWidth + "%";
  let y = (window.event.clientY * 20) / window.innerHeight + "%";

  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = "translate(-" + x + ",-" + y + ")";
  }

  console.log("x =" + x);
  console.log("y =" + y);
};
