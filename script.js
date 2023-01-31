const values = ['rock', 'paper', 'scissors'];
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const div = document.querySelector('#container');
const reset = document.querySelector('.reset');

let scoreContainer = document.createElement('div');
document.body.appendChild(scoreContainer);
scoreContainer.style.cssText = 'text-align: center; font-size: 22px; margin-top: 7%;'

let playerScore = 0;
let computerScore = 0;



function computerSelection () {
    
    const random = Math.floor(Math.random() * values.length);
    return values[random];
}




function rockButton () {
    
    let but = rock.textContent;
    let computerChoice = computerSelection();
    

    if (but == computerChoice) {
        scoreContainer.textContent = `Tie! Your score is: ${playerScore}, Computer: ${computerScore}`
        return scoreContainer;


    } else if (computerChoice == 'paper') {
        computerScore++
        scoreContainer.textContent = `Your score is: ${playerScore}, Computer: ${computerScore}`
        if (playerScore == 5) {
            playerScore = 0;
            computerScore = 0;
            return scoreContainer.textContent = 'YOU WIN!!!'
        } else if (computerScore == 5) {
            playerScore = 0;
            computerScore = 0;
            return scoreContainer.textContent = 'YOU LOSE! :('
        }
        return computerScore;


    } else if (computerChoice == 'scissors') {
        playerScore++
        scoreContainer.textContent = `Your score is: ${playerScore}, Computer: ${computerScore}`
        if (playerScore == 5) {
            playerScore = 0;
            computerScore = 0;
            return scoreContainer.textContent = 'YOU WIN!!!'
        } else if (computerScore == 5) {
            playerScore = 0;
            computerScore = 0;
            return scoreContainer.textContent = 'YOU LOSE! :('
        }
        return playerScore;
    }

}




function paperButton () {
    let but = paper.textContent;
    let computerChoice = computerSelection();

    if (but == computerChoice) {
        scoreContainer.textContent = `Tie! Your score is: ${playerScore}, Computer: ${computerScore}`
        return scoreContainer;


    } else if (computerChoice == 'rock') {
        playerScore++
        scoreContainer.textContent = `Your score is: ${playerScore}, Computer: ${computerScore}`
        if (playerScore == 5) {
            playerScore = 0;
            computerScore = 0;
            return scoreContainer.textContent = 'YOU WIN!!!'
        } else if (computerScore == 5) {
            playerScore = 0;
            computerScore = 0;
            return scoreContainer.textContent = 'YOU LOSE! :('
        }
        return playerScore;


    } else if (computerChoice == 'scissors') {
        computerScore++
        scoreContainer.textContent = `Your score is: ${playerScore}, Computer: ${computerScore}`
        if (playerScore == 5) {
            playerScore = 0;
            computerScore = 0;
            return scoreContainer.textContent = 'YOU WIN!!!'
        } else if (computerScore == 5) {
            playerScore = 0;
            computerScore = 0;
            return scoreContainer.textContent = 'YOU LOSE! :('
        }
        return computerScore;
    } 

}




function scissorsButton () {
    let but = scissors.textContent;
    let computerChoice = computerSelection();

    if (but == computerChoice) {
        scoreContainer.textContent = `Tie! Your score is: ${playerScore}, Computer: ${computerScore}`
        return scoreContainer;


    } else if (computerChoice == 'paper') {
        playerScore++
        scoreContainer.textContent = `Your score is: ${playerScore}, Computer: ${computerScore}`
        if (playerScore == 5) {
            playerScore = 0;
            computerScore = 0;
            return scoreContainer.textContent = 'YOU WIN!!!'
        } else if (computerScore == 5) {
            playerScore = 0;
            computerScore = 0;
            return scoreContainer.textContent = 'YOU LOSE! :('
        }
        return playerScore;
    } 
    
        else if (computerChoice == 'rock') {
        computerScore++
        scoreContainer.textContent = `Your score is: ${playerScore}, Computer: ${computerScore}`
        if (playerScore == 5) {
            playerScore = 0;
            computerScore = 0;
            return scoreContainer.textContent = 'YOU WIN!!!'
        } else if (computerScore == 5) {
            playerScore = 0;
            computerScore = 0;
            return scoreContainer.textContent = 'YOU LOSE! :('
        }
        return computerScore;
    }

}





function play () {
    rock.addEventListener('click', rockButton);
    paper.addEventListener('click', paperButton);
    scissors.addEventListener('click', scissorsButton);
    reset.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        scoreContainer.textContent = '';
    })
}

play();


