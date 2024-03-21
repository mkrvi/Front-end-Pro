//  Створити клас Cat, який наслідуються від класа Animal і має додаткову властивість
//  isHomeless (за замовчуванням true).
import Animal from "./animal";

class Cat extends Animal {
    constructor(nickname, food, location, age, isHomeless = true) {
        super(nickname, food, location, age);
        this.isHomeless = isHomeless
    }
}
export default Cat