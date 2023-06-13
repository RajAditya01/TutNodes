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
function user(name, age){
    console.log(this);
    this.name=name;
    this.age=age;
    this.walk= function(){
        console.log('Aditya Starting walking');
    };
    console.log(this);
}

const user1 = new user(Aditya,18);
console.log(user1);