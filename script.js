let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
let choiceArray = ['rock', 'paper', 'scissors'];

const buttons = document.querySelectorAll('button')
let i = 0;
buttons.forEach((button) => {
    button.textContent = choiceArray[i]
    i++
})

buttons[0].addEventListener("click", () => {
    playRound('rock', getComputerChoice())
})
buttons[1].addEventListener("click", () => {
    playRound('paper', getComputerChoice())
})
buttons[2].addEventListener("click", () => {
    playRound('scissors', getComputerChoice())
})

//div to show results
const results = document.createElement('div');
const score = document.createElement('p');
const roundResult = document.createElement('p');
const round = document.createElement('p');
const roundStatus = document.createElement('p');

score.innerText = "player>  0 | 0  <computer";
round.innerText = "Round: 0";
results.appendChild(score)
results.appendChild(round)
results.appendChild(roundStatus)
results.appendChild(roundResult)

document.body.appendChild(results)


function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)
    return choiceArray[choice]
}

function getHumanChoice(){
    let choice = prompt("Enter your choice:")
    choice = choice.toLowerCase();
    if(choiceArray.includes(choice)){
        return choice;
    }else {
        alert('wrong input, try again')
        getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice){
    let roundStatus;
    console.log(computerChoice)
    if(humanChoice === 'rock') {
        if(computerChoice === 'paper') {
            computerScore++;
            roundStatus = 0;
        } else if(computerChoice === 'scissors'){
            humanScore++;
            roundStatus = 1;
        } else roundStatus = 2;
    }
    else if(humanChoice === 'paper') {
            if(computerChoice === 'rock') {
                humanScore++;
                roundStatus = 1;
            } else if(computerChoice === 'scissors'){
                computerScore++;
                roundStatus = 0;
            } else roundStatus = 2;
    }
    else if(humanChoice === 'scissors') {
        if(computerChoice === 'paper') {
            humanScore++;
            roundStatus = 1;
        } else if(computerChoice === 'rock'){
            computerScore++;
            roundStatus = 0;
        } else roundStatus = 2;
    } 

    if(roundStatus == 0) roundStatus = 'lost';
    else if(roundStatus == 1) roundStatus = 'won';
    else roundStatus = 'draw'

    roundCount++;
    showResult(`you choose ${humanChoice}, computer choose ${computerChoice}`,humanScore,computerScore,roundCount, roundStatus)      
    if(roundCount === 5){
        buttons.forEach((button) => {
            button.disabled = true;
        })
        
        finalResult(humanScore,computerScore,roundCount);
    }
}

function finalResult(a,b,c){
    if(humanScore > computerScore){
        showResult(`you won with ${humanScore} against the computer with ${computerScore} score`,a,b,c,'won the game')
    }else if(computerScore > humanScore){
        showResult(`the computer won with ${computerScore} against your score of ${humanScore} score`,a,b,c,'lost the game')
    }else { 

    showResult(`its draw with ${computerScore} against your score of ${humanScore} score`,a,b,c,'draw')
    }
}

function showResult(str,humanScore,computerScore,roundNumber,roundstatus){
    score.innerText = `player> ${humanScore} | ${computerScore}  <computer`;
    roundResult.textContent = str;
    round.innerText = `Round: ${roundNumber}`;
    roundStatus.innerText = `you have ${roundstatus}`;
}


