function Reverse2(arr){
    for(let i = 0; i < arr.length / 2; i++){
        MySwap(arr, i, arr.length - 1 - i);
    }
    console.log(arr.join(' '));
    function MySwap(arr, index1, index2){
        let w = 0;
        w = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = w;
    }
}

Reverse2(['a', 'b', 'c', 'd', 'e'] );
Reverse2(['abc', 'def', 'hig', 'klm', 'nop']);
Reverse2(['33', '123', '0', 'dd']);


/*
['a', 'b', 'c', 'd', 'e']
['abc', 'def', 'hig', 'klm', 'nop']
['33', '123', '0', 'dd']
*/