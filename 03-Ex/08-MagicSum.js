function MagicSum(arr, Msum){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        let currEle = arr[i];
        for(let j = 0; j < arr.length; j++){
            let nextEle = arr[j];
            let sum = currEle + nextEle;
            if(sum === Msum){
                console.log(`${currEle} ${nextEle}`);
            }
        }
    }
}