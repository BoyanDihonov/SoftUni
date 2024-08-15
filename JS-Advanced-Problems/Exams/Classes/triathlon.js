class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        let participants = {}
        let listOfFinalists = []
    }

    addParticipant(participantName, participantGender) {
        if (participants[participantName]) {
            return `${participantName} has already been added to the list`;
        } else {
            participants[participantName] = participantGender;
            return `A new participant has been added - ${participantName}`;
        }
    }
    
     completeness(participantName, condition) {
    if (!participants[participantName]) {
        throw new Error(`${participantName} is not in the current participants list`);
    }
    if (condition < 30) {
        throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
    }

    const completedCount = Math.floor(condition / 30);

    if (completedCount < 3) {
        return `${participantName} could only complete ${completedCount} of the disciplines`;
    } else {
       
        const participantGender = participants[participantName];
        delete participants[participantName];
        const finalist = { participantName, participantGender };
        

        return `Congratulations, ${participantName} finished the whole competition`;
    }
}
}