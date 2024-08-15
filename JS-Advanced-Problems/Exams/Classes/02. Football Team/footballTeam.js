class FootballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        let invitedNames = new Set();
        let updatedPlayers = [];

        footballPlayers.forEach(player => {
            let [name, age, playerValue] = player.split('/');
            playerValue = parseInt(playerValue);

            if (invitedNames.has(name)) {
                let existingPlayerIndex = this.invitedPlayers.findIndex(p => p.name === name);
                if (this.invitedPlayers[existingPlayerIndex].playerValue < playerValue) {
                    this.invitedPlayers[existingPlayerIndex].playerValue = playerValue;
                }
            } else {
                this.invitedPlayers.push({ name, age: parseInt(age), playerValue });
                invitedNames.add(name);
            }

            updatedPlayers.push(name);
        });

        return `You successfully invite ${updatedPlayers.join(', ')}.`;
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        let playerIndex = this.invitedPlayers.findIndex(p => p.name === name);

        if (playerIndex === -1) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        let requiredValue = this.invitedPlayers[playerIndex].playerValue;
        if (playerOffer < requiredValue) {
            let priceDifference = requiredValue - playerOffer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
        }

        this.invitedPlayers[playerIndex].playerValue = "Bought";
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        let playerIndex = this.invitedPlayers.findIndex(p => p.name === name);

        if (playerIndex === -1) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        let playerAge = this.invitedPlayers[playerIndex].age;
        let ageDifference = age - playerAge;

        if (ageDifference >= 5) {
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
        } else if (ageDifference >= 0) {
            return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
        } else {
            throw new Error(`${name} is above age limit!`);
        }
    }

    transferWindowResult() {
        let sortedPlayers = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));
        let result = "Players list:\n";
        sortedPlayers.forEach(player => {
            result += `Player ${player.name}-${player.playerValue}\n`;
        });
        return result.trim();
    }
}