//ES6 Feature : Array and object Destructuring

// function greeting(user){

//     const {name,age, address} =user;
//     const{long , lat}= address;
//     console.log(`Hello ${name} and age ${age} from ${lat}, ${long}`);
// }

// const user ={
//     name: 'Aditya',
//     age: 20,
//     address:{
//         long:343.343,
//         lat:2323.23,
//     },
// };

// greeting(user);

// let [a,b,c,d] =[1,2,3,4];
// console.log(a,b,c,d);

//l -2
//Data Structure : Set
// let set =new Set();
// set.add(100);
// set.add(200);
// set.add(300);
// set.add(100);

// console.log(set);
// console.log(set.size);
// set.delete(200);
// console.log(set);
// console.log(set.size);

// for(let i of set){
//     console.log(i);
// }

// set.forEach((i) => console.log(i));

// set.clear();
// console.log(set);

//l-3
// Map

// let map= new Map();

// map.set('Mango' , 'Aam');
// map.set('Banana', 'Kela');
// map.set('Score',100);

// console.log(map);

// for(let i of map){
//     console.log(i);
// }

// console.log(map.has('Mango'));
// console.log(map);

// console.log(map.values());
// console.log(map.keys());

// map.clear();
// console.log(map);


//weak set, weak map
//l-4
// Only diff blw weak set and se it only support as an object not string and boolean values.
// const ws = new WeakSet();

// const obj1= {};
// const obj2= {};

// ws.add(obj1);
// ws.add(obj2);

// console.log(ws);

// console.log(ws.has(obj1));
// console.log(ws.has(obj2));

// ws.delete(obj1);
// console.log(ws.has(obj1));

// //weak map
// const wm = new WeakMap();

// wm.set(obj1,123456);
// console.log(obj1);
// console.log(wm.has(obj1));
// console.log(wm.get(obj1));

// wm.delete(obj1);
// console.log(wm.has());

//l-5
//Module

import addNumber  from "./main.js";
console.log(addNumber(10,30));


//l-6
//padstart, padEnd  trimStart, trinEnd

let min= '5';
let hors= '8';

console.log(min.padStart(4,'0'));
console.log(hors.padEnd(5,'0'));

let trimName= '   Aditya   ';

console.log(trimName.length);

trimName = trimName.trimEnd();
console.log(trimName.length);
console.log(trimName);

console.log(trimName.trimStart());