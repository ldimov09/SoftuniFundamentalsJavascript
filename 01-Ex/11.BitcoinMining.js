function BitcoinMining(input) {
    const GoldPrice = 67.51;
    const BitcoinPrice = 11949.16;
    let grams = 0;
    let money = 0;
    let firstBuyDay = 0;
    let bitcoins = 0;
    let bought = false;
    for (let i = 0; i < input.length; i++) {
        grams = Number(input[i]);
        if ((i + 1) % 3 == 0) {
            grams = grams * 0.70;
        }
        money += grams * GoldPrice;
        if (money >= BitcoinPrice) {
            bitcoins += Math.floor(money / BitcoinPrice);
            money = money % BitcoinPrice ;
            if (!bought) firstBuyDay = i + 1;
            bought = true;
        }

    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bought) console.log(`Day of the first purchased bitcoin: ${firstBuyDay}`);
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
BitcoinMining([3124.15, 504.212, 2511.124]);