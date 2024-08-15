class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        let addedCandidates = [];
        for (let candidateInfo of candidates) {
            let [name, education, yearsExperience] = candidateInfo.split("-");
            yearsExperience = parseInt(yearsExperience);
            let candidateIndex = this.jobCandidates.findIndex(candidate => candidate.name === name);
            if (candidateIndex !== -1) {
                if (yearsExperience > this.jobCandidates[candidateIndex].yearsExperience) {
                    this.jobCandidates[candidateIndex].yearsExperience = yearsExperience;
                }
            } else {
                this.jobCandidates.push({ name, education, yearsExperience });
                addedCandidates.push(name);
            }
        }
        if (addedCandidates.length > 0) {
            return "You successfully added candidates: " + addedCandidates.join(", ") + ".";
        } else {
            return "No candidates were added.";
        }
    }

    jobOffer(chosenPerson) {
        const [name, minimalExperience] = chosenPerson.split("-");
        const minimalExp = parseInt(minimalExperience);
        const candidate = this.jobCandidates.find(candidate => candidate.name === name);
        if (!candidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }
        if (candidate.yearsExperience < minimalExp) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExp} years.`);
        }
        candidate.yearsExperience = "hired";
        return `Welcome aboard, our newest employee is ${name}.`;
    }

    salaryBonus(name) {
        const candidate = this.jobCandidates.find(candidate => candidate.name === name);
        if (!candidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }
        let salary = 40000;
        if (candidate.education === "Bachelor") {
            salary = 50000;
        } else if (candidate.education === "Master") {
            salary = 60000;
        }
        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $${salary} per year!`;
    }

    candidatesDatabase() {
        if (this.jobCandidates.length === 0) {
            throw new Error("Candidate Database is empty!");
        }
        let candidatesList = ["Candidates list:"];
        this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name));
        this.jobCandidates.forEach(candidate => {
            candidatesList.push(`${candidate.name}-${candidate.yearsExperience}`);
        });
        return candidatesList.join("\n");
    }
}

let Jobs = new JobOffers ("Google", "Strategy Analyst");
 console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
 console.log(Jobs.jobOffer("John Doe-8"));
 console.log(Jobs.jobOffer("Peter Parker-4"));
 console.log(Jobs.jobOffer("John Jones-8"));

