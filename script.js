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
let count = 0;

function gessNumber(){

let userNumber = prompt('Угадай число от 1 до 100');

if (userNumber == null)  {
  alert('Игра окончена');
}
else {
if ((!isNumber(userNumber)) || (userNumber == '')) {
  alert('Введи число!');
  gessNumber(); // рекурсия
}
else {
if (randNumber < userNumber) {
  alert('Загаданное число меньше, осталось ' + (9-count) +  ' попыток ');
  count++;
  if (count<10) gessNumber(); // рекурсия
}
  else {
    if (randNumber > userNumber) {
      alert('Загаданное число больше, осталось ' + (9-count) + ' попыток ');
      count++;
      if (count<10) gessNumber(); // рекурсия
    }
    else {
      if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
        randNumber = getRandomInt(101);
        console.log('randNumber: ', randNumber);
        count = 0;
        gessNumber();
      }; 
    };
  };
  
};
};
count++;

};
gessNumber();
console.dir(gessNumber);


