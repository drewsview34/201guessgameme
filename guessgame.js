'use strict';

function andrewQuestions (arraysIndex) {
  //array for questions
  var questions = [0, 'Is my name Andrew?', 'Am I 33 years old?', 'Was I born is Seattle?', 'Is my favorite food tacos?', 'Am I a student at Code Fellows?'];
  console.log(questions);
  //array for answers
  var correctAnswers = [0, 'YES', 'YES', 'YES', 'YES', 'YES'];
  //array for positive feedback to user
  var positiveFeedback = [0, 'You\'re correct!', 'That\'s correct. Where\'s my birth present?', 'Yes, that\'s my city!', 'Of course I do; I\'m Mexican.', 'I am! That\'s how I\'m learning all this cool stuff.'];
  //array for negative feedback
  var constructiveFeedback = [0, 'Shaking my head...', 'Nope. No wonder you weren\'t at my birthday party.', 'Although I grew up in Eastern WA, I was born Seattle.', 'Wrong choice. Now I\'m not sharing my tacos with you.', 'Incorrect, I\'m obviously a beginner.'];

  //prompt with question and log response
  var response = prompt(questions[arraysIndex]).toUpperCase();
  console.log('response', response);
  var correctTally = 0; // total correct tally for return to main code
  console.log('correctTally', correctTally);
  //check response against correct answer
  if (response === correctAnswers[arraysIndex].substring(0,1) || response === correctAnswers[arraysIndex]) {  //use truncated answer to accommodate shorthand response
    // positive feedback to user
    alert(positiveFeedback[arraysIndex]);
    correctTally++;
    console.log('correctTally', correctTally);
  } else {
    // constructive feedback to user
    alert(constructiveFeedback[arraysIndex]);
  }
  //return correct boolean (for use in total correct tally)
  console.log('correctTally', correctTally);
  return correctTally;
}

var userName = prompt('Welcome to my page! What\'s your name?');

var totalCorrect = 0;

for(var i=1; i<6; i++) {
  totalCorrect += andrewQuestions(i);
}

alert('Congrats, ' + userName + '! You got ' + totalCorrect + ' answers correct.');


// Q6
// var sportsNumber = 34;
// console.log ('sportsNumber', sportsNumber);
// var userGuess = parseInt(prompt('What\'s my favorite number? Here\'s a hint... Guess between 30 and 40.'));
// console.log('userGuess', userGuess);

// var i = 0;
// while (userGuess !== 34 && i < 3) {
//   if (userGuess > 34) {
//     userGuess = parseInt(prompt('Your guess was too high. Try again'));
//     i++;
//     console.log('i', i);
//   }
//   if (userGuess < 34 && i < 3) {
//     userGuess = parseInt(prompt('Your guess was too low. Try again.'));
//     i++;
//     console.log('i', i);
//   }
// }
// if (userGuess === 34) {
//   alert('You\'re correct! That was my high school sports\' number.');
// } else {
//   alert('Too bad. You\'re out of tries.');
// }
// //Q7
// var userColorGuess = prompt('What\'s my favorite color?').toUpperCase();
// console.log('userColorGuess', userColorGuess);
// var counter = 0;
// var myColors=['GREEN','WHITE', 'RED'];
// while(counter < 7 && myColors === true){
//   for(var index = 0; index <= myColors.length; index++){
//     if(userColorGuess === myColors[index])
//     {
//       alert('You are correct!');
//       myColors++;
//     }
//     if(myColors === true)
//     {
//       break;
//     }
//     else
//     {
//       userColorGuess = prompt('Try again.');
//       counter++;
//     }
//   }
// }