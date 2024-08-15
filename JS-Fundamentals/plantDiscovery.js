function plantExhibition(input) {
    let n = Number(input.shift());
    let plants = {};

    for (let i = 0; i < n; i++) {
        let [plant, rarity] = input[i].split('<->');
        rarity = Number(rarity);
        plants[plant] = { rarity, ratings: [] };
    }

    for (let i = n; i < input.length; i++) {
        let [command, plantInfo] = input[i].split(': ');

        switch (command) {
            case 'Rate':
                let [plant, rating] = plantInfo.split(' - ');
                rating = Number(rating);

                if (plants.hasOwnProperty(plant)) {
                    plants[plant].ratings.push(rating);
                } else {
                    console.log("error");
                }
                break;

            case 'Update':
                let [updatePlant, newRarity] = plantInfo.split(' - ');
                newRarity = Number(newRarity);

                if (plants.hasOwnProperty(updatePlant)) {
                    plants[updatePlant].rarity = newRarity;
                } else {
                    console.log("error");
                }
                break;

            case 'Reset':
                let resetPlant = plantInfo;

                if (plants.hasOwnProperty(resetPlant)) {
                    plants[resetPlant].ratings = [];
                } else {
                    console.log("error");
                }
                break;
        }
    }

    console.log("Plants for the exhibition:");

    Object.keys(plants).forEach((plant) => {
        let ratingsSum = plants[plant].ratings.reduce((acc, rating) => acc + rating, 0);
        let averageRating = ratingsSum / (plants[plant].ratings.length || 1);

        console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${averageRating.toFixed(2)}`);
    });
}

plantExhibition(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
