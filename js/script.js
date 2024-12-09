var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput, getMoveName, argButtonName, buttonTest, displayResult;

/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    function getMoveName(argMoveId) {
        console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
        if (argMoveId == 1) {
            return 'kamień';
            printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
            return 'kamień';
        } else if (argMoveId == '2') {
            return 'papier';
            printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "papier".');
            return 'papier';
        } else if (argMoveId == '3') {
            return 'nożyce';
            printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "nożyce".');
            return 'nożyce';
        } else {
            return 'nieznany ruch';
            printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "nieznany ruch".');
            return 'nieznany ruch';
        }
    }

    /**
     * Describe this function...
     */
    function displayResult(argPlayerMove, argComputerMove) {
        console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
        if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
            printMessage('Wygrywasz!');
        } else if (argPlayerMove == 'kamień' && argComputerMove == 'kamień') {
            printMessage('Remis!');
        } else if (argPlayerMove == 'nożyce' && argComputerMove == 'nożyce') {
            printMessage('Remis!');
        } else if (argPlayerMove == 'papier' && argComputerMove == 'papier') {
            printMessage('Remis!');
        } else {
            printMessage('Przegrywasz :(');
        }
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    }
    playerMove = argButtonName;
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
}
buttonTest = document.getElementById('button-test');
buttonTest.addEventListener('click', function () { buttonClicked('Guzik TEST'); });

buttonKamien = document.getElementById('button-kamien');
buttonKamien.addEventListener('click', function () { buttonClicked('Guzik Kamien'); });

buttonPapier = document.getElementById('button-paier');
buttonPapier.addEventListener('click', function () { buttonClicked('Guzik Papier'); });


buttonNozyce = document.getElementById('button-nożyce');
buttonNozyce.addEventListener('click', function () { buttonClicked('Guzik Nożyce'); });

