function getComputerChoice() {
  const rand = Math.round(Math.random() * 10)

  if (rand < +3) {
    return 'Rock'
  } else if (rand > 3 && rand <= 6) {
    return 'Paper'
  } else {
    return 'Scissors'
  }
}
getComputerChoice()

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice().toLowerCase()
  playerSelection = playerSelection.toLowerCase()

  if (computerSelection === playerSelection) {
    console.log(`It's a tie!`)
  } else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'paper' && playerSelection === 'rock') ||
    (computerSelection === 'scissors' && playerSelection === 'paper')
  ) {
    console.log('You Lose!')
  } else {
    console.log(`You Win!`)
  }

  console.log(computerSelection)
  console.log(playerSelection)
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound('rock')
  }
}

playGame()
