function solve(num1, num2, num3){
    let sum = (n1, n2) => n1 + n2;
    let subtract = (n1, n2) => n1 - n2;
    let res = subtract(sum(num1, num2), num3);
    console.log(res);
}