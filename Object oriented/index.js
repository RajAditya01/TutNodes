//l-1
//Factory Function

// function user (name, age){
//     const userObj={
//         name,
//         age,
//         walk: function(){
//             console.log(`${name} started walking`);
//         },
//     };
//     return userObj;
// }

// const user1= user('Aditya',20);
// const user2= user('RAj',18);

// console.log(user1, user2);

//L-2
//create Constructor Functions
// function user(name, age){
//     console.log(this);
//     this.name=name;
//     this.age=age;
//     this.walk= function(){
//         console.log('Aditya Starting walking');
//     };
//     console.log(this);
// }

// const user1 = new user(Aditya,18);
// console.log(user1);

//l-3
// Create object using factory and constructor function
const homeAddress1 = homeAddress('A','B','C');
const homeAddress1 = homeAddress('X','Y','Z');

function homeAddress(street,city,zipcode){
    return{
        street,
        city,
        zipcode,
    };
}

function HomeAddress(street,city,zipcode){
    this.street=street;
    this.city=city;
    this.zipcode=zipcode;
}

console.log(homeAddress1);
console.log(homeAddress2);