// Створіть клас Student, який приймає в якості аргумента в конструкторі об'єкт enrollee (абитурент). У екземпляру
// класу Student повинні бути наступні поля:
// id - унікальний ідентифікатор студента (генерується при створення екземпляру і починається з 1);
// name - ім'я студента (передаємо в об'єкті enrollee);
// surname - прізвище студента (передаємо в об'єкті enrollee);
// ratingPoint - рейтинг студента за результатами вступних іспитів (передаємо в об'єкті enrollee);
// schoolPoint - рейтинг студента за результати ЗНО (передаємо в об'єкті enrollee);
// isSelfPayment - якщо true, то студент на контракті, якщо false - на бюджеті (не створюється в конструкторі, а
// генерується за логікою вказаної нижче).
// tips: для генерації id, можна створити окрему статичку властивість в класі (static id = 1) і звертатися потім до неї
// в будь-якому місці класу (Student.id)
//
// Створіть клас University з властивістю name і методом addStudent().
//     Метод addStudend() повинен реалізовувати наступну логіку:
//     Додавати студентів в масив студентів університета;
// Якщо у студента ratingPoint більше чи дорівнює 800, то студент може бути зарахований на бюджет, при умові, що він
// буде входити в топ5 кращих студентів рейтингу (нагадаю, що рейтинг рахується як сума результатів з ЗНО і вступних
// іспитів - schoolPoint и ratingPoint);
// Встановлювати відповідне значення isSelfPayment для кожного студента;
// Додайте також методи для отримання даних про список зарахованих студентів і студенток, які зараховані на бюджет.
//
//
//     Перевірте роботу програми на прикладі масиву students. Створіть об'єкт студента на основі всіх абітурієнтів з
//     масиву students і додайте їх в університет. Виведіть інформацію про студентів, які зараховані і університет і
//     тих, хто зарахований на бюджет.
//
// За бажанням можете додати метод getStudentsByRating() для більш читабельного виводу даних.
const students = [
    {
        name: 'Сергій',
        surname: 'Войлов',
        ratingPoint: 1000,
        schoolPoint: 1000,
    },
    {
        name: 'Тетяна',
        surname: 'Коваленко',
        ratingPoint: 880,
        schoolPoint: 700,
    },
    {
        name: 'Анна',
        surname: 'Кугир',
        ratingPoint: 1430,
        schoolPoint: 1200,
    },
    {
        name: 'Станіслав',
        surname: 'Щелоков',
        ratingPoint: 1130,
        schoolPoint: 1060,
    },
    {
        name: 'Денис',
        surname: 'Хрущ',
        ratingPoint: 1000,
        schoolPoint: 990,
    },
    {
        name: 'Тетяна',
        surname: 'Капустник',
        ratingPoint: 650,
        schoolPoint: 500,
    },
    {
        name: 'Максим',
        surname: 'Меженский',
        ratingPoint: 990,
        schoolPoint: 1100,
    },
    {
        name: 'Денис',
        surname: 'Марченко',
        ratingPoint: 570,
        schoolPoint: 1300,
    },
    {
        name: 'Антон',
        surname: 'Завадский',
        ratingPoint: 1090,
        schoolPoint: 1010,
    },
    {
        name: 'Ігор',
        surname: 'Куштин',
        ratingPoint: 870,
        schoolPoint: 790,
    },
    {
        name: 'Інна',
        surname: 'Скакунова',
        ratingPoint: 1560,
        schoolPoint: 200,
    },
];

class Student {
    static id = 1
    constructor(enrollee) {
        this.id = Student.id++
        this.name = enrollee.name
        this.surname = enrollee.surname
        this.ratingPoint = enrollee.ratingPoint
        this.schoolPoint = enrollee.schoolPoint;
    }
}

class University {
    #students = [];
    constructor(name) {
        this.name = name;
    }

    addStudent(student) {
        this.#students.push(student)
        student.isSelfPayment = true
        student.totalRating = student.ratingPoint + student.schoolPoint
        const budgetStudents = this.#students.filter((student) => student.ratingPoint >= 800)
            .sort((a,b)=> b.totalRating - a.totalRating)
            .slice(0,5)
        this.student = this.#students.map(student => {
            student.isSelfPayment = !budgetStudents.includes(student)
            return student
        })
    }

    getBudgetStudents() {
        return this.#students.filter(student => !student.isSelfPayment);
    }

    getStudentsByRating() {
        return this.#students.sort((a, b) => b.totalRating - a.totalRating);
    }
}

const university = new University('Harvard');
for (let enrollee of students) {
    const student = new Student(enrollee);
    university.addStudent(student);
}

console.log(university.getBudgetStudents());
console.log(university.getStudentsByRating());
