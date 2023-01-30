const values = ['rock', 'paper', 'scissors'];

function playerSelection (playerChoice) {

    if (playerChoice == 'rock') {
        return playerChoice
    } else if (playerChoice == 'paper') {
        return playerChoice
    } else if (playerChoice == 'scissors') {
        return playerChoice
    }  

    else {
        console.log('Invalid input');
    }


}

function computerSelection () {
    
    const random = Math.floor(Math.random() * values.length);
    return values[random];
}


function play (playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'rock') {
        return "It's a tie! player picked rock and computer picked rock as well";
    } 
    else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return `It's a tie! player picked paper and computer picked paper as well!`;

    } 
    else if (playerSelection == 'scissors' && computerSelection == 'scissors')
     {
        return `It's a tie! plyaer picked scissors and computer picked scissors`;



    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return `You win! rock beats scissor`;

    } else if (playerSelection == 'scissors' && computerSelection =='rock') {
        return "You lose. rock beats scissor";

    } 
    else if (playerSelection == 'paper' && computerSelection == 'rock') { 
        return "You win! paper beats rock";
    } 
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return `You lose. paper beats rock`;
    } 
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return`You win! scissors beat paper`;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return `You lose. scissors beat paper`;
    } 

}


// function gameOneToFive (result) {
//     let playerScore = 0;
//     let computerScore = 0;

    

//    for (let i = 0; i <5; i++) {
//     let a = prompt("What\'s your pick?") 
//     let b = (play(playerSelection(a), computerSelection()))
     
//     if (b.includes("win")) {
//         playerScore++
//         console.log(`player: ${playerScore}`);
//     } else if (b.includes("lose")) {
//         computerScore++
//         console.log(`computer: ${computerScore}`);
//     }
//     console.log(b);

// }

console.log(`Your score: ${playerScore}; computer: ${computerScore}`);


if (playerScore > computerScore) {
    console.log("Congrats! You win!")
} else if (playerScore === computerScore) {
    console.log("It\'s a tie!")
} else {
    console.log("Too bad, computer was better than you. Coz you suck")
}


    
}

gameOneToFive();



