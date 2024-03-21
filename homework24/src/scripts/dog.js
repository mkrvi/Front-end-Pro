//  Створити клас Dog, який наслідується від класа Animal і має додаткову властивість weight
import Animal from "./animal";

class Dog extends Animal {
    constructor(nickname, food, location, age, weight) {
        super(nickname, food, location, age);
        this.weight = weight
    }
}
export default Dog