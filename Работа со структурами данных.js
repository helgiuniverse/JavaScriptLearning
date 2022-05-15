// 5. Поняите стека и очереди

//FIFO, FILO

//Queue - first in, first out

//Stack - first in, last out

// 5.1 Понятие иммутабельности

const arr = [1,2,3,4,5];

// don`t use pop, push, shift, unshift, sort, reverse.

const newArr = arr.slice(0,2);

const newArr2 = [0,1,3, ...newArr];

const obj1 = {
    a:2,
    b:3
}

const obj2 = {
    ...obj1,
    a:4,
    d:7
}

// 5.2 Маппинг массивов и коллекций

const arr = [1,2,3,4,5];

const add1 = x => x++;

arr.forEach(Add1);

const arrAdd1 = arr.map(add1);