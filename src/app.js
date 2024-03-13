/* let a = "Aditya:";
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

 var interval = setInterval(function() {
    console.log('Hello World');
}, 2000);

setTimeout(function() {
    clearInterval(interval);
}, 10000); 

//Arrow Functions

const greet = username => `Hello ${username}`;
console.log(greet("Apratim"));

 setTimeout(() => { 
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
}, 2000);    

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

const attr = ["Good", "Worst", "Best", "Rising Star"];
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

//Destructuring
const person1 = {
    name: "John Doe",
    age: 30,
    gender: "male",
    country: "USA",
};

const {name, age, gender, country} = person1;
console.log(name);
console.log(age);
console.log(gender);
console.log(country);

let options = {
    title: "My Menu",
    items: ["Item1", "Item2"],
};

function showMenu({title = "Untitled", height: h = 100, weight: w = 50, items: [Item1, Item2]}){
    console.log(`${title} ${h} ${w}`);
    console.log(Item1);
    console.log(Item2); 
}

showMenu(options);

//NESTED DESTRUCTURING

const songs = [
    { name: "Shivers", singer: "Ed Sheeran", duration: 4.34 },
    { name: "There's Nothing Holding me Back", singer: "Shawn Mendes", duration: 4.34 },
    { name: "Attention", singer: "Charlie Puth", duration: 4.34 },
    { name: "Fight Back", singer: "NEFFEX", duration: 4.34 },
    { name: "Love me Like you Do", singer: "Ellie Goulding", duration: 4.34 },
]

const [, , { singer: singer2 }, {singer: singer3}] = songs;

console.log(singer2, singer3);

//Destructing mixture

const data = {
    user: {
      id: 123,
      name: "John Doe",
      age: 30,
      email: "john.doe@example.com",
      address: {
        city: "New York",
        country: "USA",
      },
      hobbies: ["Reading", "Painting", "Cooking"],
      scores: {
        math: 95,
        science: 88,
        history: 75,
      },
    },
    products: [
      { id: 1, name: "Laptop", price: 1000 },
      { id: 2, name: "Phone", price: 800 },
      { id: 3, name: "Tablet", price: 500 },
    ],
    settings: {
      darkMode: true,
      notifications: {
        email: true,
        sms: false,
        push: true,
      },
      language: "English",
    },
}; 

const { 
    user: {
        name,
        age,
        email,
        address: {city, country},
        hobbies,
        scores: {math, science, history},
    },
    products: [product1, product2, product3],
    settings: {
        darkMode,
        notifications: {
            email: emailN,
            smsN,
            pushN
        }
    },
    language,
} = data;

//Ternary Operator



let money = true;

const decision = () => {
   return money === true ? "You can Buy Products": " You need to bring some money";
}

console.log(decision(money));



//For in loop

const object = {a:1, b:2, c:3};
for(let keys in object){
    console.log(`${keys}: ${object[keys]}`);
}



//For of loop

const array1 = [1,3,4,5];
for(let elements of array1){
    console.log(elements);
}


//For each Loop

//objects
const innercircle = { 0: "sandy", 1: "trishita", 2: "suvojit"};
Object.keys(innercircle).forEach((key) => {
    innercircle[key] = innercircle[key][0].toUpperCase() + innercircle[key].substring(1);
});

console.log(innercircle);

//arrays
const innercircle = ["sandy", "trishita", "suvojit"];
const cap = innercircle.forEach((friend,i, arr) => {
    arr[i] = friend[0].toUpperCase() + friend.substring(1);
});

console.log(innercircle)



const num = [1,2,3,5,5];
let sum=0;
function adder(number){
    sum = sum+number;
}
num.forEach(adder);

console.log(sum);



//filter

const ages = [32, 33, 15, 40];

const adults = ages.filter(age => age > 18);

console.log(adults);

//Question to shorten code

 let products = [
    {name: "Checkers", category: "Toys" },
    {name: "Harry Potter", category: "Books" },
    {name: "iPhone", category: "Electronics" },
    {name: "Learn PHP", category: "Books" },
]

let product;

for(let i = 0; i < products.length; i++){
    if(products[i].category === "Books"){
        product = products[i];
        break;
    }
}

console.log(product); 

//Solution

product = products.filter(item => item.category === "Books");
console.log(product);

*/
//reduce
const arr = [1,3,5,6]
const arr2 = arr.reduce((p,c) => p*c);
console.log(arr2);






