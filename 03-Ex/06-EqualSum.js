function EqualSum(arr){
    let isFound = false;
    for(let i = 0; i < arr.length; i++){
        let sumLeft = 0;
        let sumRight = 0;
        for(let j = i + 1; j < arr.length; j ++){
            sumRight += arr[j];
        }
        for(let j = i - 1; j >= 0; j--){
            sumLeft += arr[j];
        }
        if(i === 0){
            sumLeft = 0;
        }
        if(i === arr.length - 1){
            sumRight = 0;
        }
        if(sumRight === sumLeft){
            console.log(i);
            isFound = true;
            break;
        }
    }
    if(!isFound){
        console.log("no");
    }
}
EqualSum([1])