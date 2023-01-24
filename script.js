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
        console.log(`It's a tie! player picked rock and computer picked rock as well`)
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        console.log(`It's a tie! player picked paper and computer picked paper as well!`) 
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors')
     {
        console.log(`It's a tie! plyaer picked scissors and computer picked scissors`)



    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log(`You win! rock beats scissor`) 

    } else if (playerSelection == 'scissors' && computerSelection =='rock') {
        console.log("You lose. rock beats scissor") 

    } else if (playerSelection == 'paper' && computerSelection == 'rock') { 
        console.log("You win! paper beats rock")
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log(`You lose. paper beats rock`)
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log(`You win! scissors beat paper`)
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        console.log(`You lose. scissors beat paper`)
    } 

}





