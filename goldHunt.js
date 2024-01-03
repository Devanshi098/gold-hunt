let currcoinTile;
let currswordTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    
    for (let i = 0; i < 9; i++) { 
        
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("panel").appendChild(tile);
    }
    setInterval(setbox, 1000); 
    setInterval(setsword, 2000); 
}

function getRandomTile() {
    
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setbox() {
    if (gameOver) {
        return;
    }
    if (currcoinTile) {
        currcoinTile.innerHTML = "";
    }
    let coin = document.createElement("img");
    coin.src = "./pngimg.com - coin_PNG36868.png";

    let num = getRandomTile();
    if (currswordTile && currswordTile.id == num) {
        return;
    }
    currcoinTile = document.getElementById(num);
    currcoinTile.appendChild(coin);
}

function setsword() {
    if (gameOver) {
        return;
    }
    if (currswordTile) {
        currswordTile.innerHTML = "";
    }
    let sword = document.createElement("img");
    sword.src = "./—Pngtree—minecraft diamond sword redesign png_6839229.png";

    let num = getRandomTile();
    if (currcoinTile && currcoinTile.id == num) {
        return;
    }
    currswordTile = document.getElementById(num);
    currswordTile.appendChild(sword);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currcoinTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score html
    }
    else if (this == currswordTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //update score html
        gameOver = true;
    }
}