const phone = document.querySelector('.phone');
const counter = document.querySelector('.counter');
const info = document.querySelector('.info');

// new elements
let count = 0;
let bonusCount = 0;
let newCount = 1;
let game = document.querySelector('.game');
let upgrades = document.querySelector('.upgrades');
let buff = document.createElement('button');
let bonus = document.createElement('button');
let music = document.querySelector('.music_on');
let volume = document.querySelector('.volume-slider');
bonus.setAttribute('class', 'bonus');
buff.setAttribute('class', 'buff');

phone.addEventListener('click', function() {
  sound = 0;
  count += newCount;
  counter.innerHTML = `Count clicks: ` + count;

  soundPurchase();
  checkCount();
  counterClicks();
  animationPhone();
  
});

const audioBG = new Audio(); // Создаём новый элемент Audio
audioBG.preload = 'auto';
audioBG.src = './assets/music/piglins.mp3'; // Указываем путь к звуку "клика"
audioBG.loop = true;
let flag = true;