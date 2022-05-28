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

// 5.3 Фильтрация массивов

const nums = [1,2,3,4,5];



const oddNums = nums.filter(x => x%2 !=== 0);

// 5.4 Метод reduce

staff.reduce((acc,user) =>{
    return acc + user.salary;
},0)

// 5.5 Поиск в коллекции

const frontendDevelopers = developers.find(item => item.area === 'frontend');

const players = [
    {
        id: 1,
        name: 'Andres',
        surname: 'Iniesta',
        club: 'Vissel Cobe',
    },
    {
        id: 2,
        name: 'Eden',
        surname: 'Hazard',
        club: 'Real Madrid',
    },
    {
        id: 3,
        name: 'Mo',
        surname: 'Salah',
        club: 'Liverpool',
    },
    {
        id: 4,
        name: 'Lionel',
        surname: 'Messi',
        club: 'Barcelona',
    },
];

const messi = players.find((player) => player.surname === 'Messi');

// 5.6 Сортировка массивов

const food = ["Apple", "Melon", "Banana", "Yogurt", "Orange", "Stawberry"];

const players = [
    {
        id: 1,
        name: 'Cristiano',
        surname: 'Ronaldo',
        club: 'Juventus',
    },
    {
        id: 2,
        name: 'Lionel',
        surname: 'Messi',
        club: 'Barcelona',
    },
    {
        id: 3,
        name: 'Karim',
        surname: 'Benzema',
        club: 'Real Madrid',
    },
    {
        id: 4,
        name: 'Maxi',
        surname: 'Gomez',
        club: 'Valencia',
    },
    {
        id: 5,
        name: 'Quincy',
        surname: 'Promes',
        club: 'Spartak',
    },
];
function sorting (a,b){
    if(a>b){
        return 3;
    }
    if(a<b){
        return -1;
    }
    return 0;
}
food.sort((a,b) => sorting(a,b));
players.sort((a,b) => sorting(a.surname, b.surname));

// 5.7 Деструктуризация массивов


const cities = ['Amster', 'Madrid', 'Paris', 'London', 'Berlin'];

const [amst, , paris, ...tail] = cities;

function getInfo() {
    return ['BMW', 'X3'];
}

const [carName, carSeries] = getInfo();

//  5.8 Деструктуризация объекта

const link = {
    href: '#',
    title: 'simple link',
    target: 'blank',
    className: 'link',
    id: null,
    children: {
        span: {
            content: 'Click me',
            className: 'anchor',
        },
    },
};

const {
    target,
    className,
} = link;

const {
    content,
    className : renamed
} = link.children.span;

// 5.9 JSON - JS obj notation

const players = [
    {
        id: 1,
        name: 'Andres',
        surname: 'Iniesta',
        club: 'Vissel Cobe',
    },
    {
        id: 2,
        name: 'Eden',
        surname: 'Hazard',
        club: 'Real Madrid',
    },
    {
        id: 3,
        name: 'Mo',
        surname: 'Salah',
        club: 'Liverpool',
    },
    {
        id: 4,
        name: 'Lionel',
        surname: 'Messi',
        club: 'Barcelona',
    },
];


const jsonPlayers = JSON.stringify(players);

const a =  JSON.parse(o);


