// Function to generate a random number between 1 and 6
function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to update the dice image
function updateDiceImage(player, diceNumber) {
    const imagePath = `images/dice${diceNumber}.png`;
    const imgElement = document.querySelector(`.img${player}`);
    imgElement.src = imagePath;
}

// Function to determine the winner and update the heading
function determineWinner(player1Dice, player2Dice) {
    const headingElement = document.querySelector('h1');
    const svgSize = "85"; // Change the SVG size as needed

    if (player1Dice > player2Dice) {
        headingElement.innerHTML = `<svg width="${svgSize}" height="${svgSize}" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.45065 2.66441C4.73194 2.47948 5.08739 2.44849 5.39643 2.58194L19.3964 8.6273C19.7538 8.78165 19.9892 9.12944 19.9996 9.51866C20.01 9.90787 19.7935 10.2677 19.4448 10.441L5.99996 17.1198L6 21.5L4 21.5V3.5C4 3.16337 4.16937 2.84933 4.45065 2.66441Z" fill="red"/>
        </svg> Player 1 wins`;
    } else if (player1Dice < player2Dice) {
        headingElement.innerHTML = `Player 2 wins <svg width="${svgSize}" height="${svgSize}" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.45065 2.66441C4.73194 2.47948 5.08739 2.44849 5.39643 2.58194L19.3964 8.6273C19.7538 8.78165 19.9892 9.12944 19.9996 9.51866C20.01 9.90787 19.7935 10.2677 19.4448 10.441L5.99996 17.1198L6 21.5L4 21.5V3.5C4 3.16337 4.16937 2.84933 4.45065 2.66441Z" fill="red"/>
        </svg>`;
    } else {
        headingElement.innerHTML = 'Draw';
    }
}

// Function to handle the dice roll
function rollDice() {
    const player1Dice = getRandomNumber();
    const player2Dice = getRandomNumber();

    updateDiceImage(1, player1Dice);
    updateDiceImage(2, player2Dice);

    determineWinner(player1Dice, player2Dice);
}

// Automatically roll the dice when the page loads
document.addEventListener('DOMContentLoaded', rollDice);
