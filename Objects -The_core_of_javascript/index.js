//Object

// let name= 'Aditya';
// let age= 18;
// let hobby= 'Reading'

// // Object
// const user = {
//     name: 'Aditya',
//     age: 18,
//     hobby: 'Reading'
//   };
  
//   console.log(user);
//   console.log(user.age); // Dot notation
  
//   // Bracket notation
//   console.log(user['name']);
//   console.log(user['age']);


//Manipulation

const user = {
    name: 'Aditya',
    age: 18,
    hobby: 'Reading',
    isMarried: false,
  };

  //Add
  user.Email= 'adityavishal903@gmail.com';
  user['Phone Number']= 807648957;

  //Update
  user.isMarried= false;
  user.age=user.age+7;

  //Delete
  delete user.isMarried;

  console.log(user);