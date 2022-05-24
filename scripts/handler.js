function counterClicks() {
    buff.onclick = function() {
      sound = 1;
      soundPurchase();
      count = count - cost;
      counter.innerHTML = `Колличество кликов: ${count}`;
      newCount -= 1;
      newCount += 2;
  
      buff.remove();
    }
    bonus.onclick = function() {
      sound = 2;
      soundPurchase();
      count = count - cost;
      counter.innerHTML = `Колличество кликов: ${count}`;
      let bonuska = setInterval(() => test(), 1000);
      bonus.remove();
    }
}
  
function test() {
    count += 1;
    counter.innerHTML = `Колличество кликов: ` + count;
    checkCount();
}

function animationPhone() {
  phone.classList.add('phone_anim');
  setTimeout(() => { phone.classList.remove('phone_anim'); }, 100); 
}

function popupSettings() {
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
}