console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);

function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + 'Zagraj jeszcze raz');
        return 'nieznany ruch';
    }
  }
function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == argComputerMove) {
      printMessage('Remis');
    } else {
      printMessage('Przegrywasz!');
    }
    printMessage('Zagrałem ' + argComputerMove + 'Zagraj jeszcze raz ' + argPlayerMove);
  }
  
/*if(randomNumber == 1){
  computerMove = 'kamień';
}else if (randomNumber == 2){
    computerMove = 'papier';
}else if (randomNumber == 3){
    computerMove = 'nozyczki';
}else {
    printMessage('nieznany ruch');
}*/

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);

/*if (playerInput == '1'){
  playerMove = 'kamień';
}else if (playerInput == '2') {
    playerMove = 'papier';
}else if (playerInput == '3') {
    playerMove = 'nozyczki';
}else {
    printMessage('nieznany ruch');
}
printMessage('Twój ruch to: ' + playerMove);

if (computerMove == playerMove) {
	printMessage('Remis!');     
} else if (( computerMove == 'kamień' && playerMove == 'papier') || 
          (computerMove == 'nozyczki' && playerMove == 'kamień') ||
          (computerMove == 'papier' && playerMove == 'nozyczki'))
           { printMessage('Ty wygrywasz!'); } 
  else if (( computerMove == 'papier' && playerMove == 'kamień') ||
           (computerMove == 'kamień' && playerMove == 'nozyczki')||
           (computerMove == 'nozyczki' && playerMove == 'papier'))
            { printMessage('Przegrywasz!'); } 
  else { printMessage('zagraj jeszcze raz!');
}*/