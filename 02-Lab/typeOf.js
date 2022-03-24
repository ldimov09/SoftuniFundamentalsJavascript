function type(param){
    let type = typeof param;
    console.log(type);
    
    if(type === "string" ||type  === "number"){
        console.log(param);
    } else {
        console.log("Parameter is not suitable for printing");
    }
}
type("Hello, JavaScript!");
type(18.1);
type(null);