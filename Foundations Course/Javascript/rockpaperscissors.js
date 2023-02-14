"use strict";
// this creates a Rock Paper Scissors game
// This is a project I made for The Odin Project

// gets rid of a bunch of if statements, yayyyyy
const options = {
    Rock: {name: "rock", strength: "scissors", weakness: "paper"},
    Paper: {name: "paper", strength: "rock", weakness: "scissors"},
    Scissors: {name: "scissors", strength: "paper", weakness: "rock"}
}

var points = 0;

function getComputerChoice(){
    // Randomly return Rock Paper or Scissors
    let computerChoice = Math.floor(Math.random() * 3);
    switch(computerChoice){
        case 0:
            computerChoice = options.Rock;
            break;

        case 1:
            computerChoice = options.Paper;
            break;

        case 2:
            computerChoice = options.Scissors;
            break;
    }
    return computerChoice;
}

function getUserChoice(playerSelection){

    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);

    if(playerSelection === options.Rock.name){
        console.log("You chose rock!");
        return options.Rock;
    } else if(playerSelection === options.Paper.name){
        console.log("You chose paper!");
        return options.Paper;
    } else if(playerSelection === options.Scissors.name){
        console.log("You chose scissors!");
        return options.Scissors;
    } else {
        return -1;
    }
}

function compareChoices(userChoice, cpuChoice){

        if(userChoice.name === cpuChoice.strength){
            return {points: -1, text: `You lose! ${cpuChoice.name} beats ${userChoice.name}`};
        } else if(userChoice.name === cpuChoice.weakness){
            return {points: 1, text: `You Won! ${userChoice.name} beats ${cpuChoice.name}`};
        } else if(userChoice.name === cpuChoice.name){
            return {points: 0, text: `Tis a draw! ${userChoice.name} can not defeat ${cpuChoice.name}`};
        } else {
            console.log(userChoice, cpuChoice);
            return {points: 0, text: "You have made a terrible mistake, leave us."};
        }
}

function playRound(){
    // plays a round of the game
    // return a string like: "You Lose! Paper beats Rock"
    let playerSelection = prompt("Make your choice, determine your fate!");
    let computerSelection = getComputerChoice();
    console.log(playerSelection);

    let userChoice = getUserChoice(playerSelection);
    let cpuChoice = computerSelection;
    console.log("CPU chose " + cpuChoice.name + "!");
    if(userChoice === -1){
        console.log("That is NOT an option. We are all so VERY disappointed in you. Do it RIGHT this time.");
        playRound();
        return "end";
    }

    return compareChoices(userChoice, cpuChoice);

}

function game(){
    let numRounds = 5;
    for(let i = 0; i < numRounds; i++){
        let game = playRound();
        points += game.points;
        console.log(game.text);
        console.log("Points: " + points);
    }

    if(points > 0){
        console.log("You won, but it is but a shallow victory: There was naught but luck to your success.");
    } else if(points < 0){
        console.log("You LOST! Ha Ha Ha Ha! Pathetic scum! You can't even beat a COMPUTER!");
    } else if(points === 0){
        console.log("It's a draw, your abilities are equal to the computer, therefore you are a computer. Shut down now, thank you.");
    } else {
        console.log("You have done something unspeakable...");
    }
}
