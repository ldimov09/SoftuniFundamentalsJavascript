function Login(input){
    let user = input[0];
    let correctPass = "";   
    let pass = "";
    let logged = false;
    for(let i = user.length; i >= 0; i--){
        correctPass += user.charAt(i);
    }
    for(let i = 1; i <= 4; i++){
        pass = input[i];
        if(pass === correctPass){
            console.log(`User ${user} logged in.`);
            logged = true;
            break;
        }else{
            if(i != 4){
                console.log("Incorrect password. Try again.");
            }else{
                break;
            }
            
        }
    }
    if(!logged){
        console.log(`User ${user} blocked!`);
    }
}
Login(['Acer','login','go','let me in','recA']);

