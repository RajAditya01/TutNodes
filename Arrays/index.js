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

// const number=[6,8,7,2,1,9];

// number.sort();
// number.reverse();

// console.log(number);

// let doctor= [
//     {name: 'aditya' , age : 20},
//     {name: 'anubhav', age : 25},
//     {name: 'akshit', age : 24},
// ];

// doctor.sort(function(d1,d2){
//     if(d1.age>d2.age) return +1;
//     if(d1.age===d2.age) return 0;
//     if(d1.age<d2.age) return -1;
// });
// console.log(doctor);


//l-8
//Array method  -every and some

//const number=[6,8,7,-2,1,9];

// const data = number.every(function(num){
//     return num>0;
// });
// console.log(data);

// const data = number.some(function(num){
//     return num>0;
// });
// console.log(data);
// l-9

//array method - concat, slice

// const num1=[1,2,3];
// const num2=[4,5,6,7,8];

//const num= num1.concat(num2);
//console.log(num);

// const arr=[1,2,3,4,5,6,7,8,9];
// const sliceArray = arr.slice(3,6);
// console.log(sliceArray);

// l-10
//Spread Operator

// const arr=[1,2,3,4,5,6,7,8];
// console.log(...arr);
// console.log(arr[0], arr[1]);
//console.log(arr);

//const copiedArray = [...arr];
//console.log(copiedArray);

// const num1=[1,2,3];
// const num2=[4,5,6];

//const num= [...num1,...num2];
//console.log(num);


//l-11
//Joing Array

// let numbers=[1,2,3,4];
// let joinArray =numbers.join(' ');
// console.log(joinArray);

// let message = 'Hii My name is Aditya Raj';
// const arrayMessage= message.split(' ');
// console.log(arrayMessage.join('-'));

//l-12
//ES6 Feature : Map

//let numbers=[1,2,3,4,5,6,7,8];
// let mulByTwo =[];

// for( let num of numbers){
//     mulByTwo.push(num*2);
// }
// console.log(mulByTwo);


// const mulByTwo =numbers.map(function(num){
//     return num * 2;
// })
// console.log(mulByTwo);

// let doctor= [
//     {name: 'aditya' , age : 20},
//     {name: 'anubhav', age : 25},
//     {name: 'akshit', age : 24},
// ];

// const docName = doctor.map((doc) => doc.name);
// const docage = doctor.map((doc) => doc.age);
// console.log(docName);
// console.log(docage);

// l-13
//ES6 Feature : Filtering an Array

//let numbers=[1,2,3,4,5,6,7,8];
// let onlyOddNo=[];

// for(let num of numbers){
//     if(num % 2 !== 1){
//         onlyOddNo.push(num);
//     }
// }

//console.log(onlyOddNo);


// l-14

//Array Method : Reduce

let nums=[10,20,30];

let sum=0;
for(let  num of nums){
    sum= sum + num;
}
console.log(sum);

const ReduceSum = nums.reduce(function(sum,num){
    return sum+num;
},0);
console.log(ReduceSum);