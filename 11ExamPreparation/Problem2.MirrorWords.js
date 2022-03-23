//  /(#|@)([A-Za-z]{3,})\1{2}([A-Za-z]{3,})\1/gm
function solve(input) {
  let text = input[0]; // take text from input

  // find regex matches
  let patern = /(#|@)([A-Za-z]{3,})\1{2}([A-Za-z]{3,})\1/g;
  let match = patern.exec(text);
  let counter = 0;
  let result = [];

  // for every match
  while (match !== null) {
    // - counter++
    counter++;
    // - check for mirror matches
    let word = match[2];
    let word2 = match[3];
    let reversed = word2.split("").reverse().join("");
    // -- if yes add results
    if (word == reversed) {
      result.push(`${word} <=> ${word2}`);
    }
    match = patern.exec(text);
  }
  if (counter == 0) {
    console.log("No word pairs found!");
  } else {
    console.log(`${counter} word pairs found!`);
  }

  if (result.length === 0) {
    console.log("No mirror words!");
  } else {
    console.log("The mirror words are:");
    console.log(result.join(", "));
  }
}
solve([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
