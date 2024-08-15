function heroes(input) {
    let n = Number(input.shift());
    let heroes = {};

    for (let i = 0; i < n; i++) {
        let [heroName, hp, mp] = input[i].split(' ');
        hp = Math.min(Number(hp), 100);
        mp = Math.min(Number(mp), 200);
        heroes[heroName] = { hp, mp };
    }

    for (let i = n; i < input.length; i++) {
        let [command, heroName, arg1, arg2] = input[i].split(' - ');

        switch (command) {
            case 'CastSpell':
                let mpNeeded = Number(arg1);
                let spellName = arg2;

                if (heroes[heroName].mp >= mpNeeded) {
                    heroes[heroName].mp -= mpNeeded;
                    console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mp} MP!`);
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                }
                break;

            case 'TakeDamage':
                let damage = Number(arg1);
                let attacker = arg2;

                heroes[heroName].hp -= damage;
                if (heroes[heroName].hp > 0) {
                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hp} HP left!`);
                } else {
                    delete heroes[heroName];
                    console.log(`${heroName} has been killed by ${attacker}!`);
                }
                break;

            case 'Recharge':
                let amountRecovered = Math.min(Number(arg1), 200 - heroes[heroName].mp);
                heroes[heroName].mp += amountRecovered;
                console.log(`${heroName} recharged for ${amountRecovered} MP!`);
                break;

            case 'Heal':
                let amountHealed = Math.min(Number(arg1), 100 - heroes[heroName].hp);
                heroes[heroName].hp += amountHealed;
                console.log(`${heroName} healed for ${amountHealed} HP!`);
                break;
        }
    }


    Object.keys(heroes).forEach((hero) => {
        console.log(`${hero}
  HP: ${heroes[hero].hp}
  MP: ${heroes[hero].mp}`);
    });
}
heroes([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
    ]
    )