function computerPlay(){
  index = Math.floor((Math.random() * 3))
  return ["rock", "paper", "scissors"][index] ;
}

function playRound(playerSelection, computerSelection){

  //console.log([playerSelection,computerSelection]) ;
  if (playerSelection == computerSelection) return "draw" ;

  var win = false ;

  if (playerSelection == "rock" && computerSelection == "paper") win = false ;
  if (playerSelection == "rock" && computerSelection == "scissors") win = true ;
  if (playerSelection == "paper" && computerSelection == "rock") win = true ;
  if (playerSelection == "paper" && computerSelection == "scissors") win = false ;
  if (playerSelection == "scissors" && computerSelection == "rock") win = false ;
  if (playerSelection == "scissors" && computerSelection == "paper") win = true ;


  return win
}

function playerSelection(){
  var playerSelection = "z"

  console.log(["p", "r", "s"].indexOf(playerSelection[0])) ;
  while (["p", "r", "s"].indexOf(playerSelection[0]) != 0){
    var playerSelection = prompt("quoi que tu joues ?\n> ").toLowerCase() ;
    if (playerSelection[0] == "p") playerSelection = "paper" ;
    if (playerSelection[0] == "r") playerSelection = "rock" ;
    if (playerSelection[0] == "s") playerSelection = "scissors" ;
  }
  return playerSelection ;
}

var userWin = 0 ;
var computerWin = 0 ;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{
  button.addEventListener('click', (e) => {
    var userPlayed = button.id ;
    var computerPlayed = computerPlay() ;
    var roundResult = playRound(userPlayed, computerPlayed);

    if (roundResult != "draw") roundResult ? userWin++ : computerWin++ ;

    if (userWin < 5 && computerWin < 5){
      document.getElementById('victory').innerHTML= ""
      document.getElementById('userLastPlay').innerHTML = "Vous avez joué " + button.id ;
      document.getElementById('computerLastPlay').innerHTML = "L'ordinateur a joué " + computerPlayed ;
      document.getElementById('userWin').innerHTML = "Nombre de victoires joueur = " + userWin ;
      document.getElementById('computerWin').innerHTML = "Nombre de victoires IA = " + computerWin ;
    }

    else {
      document.getElementById('victory').innerHTML = (userWin ? "Gagné" : "Perdu") + " ! Faites un nouveau choix pour recommencer une partie." ;
      document.getElementById('userLastPlay').innerHTML = "Vous avez joué " + button.id ;
      document.getElementById('computerLastPlay').innerHTML = "L'ordinateur a joué " + computerPlayed ;
      document.getElementById('userWin').innerHTML = "Nombre de victoires joueur = " + userWin ;
      document.getElementById('computerWin').innerHTML = "Nombre de victoires IA = " + computerWin ;
      userWin = 0 ;
      computerWin = 0 ;

    }

    console.log(roundResult);
  });
});
