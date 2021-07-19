// створити функцію яка приймає масив та виводить його
let array = [1, 2, 3, 4];

function invoke() {

    for (const arr of array) {
        console.log(arr);

    }
}

console.log(array);


// створити функцію яка приймає три числа та виводить найменьше.

function minimum(a, b, c) {
    if (a < b && a < c) {
        console.log(a);
        return a;
    } else if (b < c && b < a) {
        console.log(b);
        return b;
    } else {
        console.log(c);
        return c;
    }
}

console.log(minimum(2, 1, 4))


// - створити функцію яка приймає три числа та виводить та повертає найбільше.

function maximum(a, b, c) {
    if (a > b && a > c) {
        console.log(a);
        return a;
    } else if (b > c && b > a) {
        console.log(b);
        return b;
    } else {
        console.log(c);
        return c;
    }
}

console.log(maximum(1, 3, 6));


// створити функцію яка повертає найбільше число з масиву

function max(array2) {
    let max = array2[0];
    for (const maxItem of array2) {
        if (maxItem > max) max = maxItem;
    }
    return max;
}

let maxReturn = max([1, 3, 5, 6, 7, 34]);
console.log(maxReturn);


// створити функцію яка повертає найменьше число з масиву

function min(array3) {
    let min = array3[0];
    for (const minItem of array3) {
        if (minItem < min) min = minItem;
    }
    return min;
}

let minReturn = min([1, 3, 5, 6, 7, 34]);
console.log(minReturn);


// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let array4 = [1, 2, 10];
let i = 0;

function sum(array) {
    for (const arrayElement of array) {
        i += arrayElement;
    }
    return i;
}

console.log(sum(array4));


// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let array5 = [1, 2, 3, 4, 5];
let a = 0;

function avg(array) {
    for (const arrayElement of array) {
        a += arrayElement;
    }
    return a / array.length;
}

console.log(avg(array5));


//  - створити функцію яка заповнює масив рандомними числами. цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function random(count, max) {
    const array = [];
    for (let i = 0; i < count; i++) {
        array.push(Math.floor(Math.random() * max));
    }
    return array;
}

console.log(random(33,100));


