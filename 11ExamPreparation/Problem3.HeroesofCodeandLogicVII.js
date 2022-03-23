function Myheroes(input) {
  let n = Number(input.shift());
  let heroes = {};

  for (let i = 0; i < n; i++) {
    let heroData = input.shift().split(" ");
    let name = heroData[0];
    let hp = Number(heroData[1]);
    let mp = Number(heroData[2]);
    heroes[name] = {
      hp,
      mp,
    };
  }
  while (input[0] !== "End") {
    let tokens = input.shift().split(" - ");
    let command = tokens[0];
    let name = tokens[1];
    let param1 = Number(tokens[2]);
    let param2 = tokens[3];
    let hero = heroes[name];

    if (command === "CastSpell") {
      if (hero.mp >= param1) {
        hero.mp -= param1;
        console.log(
          `${name} has successfully cast ${param2} and now has ${hero.mp} MP!`
        );
      } else {
        console.log(`${name} does not have enough MP to cast ${param2}!`);
      }
    } else if (command === "TakeDamage") {
      hero.hp -= param1;
      if (hero.hp <= 0) {
        delete heroes[name];
        console.log(`${name} has been killed by ${param2}!`);
      } else {
        console.log(
          `${name} was hit for ${param1} HP by ${param2} and now has ${hero.hp} HP left!`
        );
      }
    } else if (command === "Recharge") {
      let mp = Math.min(200 - hero.mp, param1);
      hero.mp += mp;
      console.log(`${name} recharged for ${mp} MP!`);
    } else if (command === "Heal") {
      let hp = Math.min(100 - hero.hp, param1);
      hero.hp += hp;
      console.log(`${name} healed for ${hp} HP!`);
    }
  }

  for(let heroData of Object.entries(heroes)){
    let name = heroData[0];
    let hero = heroData[1];
    console.log(name);
    console.log(`  HP: ${hero.hp}`);
    console.log(`  MP: ${hero.mp}`);
  }
}

Myheroes([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);
console.log("================================");

Myheroes([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);
