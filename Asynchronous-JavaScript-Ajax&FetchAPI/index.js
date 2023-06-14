// Asynchronous Programming

// console.log('Before');

// function fetchUser(){
//     setTimeout(function(){
//         console.log('Hi my name is Aditya');
//         return {
//             name: 'Aditya',
//             age: 20,
//         };
//     },2000);
// }

// const user =fetchUser();
// console.log(user);

// console.log('After');

//l2
fetchUser(1234, function(user){
    console.log(user);
})

function fetchUser(userId,callback){
    setTimeout(function(){
        console.log('Hi my name is aditya');
        const fetchedUser ={
            id: userId,
            name: 'Aditya',
            emai: 'aditya@gmail.com'
        };
        callback(fetchUser);
    },2000);
}