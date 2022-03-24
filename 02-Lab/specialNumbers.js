function specialNumbers(n){
    let num;
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum = 0;
        num = i;
        num = num.toString();
        for(let j = 0 ; j < num.length; j++){
            sum += Number(num[j]);
        }
        if(sum === 5 || sum === 7 || sum ===  11){
            console.log(`${num} -> True`);
        }else{
            console.log(`${num} -> False`);
        }
    }
}
specialNumbers(15);