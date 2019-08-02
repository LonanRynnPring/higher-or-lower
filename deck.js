const card = document.querySelector("#card");
const button = document.querySelector("#button")
const input = document.querySelector("#input");
const score = document.querySelector("#score");
const correct = document.querySelector("#correct");
const incorrect = document.querySelector("#incorrect");
const higher = document.querySelector("#higher");
const lower = document.querySelector("#lower");
const gameover = document.querySelector("#gameover");
const image = document.querySelector("#image");
const restart = document.querySelector("#restart");

let num = 0;
let score2 = 0;

correct.style.display = "none"
incorrect.style.display = "none"

class Card {
    constructor(name, value, link){
        this._name = name;
        this._value = value;
        this._link = link;
    }
    get name () {
        return this._name;
    }
    get value () {
        return this._value;
    }
    get link () {
        return this._link
    }
}

const s1 = new Card("AS", 1, "images/ace_of_spades2.png");
const s2 = new Card("2S", 2, "images/2_of_spades.png");
const s3 = new Card("3S", 3, "images/3_of_spades.png");
const s4 = new Card("4S", 4, "images/4_of_spades.png");
const s5 = new Card("5S", 5, "images/5_of_spades.png");
const s6 = new Card("6S", 6, "images/6_of_spades.png");
const s7 = new Card("7S", 7, "images/7_of_spades.png");
const s8 = new Card("8S", 8, "images/8_of_spades.png");
const s9 = new Card("9S", 9, "images/9_of_spades.png");
const s10 = new Card("10S", 10, "images/10_of_spades.png");
const sj = new Card("JS", 11, "images/jack_of_spades.png");
const sq = new Card("QS", 12, "images/queen_of_spades.png");
const sk = new Card("KS", 13, "images/king_of_spades.png");
const h1 = new Card("AH", 1, "images/ace_of_hearts.png");
const h2 = new Card("2H", 2, "images/2_of_hearts.png");
const h3 = new Card("3H", 3, "images/3_of_hearts.png");
const h4 = new Card("4H", 4, "images/4_of_hearts.png");
const h5 = new Card("5H", 5, "images/5_of_hearts.png");
const h6 = new Card("6H", 6, "images/6_of_hearts.png");
const h7 = new Card("7H", 7, "images/7_of_hearts.png");
const h8 = new Card("8H", 8, "images/8_of_hearts.png");
const h9 = new Card("9H", 9, "images/9_of_hearts.png");
const h10 = new Card("10H", 10, "images/10_of_hearts.png");
const hj = new Card("JH", 11, "images/jack_of_hearts.png");
const hq = new Card("QH", 12, "images/queen_of_hearts.png");
const hk = new Card("KH", 13, "images/king_of_hearts.png");
const c1 = new Card("AC", 1, "images/ace_of_clubs.png");
const c2 = new Card("2C", 2, "images/2_of_clubs.png");
const c3 = new Card("3C", 3, "images/3_of_clubs.png");
const c4 = new Card("4C", 4, "images/4_of_clubs.png");
const c5 = new Card("5C", 5, "images/5_of_clubs.png");
const c6 = new Card("6C", 6, "images/6_of_clubs.png");
const c7 = new Card("7C", 7, "images/7_of_clubs.png");
const c8 = new Card("8C", 8, "images/8_of_clubs.png");
const c9 = new Card("9C", 9, "images/9_of_clubs.png");
const c10 = new Card("10C", 10, "images/10_of_clubs.png");
const cj = new Card("JC", 11, "images/jack_of_clubs.png");
const cq = new Card("QC", 12, "images/queen_of_clubs.png");
const ck = new Card("KC", 13, "images/king_of_clubs.png");
const d1 = new Card("AD", 1, "images/ace_of_diamonds.png");
const d2 = new Card("2D", 2, "images/2_of_diamonds.png");
const d3 = new Card("3D", 3, "images/3_of_diamonds.png");
const d4 = new Card("4D", 4, "images/4_of_diamonds.png");
const d5 = new Card("5D", 5, "images/5_of_diamonds.png");
const d6 = new Card("6D", 6, "images/6_of_diamonds.png");
const d7 = new Card("7D", 7, "images/7_of_diamonds.png");
const d8 = new Card("8D", 8, "images/8_of_diamonds.png");
const d9 = new Card("9D", 9, "images/9_of_diamonds.png");
const d10 = new Card("10D", 10, "images/10_of_diamonds.png");
const dj = new Card("JD", 11, "images/jack_of_diamonds.png");
const dq = new Card("QD", 12, "images/queen_of_diamonds.png");
const dk = new Card("KD", 13, "images/king_of_diamonds.png");

let deck = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, sj, sq, sk, h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, hj, hq, hk, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, cj, cq, ck, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, dj, dq, dk];



function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
}

shuffle(deck)

card.textContent = `Will the next card be higher or lower?`;
image.src = deck[0].link;

function currentCard () {
    card.textContent = `Your card is ${deck[num].name} will the next card be higher or lower?`; 
}

function check() {
    if (num == deck.length-2){
        gameover.textContent = `Game Over! Your final score was ${score2}`;
    }
}

function image2() {
    image.src = deck[num].link;
    console.log(image.src)
}


higher.addEventListener('click', ()=>{
    
    if (deck[num+1].value > deck[num].value){
        correct.style.display = "block"
        incorrect.style.display = "none"
        score2 = score2 + 1;    
    }
    else {
        correct.style.display = "none"
        incorrect.style.display = "block"  
    }
    score.textContent = score2
    check()
    num++;
    image2()
});

lower.addEventListener('click', ()=>{
    
    if (deck[num+1].value < deck[num].value){
        correct.style.display = "block"
        incorrect.style.display = "none"
        score2 = score2 + 1;    
    }
    else {
        correct.style.display = "none"
        incorrect.style.display = "block"  
    }
    score.textContent = score2
    check()
    num++;
    image2()
});

restart.addEventListener("click", () =>{
    num = 0
    shuffle(deck)
    score2 = 0
    score.textContent = score2;
    image.src = deck[0].link;
})