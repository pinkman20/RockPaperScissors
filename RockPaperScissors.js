// Rock,paper,scissors

const getUserChoice = (userInput) => {
    userInput=userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput
    } else {
        return 'Wrong input'
    }

};



const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random()*3);

    switch(computerChoice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        
    }
};



const determineWinner=(player,computer) => {
    if(player === computer) {
        
        return 'Result is a tie!'
    }else if(player==='rock' && computer === 'scissors') {
        
        return 'You win!'
    }else if(player==='paper' && computer === 'rock') {
        
        return 'You win!'
    }else if(player==='scissors' && computer === 'paper') {
        
        return 'You win!'
    }else {
        
        return 'You lose!'
    }

};



const playGame = () => {
    player = getUserChoice('rock');
    console.log('You choose: ' + player)
    computer = getComputerChoice();
    console.log('Computer choose: ' + computer);





    winner = console.log(determineWinner(player,computer));


   

    

    
}
playGame();


