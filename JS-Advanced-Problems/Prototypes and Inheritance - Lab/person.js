function createPerson(firstName, lastName) {
    return {
        firstName,
        lastName,
        get fullName() {
            return `${this.firstName} ${this.lastName}`
        },
        set fullName(value) {
            const [first, last] = value.split(' ');
            if (first != undefined && last != undefined) {
                this.firstName = first
                this.lastName = last
            }
        }
    }
}