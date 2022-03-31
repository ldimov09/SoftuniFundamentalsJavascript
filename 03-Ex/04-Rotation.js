function Rotate(arr1, times){
    let lastElm;
    let next;
    for(let i = 0; i < times; i++){
        lastElm = arr1[0];
        for(let j = 0; j < arr1.length; j++){
            if(j != arr1.length-1){
                arr1[j] = arr1[j + 1];;
            }else{
                arr1[j] = lastElm;
            }
        }
    }
    console.log(arr1.join(" "));
}
Rotate([51, 47, 32, 61, 21], 2);