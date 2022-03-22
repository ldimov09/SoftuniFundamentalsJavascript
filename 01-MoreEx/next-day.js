/*function nextDay(year, mounth, day){
    let isLeap = false;
    let daysOfMounth;
    if((year % 4 == 0 && year % 100 !== 0) || year % 400 === 0){
        isLeap = true;
    }
    switch(mounth){
        case 1:
            daysOfMounth = 31;
            break;
        case 2:
            if(isLeap) daysOfMounth = 29;
            else daysOfMounth = 28
            break;
        case 3:
            daysOfMounth = 31;
            break;
        case 4:
            daysOfMounth = 30;
            break;
        case 5:
            daysOfMounth = 31; 
            break;
        case 6:
            daysOfMounth = 30;
            break;
        case 7:
            daysOfMounth = 31;
            break;
        case 8:
            daysOfMounth = 31;
            break;
        case 9: 
            daysOfMounth = 30;
            break;
        case 10:
            daysOfMounth = 31;
            break;
        case 11:
            daysOfMounth = 30;
            break;
        case 12:
            daysOfMounth = 31;
            break;
    }

    day++;
    if(day > daysOfMounth){
        day = 1;
        mounth ++;
   }
   if(mounth > 12){
       mounth ++;
       year++;
   }
   console.log(`${year}-${mounth}-${day}`);



}
*/
function nextDay(year, mounth, day){
    let my_today = new Date(year, mounth-1, day, 0 , 0 ,0 ,0 );
    let my_tomo = new Date(my_today);
    my_tomo .setDate(my_today.getDate() + 1);
    console.log(`${my_tomo.getFullYear()}-${my_tomo.getMonth()+1}-${my_tomo.getDate()}`);
}
nextDay(1, 1,1)