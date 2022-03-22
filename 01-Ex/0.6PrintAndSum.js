function PrintAndSum(start, end){
    let sum = 0;
    let output = "";
    for(let i = start; i <= end; i++){
        output += i + " ";
        sum += i;
    }
    console.log(output);
    console.log(`Sum: ${sum}`);
}
PrintAndSum(5, 10);
PrintAndSum(0, 26);
PrintAndSum(50, 60);