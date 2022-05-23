const phone = document.querySelector('.phone');
const counter = document.querySelector('.counter');
const info = document.querySelector('.info');

// new elements
let count = 0;
let bonusCount = 0;
let newCount = 1;
let flag = false;
let table = document.querySelector('.info');
let buff = document.createElement('button');
let bonus = document.createElement('button');
bonus.setAttribute('class', 'bonus');
buff.setAttribute('class', 'buff');

phone.addEventListener('click', function() {
  count += newCount;
  counter.innerHTML = `Колличество кликов: ` + count;

  checkCount();
  counterClicks();
  
});

function counterClicks() {
  buff.onclick = function() {
    count = 0;
    counter.innerHTML = `Колличество кликов: ${0}`;
    newCount -= 1;
    newCount += 2;

    buff.remove();
  }
  bonus.onclick = function() {
    count = 0;
    let bonuska = setInterval(() => test(), 1000);
    bonus.remove();
  }
}

function test() {
  count += 1;
  counter.innerHTML = `Колличество кликов: ` + count;
  checkCount();
}