let positionA = 1;
let positionB = 1;

let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
let playerA = document.getElementById("playerA");
let playerB = document.getElementById("playerB");

function rollDice() {
    return Math.floor(Math.random() * 6);
}

function updatePosition(position) {
    const snakes = {
        17: 7,
        54: 34,
        62: 19,
        64: 60,
        87: 36,
        93: 73,
        95: 75,
        98: 79  
    };
    const ladders = {
        1: 38,
        4: 14,
        9: 31,
        21: 42,
        28: 84,
        51: 67,
        72: 91,
        80: 99
    };

    if (ladders[position]) {
        position = ladders[position];
        console.log(position);
    } else if (snakes[position]) {
        position = snakes[position];
    }
    return position;
}

function movePlayer(player, position) {
    const tileSize = 60;
    const row = Math.floor((position - 1) / 10);
    const col = (position - 1) % 10;
    let adjustedCol = row % 2 === 0 ? col : 9 - col;

    player.style.top = `${(9 - row) * tileSize}px`;
    player.style.left = `${adjustedCol * tileSize}px`;
}

dice1.addEventListener("click", () => {
    let diceRoll = rollDice();
    positionA += diceRoll;
    if (positionA > 100) {
        positionA = 100;
        window.alert("A is winner")
    }
    positionA = updatePosition(positionA);
    movePlayer(playerA, positionA);
    console.log(`Player A: Position ${positionA}`);
});

dice2.addEventListener("click", () => {
    let diceRoll = rollDice();
    positionB += diceRoll;
    if (positionB > 100){
        positionB = 100;
        window.alert("B is winner")
    } 
    positionB = updatePosition(positionB);
    movePlayer(playerB, positionB);
    console.log(`Player B: Position ${positionB}`);
});
