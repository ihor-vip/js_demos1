// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

const array = [];

function random(l) {
    for (let i = 0; i < l; i++) {
        let number = Math.floor(Math.random() * 100)
        array.push(Math.floor(number))
    }
    return array;
}

const random1 = random(10);
console.log(array);


// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.

const arrNumber = [];

function randomNumber(min, max, l) {
    for (let i = 0; i < l; i++) {
        let rand = min - 0.5 + Math.random() * (max - min + 1)
        arrNumber.push(Math.floor(rand))
    }
    return arrNumber;
}

const random3 = randomNumber(1, 100, 10);
console.log(arrNumber);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

const arrNumber1 = [];

function randomNumber1(min, max, l) {
    for (let i = 0; i < l; i++) {
        let rand = min - 0.5 + Math.random() * (max - min + 1)
        arrNumber1.push(Math.floor(rand))
    }
    return arrNumber1;
}

const random31 = randomNumber1(1, 100, 10);
console.log(arrNumber1);

let sort = arrNumber1.sort(function (a, b) {
    return a - b;
});

console.log(sort);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа

const arrNumber2 = [];

function randomNumber2(min, max, l) {
    for (let i = 0; i < l; i++) {
        let rand = min - 0.5 + Math.random() * (max - min + 1)
        arrNumber2.push(Math.floor(rand))
    }
    return arrNumber2;
}

const random32 = randomNumber2(1, 100, 10);
console.log(arrNumber2);

let filter = arrNumber2.filter(function (value) {
    return value % 2 === 0;
});

console.log(filter);


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.

const arrNumber7 = [];

function randomNumber7(min, max, l) {
    for (let i = 0; i < l; i++) {
        let rand = min - 0.5 + Math.random() * (max - min + 1)
        arrNumber7.push(Math.floor(rand))
    }
    return arrNumber7;
}

const random37 = randomNumber7(1, 100, 10);
console.log(arrNumber7);

let map = arrNumber7.map(function (item) {
    return item + '!'
});

console.log(map);


// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

class Users {
    constructor(id, name, surname, email) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
    }
}


// створити пустий масив, наповнити його 10 об'єктами new User(....)
    let userArray1 = [

        new Users(21, 'anna', 'volkova', '123@gmail.com'),
        new Users(132, 'john', 'volkova', '123@gmail.com'),
        new Users(3241, 'michael', 'volkova', '123@gmail.com'),
        new Users(451, 'peter', 'volkova', '123@gmail.com'),
        new Users(31, 'stan', 'volkova', '123@gmail.com'),
        new Users(13, 'sarah', 'volkova', '123@gmail.com'),
        new Users(1342, 'kyle', 'volkova', '123@gmail.com'),
        new Users(10, 'andrew', 'volkova', '123@gmail.com'),
        new Users(143, 'steve', 'volkova', '123@gmail.com'),
        new Users(51, 'kate', 'volkova', '123@gmail.com'),

    ]


// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)

let userArray = [

    new Users(21, 'anna', 'volkova', '123@gmail.com'),
    new Users(132, 'john', 'volkova', '123@gmail.com'),
    new Users(3241, 'michael', 'volkova', '123@gmail.com'),
    new Users(451, 'peter', 'volkova', '123@gmail.com'),
    new Users(31, 'stan', 'volkova', '123@gmail.com'),
    new Users(13, 'sarah', 'volkova', '123@gmail.com'),
    new Users(1342, 'kyle', 'volkova', '123@gmail.com'),
    new Users(10, 'andrew', 'volkova', '123@gmail.com'),
    new Users(143, 'steve', 'volkova', '123@gmail.com'),
    new Users(51, 'kate', 'volkova', '123@gmail.com'),

]

let userArraySort = userArray.filter(function (even) {
    return even.id % 2 === 0
}).sort(function (value1, value2) {
    return value1.id - value2.id
})

console.log(userArraySort);














































