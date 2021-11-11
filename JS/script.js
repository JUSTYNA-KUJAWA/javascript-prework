{
 //COMPUTER MOVE
const getMoveName = function (argMoveId) {
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
const displayResult = function (argPlayerMove, argComputerMove) {
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
const buttonClicked = function (argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    
    // let argMoveId, argPlayerMove, argComputerMove
    
    //GRACZ MOVE

    console.log('ruch gracza to: ' + argButtonName);
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    const computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(argButtonName, computerMove);

   
}
let buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
let buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
let buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });
}