let qwerty = document.getElementById("qwerty");
let phrase = document.getElementById("phrase");
let reset = document.getElementsByClassName("btn__reset")[0];
let missed = 0;

let phrases = ["Hi", "Anita Max Wyn", "Six Seven", "Meow Meow", "Beep Bus", "Limabeans", "Peehal pooop"];

reset.addEventListener('click', () => {
    let overlay = document.getElementById("overlay");
    overlay.style.display = 'none';
});

console.log(phrases);