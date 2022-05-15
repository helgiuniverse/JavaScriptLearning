// 1. Функции и процедуры, функции имеют оператор return, а процедуры - нет.

function sum1 (a,b){
    return a + b;
}

function add1 (x) {
    x++;
}

// 2. Варианты записи функций.

// 2.1 Function Declaration.

function sum (a,b){
    return a + b;
}

// 2.2 Function expression.

const sum = function (a,b) {
    return a + b;
}

// 2.3 IIFE - Immediately - invoked function expression.

    (function (a,b){
        return a + b;
    })(2+7);

// 2.4 Arrow function

const sum = (a,b) => {
    return a + b;
}

const sum = (a,b) => a+b;

const add1 = x => x++;

// 3. Область видимости

let isValid = false;
const str = 'Hello world!';

function isString (name){
    const isValid = typeof str === 'string';
    return isValid;
}

// 4. Функции высшего порядка

let nums = [1, 2, 3, 4, 5];

function copyArrayAndDoSmth(arr, instructions){
    const output = [];
    for (let i = 0; i < arr.length; i++){
        output.push(instructions(arr[i]));

    }
    return output;
}

// instructions - колбек, инструкция, которую принимает функция для выполнения определенных операций


function add1(num){
    return num++;
}

function numSquared(num){
    return num**2;
}

const copyArrAndAdd1 = copyArrayAndDoSmth(nums, add1);
const copyArrAndNumSquared = copyArrayAndDoSmth(nums, numSquared);

// 5. Рекурсия
// 1. Базовое условие
// 2. Правило движения по рекурсии

function factorial(n){
    if(n === 0) return 1;
    return n * factorial(n-1);
}

// Принимает символ и возвращает этот символ в 5 экземплярах

let counter = 0;

function repeater(char){
    counter++;

    if(counter === 5){
        return char;
    }
    return char + repeater(char);
}

// 6. Замыкание

function addByX (x){
    function addByY (y){
        return x+y;
    }
    return addByY;
}

//Функция возвращает функцию

// 5. Поняите стека и очереди
