function DivideFact(num1, num2){
    function factoriel(num){
        let result = 1;
        while(num != 1){
            result *= num;
            num -= 1
        }
        return result
    }
    let division = factoriel(num1) / factoriel(num2);
    console.log((division).toFixed(2));
}
DivideFact(5, 2)