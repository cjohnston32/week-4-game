// Version 1.0$
var score = 0;
var crystal = [Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1)];  // Random value array from 1-12 for crystals
var goal = Math.floor((Math.random() * 100) + 20);
function clicker(num){
  if(num===1) {
    score = score + crystal[0];
    document.getElementById('score').innerHTML = score;
    console.log(score);
  }
  if(num===2) {
    score = score + crystal[1];
    document.getElementById('score').innerHTML = score;
    console.log(score);
  }
  if(num===3) {
    score = score + crystal[2];
    document.getElementById('score').innerHTML = score;
    console.log(score);
  }
  if(num===4) {
    score = score + crystal[3];
    document.getElementById('score').innerHTML = score;
  }
}
var wins = 0;
var losses = 0;
if(score>goal) {  // Loss!
  losses++;
  document.getElementById('lossesS').innerHTML = losses;
  score = 0;
}
else if(score===goal) {  // Win!
  wins++;
  document.getElementById('winsS').innerHTML = wins;
  score = 0;
}
window.onload = function() {
var num = 0;
var wins = 0;
var losses = 0;
document.getElementById('goal').innerHTML = goal;
}
if(score>goal) {  // Loss!
  losses++;
  document.getElementById('lossesS').innerHTML = losses;
  score = 0;
}
else if(score===goal) {  // Win!
  wins++;
  document.getElementById('winsS').innerHTML = wins;
  score = 0;
}
