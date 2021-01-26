var string =
  "I am a French art director and junior front end developer living in Göteborg. My prior graphic design education and a strong interest for UI design led me to study front end development . I now offer my freelance services as such. I am very motivated and if the conditions allow it, I will bring croissants :)";
var array = string.split("");
var timer;

function frameLooper() {
  if (array.length > 0) {
    document.getElementById("about").innerHTML += array.shift();
  } else {
    clearTimeout(timer);
  }
  loopTimer = setTimeout("frameLooper()", 70);
}
frameLooper();
