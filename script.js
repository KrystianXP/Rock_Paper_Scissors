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

function getComupterChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    let anwser = choices[Math.round(Math.random() * 2) ] ;
    return anwser;
}
console.log(getComupterChoice())