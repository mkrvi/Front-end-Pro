// Создайте класс Worker со следующими свойствами name, surname, rate, days. Напишите внутри класса метод getSalary(),
// который считает зарплату (рейт умноженный на количество отработанных дней) и метод getInfo(), который возвращает строку
// с информацией о полученой зарплате сотрудника
// <name> <surname> got $<money>
//
// Создайте класс Boss, который наследуется от класса Worker. Этот класс имеет те же свойства, что и Worker и плюс
// дополнительное свойство totalProfit. Напишите метод getSalary(), который считает зарплату сотрудника так же как метод
// getSalary() класса Worker + 10% от прибыли (totalProfit)
// Чтобы посчитать переменную totalProfit - нужно найти сумму зарплат всех сотрудников на позиции worker. Можете найти
// эту переменную отдельно вне классов с помощью методов массива и передавать в класс Boss уже константой.
//     const totalProfit = /* some calculations */;
// new Boss('name', 'surname', 1, 1, totalProfit);
//
// Создайте класс Trainee, который наследуется от класса Worker. Этот класс имеет те же свойства, что и Worker, но его
// метод geSalary() работает следующим образом. Во время испытательного срока (до 60 дней) сотрудник получает 70% своей
// зарплаты, а после испытательного срока так же как обычный сотудник.
//
//     Возьмите массив объектов представленный в файле ниже (employee.js) и создайте для каждого объекта этого массива
//     новый объект соответсвующего класса (какой класс выбрать укажет свойсвто position).
// Продемонстрируйте метод getInfo() для каждого объекта в массиве.

class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.days * this.rate
    }
    getInfo() {
        return `${this.name} ${this.surname} got ${this.getSalary()}`
    }
}

class Boss extends Worker {
    constructor(name, surname, rate, days, totalProfit) {
        super(name, surname, rate, days);
        this.totalProfit = totalProfit;
    }
    getSalary() {
        return super.getSalary() + (this.totalProfit * 0.1)
    }

}

class Trainee extends Worker{
    constructor(name, surname, rate, days) {
        super(name, surname, rate, days);
    }
    getSalary() {
        if (this.days <= 60) {
            return 0.7 * super.getSalary()
        } else {
            return (60 * this.rate * 0.7) + ((this.days - 60) * this.rate)
        }
    }
}

const totalProfit = employees.filter(employee => employee.position === 'worker')
    .reduce((sum, employee) => sum + employee.rate * employee.days, 0);

const newEmployees = employees.map(employee => {
    if (employee.position === 'worker') {
        return new Worker(employee.name, employee.surname, employee.rate, employee.days);
    } else if (employee.position === 'trainee') {
        return new Trainee(employee.name, employee.surname, employee.rate, employee.days);
    } else if (employee.position === 'boss') {
        return new Boss(employee.name, employee.surname, employee.rate, employee.days, totalProfit);
    }
});

for (let employee of newEmployees) {
    console.log(employee.getInfo())
}
