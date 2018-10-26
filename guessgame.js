'use strict ""';
var shannon = 'wuz here';
//Alert user to answer is only yes or no
alert('Please respond to the following questions with y, yes, Y, YES.');

//Q1
var userName = prompt('Is my name Andrew?').toUpperCase();
console.log('userName', userName);
if (userName === 'Y' || userName === 'YES') {
  alert('You\'re correct!');
} else {
  alert('Shaking my head...');}

//Q2
var userAge = prompt('Am I 33 years old?').toUpperCase();
console.log('userAge', userAge);
if (userAge === 'Y' || userAge === 'YES') {
  alert('That\'s correct. Where\'s my birth present?');
} else {
  alert('Nope. No wonder you weren\'t at my birthday party.');}

//Q3
var userBirthPlace = prompt('Was I born is Seattle?').toUpperCase();
console.log('userBirthPlace', userBirthPlace);
if (userBirthPlace === 'Y' || userBirthPlace === 'YES') {
  alert('Yes, that\'s my city!');
} else {
  alert('Although I grew up in Eastern WA, I was born Seattle.');}

//Q4
var userFood = prompt('Is my favorite food tacos?').toUpperCase();
console.log('userFood', userFood);
if (userFood === 'Y' || userFood=== 'YES') {
  alert('Of course I do; I\'m Mexican.');
} else {
  alert('Wrong choice. Now I\'m not sharing my tacos with you.');}

//Q5
var userSchool = prompt('Am I a student at Code Fellows?').toUpperCase();
console.log('userSchool', userSchool);
if (userSchool === 'Y' || userSchool === 'YES') {
  alert('I am! That\'s how I\'m learning all this cool stuff.');
} else {
  alert('Incorrect, I\'m obviously a beginner.');}

alert('Now, you will guess the final two questions.');

// Q6
var sportsNumber = 34;
console.log ('sportsNumber', sportsNumber);
var userGuess = parseInt(prompt('What\'s my favorite number? Here\'s a hint... Guess between 30 and 40.'));
console.log('userGuess', userGuess);

var i = 0;
while (userGuess !== 34 && i < 3) {
  if (userGuess > 34) {
    userGuess = parseInt(prompt('Your guess was too high. Try again'));
    i++;
    console.log('i', i);
  }
  if (userGuess < 34 && i < 3) {
    userGuess = parseInt(prompt('Your guess was too low. Try again.'));
    i++;
    console.log('i', i);
  }
}
if (userGuess === 34) {
  alert('You\'re correct! That was my high school sports\' number.');
} else {
  alert('Too bad. You\'re out of tries.');
}

//Q7
var correctState = false;
var guessState;
var triesLeft = 6;
var states = ['MEXICO', 'CANADA'];
while(!correctState && triesLeft > 0) {
  guessState = prompt('Guess what countries I\'ve traveled to?').toUpperCase();
  console.log('guessState', guessState);
  for(var j = 0; j < states.length; j++) {
    if(guessState === states[i]){
      alert('That\'s one of them. Good job.');
      correctState = true;
    }else if(guessState !== states[i] && (j === states.length - 1)) {
      triesLeft--;
      alert('Sorry, wrong state. You have ' + triesLeft + ' tries left!');
    }
  }
}