"use strict";
// this creates a Rock Paper Scissors game
// This is a project I made for The Odin Project

// gets rid of a bunch of if statements, yayyyyy
const options = {
    Rock: {strength: 'scissors', weakness: 'paper'},
    Paper: {strength: 'rock', weakness: 'scissors'},
    Scissors: {strength: 'paper', weakness: 'rock'}
}

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

const playerSelection = "rock";
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){
    // plays a round of the game
    // return a string like: "You Lose! Paper beats Rock"
    playerSelection = playerSelection.toLowerCase();


}

