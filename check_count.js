function checkCount50() {
    if (count >= 50) {
        buff.innerHTML = "Купить бафф +2 за 50 кликов";
        table.append(buff);
        console.log('Набрано 50 кликов, купите бафф');
        checkCount50 = () => {};
    }
}
function checkCount150() {
    if (count >= 150) {
        buff.innerHTML = "Купить бафф +3 за 150 кликов";
        table.append(buff);
        console.log('Набрано 150 кликов, купите бафф');
        checkCount150 = () => {};
    }
}
function checkCount200() {
    if (count >= 200) {
        bonus.innerHTML = "Внимание, бонуска! +1 клик в секунду!";
        table.append(bonus);
        console.log('Набрано 200 кликов, купите бонуску');
        checkCount200 = () => {};
    }
}
function checkCount500() {
    if (count >= 500) {
        buff.innerHTML = "Купить бафф +4 за 500 кликов";
        table.append(buff);
        console.log('Набрано 500 кликов, купите бафф');
        checkCount500 = () => {};
    }
}
function checkCount750() {
    if (count >= 750) {
        bonus.innerHTML = "Внимание, бонуска! +2 клик в секунду!";
        table.append(bonus);
        console.log('Набрано 750 кликов, купите бонуску');
        checkCount750 = () => {};
    }
}
function checkCount1000() {
    if (count >= 1000) {
        buff.innerHTML = "Купить бафф +5 за 1000 кликов";
        table.append(buff);
        console.log('Набрано 1000 кликов, купите бафф');
        checkCount1000 = () => {};
    }
}

// init checkCounts
function checkCount() {
    checkCount50();
    checkCount150();
    checkCount200();
    checkCount500();
    checkCount750();
    checkCount1000();
}