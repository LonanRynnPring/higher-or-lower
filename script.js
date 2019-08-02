let score = 0;
let deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
          [array[i], array[j]] = [array[j], array[i]]; // swap elements
        }
      }
    shuffle(deck)
const start = (num) => {
    
    userInput = prompt(`Your card is ${deck[num]}, will the next card be higher or lower?`)
    if (userInput == "h" && deck[num+1] > deck[num] || userInput == "l" && deck[num+1] < deck[num]){
        alert(`You are correct`)
        score++
    }
    else {
        alert(`You are wrong, you lose`)
    }
    console.log(score)
    // alert(`your current score is ${score}`)
}

for (i = 0 ; i < deck.length-1 ; i++){
start(i)
}