console.clear();
// ----------------- Variable -----------------
const gravity = 9.8;
const username: string = 'Santa';
let sum = 0;
sum += 2;

// console.log(username);
console.log(sum);

// ----------------- Function -----------------
function sayHello() {
    console.log('Hello!');
}

function greeting(name: string) {
    return 'Hi, ' + name;
}
console.log(greeting('Winny'));

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

const users = [];

// ----------------- Type Aliases and Interface -----------------

// Pick
export interface IPagination {
    total: number;
    limit: number;
    skip: number;
}

export type IUserListRequest = Pick<IPagination, 'limit' | 'skip'>;

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

const getTodo = async () => {
    const res = fetch(todoListUrl)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => console.log('error', err));

    console.log('res', res);
};
getTodo();
