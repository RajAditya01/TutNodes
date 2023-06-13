let pi = 3.141592654;

//error no 1
//console.log(pi.toFixed(101))

//error no-2
// let country= "india";
// console.log(country.toUpperCase());

// let javaIsFun = true;
// //console.log(javaIsFun.toUpperCase());
// console.log('Hi Aditya');

//l-2

function div(a,b){
    if(b===0){
        throw new SyntaxError("Second Parameter can't be zero");
    }
    return a/b;
}

console.log(div(4,0));