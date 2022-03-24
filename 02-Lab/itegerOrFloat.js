function integerOrFloat (a, b, c) {
    let sum = a + b + c;
    if(sum % 1 === 00){
        sum += ' - Integer';
    }else{
        sum += ' - Float';
    }
    console.log(sum);
}
integerOrFloat(9, 100, 1.1)