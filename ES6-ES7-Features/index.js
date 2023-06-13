//ES6 Feature : Array and object Destructuring

function greeting(user){

    const {name,age, address} =user;
    const{long , lat}= address;
    console.log(`Hello ${name} and age ${age} from ${lat}, ${long}`);
}

const user ={
    name: 'Aditya',
    age: 20,
    address:{
        long:343.343,
        lat:2323.23,
    },
};

greeting(user);

let [a,b,c,d] =[1,2,3,4];
console.log(a,b,c,d);