//Function Declaration

function aboutMe(name, age){
    const message=`I am ${name} and i am ${age} year old`;
    console.log(message);
}

//function call
aboutMe('Aditya',20);
aboutMe('Dhiraj',18);

//sum function

function calSum(num1,num2){
    let sum= num1+num2;
    return sum;
}

let result=calSum(50,20);
console.log(result);