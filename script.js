'use strict';

let roll_btn = document.querySelector(".btn--roll");
let player0 = document.querySelector(".player--0");
let player1 = document.querySelector(".player--1");
let current0 = document.getElementById("current--0");
let current1 = document.getElementById("current--1");
const winning_score = 100;

//to start a new game
let new_game = document.querySelector(".btn--new");
new_game.addEventListener("click", function () {
    window.location.reload(true);
});


//function for checking which player is active
//true for player 0 and false for player 1
const player_active_status = function () {
    var status = (player0.classList.contains("player--active")) ? status = true : status = false;
    return status;
}


//roll dice btn
roll_btn.addEventListener("click", function () {
    var random_dice = Math.trunc(Math.random() * 6) + 1;

    let dice = document.querySelector(".dice");
    dice.src = `Images/dice-${random_dice}.png`;

    if (random_dice == 1) {
        if (player_active_status()) {
            player0.classList.remove("player--active");
            player1.classList.add("player--active");
            document.getElementById("current--0").innerHTML = 0;
        }
        else {
            player1.classList.remove("player--active");
            player0.classList.add("player--active");
            document.getElementById("current--1").innerHTML = 0;
        }
    }

    else {
        console.log("else if running")
        if (player_active_status()) {
            //player 0 is a active player
            let previous_current_score = parseInt(current0.textContent);
            current0.innerHTML = random_dice + previous_current_score;
        }
        else {
            //player 1 is a active player
            let previous_current_score = parseInt(current1.textContent);
            current1.innerHTML = random_dice + previous_current_score;
        }

    }
});


//Hold btn 
let hold = document.querySelector(".btn--hold");
let score0 = document.getElementById("score--0");
let score1 = document.getElementById("score--1");
hold.addEventListener("click", function () {
    if (player_active_status()) {
        //player 0 is a active player
        let previous_total_score = parseInt(score0.textContent);
        let current_total_score = parseInt(current0.textContent);
        score0.innerHTML = current_total_score + previous_total_score;
        current0.innerHTML = '0';
        winner();
    }
    else {
        let previous_total_score = parseInt(score1.textContent);
        let current_total_score = parseInt(current1.textContent);
        score1.innerHTML = current_total_score + previous_total_score;
        current1.innerHTML = '0';
        winner();
    }
});


//function to check winner
const winner = function () {
    if (parseInt(score0.innerHTML) >= winning_score) {
        player0.classList.add("player--winner");
        player0.classList.add("name");
        roll_btn.style.visibility = "hidden";
        hold.style.visibility = "hidden";
    }
    else if (parseInt(score1.innerHTML) >= winning_score) {
        player1.classList.add("player--winner");
        player1.classList.add("name");
        roll_btn.style.visibility = "hidden";
        hold.style.visibility = "hidden";
    }
    else {

    }
}




