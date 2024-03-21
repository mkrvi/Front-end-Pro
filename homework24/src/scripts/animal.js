// Створити клас Animal з властивостями nickname, food, location, age(кількість місяців) і методом changeFood().

class Animal {
    constructor(nickname, food, location, age) {
        this.nickname = nickname
        this.food = food
        this.location = location
        this.age = age
    }
    changeFood(newFood) {
        this.food = newFood
    }
}
export default Animal