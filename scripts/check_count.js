let cost;

function checkCount1() {
    if (count >= 50) {
        cost = 50;
        sound = 3;
        soundPurchase();
        buff.innerHTML = "Купить бафф +2 за 50 кликов";
        upgrades.append(buff);
        console.log('Набрано 50 кликов, купите бафф');
        checkCount1 = () => {};
    }
}
function checkCount2() {
    if (count >= 150) {
        cost = 150;
        sound = 3;
        soundPurchase();
        buff.innerHTML = "Купить бафф +3 за 150 кликов";
        upgrades.append(buff);
        console.log('Набрано 150 кликов, купите бафф');
        checkCount2 = () => {};
    }
}
function checkCount3() {
    if (count >= 200) {
        cost = 200;
        sound = 3;
        soundPurchase();
        bonus.innerHTML = "Внимание, бонуска! +1 клик в секунду!";
        upgrades.append(bonus);
        console.log('Набрано 200 кликов, купите бонуску');
        checkCount3 = () => {};
    }
}
function checkCount4() {
    if (count >= 500) {
        cost = 500;
        sound = 3;
        soundPurchase();
        buff.innerHTML = "Купить бафф +4 за 500 кликов";
        upgrades.append(buff);
        console.log('Набрано 500 кликов, купите бафф');
        checkCount4 = () => {};
    }
}
function checkCount5() {
    if (count >= 750) {
        cost = 750;
        sound = 3;
        soundPurchase();
        bonus.innerHTML = "Внимание, бонуска! +2 клик в секунду!";
        upgrades.append(bonus);
        console.log('Набрано 750 кликов, купите бонуску');
        checkCount5 = () => {};
    }
}
function checkCount6() {
    if (count >= 1000) {
        cost = 1000;
        sound = 3;
        soundPurchase();
        buff.innerHTML = "Купить бафф +5 за 1000 кликов";
        upgrades.append(buff);
        console.log('Набрано 1000 кликов, купите бафф');
        checkCount6 = () => {};
    }
}
function checkCount7() {
    if (count >= 1500) {
        cost = 1500;
        sound = 3;
        soundPurchase();
        bonus.innerHTML = "Внимание, бонуска! +3 клик в секунду!";
        upgrades.append(bonus);
        console.log('Набрано 1000 кликов, купите бафф');
        checkCount7 = () => {};
    }
}
function checkCount8() {
    if (count >= 2000) {
        cost = 2000;
        sound = 3;
        soundPurchase();
        buff.innerHTML = "Купить бафф +6 за 1000 кликов";
        upgrades.append(buff);
        console.log('Набрано 1000 кликов, купите бафф');
        checkCount8 = () => {};
    }
}
function checkCount9() {
    if (count >= 3000) {
        cost = 3000;
        sound = 3;
        soundPurchase();
        bonus.innerHTML = "Внимание, бонуска! +4 клик в секунду!";
        upgrades.append(bonus);
        console.log('Набрано 1000 кликов, купите бафф');
        checkCount9 = () => {};
    }
}
function checkCount10() {
    if (count >= 4000) {
        cost = 4000;
        sound = 3;
        soundPurchase();
        buff.innerHTML = "Купить бафф +7 за 1000 кликов";
        upgrades.append(buff);
        console.log('Набрано 1000 кликов, купите бафф');
        checkCount10 = () => {};
    }
}

// init checkCounts
function checkCount() {
    checkCount1();
    checkCount2();
    checkCount3();
    checkCount4();
    checkCount5();
    checkCount6();
    checkCount7();
    checkCount8();
    checkCount9();
    checkCount10();
}