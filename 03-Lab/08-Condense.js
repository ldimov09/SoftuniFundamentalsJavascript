function Considence (num1){
    let num2 = [];
    let show = true;
    let len = num1.length;
    for(let i = 0; i < len - 1; i++){
        if(num1.length <= 1){
            console.log(num1[0]);
            show = false;
            break;
        }

        for(let j = 0; j < num1.length - 1; j++){
            num2.push(num1[j] + num1[j + 1]);
        }
        num1 = num2;
        //console.log(num1);
        num2 = [];

    }

    if(show){ 
        console.log(num1[0]);
    }


}
Considence([2,10,3]);
Considence([5,0,4,1,2]);
Considence([1]);

/*
[2,10,3]
[5,0,4,1,2]
[1]
*/
/*

[5 ,0 ,4 ,1 ,2] -> [5, 4, 5 , 3] -> 

*/