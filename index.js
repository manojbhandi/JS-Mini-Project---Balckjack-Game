

let cards =[] ;
let sum = 0;

let hasBlackJack = false;
let isAlive = false;
let message = "";

let contatinerEl = document.getElementsByClassName("container")[0];
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("card-el");
let newCardBtn = document.getElementById("btn-enabled");
let startBtn = document.getElementById("start");



let playerEl = document.getElementById("player-el");

let player = {
    name : "Player Name",
    chips : 145,
}

// playerEl.textContent = player.name + " : $ " + player.chips;

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13 )+ 1;

    // Cosidering A --> 11;
    if(randomNumber === 1){
        return 11;
    }

    // Cosidering K, Q, J --> 10;
    else if(randomNumber > 10){
        return 10;
    }
    return randomNumber;
    
}

function startGame(){
    
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
     
    sum = firstCard + secondCard;

    renderGame();
}


function renderGame() {
    disable(startBtn);
    isAlive = true;
    hasBlackJack = false;

    cardEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent +=  cards[i] + " " ;
    }
    sumEl.textContent = "Sum: " + sum;
    
    if(sum < 21) {
        enable(newCardBtn);
        message = "Do You Want to Draw a New Card? "
        isAlive = true;
        
    }
    else if (sum  === 21) { 
        
        message = "You've Got a Blackjack!";
        hasBlackJack = true;
        disable(newCardBtn);
        playAgain();
        
    }
    else{
        message = "You're Out of Game";
        isAlive = false;
        playAgain();
        disable(newCardBtn);
    }

    messageEl.textContent = message;
}

function newCard(){

    if(isAlive == true && hasBlackJack == false){

    let card = getRandomCard();
    cards.push(card);
    sum += card;
    renderGame();
    
    }
 
}

function disable(newBtn){
    newBtn.classList.add("disable");
    newBtn.disabled = true;
}

function enable(newBtn){
    newBtn.classList.remove("disable");
    newBtn.disabled = false
}



function playAgain(){
    enable(startBtn);
    startBtn.innerHTML = "PLAY AGAIN";

}