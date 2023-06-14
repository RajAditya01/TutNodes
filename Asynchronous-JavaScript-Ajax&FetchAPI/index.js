// Asynchronous Programming

console.log('Before');

function fetchUser(){
    setTimeout(function(){
        console.log('Hi my name is Aditya');
        return {
            name: 'Aditya',
            age: 20,
        };
    },2000);
}

const user =fetchUser();
console.log(user);

console.log('After');