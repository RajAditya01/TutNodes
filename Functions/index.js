//Function Declaration

// function aboutMe(name, age){
//     const message=`I am ${name} and i am ${age} year old`;
//     console.log(message);
// }

// //function call
// aboutMe('Aditya',20);
// aboutMe('Dhiraj',18);

// //sum function

// function calSum(num1,num2){
//     let sum= num1+num2;
//     return sum;
// }

// let result=calSum(50,20);
// console.log(result);


//lac 2
// Default Parameter

function calSum(num1,num2=50,num3=60){
    let sum= num1+num2+num3;
    return sum;
}

console.log(calSum(10));

//l-3
//function expression

const calSumExp= function(num1,num2){
    let sum=num1+num2;
    return sum;
}
console.log(calSumExp(50,60));