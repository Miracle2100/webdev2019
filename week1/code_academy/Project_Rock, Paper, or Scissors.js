const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' 	|| userInput === 'scissors') {
    return userInput;
  } 
       else if (userInput === 'bomb')
      return 'bomb';
  };
  
  function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);
    switch(num) {
      case 0: 
           return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
        
    }
    
  }
  
  function determinWinner(userChoice, computerChoice) {
    if (userChoice === undefined)
      return 'Error!';
    if (userChoice === 'bomb')
      return 'You won :D';
    console.log(`Your choice - ${userChoice}`);
    console.log(`Computer's choice - ${computerChoice}`);
    
    if (userChoice === computerChoice) 
      return 'The game is a tie';
    else if (userChoice === 'paper') {
      switch(computerChoice) {
        case 'rock':
          return 'You won!';
        case 'scissors':
          return 'You lost :(';
      }
    }
      else if (userChoice === 'scissors') {
        switch(computerChoice) {
          case 'rock':
            return 'You lost :(';
          case 'paper':
            return 'You won!';
            
        }
      }
        else if (userChoice === 'rock') {
          switch(computerChoice) {
            case 'paper':
              return 'YOu lost :(';
            case 'scissors':
              return 'You won!';
              
          }
        }
  }
  const playGame = () => {
    console.log(determinWinner(getUserChoice('bomb'), getComputerChoice()));
  };
  playGame();
  
  