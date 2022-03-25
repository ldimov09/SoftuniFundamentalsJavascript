function solve(input) {
    let string = input[0];
    let regex =
      /([#]|[\|])(?<itemName>[A-Za-z\s]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]{1,5})\1/g;
    let match = null;
    let totalCalories = 0;
    let provisons = [];
  
    while ((match = regex.exec(string))) {
      let item = match.groups.itemName;
      let expDate = match.groups.date;
      let calories = match.groups.calories;
      totalCalories += Number(calories);
      provisons.push(`Item: ${item}, Best before: ${expDate}, Nutrition: ${calories}`);
    }
    let daysToLast = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${daysToLast} days!`);
    console.log(provisons.join('\n'));

}
solve(["#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",]);