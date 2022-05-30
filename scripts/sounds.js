let sound;
let audio = document.querySelector('.music-block');

function soundPurchase() {
    if (sound == 0) {
        const audioClick = new Audio(); // Создаём новый элемент Audio
        audioClick.preload = 'auto';
        audioClick.src = './assets/sound/click.mp3'; // Указываем путь к звуку "клика"
        audioClick.volume = '0.3';
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
        audioBuy.volume = '0.8';
        audioBuy.play(); 
    } else if (sound == 4) {
        const audioLevelUp = new Audio(); // Создаём новый элемент Audio
        audioLevelUp.preload = 'auto';
        audioLevelUp.src = './assets/sound/levelup.mp3'; // Указываем путь к звуку "клика"
        audioLevelUp.volume = '0.8';
        audioLevelUp.play(); 
    }
}

let tracks = [
    "assets/music/piglins.mp3",
    "assets/music/golovorezi.mp3",
    "assets/music/new_era.mp3",
    "assets/music/limuzin.mp3",
    "assets/music/bunker.mp3",
];

const audioBG = new Audio(); // Создаём новый элемент Audio
audioBG.preload = 'auto';
audioBG.src = tracks[getRandomInt(0, 5)];
audioBG.volume = '0.1';

function startMusic() {
    if (flagMusic == 1) {
        audioBG.play();
        flagMusic = 0;
    } else if (flagMusic == 0) {
        audioBG.pause();
        flagMusic = 1;
    }
}

audio.onclick = function() {
    startMusic();
}