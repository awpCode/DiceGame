var diceLeft = Math.floor(Math.random()*6) + 1;
var diceRight = Math.floor(Math.random()*6) + 1;
var leftImage = "images/dice" + diceLeft.toString() + ".png";
var rightImage = "images/dice" + diceRight.toString() + ".png";
document.querySelector(".img1").setAttribute("src",leftImage);
document.querySelector(".img2").setAttribute("src",rightImage);
for(var i=0;i<=100;i++);
var left = document.querySelector(".img1").getAttribute("src");
var right = document.querySelector(".img2").getAttribute("src");
var p1 = Number(left[11]);
var p2 = Number(right[11]);
if(p1>p2)
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
else if(p2>p1)
  document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
else
  document.querySelector("h1").innerHTML = "Draw";
