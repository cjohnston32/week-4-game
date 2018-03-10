// Version 1.0
window.onload = function() {
  var score = 0;
  var wins = 0;
  var losses = 0;
  var goal = Math.floor((Math.random() * 120) + 19);  // Random value from 19-120 for goal
  var crystal = [Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1)];  // Random value array from 1-12 for crystals
  document.getElementById('goal').innerHTML = goal;
  // Every round the player will either 1) Win, 2) Lose, or 3) Continue
    document.getElementById('c0').onclick = function() {
      score = score + crystal[0];
      document.getElementById('score').innerHTML = score;
    };
    document.getElementById('c1').onclick = function() {
      score = score + crystal[1];
      document.getElementById('score').innerHTML = score;
    };
    document.getElementById('c2').onclick = function() {
      score = score + crystal[2];
      document.getElementById('score').innerHTML = score;
    };
    document.getElementById('c3').onclick = function() {
      score = score + crystal[3];
      document.getElementById('score').innerHTML = score;
    };

    score = document.getElementById('score').innerHTML;
    if(score>goal) {  // Loss!
      losses++;
      document.getElementById('losses').innerHTML = losses;
      score = 0;
    }
    else if(score===goal) {  // Win!
      wins++;
      document.getElementById('wins').innerHTML = wins;
      score = 0;
    }
}
