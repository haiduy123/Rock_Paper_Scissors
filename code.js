let user_score = 0;
let comp_score = 0;
var user_score_span = document.getElementById('user-score');
var comp_score_span = document.getElementById('computer-score');
const rock = document.querySelector('#rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const result_p = document.querySelector('.result > p');

function getComputerChoice () {
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}
// console.log(computerChoice);
function game_rock (computerChoice) {
    switch (computerChoice){
        case 'r':
            result_p.innerHTML = 'Draw';
            user_score_span.innerHTML = user_score;
            comp_score_span.innerHTML = comp_score;
        break;
        case 's':
                user_score++;
                user_score_span.innerHTML = user_score;
                comp_score_span.innerHTML = comp_score;
                result_p.innerHTML = 'You Win';
        break;
        case 'p':
                comp_score++;
                user_score_span.innerHTML = user_score;
                comp_score_span.innerHTML = comp_score;
                result_p.innerHTML = 'You Lose';
        break;
    }
}
function game_paper (computerChoice) {
    switch (computerChoice){
        case 'r':
            user_score++;
            result_p.innerHTML = 'You Win';
            user_score_span.innerHTML = user_score;
            comp_score_span.innerHTML = comp_score;
        break;
        case 's':
                comp_score++;
                user_score_span.innerHTML = user_score;
                comp_score_span.innerHTML = comp_score;
                result_p.innerHTML = 'You Lose';
        break;
        case 'p':
            result_p.innerHTML = 'Draw';
            user_score_span.innerHTML = user_score;
            comp_score_span.innerHTML = comp_score;
        break;
    }
}
function game_scissors (computerChoice) {
    switch (computerChoice){
        case 'r':
            comp_score++;
            user_score_span.innerHTML = user_score;
            comp_score_span.innerHTML = comp_score;
            result_p.innerHTML = 'You Lose';
        break;
        case 's':
            result_p.innerHTML = 'Draw';
            user_score_span.innerHTML = user_score;
            comp_score_span.innerHTML = comp_score;
        break;
        case 'p':
            user_score++;
            result_p.innerHTML = 'You Win';
            user_score_span.innerHTML = user_score;
            comp_score_span.innerHTML = comp_score;
        break;
    }
}
rock.addEventListener ('click', function () {
    computerChoice = getComputerChoice();
    game_rock(computerChoice);
});
paper.addEventListener ('click', function () {
    computerChoice = getComputerChoice();
    game_paper(computerChoice);
});
scissors.addEventListener ('click', function () {
    computerChoice = getComputerChoice();
    game_scissors(computerChoice);
});
// console.log (getComputerChoice());