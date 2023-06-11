//Object

// let name= 'Aditya';
// let age= 18;
// let hobby= 'Reading'

// // Object
// const user = {
//     name: 'Aditya',
//     age: 18,
//     hobby: 'Reading'
//   };
  
//   console.log(user);
//   console.log(user.age); // Dot notation
  
//   // Bracket notation
//   console.log(user['name']);
//   console.log(user['age']);


//Manipulation

// const user = {
//     name: 'Aditya',
//     age: 18,
//     hobby: 'Reading',
//     isMarried: false,
//   };

//   //Add
//   user.Email= 'adityavishal903@gmail.com';
//   user['Phone Number']= 807648957;

//   //Update
//   user.isMarried= false;
//   user.age=user.age+7;

//   //Delete
//   delete user.isMarried;

//   console.log(user);


//Object Method and This keyword

// const user = {
//     name: 'Aditya',
//     age: 18,
//     hobby: 'Reading',
//     isMarried: false,
//     friend: ['Deepak', 'Akshat', 'Rishav'],
//     calculateAge: function(){
//       console.log(`I am ${this.age} year old`);
//     }
//   };

//   user.calculateAge();
//   console.log(user);


//Traversing Object
// const user = {
//   name: 'Aditya',
//   age: 18,
//   hobby: 'Reading',
//   isMarried: false,
//   friend: ['Deepak', 'Akshat', 'Rishav'],
//   email: 'abc@gmail.com',
// };

// //one way
// for(let key in user){
//   console.log(key, user[key]);
// }

// //two way
// console.log(Object.keys(user));
// console.log(Object.values(user));

// for(let val of Object.values(user)){
//   console.log(val);
// }


//Exercise 1. Total salaries
// const salary={
//   aditya:2000,
//   raj:3000,
//   akshat:4000,
//   tyagi:5000,
//   vansh:6000,
// };

// let sum=0;

// for(let key in salary){
//   console.log(key, salary[key]);
//   sum = sum+ salary[key];
// }
// console.log(sum);


// console.log(Object.values(salary));

// for(let val of Object.values(salary)){
//   sum +=val;
// }
// console.log(sum);


//Exercise 2. Object Destructuring

// const user = {
//   name: 'Aditya',
//   age: 18,
//   hobby: 'Reading',
//   favBook:{
//     bookname: 'Thing and grow Rich',
//     bookauthor: 'raj',
//   },
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user.hobby);
// console.log(user.favBook.bookauthor);
// console.log(user.favBook.bookname);

//Same works using the Destructuring
// const {name,age,hobby,favBook} = user;

// console.log(name);
// console.log(age);
// console.log(hobby);
// console.log(favBook.bookauthor);
// console.log(favBook.bookname);


//Cloning an object

// const user = {
//   name: 'Aditya',
//   age: 18,
// };

//Type 1-->
// const copiedUser= {};
// copiedUser.name= user.name;
// copiedUser.age=user.age

// //Type 2-->
// for(let key in user){
//   console.log(key,user[key]);
//   copiedUser[key]=user[key]
// }

//Type 3
// const copiedUser = Object.assign({},user);

// console.log(copiedUser)


//Math Object
// console.log(Math.PI);
// console.log(Math.random);
// console.log(Math.round(4.9));
// Math.ceil(4.9);
// Math.floor(4.9);
// Math.trunc(4.9);
// Math.sign(-4);
// Math.pow(8, 2);
// //w3school
// Math.E        // returns Euler's number
// Math.PI       // returns PI
// Math.SQRT2    // returns the square root of 2
// Math.SQRT1_2  // returns the square root of 1/2
// Math.LN2      // returns the natural logarithm of 2
// Math.LN10     // returns the natural logarithm of 10
// Math.LOG2E    // returns base 2 logarithm of E
// Math.LOG10E   // returns base 10 logarithm of E


// Math.round(x)	Returns x rounded to its nearest integer
// Math.ceil(x)	Returns x rounded up to its nearest integer
// Math.floor(x)	Returns x rounded down to its nearest integer
// Math.trunc(x)	Returns the integer part of x (new in ES6)


//JSON Data Format
