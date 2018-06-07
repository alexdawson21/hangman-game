

var wordBank = ["thor", "blackpanther", "spiderman", "ironman", "hulk", "vision", "captainamerica", "blackwidow",
"starlord", "scarlettwitch", "drax", "rocket", "groot", "drstrange"];


var validGuesses = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
var underscore = [];
var randWord;
var heroHint = 2;
var userGuess;
var hero;
var wrongGuesses = 0;
var winCounter= 0;
var answer;
var win;
var lose;
var keysUsed = [];
var keysPressed;

function wordselect(){
  var num = Math.floor(Math.random()*(wordBank.length));
  var randWord = wordBank[num];
  heroHint = num;
  hero = randWord;
  for ( var i = 0; i < randWord.length; i++) {
      underscore.push("_");
  }
  answer = "<p>Your hero is <br>" + underscore;
      document.querySelector("#answer").innerHTML = answer
  console.log(hero);
}
wordselect();
console.log(hero.indexOf("a"));


if (heroHint == 0){
    document.querySelector("#hint").innerHTML = "God of Thunder"
}
else if (heroHint == 1){
    document.querySelector("#hint").innerHTML = "King of Wakanda"
}
else if (heroHint == 2){
    document.querySelector("#hint").innerHTML = "Webslinger"
}
else if (heroHint == 3){
    document.querySelector("#hint").innerHTML = "Billionaire playboy philanthropist"
}
else if (heroHint == 4){
    document.querySelector("#hint").innerHTML = "Smashes"
}
else if (heroHint == 5){
    document.querySelector("#hint").innerHTML = "Android"
}
else if (heroHint == 6){
    document.querySelector("#hint").innerHTML = "First Avenger"
}
else if (heroHint == 7){
    document.querySelector("#hint").innerHTML = "Scizzor Kick"
}
else if (heroHint == 8){
    document.querySelector("#hint").innerHTML = "Part Planet"
}
else if (heroHint == 9){
    document.querySelector("#hint").innerHTML = "Mutant"
}
else if (heroHint == 10){
    document.querySelector("#hint").innerHTML = "Can become invisible"
}
else if (heroHint == 11){
    document.querySelector("#hint").innerHTML = "Collects body parts"
}
else if (heroHint == 12){
    document.querySelector("#hint").innerHTML = "I am blank"
}
else if (heroHint == 13){
    document.querySelector("#hint").innerHTML = "Doctor"
}
else {
    document.querySelector("#hint").innerHTML = "Error"
}

document.onkeypress = function (event) {
    var x = event.key;
    if (x == "a") {
        document.getElementById("a").style.opacity= 0;
    }
    else if (x=="b") {
        document.getElementById("b").style.opacity= 0;
    }
    else if (x=="c") {
        document.getElementById("c").style.opacity= 0;
    }
    else if (x=="d") {
        document.getElementById("d").style.opacity= 0;
    }
    else if (x=="e") {
        document.getElementById("e").style.opacity= 0;
    }
    else if (x=="f") {
        document.getElementById("f").style.opacity= 0;
    }
    else if (x=="g") {
        document.getElementById("g").style.opacity= 0;
    }
    else if (x=="h") {
        document.getElementById("h").style.opacity= 0;
    }
    else if (x=="i") {
        document.getElementById("i").style.opacity= 0;
    }
    else if (x=="j") {
        document.getElementById("j").style.opacity= 0;
    }
    else if (x=="k") {
        document.getElementById("k").style.opacity= 0;
    }
    else if (x=="l") {
        document.getElementById("l").style.opacity= 0;
    }
    else if (x=="m") {
        document.getElementById("m").style.opacity= 0;
    }
    else if (x=="n") {
        document.getElementById("n").style.opacity= 0;
    }
    else if (x=="o") {
        document.getElementById("o").style.opacity= 0;
    }
    else if (x=="p") {
        document.getElementById("p").style.opacity= 0;
    }
    else if (x=="q") {
        document.getElementById("q").style.opacity= 0;
    }
    else if (x=="r") {
        document.getElementById("r").style.opacity= 0;
    }
    else if (x=="s") {
        document.getElementById("s").style.opacity= 0;
    }
    else if (x=="t") {
        document.getElementById("t").style.opacity= 0;
    }
    else if (x=="u") {
        document.getElementById("u").style.opacity= 0;
    }
    else if (x=="v") {
        document.getElementById("v").style.opacity= 0;
    }
    else if (x=="w") {
        document.getElementById("w").style.opacity= 0;
    }
    else if (x=="x") {
        document.getElementById("x").style.opacity= 0;
    }
    else if (x=="y") {
        document.getElementById("y").style.opacity= 0;
    }
    else if (x=="z") {
        document.getElementById("z").style.opacity= 0;
    }
}
   
   
document.onkeyup = function(event) {
    wrongGuesses = wrongGuesses;
    userGuess = event.key;
    if (hero.indexOf(userGuess) >= 0) {
        for (var i = 0; i < hero.length; i++) {
            if (hero[i] === userGuess) {
                underscore[i] = userGuess;
                answer = "<p>Your hero is <br>" + underscore;
                document.querySelector("#answer").innerHTML = answer
                winCounter++;
                    win()
               
                
                console.log(underscore);
            }
        }
    }
    else {
    wrongGuesses++;
    }
    if (wrongGuesses == 1) {
        document.getElementById("power").style.opacity= 0;
    }
    if (wrongGuesses == 2) {
        document.getElementById("space").style.opacity= 0;
    }
    if (wrongGuesses == 3) {
        document.getElementById("reality").style.opacity= 0;
    }
    if (wrongGuesses == 4) {
        document.getElementById("soul").style.opacity= 0;
    }
    if (wrongGuesses == 5) {
        document.getElementById("time").style.opacity= 0;
    }
    if (wrongGuesses == 6) {
        document.getElementById("mind").style.opacity= 0;
        lose = true;
        if(lose == true){
        alert("Thanos has all the Stones!")
        }
    }
}
function win(){
        if (winCounter === hero.length) {
            win = true;
            if(win == true){
        alert("You Win!");
        }
    }
}

function reset() {
    location.reload();
}






