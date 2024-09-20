let playermove;
    let x; // Computer's move
    let y; // Player's move
    let result;
    let resultElement = document.getElementById("computer-score");
    let playerScoreElement = document.getElementById("player-score");
    let pwon = document.getElementById("player-won");
    let cwon = document.getElementById("computer-loss"); 
    let result1 = document.getElementById("game-result");

    function Rock() {
        playermove = "Rock";
        y = 0; 
        print();
    }

    function paper() {
        playermove = "Paper";
        y = 1; 
        print();
    }

    function Scissors() {
        playermove = "Scissors";
        y = 2; 
        print();
    }

    function print() {
        playerScoreElement.innerText = playermove;
    }

    function getComputerMove() {
        x = Math.floor(Math.random() * 3); 
        if (x === 0) return "Rock";
        if (x === 1) return "Paper";
        return "Scissors"; 
    }

    function find() {
        if (playermove) {
            let commove = getComputerMove();
            resultElement.innerText = commove;

            if (x === y) {
                result = "Tie";
            } else if (x > y) {
                result = "Computer wins";
                cwon.innerText = Number(cwon.innerText) + 1; 
            } else {
                result = "Player wins";
                pwon.innerText = Number(pwon.innerText) + 1; 
            }
        } else {
            alert("First, choose your move!");
        }

        result1.innerText = result;
        setTimeout(clearGame, 2500);
    }

    function clearGame() {
        playermove = null;
        y = null;
        resultElement.innerText = "";
        playerScoreElement.innerText = "";
        result1.innerText = "";
    }
    function clearGame1() {
        playermove = null;
        y = null;
        resultElement.innerText = "";
        playerScoreElement.innerText = "";
        result1.innerText = "";
        pwon.innerText="0";
        cwon.innerText="0";
    }