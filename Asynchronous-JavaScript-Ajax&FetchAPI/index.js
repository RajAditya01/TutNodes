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
// fetchUser(1234, function(user){
//     console.log(user);
// })

// function fetchUser(userId,callback){
//     setTimeout(function(){
//         console.log('Hi my name is aditya');
//         const fetchedUser ={
//             id: userId,
//             name: 'Aditya',
//             emai: 'aditya@gmail.com'
//         };
//         callback(fetchUser);
//     },2000);
// }

//l-3 
// callback Hell

// fetchUser(1234, function(user){
//     console.log(user);
//     sendMail(user.email,function(response){
//         console.log(response.success);
//     });
// });

// function sendMail(userEmail,callback){

//     setTimeout(function(){
//         console.log('message send');
//         const response ={success:true};
//         callback(response);
//     },3000);
// }


// function fetchUser(userId,callback){
//     setTimeout(function(){
//         console.log('Hi my name is aditya');
//         const fetchedUser ={
//             id: userId,
//             name: 'Aditya',
//             emai: 'aditya@gmail.com'
//         };
//         callback(fetchUser);
//     },2000);
// }

//l-4
//promise

const promise= new promise(function(resolve,reject){
    setTimeout(() =>{
        reject(new Error('Hi there have some error'));
    },2000);
});

console.log(promise);
promise.then(function(result){
    console.log(result);
}).catch(function(err){
    console.log(err);
})

//L-5
