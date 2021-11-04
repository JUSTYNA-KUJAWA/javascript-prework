let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}
else if (randomNumber == 2){
    computerMove = 'papier';
}
else if (randomNumber == 3){
    computerMove = 'nozyczki';
}
else {
    computerMove='nieznany ruch!';
}
printMessage('Mój ruch to: ' + computerMove);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if (playerInput == '2') {
    playerMove = 'papier';
}
else if (playerInput == '3') {
    playerMove = 'nozyczki';
}
else {
    playerMove='nieznany ruch';
}

printMessage('Twój ruch to: ' + playerMove);

if ( computerMove == 'kamień' && playerMove == 'papier') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'nozyczki' && playerMove == 'papier') {
	printMessage('Przegrywasz');
} else if (computerMove == 'papier' && playerMove == 'papier') {
	printMessage('Remis!');
} else if ( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Przegrywasz!');
} else if (computerMove == 'kamień' && playerMove == 'kamień') {
    printMessage('Remis!');
} else if (computerMove == 'nozyczki' && playerMove == 'kamień') {
    printMessage('Przegrywasz!');
} else if ( computerMove == 'kamień' && playerMove == 'nozyczki'){
    printMessage('Przegrywasz!');
} else if (computerMove == 'nozyczki' && playerMove == 'nozyczki') {
    printMessage('Remis!');
} else if (computerMove == 'papier' && playerMove == 'nozyczki') {
    printMessage('Ty wygrywasz!');      
} else if (computerMove == 'papier' && playerMove == 'nieznany ruch') {
    printMessage('error player!'); 
} else if (computerMove == 'kamień' && playerMove == 'nieznany ruch') {
    printMessage('error player!'); 
} else if (computerMove == 'nozyczki' && playerMove == 'nieznany ruch') {
      printMessage('error player!'); 
} else if (computerMove == 'nieznany ruch' && playerMove == 'papier') {
    printMessage('error computer!'); 
}else if (computerMove == 'nieznany ruch' && playerMove == 'kamień') {
    printMessage('error computer!'); 
}else if (computerMove == 'nieznany ruch' && playerMove == 'nozyczki') {
    printMessage('error computer!'); 
}