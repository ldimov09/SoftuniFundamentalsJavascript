function max(arr){
    let output = [];
    let isTop = true;
    for(let i = 0; i < arr.length; i++){
        if(i != arr.length - 1){
            isTop = true;
            EqualSum
            if(isTop) output.push(arr[i]);
        }else{
            output.push(arr[i]);
        }
    }
    console.log(output.join(" "));
}
max([1, 4, 3, 2])