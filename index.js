// 2. Create the player object. Give it two keys, name and chips, and set their values
let player = {
    name : "Kishore",
    chips : 40
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.querySelector("#cards-el") // Learn CSS selectors ex: id(#), class(.) etc
let sumEl = document.querySelector("#sum-el")

// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.getElementById("player-el")

// 4. Render the player's name and chips in playerEl
playerEl.textContent = player.name + " : ₹"+ player.chips


function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
  
    renderGame()
}

function renderGame() {
cardsEl.textContent = "Cards: "
for(let i = 0; i < cards.length; i++)
{
    cardsEl.textContent += cards[i] + " "
}

 sumEl.textContent = "Sum: " + sum
if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!"
    hasBlackJack = true
} else {
    message = "You're out of the game!"
    isAlive = false
}

messageEl.textContent = message
}

function newCard() {
     // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
     if(isAlive && (!hasBlackJack))
     {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
     }
}

function getRandomCard(){
    /* In BlackJack game, Ace is considered as either 1 or 11 [We are considering it's value as 11 for simplifying]. 
    Jack[11], Queen[12] and king[13] are considered as 10.

     if 1     -> return 11
     if 11-13 -> return 10  */
    let randomNumber = Math.floor( Math.random() * 13) + 1
    console.log(randomNumber)
    if(randomNumber === 1)
    {
        return 11
    }
    else if(randomNumber > 10)
    {
        return 10
    }
    else return randomNumber
}