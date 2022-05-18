let wins = 0;
let losses = 0;
let ties = 0;

function generateChoice() {
    let choiceNum = Math.floor(Math.random() * 3);
    if (choiceNum === 0) {return 'r'};
    if (choiceNum === 1) {return 'p'};
    if (choiceNum === 2) {return 's'};
    return 'error';
}

function compareChoice(myChoice, computerChoice) {
   
    if (myChoice === computerChoice) {
        alert(`You picked ${myChoice}. Computer picked ${computerChoice}. It's a tie.`);
        return ties++;
    }

    else if ( 
        (myChoice === 'r' && computerChoice === 'p') ||
        (myChoice === 'p' && computerChoice === 's') ||
        (myChoice === 's' && computerChoice === 'r') ) {
        
        alert(`You picked ${myChoice}. Computer picked ${computerChoice}. Computer won.`);
        return losses++;
         }
    
    else {
        alert(`You picked ${myChoice}. Computer picked ${computerChoice}. You won.`);
        return wins++;
    }

}

function playGame(countGames) {

    let myChoice= prompt(`Welcome to game number ${countGames}. What is your choice? Type 'r' for rock, 'p' for paper, 's' for scissors.`);
        
    let computerChoice = generateChoice();

    compareChoice(myChoice, computerChoice);
}

function playGameManyTimes(num) {
    let countGames = 1;

    while (countGames <= num) {
    playGame(countGames);
    countGames++; }

    alert(`Game has ended. Here is the results.\nYou won ${wins} times, lose ${losses} times, tied ${ties} times. `)
}

let num = prompt(`Welcome to the game. How many times you want to play?`);
playGameManyTimes(num);


