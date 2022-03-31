function SumEven(input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 === 0){
            sum += Number(input[i]);
        }
    }
    console.log(sum);
}
SumEven(['1','2','3','4','5','6']);
SumEven(['3','5','7','9']);
SumEven(['2','4','6','8','10']);
/*
['1','2','3','4','5','6']


*/