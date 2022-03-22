function Rounding(num, roundNum){
    num = Number(num);
    roundNum = Number(roundNum);
    if(roundNum > 15) roundNum = 15;
    num = num.toFixed(roundNum);
    console.log(parseFloat(num));
}
Rounding(3.1415926535897932384626433832795,2);
Rounding(10.5,3);