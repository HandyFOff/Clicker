let sound;

function soundPurchase() {
    if (sound == 0) {
        const audioClick = new Audio(); // Создаём новый элемент Audio
        audioClick.preload = 'auto';
        audioClick.src = './assets/sound/click.mp3'; // Указываем путь к звуку "клика"
        audioClick.play();
    } else if (sound == 1) {
        const audioBuy = new Audio(); // Создаём новый элемент Audio
        audioBuy.preload = 'auto';
        audioBuy.src = './assets/sound/buy_buff.mp3'; // Указываем путь к звуку "клика"
        audioBuy.play();
    } else if (sound == 2) {
        const audioBuy = new Audio(); // Создаём новый элемент Audio
        audioBuy.preload = 'auto';
        audioBuy.src = './assets/sound/buy_bonus.mp3'; // Указываем путь к звуку "клика"
        audioBuy.play();
    } else if (sound == 3) {
        const audioBuy = new Audio(); // Создаём новый элемент Audio
        audioBuy.preload = 'auto';
        audioBuy.src = './assets/sound/notification.mp3'; // Указываем путь к звуку "клика"
        audioBuy.play(); 
    }
}