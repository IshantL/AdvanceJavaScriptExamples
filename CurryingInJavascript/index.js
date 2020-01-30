//Function Currying is a cool feature of functional programming with Javascript. 
//firstly by using bind function and the second using the concept of closure. 

//Currying refers to the process of transforming a function with multiple arity
//(the number of arguments that a function can take) into the same function with less arity. 
//The curried effect is achieved by binding some of the arguments to the first function invoke,
// so that those values are fixed for the next invocation.


//By using Bind
let multiply =function(a,b){
    console.log(a*b);
}

let multiplyByTwo = multiply.bind(this,2);

let multiplyByThree = multiply.bind(this,3);

multiplyByTwo(5); //10
multiplyByThree(5); //15

let multiplyByTwoo = multiply.bind(this,2,3);
multiplyByTwoo(5);//6 - it ignore 5


//By using closure

let multiplyC =function(a){
   return function(b){
       console.log(a*b);
   }
}

let multiplyCByTwo = multiplyC(2);
multiplyCByTwo(5); //10

let multiplyCByThree = multiplyC(3);
multiplyCByThree(5); //15