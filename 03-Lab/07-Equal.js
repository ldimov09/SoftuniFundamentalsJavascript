function Equal(arr1, arr2) {
    let equal = true;
    let length = 0;
    if (arr1.length > arr2.length) {
        length = arr2.length;
    } else {
        length = arr1.length;
    }
    for (let i = 0; i < length; i++) {
        if (Number(arr1[i]) !== Number(arr2[i])) {
            equal = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }
    }
    if (equal) {
        let sum = 0;
        for (let i = 0; i < arr1.length; i++) {
            sum += Number(arr1[i]);
        }
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
Equal(['10','20','30'], ['10','20','30']);
Equal(['1','2','3','4','5'], ['1','2','4','4','5']);
Equal(['1'], ['10']);

/*
['10','20','30'], ['10','20','30']
['1','2','3','4','5'], ['1','2','4','4','5']
['1'], ['10']
*/
