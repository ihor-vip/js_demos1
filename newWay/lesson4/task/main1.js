/*  - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
    - створити пустий масив, наповнити його 10 об'єктами Client
    - Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort) */


class Client {
    constructor ( id, name, surname, email, phone, order)
    {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clientArr = [
    new Client(21, 'anna', 'volkov', '123@gmail.com', 178, ['milk']),
    new Client(132, 'john', 'volkov', '123@gmail.com',3453,['bread']),
    new Client(3241, 'michael', 'volkov', '123@gmail.com',23443,['milk', 'bread']),
    new Client(451, 'peter', 'volkov', '123@gmail.com',4344378,['water', 'orange', 'onion']),
    new Client(13, 'sarah', 'volkov', '123@gmail.com',6485, ['water', 'bread', 'butter']),
    new Client(1342, 'kyle', 'volkov', '123@gmail.com',64872,['tomato', 'bread', 'cheese']),
    new Client(10, 'andrew', 'volkov', '123@gmail.com',979, ['lettuce', 'water']),
    new Client(143, 'steve', 'volkov', '123@gmail.com',24255, ['bread', 'water']),
    new Client(51, 'kate', 'volkov', '123@gmail.com',55443, ['banana', 'potato']),
    new Client(31, 'stan', 'volkov', '123@gmail.com',3255, ['milk', 'butter', 'bread']),
]
console.log(clientArr);

let clientArr2 = clientArr.sort(function (a,b){
    return  a.order.length - b.order.length;
})

console.log(clientArr2);



/* - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
    максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
 -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
 -- info () - яка виводить всю інформацію про автомобіль
 -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
 -- changeYear (newValue) - змінює рік випуску на значення newValue
 -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car */

function Car(model, manufacture, year, speed, engine) {
    this.model = model;
    this.manufacture = manufacture;
    this.year = year;
    this.speed = speed;
    this.engine = engine;
    this.drive = function () {
        console.log("їдемо зі швидкістю " + this.speed + " на годину");
    }
    this.info = function () {
        console.log(this.manufacture + ' ' + this.year + ' ' + this.speed + ' ' + this.engine)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.speed += newSpeed
    }
    this.changeYear = function (newValue) {
        this.year = newValue
    }
    this.addDriver = function (newDriver) {
        this.driver = newDriver
    }
}


let car1 = new Car('rs6', 'audi', 2018, 235, 3);
car1.drive();
car1.info('Audi RS 6 — спортивный автомобиль выпускаемый подразделением Audi Sport GmbH (ранее quattro GmbH) на платформе Audi A6');
car1.increaseMaxSpeed(255);
car1.changeYear(2020);
car1.addDriver('David');
console.log(car1);



// створити пустий масив, наповнити його 10 об'єктами new User(....)

class User {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}

let users = [
    new User(1, 'john', 'black', '123@gmail.com', 4255858),
    new User(2, 'kate', 'hopkins', '123@gmail.com', 8768755),
    new User(3, 'antony', 'dillian', '123@gmail.com', 5858766),
    new User(4, 'steve', 'sully', '123@gmail.com', 769699),
    new User(5, 'romeo', 'grays', '123@gmail.com', 776969),
    new User(6, 'jack', 'windsor', '123@gmail.com', 85875876),
    new User(7, 'sophie', 'jackson', '123@gmail.com', 643637),
    new User(8, 'sandra', 'larry', '123@gmail.com', 432567),
    new User(9, 'lisa', 'johnson', '123@gmail.com', 86878566),
    new User(10, 'mary', 'sanders', '123@gmail.com', 746536548)
];

console.log(users);



/* - (Те саме, тільки через клас)
     Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
    додати в об'єкт функції:
 -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
 -- info () - яка виводить всю інформацію про автомобіль
 -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
 -- changeYear (newValue) - змінює рік випуску на значення newValue
 -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car */

class Supercars {
    constructor(model, manufacturer, year, speed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.speed = speed;
        this.engine = engine;
        this.drive = function () {
            console.log("їдемо зі швидкістю " + this.speed + " на годину");
        }
        this.info = function () {
            console.log(this.manufacturer + ' ' + this.year + ' ' + this.speed + ' ' + this.engine)
        }
        this.increaseMaxSpeed = function (newSpeed) {
            this.speed += newSpeed
        }
        this.changeYear = function (newValue) {
            this.year = newValue
        }
        this.addDriver = function (newDriver) {
            this.driver = newDriver
        }
    }
}
let car2 = new Car('rs6', 'audi', 2019, 140, 3);
car2.drive();
car2.info('Audi RS 6 — спортивный автомобиль выпускаемый подразделением Audi Sport GmbH (ранее quattro GmbH) на платформе Audi A6');
car2.increaseMaxSpeed(155);
car2.changeYear(2021);
car2.addDriver('romeo');
console.log(car2);



/* - створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
   --  Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
   --  За допомоги циклу знайти яка попелюшка повинна бути з принцом.
   --  Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку. */

class Cinderella {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}

let cinderellas = [
    new Cinderella('sophie', 23, 34),
    new Cinderella('kate', 21, 37),
    new Cinderella('jennifer', 25, 36),
    new Cinderella('ann', 22, 35),
    new Cinderella('jessika', 16, 37),
    new Cinderella('margo', 20, 36),
    new Cinderella('jessy', 26, 38),
    new Cinderella('olivia', 34, 37),
    new Cinderella('victoria', 29, 37),
    new Cinderella('vanessa', 18, 36)
]

console.log(cinderellas);

let cinderellas2 = cinderellas.sort(function (a, b) {
    return a.footsize - b.footsize;
})
console.log(cinderellas2);


class Prince {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}

let prince = new Prince('william', 25, 34);

for (const cinderella of cinderellas) {
    if (cinderella.footsize === prince.footsize) {
        console.log(cinderella.name + ' ' + prince.name)
    }
}
