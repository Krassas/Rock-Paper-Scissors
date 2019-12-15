var scoreUser = 0;
var scoreComputer = 0;

// Resets game 
function init() {
    document.querySelector(".number-1").textContent = "0";
    document.querySelector(".number-2").textContent = "0"; 
    document.querySelector(".nodisplay").style.display ="none";
    document.querySelector(".game").style.display ="block"; 
    scoreUser = 0;
    scoreComputer = 0;    
}

// goes to 'compare' screen
function start() {
    document.querySelector(".nodisplay").style.display ="block";
    document.querySelector(".game").style.display ="none";   
}

// makes the computer choice
function computerChoice() {
    var computerChoice = Math.random();
    if (computerChoice <= 0.33) {
        computerChoice = 'rock';
        addRemove('house-choice', 'rock');
    } else if (computerChoice<= 0.66) {
        computerChoice ='paper';
        addRemove('house-choice', 'paper');
    } else {
        computerChoice ='scissors';
        addRemove('house-choice', 'scissor');
    }
    return computerChoice;
}

// adds the correct style and image for the choice taken, removes previous
function addRemove(id, color) {
   if (color == 'rock') {
    document.getElementById(id).src = "assets/images/icon-rock.svg";   
    document.getElementById(id).classList.remove('paper'); 
    document.getElementById(id).classList.remove('scissors'); 
    document.getElementById(id).classList.add('rock');
   } else if (color == 'paper') {
    document.getElementById(id).src = "assets/images/icon-paper.svg";    
    document.getElementById(id).classList.add('paper'); 
    document.getElementById(id).classList.remove('scissors'); 
    document.getElementById(id).classList.remove('rock');
   } else {
    document.getElementById(id).src = "assets/images/icon-scissors.svg";   
    document.getElementById(id).classList.remove('paper'); 
    document.getElementById(id).classList.add('scissors'); 
    document.getElementById(id).classList.remove('rock');
   }
}

// compares user and computer choice, update score
function compare(userChoice, computerChoice) {

   var computerChoice = computerChoice();
   document.querySelector(".result").style.display ="block"; 

   if(userChoice == computerChoice) {
    document.querySelector(".final-result").textContent = "It's a Tie";
   }
   if (userChoice == "paper") {
        if (computerChoice == "rock") {
            document.querySelector(".final-result").textContent = "You Win!";
            scoreUser += 1;
            document.querySelector(".number-1").textContent = scoreUser;
        } else if (computerChoice == "scissors") {
            document.querySelector(".final-result").textContent = "You Lose!"; 
            scoreComputer += 1;
            document.querySelector(".number-2").textContent = scoreComputer;         
        }
    } else if (userChoice == "scissors") {
        if (computerChoice == "rock") {
            document.querySelector(".final-result").textContent = "You Lose!";
            scoreComputer += 1;
            document.querySelector(".number-2").textContent = scoreComputer;
        } else if (computerChoice == "paper") {
            document.querySelector(".final-result").textContent = "You Win!"; 
            scoreUser += 1;
            document.querySelector(".number-1").textContent = scoreUser;          
        }
    } else {
        if (computerChoice == 'scissors') {
            document.querySelector(".final-result").textContent = "You Win!";
            scoreUser += 1;
            document.querySelector(".number-1").textContent = scoreUser; 
        } else if (computerChoice == 'paper') {
            document.querySelector(".final-result").textContent = "You Lose!";
            scoreComputer += 1;
            document.querySelector(".number-2").textContent = scoreComputer;
        }
    }

}

// shows rules
function toggleRules() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.querySelector(".keep-score").style.opacity ="0.5";
      document.querySelector(".game").style.opacity ="0.5";
      document.querySelector(".game").classList.add("disabled"); 
    } else {
      x.style.display = "none";
      document.querySelector(".keep-score").style.opacity ="1";
      document.querySelector(".game").style.opacity ="1";
      document.querySelector(".game").classList.remove("disabled");
    }
  }

// reset game
document.querySelector('.newGame').addEventListener('click', init);
// open rules
document.querySelector('.toggle').addEventListener('click', toggleRules);
// close rules
document.querySelector('.close').addEventListener('click', toggleRules);

// play game
document.querySelector(".paper").addEventListener('click', function(){
    start();
    addRemove('my-choice', 'paper'); 
    compare('paper', computerChoice);
});

document.querySelector('.rock').addEventListener('click', function(){
    start();
    addRemove('my-choice', 'rock');
    compare('rock', computerChoice);
});

document.querySelector('.scissors').addEventListener('click', function(){
    start();
    addRemove('my-choice', 'scissors');
    compare('scissors', computerChoice);
});

// play again
document.querySelector('.play').addEventListener('click', function(){
    document.querySelector(".nodisplay").style.display ="none";
    document.querySelector(".game").style.display ="block";
});