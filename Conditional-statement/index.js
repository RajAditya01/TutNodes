//Conditional Statement

// if(condition1){
//     statements
// }else if(condition2){
//     ststements
// }else if(condition3){
//     statements
// }else{

// }

// let num=10;
// if(num>0){
//     console.log('this is +ve nos');
// }else if(num<0){
//     console.log("this is -ve nos");
// }else{
//     console.log("this is 0");
// }

//Switch case
// let col = 'white';

// switch (col) {
//   case 'black':
//     console.log('This is black');
//     break;

//   case 'white':
//     console.log('This is white');
//     break;

//   case 'red':
//     console.log('This is red');
//     break;

//   default:
//     console.log('Color not recognized');
//     break;
// }

//Ternary Operators
// let num1=10;
// let num2=2;

// let max=num1>num2 ? num1 : num2;


//Questions--> fizzbuzz

// let num=30;

// if(num %3===0 && num %5===0){
//     console.log('Fizzbuzz');
// }
// else if(num % 3===0){
//     console.log('fizz');
// }
// else if(num % 5===0){
//     console.log('Buzz');
// }else{
//     console.log('Nothing');
// }


//using Ternary operators
let num=30;
console.log(num %3===0 && num %5===0 
    ? 'Fizzbuzz'
    :num %3===0 
    ? 'Fizz'
    :num %5===0
    ? 'Buzz'
    : 'Notting'
    );
