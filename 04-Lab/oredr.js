function order(name, count){
    let price;
    switch (name){
        case "water": 
            price = 1;
            break;
        case "coffee":
            price = 1.50;
            break;
        case "coke":
            price = 1.40;
            break;
        case "snacks":
            price = 2;
            break;
    }
    console.log((count * price).toFixed(2));
}