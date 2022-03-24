function gladiator(fights, hamPrice, swoPrise, shePrice, armPrice){
    let money = Math.floor(fights / 2) * hamPrice + Math.floor(fights / 3) * swoPrise + Math.floor(fights / 6) * shePrice + Math.floor(fights / 12) * armPrice;
    console.log(`Gladiator expenses: ${money.toFixed(2)} aureus`);
}
gladiator(7,
    2,
    3,
    4,
    5);