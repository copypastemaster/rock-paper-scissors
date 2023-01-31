const values = ['rock', 'paper', 'scissors'];
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const buttons = document.querySelectorAll('button');
const div = document.querySelector('#container');



function computerSelection () {
    
    const random = Math.floor(Math.random() * values.length);
    return values[random];
}

let playerScore = 0;
let computerScore = 0;



rock.addEventListener('click', () => { 
    let but = rock.textContent;
    let computerChoice = computerSelection();

    if (but == computerChoice) {
        console.log('Tie, you both picked rock');
        console.log(`Your score is: ${playerScore}, computer is: ${computerScore}`);
    } else if (computerChoice == 'paper') {
        console.log('You lose, computer picke paper');
        console.log(`Your score is: ${playerScore}, computer is: ${computerScore}`);
        return computerScore++;
    } else if (computerChoice == 'scissors') {
        console.log('You win! computer picked scissors');
        console.log(`Your score is: ${playerScore}, computer is: ${computerScore}`);
        return playerScore++;
    }
   
})


paper.addEventListener('click', () => {
    let but = paper.textContent;
    let computerChoice = computerSelection();

    if (but == computerChoice) {
        console.log('Tie, you both picked paper');
        console.log(`Your score is: ${playerScore}, computer is: ${computerScore}`);
    } else if (computerChoice == 'rock') {
        console.log('You win!, computer picked rock');
        console.log(`Your score is: ${playerScore}, computer is: ${computerScore}`);
        return playerScore++;
    } else if (computerChoice == 'scissors') {
        console.log('You lose, computer picked scissors');
        console.log(`Your score is: ${playerScore}, computer is: ${computerScore}`);
        return computerScore++;
    }
})


scissors.addEventListener('click', () => {
    let but = scissors.textContent;
    let computerChoice = computerSelection();

    if (but == computerChoice) {
        console.log('Tie, you both picked scissors');
        console.log(`Your score is: ${playerScore}, computer is: ${computerScore}`);
    } else if (computerChoice == 'paper') {
        console.log('You win! computer picked paper');
        console.log(`Your score is: ${playerScore}, computer is: ${computerScore}`);
        return playerScore++;
    } else if (computerChoice == 'rock') {
        console.log('You lose, computer picked rock');
        console.log(`Your score is: ${playerScore}, computer is: ${computerScore}`);
        return computerScore++;
    }
})




