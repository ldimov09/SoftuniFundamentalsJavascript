function repeat(str, times){
    let output = "";
    for(let i = 0; i < times; i++){
        output += str;
    }
    console.log(output);
}
repeat("abc", 3)