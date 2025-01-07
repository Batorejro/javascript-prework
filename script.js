let moveId = 0;
function buttonClicked(buttonName) {
    clearMessages();
    console.log(buttonName + ' został kliknięty');
    function getMoveName(moveId) {
        console.log('wywołano funkcję getMoveName z argumentem: ' + moveId);
        if (moveId == 1) {
            return 'kamień';
        } else if (moveId == 2) {
            return 'papier';
        } else if (moveId == 3) {
            return 'nożyce';
        } else {
            return 'nieznany ruch';
        }
    }


    function displayResult(playerMove, computerMove) {
        console.log('wywołano funkcję displayResults z argumentami: ' + playerMove + ', ' + computerMove);
        if (playerMove === computerMove) {
            printMessage('REMIS!');
        } else if (playerMove == 'kamień' && computerMove == 'nożyce') {
            printMessage('WIN!');
        } else if (playerMove == 'nożyce' && computerMove == 'papier') {
            printMessage('WIN!');
        } else if (playerMove == 'papier' && computerMove == 'kamień') {
            printMessage('WIN!');

        } else {
            printMessage('Przegrywasz :(');
        }
        printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
    }
    let playerMove = buttonName;
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    let computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
}


const buttonKamien = document.getElementById('button-rock');
buttonKamien.addEventListener('click', function () { buttonClicked('kamien'); });

const buttonPapier = document.getElementById('button-paper');
buttonPapier.addEventListener('click', function () { buttonClicked('papier'); });


const buttonNozyce = document.getElementById('button-scissors');
buttonNozyce.addEventListener('click', function () { buttonClicked('nożyce'); });
