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
Last chapter
    1.Playing rock paper scissors five times
    2.Keep score after each game
    3.Report a winner at the end of loop

*/
/* getComupterChoice - Randomly choosing Rock Paper or Scissors and returning anwser*/
function getComupterChoice(){
    let choices = ["rock", "paper", "scissors"];
    let anwser = choices[Math.round(Math.random() * 2) ] ;
    return anwser;
}

let computerSelection = getComupterChoice();
let playerScore = 0;
let computerScore = 0;
/*theGame - Checking is the playerSelection correct then looking for a right comaperation then returning anwser */ 
function theGame(){
    let playerSelection = prompt("Choose wisely: Rock, Paper or Scissors").toLowerCase();

    if(playerSelection == "rock"||"paper"||"scissors"){
        if
        (playerSelection == "rock" && computerSelection == "scissors"){
            playerScore = playerScore + 1
        return("Player Won!! " + playerSelection + " beats " + computerSelection)  
    }else if
            (playerSelection == "paper" && computerSelection == "rock"){
                playerScore = playerScore + 1
            return("Player Won!! " + playerSelection + "beats " + computerSelection)   
    }else if
        (playerSelection == "scissors" && computerSelection == "paper"){
            playerScore = playerScore + 1
            return("Player Won!! " + playerSelection + "beats " + computerSelection)       
    }else if
        (playerSelection == computerSelection){
            
            return(playerSelection + " = " + computerSelection + " It is a draw")
    }else if
        (computerSelection == "paper" && playerSelection == "rock"){
            computerScore = computerScore + 1
        return("Computer Won " + computerSelection + "beats " + playerSelection) 
    }else if
    (computerSelection == "rock" && playerSelection == "scissors"){
        computerScore = computerScore + 1
    return("Computer Won " + computerSelection + "beats " + playerSelection) 
}else if
(computerSelection == "scissors" && playerSelection == "paper"){
    computerScore = computerScore + 1
return("Computer Won " + computerSelection + "beats " + playerSelection) 
}
}else{
    
    return("Wrong input choose one of this: Rock, Paper or Scissors")
}
}
function playGame(){
    console.log(theGame());
    console.log(theGame());
    console.log(theGame());
    console.log(theGame());
    console.log(theGame());
    if(playerScore > computerScore){
        console.log("Player won "+ playerScore + " to " + computerScore)
    }else{
        console.log("Compuetr won " + computerScore+ " to " + playerScore)
    }
};
playGame()
