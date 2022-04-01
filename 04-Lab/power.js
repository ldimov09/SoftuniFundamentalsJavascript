function power(num, pow){
    let power = 1;
    for(let i = 0 ;i < pow; i++){
        power *= num;
    }
    if(pow == 0) power = 1; 
    console.log(power);
}
power(10 ,2)