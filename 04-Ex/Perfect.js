function perfect(num) {
    let Deliteli = getDeliteli(num);
    let sum = 0;
    for(del of Deliteli){
        sum += del;
    }
    if(sum === num) console.log("We have a perfect number!");
    else console.log("It's not so perfect.");
    function getDeliteli(num){
        let arr = [];
        for(let i = 1; i < num; i++){
            if(num % i === 0){
                arr.push(i)
            }
        }
        return arr;
    }
}

perfect(453452)