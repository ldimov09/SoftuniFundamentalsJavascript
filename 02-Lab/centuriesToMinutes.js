function centuriesToMinutes (centuries){
    let y = centuries * 100;
    let days  = Math.trunc(y * 365.2422) ;
    let hours = days * 24;
    let minutes = hours * 60;
    console.log(`${centuries} centuries = ${y} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}
centuriesToMinutes(1);