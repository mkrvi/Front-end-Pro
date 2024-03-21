 // Створіть клас Hospital з властивістю name, а також з приватними властивостями #illAnimals
//  і #findingPetsPeople і методами:
//     для отримання даних з масивів: getAnimals() і getFindingPetsPeople();
//     для додавання даних в масиви: addAnimal() и addPeople() (можна додавати одразу декілька людей через кому);
//     findHome() - перевіряє чи знаходиться тварина в лікарні. Якщо так, то повертає наступний обʼєкт:
//     return {
//         status: restricted,
//         message: We need to heal <nickname> firstly,
//     };
// Якщо ні - видаляє випадкову людину з масиву #findingPetsPeople і повертає обʼєкт:
//     return {
//         status: success,
//         name: <firstName> <lastName>,
//     };

class Hospital {
    #illAnimals = [];
    #findingPetsPeople = []
    constructor(name) {
        this.name = name
    }
    getAnimals() {
        return this.#illAnimals
    }
    getFindingPetsPeople() {
        return this.#findingPetsPeople
    }
    addAnimal(animal) {
        this.#illAnimals.push(animal)
    }
    addPeople(...people) {
        this.#findingPetsPeople.push(...people)
    }
    findHome(animal) {
        if (this.#illAnimals.includes(animal)){
            return {
                status: 'restricted',
                message: `We need to heal ${animal.nickname} firstly`,
            }
        } else {
            const randomIndex = Math.floor(Math.random() * this.#findingPetsPeople.length);
            const [person] = this.#findingPetsPeople.splice(randomIndex, 1);
            return {
                status: 'success',
                name: person.getFullName(),
            }
        }

    }
}

export default Hospital