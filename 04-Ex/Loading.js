function Loading(percent){
    let bar = "";
    switch(percent){
        case 0:   bar = "0% [..........]"; break;
        case 10:  bar = "10% [%.........]"; break;
        case 20:  bar = "20% [%%........]"; break;
        case 30:  bar = "30% [%%%.......]"; break;
        case 40:  bar = "40% [%%%%......]"; break;
        case 50:  bar = "50% [%%%%%.....]"; break;
        case 60:  bar = "60% [%%%%%%....]"; break;
        case 70:  bar = "70% [%%%%%%%...]"; break;
        case 80:  bar = "80% [%%%%%%%%..]"; break;
        case 90:  bar = "90% [%%%%%%%%%.]"; break;
        case 100: bar = "100% [%%%%%%%%%%]"; break;
    }
    
    if(percent === 100){
        console.log("100% Complete!");
        console.log(bar);
    }else{
        console.log(bar);
        console.log("Still loading...");
    }
}
Loading(10);
Loading(20);
Loading(30);
Loading(40);
Loading(50);
Loading(60);
Loading(70);
Loading(80);
Loading(90);
Loading(100);