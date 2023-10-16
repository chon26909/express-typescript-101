import products from './data/products';
import users from './data/users';

console.clear();
// ----------------- Variable -----------------
const gravity = 9.8;
const username: string = 'Santa';
let sum = 0;
sum += 2;

// console.log(username);
// console.log(sum);

// ----------------- Function -----------------
function sayHello() {
    console.log('Hello!');
}

function greeting(name: string) {
    return 'Hi, ' + name;
}
// console.log(greeting('Winny'));

// ----------------- Arrow Function -----------------
function getFullname(firstname: string, lastname: string): string {
    return firstname + ' ' + lastname;
}

const getFullnameA = function (firstname: string, lastname: string) {
    return firstname + ' ' + lastname;
};
// arrow function () => { }
const getFullnameB = (firstname: string, lastname: string) => {
    return firstname + ' ' + lastname;
};

// ----------------- Array and Object -----------------

// array
const animal: string[] = ['car', 'dog', 'rat'];
animal.push('fish');
animal.pop();

// object
const user = {
    firstname: 'John',
    lastaname: 'Smith',
    age: 18
};

// ----------------- Type Aliases and Interface -----------------

// Pick
export interface IPagination {
    total: number;
    limit: number;
    skip: number;
}

export type IUserListRequest = Pick<IPagination, 'limit' | 'skip'>;

const request: IUserListRequest = {
    limit: 50,
    skip: 0
};
//

// ----------------- Enum type
enum Direction {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4
}

type ShippingStatus = 'shipping' | 'success' | 'failed' | 'cancelled';

// function getS(status: Direction) {}

// getS(Direction.Down);

// console.log('Shipping');

// ----------------- Callback Function -----------------
// const displayCount = (count: number, callbackFn: (message: string) => void) => {
//     for (let i = 0; i < count; i++) {
//         console.log('count ', i);
//     }
//     callbackFn('finished');
// };
// const displayEnd = (message: string) => {
//     console.log(message);
// };
// displayCount(5, displayEnd);

// ----------------- Promise -----------------
const todoListUrl = 'https://dummyjson.com/todos?limit=3&skip=0';

// const getTodo = () => {
//     const res = fetch(todoListUrl)
//         .then((res) => {
//             return res.json();
//         })
//         .then((res) => {
//             console.log(res);
//         })
//         .catch((err) => console.log('error', err));

//     console.log('res', res);
// };

const getTodo = async () => {
    try {
        const res = await fetch(todoListUrl);
        const todos = await res.json();
        console.log('todos', todos);
    } catch (error) {
        console.log('error', error);
    }
};

getTodo();

const cat = {
    name: 'cute',
    getName() {
        return this.name;
    }
};

interface IAnimal {
    age: number;
    getAge: () => number;
}

interface ICat extends IAnimal {
    name: string;
    getName: () => string;
}

class Cat implements ICat {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getAge() {
        return this.age;
    }

    getName() {
        return this.name;
    }
}

const increaseStock = (productId: number) => {
    products.map((item) => (item.id == productId ? { ...item, stock: item.stock + 1 } : item));
};

const getMaskedById = (uid: number) => {
    let user = users.find((user) => user.id === uid);

    if (user) {
        const fullname = user.firstName + ' ' + user.lastName;

        const userMasked = {
            ...user,
            fullname
        };

        return userMasked;
    }
};

// const result = getMaskedById(1);
// console.log('result: ', result);

const sortBirthdate = () => {
    return users.sort((a, b) => Date.parse(a.birthDate) - Date.parse(b.birthDate));
};

// console.log('sortBirthdate', sortBirthdate());

interface IResponse<T> {
    code: string;
    message: string;
    data?: T;
}

interface IProfile {
    firstname: string;
    lastname: string;
    age: number;
}

const reponse: IResponse<IProfile> = {
    code: '0000',
    message: 'success',
    data: {
        firstname: 'Adam',
        lastname: 'Smith',
        age: 18
    }
};

const getDay = () => {
    switch (new Date().getDay()) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
    }
};

console.log('getDay', getDay());
