// Створіть функцію main(), де створіть лікарню, лікаря або лікарку, кілька різних типів тварин з довільними значеннями
// і кілька людей, які шукають собі тварин.
// Усіх тварин відправте на прийом до лікаря та виведете в консоль інформацію про процес лікування.
// console.group(veterinarian.getFullName());
// console.log(conclusion.info);
// console.log(conclusion.fullDiagnosis);
// console.groupEnd();
// Виведіть у консоль прізвиська всіх тварин, які лікуються в лікарні.
// console.log('Animals in the hospital: ' + illAnimalNicknames);
import Hospital from "./hospital";
import Dog from "./dog";
import Cat from "./cat";
import Person from "./person";
import Veterinarian from "./veterinarian";

function main() {
    const hospital = new Hospital('Animal Hospital');
    const veterinarian = new Veterinarian('Tom', 'Cruise', hospital);
    const cat = new Cat('Whiskers', 'meal', 'Kyiv', 20, false);
    const cat2 = new Cat('Barsik', 'dry food', 'Kyiv', 30, true);
    const cat3 = new Cat('Tyzik', 'meal', 'Kyiv', 11, true)
    const dog = new Dog('Boston', 'dry food','Bila Tserkva', 50, 6);
    const dog2 = new Dog('Ars', 'dry food', 'Bila Tserkva', 67, 30);
    const dog3 = new Dog('Bobik', 'meal', 'Kyiv', 11, 10)
    const people = [
        new Person('Geralt', 'Is Rivii'),
        new Person('Triss', 'Merigold'),
        new Person('Yennifer', 'Is Vengerberga'),
        new Person('Zoltan', 'Hivay')
    ];

    hospital.addPeople(...people)

    const animals = [dog, dog2, dog3, cat, cat2, cat3];

    for (const animal of animals) {
        const treatment = veterinarian.treatAnimal(animal);

        console.group(veterinarian.getFullName());
        console.log(treatment.info);
        console.log(treatment.fullDiagnosis);
        console.groupEnd();
    }

    const illAnimalNicknames = hospital.getAnimals().map(animal => animal.nickname).join(', ')
    console.log('Animals in the hospital: ' + illAnimalNicknames);
}

main();