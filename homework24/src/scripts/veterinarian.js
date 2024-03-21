// Створіть клас Veterinarian, який наслідується від класу Person і має нову властивість hospital і
// приватну (!) властивість #diagnosis = { ill = 'ill', healthy: 'healthy' }, а також наступні методи:
//     перевизначений метод getFullName(), який повертає ім'я лікаря і назву лікарні, де він працює
//     (например, Marichka Ofelko (Hospital));
// #setDiagnosis() (приватний метод), який повертає об'єкт діагноза пацієнта:
// return {
//     diagnosis: healthy or ill diagnosis from #diagnosis property,
//     info: some message to user,
// };
// Якщо у тваринки вага більше 20кг, то повернути ill і 'overweight';
// Якщо тваринці менше 1 року і вона їсть тільки м'ясо (food === 'meal'), то змінити харчування на корм 'dry food' і
// повернути ill і 'change food. Now <nickname> eats <food>;
// Якщо тваринка - безхатько, то знайти їй нового власника і якщо все добре, то повернути healthy і 'change home.
// Now <firstName> <lastName> have a new friend - <nickname>', якщо ні - повернути ill і повідомлення, яке повертає метод;
// Для всіх інших випадків повернути healthy;
// treatAnimal(), викликає метод #setDiagnosis() - (якщо тваринку треба лікувати, додає його в лікарню) і повертає об'єкт:
// return {
//     info: <nickname> from <location>,
//         fullDiagnosis: <diagnosis>: <info>,
// }
import Person from "./person";

class Veterinarian extends Person {
    #diagnosis = {
        ill: 'ill',
        healthy: 'healthy',
    };
    constructor(firstName, lastName, hospital) {
        super(firstName, lastName);
        this.hospital = hospital;
    }


    getFullName() {
        return `${super.getFullName()} (${this.hospital.name})`;
    }

    #setDiagnosis(animal) {
        if (animal.isHomeless) {
            if (animal.age < 12 && animal.food === 'meal') {
                this.hospital.addAnimal(animal)
                const result = this.hospital.findHome(animal)
                const index = this.hospital.getAnimals().indexOf(animal);
                this.hospital.getAnimals().splice(index, 1);
                return {
                    diagnosis: this.#diagnosis.ill,
                    info: result.message,
                }
            } else {
                const result = this.hospital.findHome(animal)
                const resultInfo = `Change home. Now ${result.name} have a new friend - ${animal.nickname}`
                return {
                    diagnosis: this.#diagnosis.healthy,
                    info: resultInfo
                }
            }
        }

        if (animal.weight > 20) {
            return {
                diagnosis: this.#diagnosis.ill,
                info: `${animal.nickname} is overweight`,
            };
        }

        if (animal.age < 12 && animal.food === 'meal') {
            animal.changeFood('dry food');
            return {
                diagnosis: this.#diagnosis.ill,
                info: `Change food. Now ${animal.nickname} eats ${animal.food}`,
            };
        }

        return {
            diagnosis: this.#diagnosis.healthy,
            info: `${animal.nickname} is healthy and can go home`,
        };
    }

    treatAnimal(animal) {
        const diagnosis = this.#setDiagnosis(animal);
        if (diagnosis.diagnosis === this.#diagnosis.ill) {
            this.hospital.addAnimal(animal);
        }

        return {
            info: `${animal.nickname} from ${animal.location}`,
            fullDiagnosis: `${diagnosis.diagnosis}: ${diagnosis.info}`,
        }
    }
}
export default Veterinarian
