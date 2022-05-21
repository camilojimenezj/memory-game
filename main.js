//Variables initializing
let uncovCards = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;
let moves = 0;
let hitCount = 0;
let timer = 40;
let iTimer = timer;
let timerOn = false;
let countDown = null;

//HTML elements
let showMoves = document.getElementById("movimientos");
let hits = document.getElementById("aciertos")
let showTime = document.getElementById("t-restante")

//Random numbers
let num = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
num = num.sort(()=> {return Math.random() - 0.5});

//Functions

function countTime() {
    countDown = setInterval(() =>{
        timer--;
        showTime.innerHTML = `Time: ${timer} seconds`
        if(timer == 0){
            clearInterval(countDown);
            blockCards();
        }
    }, 1000)
}

function blockCards() {
    for(let i = 0; i <= 15; i++){
        let blockedCard = document.getElementById(i);
        blockedCard.innerHTML = num[i];
        blockedCard.disabled = true;
    }
}

//Main function
function uncover(id) {
    uncovCards++;

    if(timerOn == false){
        countTime();
        timerOn = true;
    }

    if(uncovCards == 1){
        //Show first number
        card1 = document.getElementById(id);
        firstResult = num[id];
        card1.innerHTML = firstResult;

        //Didable fist button
        card1.disabled = true;

    } else if(uncovCards == 2) {
        //Show second number
        card2 = document.getElementById(id);
        secondResult = num[id];
        card2.innerHTML = secondResult;

        //Didable second button
        card2.disabled = true;

        //Increase moves
        moves++;
        showMoves.innerHTML = `Moves: ${moves}`;

        //Check results
        if(firstResult == secondResult){
            //Reset counter
            uncovCards = 0;

            //Increase hits
            hitCount++;
            hits.innerHTML = `Hits : ${hitCount}`;

            if(hitCount == 8){
                clearInterval(countDown);
                hits.innerHTML = `Hits : ${hitCount} 😱`;
                showTime.innerHTML = `Great! You did it in just ${iTimer - timer} seconds 😎`;
                showMoves.innerHTML = `Moves: ${moves} 🤟😎`;
            }
        } else {
        //Show and cover values
            setTimeout(()=>{
                card1.innerHTML = " ";
                card2.innerHTML = " ";
                card1.disabled = false;
                card2.disabled = false;

                //Reset counter
                uncovCards = 0;
            },800)
        }
    }

    
}
