// localStorage.setItem('name','Aditya');
// localStorage.setItem('age',20);

// const age =localStorage.getItem('age');
// console.log(age);

// localStorage('name','Raj');
// console.log(localStorage.getItem('name')); 

//l-3
//local stroage
//localStorage.removeItem('name');
//localStorage.clear();

//l-4
const users=[
    {name:'Aditya' , age:20},
    {name:'raj' , age:20},
];

// console.log(JSON.stringify(users));
localStroage.setItem('users',JSON.stringify(users));
const userForm =localStorage.getItem('users');

//console.log(userForm);
console.log(JSON.parse(userForm));

//l-5
//session stroage

sessionStorage.setItem('name','Aditya');
localStorage.setItem('name','Aditya');