// get elements
let phone = document.querySelector('.phone');
let counter = document.querySelector('.counter');
let info = document.querySelector('.info');
let game = document.querySelector('.game');
let wrapper = document.querySelector('.wrapper');
let upgrades = document.querySelector('.container-info');
let music = document.querySelector('.music_on');
let volume = document.querySelector('.volume-slider');
let levelBar = document.querySelector('.level-bar');
let levelCounter = document.querySelector('.level_counter');

// new elements
let level = 1;
let exp = 0;
let flagMusic = 1;
let count = 0;
let bonusCount = 0;
let newCount = 1;
let buff = document.createElement('button');
let bonus = document.createElement('button');
let pytorka = document.createElement('img');

// element's classes
bonus.setAttribute('class', 'bonus');
buff.setAttribute('class', 'buff');

phone.addEventListener('click', function() {
  sound = 0;
  count += newCount;
  counter.innerHTML = `CLICKS: ` + count;

  soundPurchase();
  checkCount();
  counterClicks();
  animationPhone();
  siteTheme();
  
});

setInterval(() => animationInfo('5opka'), 60000 * 15);