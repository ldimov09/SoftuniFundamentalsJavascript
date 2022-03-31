function Reverse(n, input){
    let begin = n - 1;
    let output = "";
    for(let i = begin; i >= 0; i--){
        output += input[i] + " ";
    }
    console.log(output);
}
Reverse(3, [10, 20, 30, 40, 50]);
Reverse(4, [-1, 20, 99, 5]);
Reverse(2, [66, 43, 75, 89, 47]);
/*3, [10, 20, 30, 40, 50]
4, [-1, 20, 99, 5]
2, [66, 43, 75, 89, 47]*/