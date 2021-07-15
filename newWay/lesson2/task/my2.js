//створити масив з: 5 числових значень та вивести його в консоль
let array = [1, 2, 3, 4, 5];
console.log(array);


//створити масив з: 5 стічкових значень та вивести його в консоль
let array1 = ['apple', 'pear', 'orange', 'plum', 'cherry'];
console.log(array1);


//створити масив з: 5 значень стрічкового, числового та булевого типу та вивести його в консоль
let array2 = [10, 'taxi', true, 'football', false];
console.log(array2);


//Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let array3 = [23, 34, 45, 56];
console.log(array3[2]);
console.log(array3[3]);


//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
let array4 = ['assd', 'qeee', 'qddas', 'asc', 'df', 'daa', 'sdasa', 'xxx', 'sdasd', 'aaa'];
document.write('<div>');
for (let i = 0; i < array4.length; i++) {
    document.write(`<div>${array4[i]}. index number ${i}</div>`)
}
document.write(`</div>`);


// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let array5 = ['cfsd', 'daad', 'qdqd', 'qd', 'aad', 'aa', 'ag', 'aaa', 'dadaac', 'aa', 'aac', 'ax', 'cc', 'svs', 'ss', 'st', 'a;', 'al', 'ap', 'afc'];
document.write('<div>');
let i = 0;
while (i < array5.length) {
    document.write(`
        <div>${array5[i]}. index number ${i}</div>`);
    i++;
}
document.write('</div>');


//Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array6.length; i++)
    console.log(array6[i]);


//Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let array7 = ['as', 'sf', 'sd', 'da', 'ad', 'ss', 'ad', 'rt', 'tyu', 'rte'];
for (let i = 0; i < array7.length; i++)
    console.log(array7[i]);


//Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let array8 = [1, 'fr', true, 4, 5, 'sds', 7, false, 9, 10];
for (let i = 0; i < array8.length; i++)
    console.log(array8[i]);


//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let array9 = [1, 'fr', true, 4, 5, 'sds', 7, false, 9, 10];
for (let i = 0; i < array9.length; i++)
    if (typeof array9[i] === "number")
        console.log(array9[i]);


//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let array10 = [1, 'fr', true, 4, 5, 'sds', 7, false, 9, 10];
for (let i = 0; i < array10.length; i++)
    if (typeof array10[i] === "boolean")
        console.log(array10[i]);


//Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let array11 = [1, 'fr', true, 4, 5, 'sds', 7, false, 9, 10];
for (let i = 0; i < array11.length; i++)
    if (typeof array11[i] === "string")
        console.log(array11[i]);


//Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let array12 = [];
array12[0] = 'a';
array12[1] = 1;
array12[2] = true;
array12[3] = 34;
array12[4] = false;
array12[5] = 'apple';
array12[6] = 'banana';
array12[7] = 23;
array12[8] = 121;
array12[9] = !32;
console.log(array12);


//Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
let array13 = [];
for (let i = 0; i < 10; i++) {
    console.log([i])
}
document.write(`${[i]}`);


//Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
let array14 = [];
for (let i = 0; i < 100; i++) {
    console.log([i])
}
document.write(`${[i]}`);


// Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
let array15 = [];
for (let i = 0; i < 100; i += 2) {
    console.log([i])
}
document.write(`${[i]}`);


//Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
let array16 = [];
for (let i = 0; i < 100; i = i + 2) {
    console.log([i])
}
document.write(`${[i]}`);


//Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
let array17 = [];
for (let i = 1; i < 100; i += 2) {
    console.log([i])
}
document.write(`${[i]}`);


//- Дано 2 масиви з рівною кількістю об'єктів.
//З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" . Записати цей об'єкт в новий масив

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];


for (let user of usersWithId) {
    for (let city of citiesWithId) {
        if (user.id === city.user_id) {
            user.address = city
        }
    }
}
console.log(usersWithId)

