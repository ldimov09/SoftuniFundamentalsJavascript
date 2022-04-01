function oddOrEven(number){
    number = number.toString();
    let sumEven = 0, sumOdd = 0;
    for(let i = 0; i < number.length; i++){
        let digit = Number(number.charAt(i));
        if(digit % 2 === 0) sumEven += digit;
        else sumOdd += digit;
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);


}
oddOrEven(1000435);