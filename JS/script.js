var argButtonName, buttonRock, buttonPaper;
 //COMPUTER MOVE
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
//RESULT
function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Przegrywasz!');
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
    } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis');
    } else {
    printMessage('Przegrywasz!');
    }
    printMessage('Zagrałem ' + argComputerMove + 'Ty zagrales ' + argPlayerMove);
}
function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    
    var playerMove, computerMove, randomNumber, argMoveId, argPlayerMove, argComputerMove
    
    //GRACZ MOVE

    console.log('ruch gracza to: ' + argButtonName);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(argButtonName, computerMove);

   
}
buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });