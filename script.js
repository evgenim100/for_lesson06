'use strict';

let isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n)
};

let randNumber;


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

randNumber = getRandomInt(101);
console.log('randNumber: ', randNumber);


function gessNumber(){

let userNumber = prompt('Угадай число от 1 до 100');

if (!userNumber) {
  alert('Игра окончена');
}
else {
if (!isNumber(userNumber)) {
  alert('Введи число!');
  gessNumber(); // рекурсия
}
else {
if (randNumber < userNumber) {
  alert('Загаданное число меньше');
  gessNumber(); // рекурсия
}
  else {
    if (randNumber > userNumber) {
      alert('Загаданное число больше');
      gessNumber(); // рекурсия
    }
    else {
      alert('Поздравляю, Вы угадали!!!'); 
    };
  };
  
};
};
};
gessNumber();
console.dir(gessNumber);


