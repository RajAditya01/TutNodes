//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions

 const regExp= /aditya/ig;

//  console.log(regExp);
//  console.log(regExp,source);
//  console.log(regExp.exec('Hi  Hello Aditya'))

//  console.log(regExp.test('hi i am Aditya '));

 const str ='hi i am Aditya Aditya Aditya';
 console.log(str.match(regExp));
 console.log(str.search(regExp));
 console.log(str.replace(regExp,'Raj'));
