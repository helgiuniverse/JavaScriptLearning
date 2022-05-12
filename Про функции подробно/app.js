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
.