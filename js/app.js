let qwerty = document.getElementById("qwerty");
let phrase = document.getElementById("phrase");
let reset = document.getElementsByClassName("btn__reset")[0];
let missed = 0;

let phrases = ["Hi", "Anita Max Wyn", "Six Seven", "Meow Meow", "Beep Bus", "Limabeans", "Peehal pooop"];

reset.addEventListener('click', () => {
    let overlay = document.getElementById("overlay");
    overlay.style.display = 'none';
});

function getRandomPhraseAsArray(arr) {
    let number = Math.floor(Math.random() * arr.length);

    return arr[number];
}

function addPhraseToDisplay(word){
    let charArray = [...word];

    for(let char of charArray){
        let li = document.createElement('li');
        li.textContent = char;
        phrase.appendChild(li);
        if(char === ' '){
            li.className = 'space';
        } else{
            li.className = 'letter';
        }
    }
}

function checkLetter(button){
    let characters = document.getElementsByTagName('li');
    let match = null;

    for(char in characters){
        if(char.textContent === button.textContent){
            char.className = 'show';
            match.textContent = button.textContent;
        }
    }

    return match;
}

let word = getRandomPhraseAsArray(phrases);


