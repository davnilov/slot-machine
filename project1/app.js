
const imageNames = ['cherries', 'watermelon', 'orange', 'lemon', 'plum', 'bar'];
let score1 = 0;
let score2 = 0;
let turn = 1;

function restart() {
    score1 = 0;
    score2 = 0;
    turn = 1;
    init();
    document.getElementById('spin').disabled = false;
    document.getElementById('score1').innerHTML = 0;
    document.getElementById('score2').innerHTML = 0;
}

function init() {
    const images = document.querySelectorAll('img');
    for (let i = 0; i < images.length; i++) {
        let index = Math.floor(Math.random() * imageNames.length);
        let image = "./images/" + imageNames[index] + ".jpg";
        images[i].src=image;       
    }
    document.getElementById('turn').innerHTML = 'PLAYER 1 TURN'; 
}

function spin() {
    init();
    checkMatch();
    if(score1 >= 30) {
        document.getElementById('winner').innerHTML = 'Player 1 Wins';
        document.getElementById('spin').disabled = true;
    }
    if(score2 >= 30) {
        document.getElementById('winner').innerHTML = 'Player 2 Wins';
        document.getElementById('spin').disabled = true;
    }
}

function checkMatch() {
    let points = 0;
    const images = document.querySelectorAll('img');
    
    if(images[0].src === images[3].src && images[3].src === images[6].src) {
        points += 5;
    }
    if(images[3].src === images[6].src && images[6].src === images[9].src) {
        points += 5;
    }
    if(images[6].src === images[9].src && images[9].src === images[12].src) {
        points += 5;
    }
    if(images[1].src === images[4].src && images[4].src === images[7].src) {
        points += 5;
    }
    if(images[4].src === images[7].src && images[7].src === images[10].src) {
        points += 5;
    }
    if(images[7].src === images[10].src && images[10].src === images[13].src) {
        points += 5;
    }
    if(images[2].src === images[5].src && images[5].src === images[8].src) {
        points += 5;
    }
    if(images[5].src === images[8].src && images[8].src === images[11].src) {
        points += 5;
    }
    if(images[8].src === images[11].src && images[11].src === images[14].src) {
        points += 5;
    }
    if(turn == 1) {
        score1 += points; 
        document.getElementById('score1').innerHTML = score1; 
        turn = 2;
        document.getElementById('turn').innerHTML = 'PLAYER 2 TURN'; 
    }
    else {
        score2 += points; 
        document.getElementById('score2').innerHTML = score2; 
        turn = 1;
        document.getElementById('turn').innerHTML = 'PLAYER 1 TURN'; 
    }
 
}

function instructions() {
    const instructions_text = document.getElementById('instructions_text');
    if(instructions_text.style.display === 'none') {
        instructions_text.style.display = "block";
    }
    else {
        instructions_text.style.display = "none";
    }
}

window.addEventListener('load', function() {
    init();
    document.getElementById('spin').addEventListener('click', spin);
    document.getElementById('restart').addEventListener('click', restart);
    document.getElementById('instructions').addEventListener('click', instructions);
})

