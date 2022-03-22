function Vacantion(num, type, day) {
    let finalPrice = 0;
    switch (type) {
        case "Students":
            if (day == "Friday") {
                finalPrice = num * 8.45;
            } else if (day == "Saturday") {
                finalPrice = num * 9.80;
            } else if (day == "Sunday") {
                finalPrice = num * 10.46;
            }
            if (num >= 30) {
                finalPrice *= 0.85;
            }
            break;
        case "Business":
            if (num >= 100) {
                num -= 10;
            }
            if (day == "Friday") {
                finalPrice = num * 10.9;
            } else if (day == "Saturday") {
                finalPrice = num * 15.60;
            } else if (day == "Sunday") {
                finalPrice = num * 16;
            }
            break;
        case "Regular":
            if (day == "Friday") {
                finalPrice = num * 15;
            } else if (day == "Saturday") {
                finalPrice = num * 20;
            } else if (day == "Sunday") {
                finalPrice = num * 22.5;
            }
            if (num >= 10 && num <= 20) {
                finalPrice *= 0.95;
            }
            break;

    }
    console.log(`Total price: ${finalPrice.toFixed(2)}`);
}
Vacantion(30,
    "Students",
    "Sunday");
Vacantion(40,
"Regular",
"Saturday");
/*
            Friday	Saturday  Sunday
Students	8.45	9.80	  10.46
Business	10.90	15.60	  16
Regular	    15	    20	      22.50*/