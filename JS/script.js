let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = 'nieznany ruch';
if(randomNumber == 1){
  computerMove = 'kamień';
}else if (randomNumber == 2){
    computerMove = 'papier';
}else if (randomNumber == 3){
    computerMove = 'nozyczki';
}else {
    printMessage('nieznany ruch');
}
printMessage('Mój ruch to: ' + computerMove);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
let playerMove = 'nieznany ruch';
if (playerInput == '1'){
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
} else if (( computerMove == 'kamień' && playerMove == 'papier') 
          (computerMove == 'nozyczki' && playerMove == 'kamień')
          (computerMove == 'papier' && playerMove == 'nozyczki'))
           { printMessage('Ty wygrywasz!'); } 
  else if (( computerMove == 'papier' && playerMove == 'kamień') 
           (computerMove == 'kamień' && playerMove == 'nozyczki')
           (computerMove == 'nozyczki' && playerMove == 'papier'))
            { printMessage('Przegrywasz!'); } 
  else { printMessage('null!');}