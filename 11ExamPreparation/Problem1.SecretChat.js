function solve(input) {
  let commands = {
      InsertSpace,
      Reverse,
      ChangeAll,
  }
  let text = input.shift();
  while(input[0] !== "Reveal"){
    let tokens = input.shift().split(":|:");
    let name = tokens[0];
    let firstParam = tokens[1];
    let secondParam = tokens[2];
    let command = commands[name];
    text = command(text, firstParam, secondParam);

  }
  console.log(`You have a new text message: ${text}`);

  //====ChangeAll===
  function ChangeAll(text, search, replacement) {
    let result = text.split(search).join(replacement);
    console.log(result);
    return result;
  }
  //===Reverse===
  function Reverse(text, substr) {
    let index = text.indexOf(substr);
    if (index !== -1) {
      let left = text.slice(0, index);
      let right = text.slice(index + substr.length);
      let result = left + right + substr.split("").reverse().join("");
      console.log(result);
      return result;
    } else {
      console.log("error");
      return text;
    }
  }
  //===InsertSpace===
  function InsertSpace(text, index) {
    let left = text.slice(0, index);
    let right = text.slice(index);
    let result = left + " " + right;
    console.log(result);
    return result;
  }
}

solve([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
console.log("================================================");
solve([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);

