console.clear();

// variables scope
var a = "Somchai";
let b = "b";
const c = "c";

b = a;

// console.log("a=", a, "b=", b, "c  =", c);

// let username = "Somchai";

// const exampleA = function () {
//   console.log(username);
// };

// // function expression
// const exampleB = () => {
//   console.log("example");
// };

// exampleB();

// type
type Person = {
  name: string;
};

// interface
interface ICheckOlderTeen {
  age: number;
  older: boolean;
}

const checkOlderTeen = (age: number): ICheckOlderTeen => {
  if (age > 25) {
    return {
      age: age,
      older: true,
    };
  }

  return {
    age: age,
    older: false,
  };
};

console.log("checkOlder", checkOlderTeen(30));

interface IAnimal {
  type: string;
  age?: number;
}

interface ICat extends IAnimal {
  name: string;
  owner?: string;
}

const cat: ICat = {
  name: "max",
  age: 10,
  type: "เลี้ยงลูกด้วยนม",
};

interface IOwner {
  firstname: string;
  lastname: string;
  cats: ICat[];
}

const cats: ICat[] = [
  {
    name: "Mali",
    age: 9,
    type: "เลี้ยงลูกด้วยนม",
  },
  {
    name: "Poa",
    age: 7,
    type: "เลี้ยงลูกด้วยนม",
  },
];

const ownerCat: IOwner[] = [
  {
    firstname: "Chalee",
    lastname: "Champ",
    cats: cats,
  },
];

console.log("ownerCat", JSON.stringify(ownerCat, null, 5));

//const totalCate = ownerCat[0].cats.length()

const countMyCat = (data: IOwner[]) => {
  const result = data.map((row: IOwner) => {
    return {
      name: row.firstname,
      count_cat: row.cats.length,
      cat_name: row.cats.map((cat) => cat.name),
      cat_name2: row.cats.map(({ name, type }) => ({ name, type })),
      cat_name3: row.cats.map(({ name, type }) => {
        return {
          name,
          type,
        };
      }),
    };
  });

  return result;
};

console.log("countMyCat", JSON.stringify(countMyCat(ownerCat), null, 5));

interface IProfile {
  firstname: string;
  lastname: string;
  age: number;
}
interface IJob {
  jobPosition: string;
}

interface IResume extends IProfile, IJob {}

const resume: IResume = {
  firstname: "Alice",
  lastname: "Cute",
  age: 20,
  jobPosition: "gamer",
};

interface IAnimals {
  age?: number;
}

interface IPet extends IAnimals {
  name: string;
  getName: () => string;
}

class Cat implements IPet {
  name: string;
  age?: number;

  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }
}

const catt = new Cat("cute");
catt.getName();
