function solve(num){
    let age = num;
    if(age < 0){
        console.log("out of bounds");
    }else if(age >= 0 && age <= 2){
        console.log("baby");
    }else if(age >= 3 && age <= 13){
        console.log("child");
    }else if(age >= 14 && age <= 19){
        console.log("teenager");
    }else if(age >= 20 && age <= 65){
        console.log("adult");
    }else if(age >= 65){
        console.log("elder");
    }
}
solve(7);
    /*·0-2 (age) – is a baby;   
·3-13 (age) – is a child; 
·14-19 (age) – is a teenager;
·20-65 (age) – is an adult;
·>=66 (age) – is an elder; */
