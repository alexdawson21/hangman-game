function wordselect(wordbank) {
    var num = Math.floor(Math.random()*(wordbank.length - 1));
    var word = wordbank[num];
    let underscore = "";
    function generateUnderScore (wordselect) {
      for ( var i = 0; i <= word.length; i++) {
        underscore.appendChild("_");
      }
     var hero = "<p>Your hero is <br>" + underscore;
      document.querySelector("#answer").innerHTML = hero
     
    }
    return word;
  }
  wordselect(wordbank);

  var guesses = function () {
    myGuesses = document.getElementById('buttons');
    letters = document.createElement('ul');
  
    for (var i = 0; i < validGuesses.length; i++) {
      letters.id = 'validGuesses';
      list = document.createElement('li');
      list.id = 'letters';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
  var hero = "<p>Your hero is <br>" + underscore;
document.querySelector("#answer").innerHTML = hero;
console.log(lettersDiv);
document.querySelector("#alphabet").innerHTML = lettersDiv;

var lettersDiv;
for (var i = 0; i < validGuesses.length; i++) {

     lettersDiv += validGuesses[i];
  

}
function disappear(event) {
  var x = event.which || event.keyCode;
}