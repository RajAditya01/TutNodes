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
let set =new Set();
set.add(100);
set.add(200);
set.add(300);
set.add(100);

console.log(set);
console.log(set.size);
set.delete(200);
console.log(set);
console.log(set.size);

for(let i of set){
    console.log(i);
}

set.forEach((i) => console.log(i));

set.clear();
console.log(set);