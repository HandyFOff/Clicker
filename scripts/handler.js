function counterClicks() {
    buff.onclick = function() {
      if ((count - cost) < 0) {
        console.log('Недостаточно средств');
      } else {
        function buy_close() {
          buff.remove();
          buff.style.cssText = `
          animation: 1s forwards;
          animation-name: anio;
          opacity: 0;`;
          setValueLevel();
          setTimeout(() => setMaxLevel(), 2000);
        }
        count = count - cost;
        exp++;
        sound = 1;
        soundPurchase();
        counter.innerHTML = `CLICKS: ${count}`;
        newCount -= 1;
        newCount += 2;
        buff.style.cssText = `
        animation: 1s forwards;
        animation-name: anic;
        opacity: 1;`
        setTimeout(() => buy_close(), 1000);
      }
    }
    bonus.onclick = function() {
      if ((count - cost) < 0) {
        console.log('Недостаточно средств');
      } else {
        function buy_close() {
          bonus.remove();
          bonus.style.cssText = `
          animation: 1s forwards;
          animation-name: anio;
          opacity: 0;`;
          setValueLevel();
          setTimeout(() => setMaxLevel(), 2000);
        }
        count = count - cost;
        sound = 2;
        exp++;
        soundPurchase();
        counter.innerHTML = `CLICKS: ${count}`;
        let bonuska = setInterval(() => handlerBonus(), 1000);
        bonus.style.cssText = `
        animation: 1s forwards;
        animation-name: anic;
        opacity: 1;`
        setTimeout(() => buy_close(), 1000);
      }
    }
}
  
function handlerBonus() {
    count += 1;
    counter.innerHTML = `CLICKS: ` + count;
    checkCount();
    siteTheme();
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function setValueLevel() {
  levelBar.value = exp;
}

function setMaxLevel() {
  console.log('work');
  if (levelBar.value == levelBar.max) {
    exp = 0;
    levelBar.value = 0;
    levelBar.max += 1;
    levelCounter.innerHTML = `LEVEL ${level += 1}`;
  }
}

// Animations

function animationPhone() {
  phone.classList.add('phone_anim');
  setTimeout(() => { phone.classList.remove('phone_anim'); }, 100); 
}

function animationInfo(character) {
  if (character == "5opka") {
    pytorka.setAttribute('src', '../assets/img/kirill.png');
    pytorka.classList.add('pytorka');
    pytorka.style.cssText = `
    position: relative;
    z-index: 2;
    `
    upgrades.append(pytorka);
    setTimeout(() => pytorka.remove(), 10000);
  }
}

// POP-UP

let popupBg = document.querySelector('.popup__bg'); 
let popup = document.querySelector('.popup'); 
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup'); 
  
openPopupButtons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        popupBg.classList.add('active');
        popup.classList.add('active'); 
    })
});
  
closePopupButton.addEventListener('click',() => { 
    popupBg.classList.remove('active'); 
    popup.classList.remove('active'); 
});
  
document.addEventListener('click', (e) => { 
    if(e.target === popupBg) {
        popupBg.classList.remove('active'); 
        popup.classList.remove('active');
    }
});