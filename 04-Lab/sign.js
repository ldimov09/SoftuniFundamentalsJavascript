function sign(num1, num2, num3){
    let minusConter = 0;
    if(num1 < 0) minusConter ++;
    if(num2 < 0) minusConter ++;
    if(num3 < 0) minusConter ++;
    if(minusConter % 2 != 0){
        console.log("Negative");
    }else{
        console.log("Positive");
    }
}
sign( 5,12,-15);
