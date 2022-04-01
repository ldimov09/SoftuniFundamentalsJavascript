function Palindrom (arr){
    let reverseNumber = (number) => Number(number.toString().split("").reverse().join(""));
    for(num of arr){
        console.log(reverseNumber(num) == num);
    }
}
Palindrom([123,323,421,121]);