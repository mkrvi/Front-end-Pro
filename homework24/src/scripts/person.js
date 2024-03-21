// Створіть клас Person з властивостями firstName і lastName і методом getFullName().
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
export default Person