let player = {
    name: "Per",
    chips: 200,
    bet: 50
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let roundStarted = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let betEl = document.getElementById("bet-el")
let startBtn = document.getElementById("startRound-el")
let newCardBtn = document.getElementById("newCard-el")
let endBtn = document.getElementById("endRound-el")

playerEl.textContent = player.name + ": $" + player.chips
newCardBtn.style.background = "grey"
endBtn.style.background = "grey"

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startRound() {
    if (roundStarted === false) {
        isAlive = true
        hasBlackJack = false
        roundStarted = true
        betEl.textContent = "Bet: "+ "$" + player.bet
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        startBtn.style.background = "grey"
        newCardBtn.style.background = "goldenrod"
        endBtn.style.background = "goldenrod"
        renderGame()
    }
}

function endRound() {
    if (roundStarted == true) {
        player.chips -= 0.5*player.bet
        isAlive = false
        roundEnded()
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        player.chips += 1.5*player.bet
        roundEnded()
        hasBlackJack = true
    } else {
        message = "You've lost the round!"
        player.chips -= player.bet
        roundEnded()
        isAlive = false
    }
    messageEl.textContent = message
}

function roundEnded() {
    playerEl.textContent = player.name + ": $" + player.chips
    betEl.textContent = "Bet: "+ "$" + "0"
    roundStarted = false
    startBtn.style.background = "goldenrod"
    newCardBtn.style.background = "grey"
    endBtn.style.background = "grey"
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
