let a = "Aditya:";
let b = " is noob ";
let c = `${a}${b}`; // '${a} ${b}'
console.log(c); // NaN

//Arrays

const arr = [1, 3, 4, 5];
arr.reverse();
console.log(arr.join(", "));

//objects

function showCallFunc(fn) {
  let a = 10;
  fn(a);
}

function fn(a) {
  console.log(a);
}

showCallFunc(fn);

function password() {
  return `The Password is ${person.key} and the account holder is ${person.name}`;
}

const person = {
  name: "Aditya",
  key: "1234",
  password,
};

console.log(person.password());

const myself = {
  name: "Apratim",
  age: 19,
  greet: function () {
    return `Hello, I am ${myself.name} and I am ${myself.age} years old.`;
  },
};

console.log(myself.greet());

const date = new Date();
console.log(date.getMonth());

/* var interval = setInterval(function() {
    console.log('Hello World');
}, 2000);

setTimeout(function() {
    clearInterval(interval);
}, 10000); */

//Arrow Functions

const greet = username => `Hello ${username}`;
console.log(greet("Apratim"));

/* setTimeout(() => { 
    console.log("Hello");
    setTimeout(() => {
        console.log("Hey");
        setTimeout(() => {
            console.log("Namaste");
            setTimeout(() => {
                console.log("Hola");
                setTimeout(() => {
                    console.log("Bonjour");
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000);    */

//enhance object literals

const user1 = (Name, age , work) => {
    return {
        Name,
        age,
        work,
        intro: () => {
            return `Hello, I am ${Name} and I am ${age} years old and I work as a ${work}`;
        }
    }
}

const apratim = user1("Apratim", 19, "Student");
console.log(apratim.intro());

//ES5 to ES6

//ES5

var lib = {
    sum: function(a, b) {
        return a + b;
    },
    multiply: function(a, b) {
        return a * b;
    }
};

//ES6

const Lib = {
    sum: (a,b) => a + b,
    multiply: (a,b) => a * b,
};

console.log(Lib.sum(2,3));

const getPersionES5 = (name, age, height) => {
    return {
        name,
        age,
        height,
    };
};

console.log(getPersionES5("Apratim", 19, 6.1));

//...operator

const nexa = (Farhan, Aditya, Arkodeep, Apratim) => {
    console.log(`Farhan: ${Farhan}\nAditya: ${Aditya}\nArkodeep: ${Arkodeep}\nApratim: ${Apratim}`);
}

const attr = ["Good", "Worst", "Best", "intern of worst"];
nexa(...attr);

//cloning

let ar=[1,3,4,5];
let ar2 = [4,5];

const user = {
    name: "Jen",
    age: 22,
}

const clone = {...user};
const arClone = {...ar};
const ar2Clone = {...ar2};

//rest operator

function Apratim(Age, College, ...hobbies){
    return {
        Age: Age,
        Colleg: College,
        Hobbies: hobbies,
    };
};

console.log(Apratim(19, "IEM:KOLKATA", "Coding", "Gaming", "Chess"));