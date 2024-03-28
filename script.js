/*
    pseudocode
    Game will be against computer so:
    Comupter Choice
    1.Computer randomly choosing "Rock" or "Paper" or "Scissors"
    2.Display anwser
    Player Choice
    1.Player choice his pick "Rock" or "Paper" or "Scissors"
    2.Comparing player choice with comupter choice
    3.Picking a winner
    4.Displaying winner name
*/
/* getComupterChoice - Randomly choosing Rock Paper or Scissors and returning anwser*/
function getComupterChoice(){
    let choices = ["rock", "paper", "scissors"];
    let anwser = choices[Math.round(Math.random() * 2) ] ;
    return anwser;
}
let playerSelection = prompt("Choose wisely: Rock, Paper or Scissors").toLowerCase();
let computerSelection = getComupterChoice();
/*theGame - Checking is the playerSelection correct then looking for a right comaperation then returning anwser */ 
function theGame(){
    if(playerSelection == "rock" | "paper" | "scissors" ){
        if
        (playerSelection == "rock" && computerSelection == "scissors"){
        return("Player Won!! " + playerSelection + " beats " + computerSelection)  
    }else if
            (playerSelection == "paper" && computerSelection == "rock"){
            return("Player Won!! " + playerSelection + "beats " + computerSelection)   
    }else if
        (playerSelection == "scissors" && computerSelection == "paper"){
            return("Player Won!! " + playerSelection + "beats " + computerSelection)       
    }else if
        (playerSelection == computerSelection){
            return(playerSelection + " = " + computerSelection + " It is a draw")
    }else{
        return("Computer Won "+ computerSelection+" beats "+playerSelection)  
    }
}else{
    return("Wrong input choose one of this: Rock, Paper or Scissors")
}
}
console.log(theGame())