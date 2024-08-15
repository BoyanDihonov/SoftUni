function heroRecruitment(input) {
    let heroes = {}
  
    let commands = input.shift()
  
    while (commands != 'End') {
        let [command, heroName, spellName] = commands.split(' ')
        switch (command) {
            case 'Enroll':
                if (heroes[heroName]) {
                    console.log(`${heroName} is already enrolled.`)
                } else {
                    heroes[heroName] = []
                }
                break;
  
            case 'Learn':
                if (heroes[heroName]) {
                    if (heroes[heroName].includes(spellName)) {
                        console.log(`${heroName} has already learnt ${spellName}`)
                    } else {
                        heroes[heroName].push(spellName)
                    }
                } else {
                    console.log(`${heroName} doesn't exist.`)
                }
                break;
  
            case 'Unlearn':
                if (heroes[heroName]) {
                    if (!heroes[heroName].includes(spellName)) {
                        console.log(`${heroName} doesn't know ${spellName}`)
                    } else {
                        let spellIndex = heroes[heroName].indexOf(spellName);
                        heroes[heroName].splice(spellIndex, 1);
                    }
                } else {
                    console.log(`${heroName} doesn't exist.`)
                }
                break;
        }
  
        commands = input.shift()
    }
    console.log(`Heroes:`);
  Object.keys(heroes).forEach(hero => {
      let spells = heroes[hero].join(', ');
      console.log(`== ${hero}: ${spells}`);
  });
  }


// heroRecruitment(["Enroll Stefan",

//     "Enroll Peter",

//     "Enroll Stefan",

//     "Learn Stefan ItShouldWork",

//     "Learn John ItShouldNotWork",

//     "Unlearn George Dispel",

//     "Unlearn Stefan ItShouldWork",

//     "End"])

heroRecruitment(["Enroll Stefan",

    "Learn Stefan ItShouldWork",

    "Learn Stefan ItShouldWork",

    "Unlearn Stefan NotFound",

    "End"])