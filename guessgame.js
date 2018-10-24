'use strict ""';

//Alert user to answer is only yes or no
alert('Please respond to the following questions with y, yes, Y, YES.');

var userName = prompt('Is my name Andrew?').toUpperCase();
console.log('userName', userName);
if (userName === 'Y' || userName === 'YES') {
  alert('You\'re correct!');
} else {
  alert('Shaking my head...');}

var userAge = prompt('Am I 33 years old?').toUpperCase();
console.log('userAge', userAge);
if (userAge === 'Y' || userAge === 'YES') {
  alert('That\'s correct. Where\'s my birth present?');
} else {
  alert('Nope. No wonder you weren\'t at my birthday party.');}

var userBirthPlace = prompt('Was I born is Seattle?').toUpperCase();
console.log('userBirthPlace', userBirthPlace);
if (userBirthPlace === 'Y' || userBirthPlace === 'YES') {
  alert('Yes, that\'s my city!');
} else {
  alert('Although I grew up in Eastern WA, I\'m from Seattle.');}

var userFood = prompt('Is my favorite food tacos?').toUpperCase();
console.log('userFood', userFood);
if (userFood === 'Y' || userFood=== 'YES') {
  alert('Of course I do; I\'m Mexican.');
} else {
  alert('Wrong choice. Now I\'m not sharing my tacos with you.');}

var userSchool = prompt('Am I a student at Code Fellows?').toUpperCase();
console.log('userSchool', userSchool);
if (userSchool === 'Y' || userSchool === 'YES') {
  alert('I am! That\'s how I\'m learning all this cool stuff.');
} else {
  alert('Incorrect, I\'m obviously a beginner.');}