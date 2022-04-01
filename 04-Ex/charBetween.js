function Between(char1, char2){
    let Code1 = char1.charCodeAt(0);
    let Code2 = char2.charCodeAt(0);
    if(Code1 > Code2){
        let w = Code1;
        Code1 = Code2;
        Code2 = w;
    }
    let output = "";
    for(let i = Code1 + 1; i < Code2; i++){
        output += String.fromCharCode(i) + " ";
    }
    console.log(output);

}
Between("a", "d")