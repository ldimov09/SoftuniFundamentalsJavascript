function minNum(num1, num2, num3){
    let min = num1 + num2 + num3;
    if(num1 < min) min = num1;
    if(num2 < min) min = num2;
    if(num3 < min) min = num3;
    return min;
}