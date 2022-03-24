function rightPlace(str, char, match){
    let res = str.replace("_", char);
    if(res === match){
        console.log("Matched");
        
    } else{
        console.log("Not Matched");
    }
}
rightPlace('Str_ng', 'i', 'String')