function spices(max) {
    let spices = 0;
    let dobiv = max;
    let days = 0;
    while (dobiv >= 100) {
        spices += dobiv;
        spices -= 26; 
        days ++;
        dobiv -= 10;
    }
    if(days !== 0){
        spices -= 26; 
    }
    console.log(days);
    console.log(spices);
}
spices(99);