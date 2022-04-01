function Matrix(n){
    function printRow(times){
        let output = "";
        for(let i = 0; i < times; i++){
            output += times + " ";
        }
        console.log(output);
    }
    for(let i = 0; i < n; i++){
        printRow(n);
    }
}
Matrix(3)