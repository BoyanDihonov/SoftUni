function easterEggs(input) {
    let pattern = /[@#]+(?<color>[a-z]{3,})[@#]+([^a-zA-Z\d]*)(\/+(?<amount>\d+)\/+)/g;

    let match= '';
    while ((match = pattern.exec(input)) !== null) {
        let color = match.groups.color;
        let amount = match.groups.amount;
        console.log(`You found ${amount} ${color} eggs!`);
    }
}

easterEggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/'])