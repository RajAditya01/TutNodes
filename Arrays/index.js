//l-1
let friend =['Aditya','akshat','punit','gautam'];

// console.log(friend);
// console.log(friend[0]);
// console.log(friend[2]);
// console.log(friend[3]);

// confirm.log(friend.length);

//l-2

// const num=[12,13,14,17,18]

// num.unshift(9,10,11);
// num.push(19,20,21);


// num.splice(3,0,15,16);

// console.log(num);

//l -3
// const num1=[1,2,3,4,5,6,7,8];

// num1.shift();
// num1.shift();
// num1.pop();
// num1.pop();

// num1.splice(2,2);
// console.log(num1);

//l- 4
// const num=[1,2,3,2,5,6,4,5,6,7,8]

// console.log(num.includes(6,4));
// console.log(num.indexOf(2));
// console.log(num.lastIndexOf(2));

// console.log(num);

// l-5
//finding object in array

// const doctor= [
//     {name: 'aditya' , age : 20},
//     {name: 'anubhav', age : 25},
//     {name: 'akshit', age : 24},
// ];

// const result=doctor.find(function(doctor){
//     return doctor.age >10;
// });

// console.log(result);


//l-6
//iteration in array

// const arr=[1,2,3,4,5,6,7,8];

// for(let i=0; i<arr.length; i++){
//     console.log(i);
// };

// for(let i of arr){
//     console.log(i)
// }

// arr.forEach(function(num,index){
//     console.log(num,index);
// });

// l-7
//sorting and reversing array

const number=[6,8,7,2,1,9];

number.sort();
number.reverse();

console.log(number);

let doctor= [
    {name: 'aditya' , age : 20},
    {name: 'anubhav', age : 25},
    {name: 'akshit', age : 24},
];

doctor.sort(function(d1,d2){
    if(d1.age>d2.age) return +1;
    if(d1.age===d2.age) return 0;
    if(d1.age<d2.age) return -1;
});
console.log(doctor);