let name ={
    firstname: "Ishant",
    lastname: "Lambhate"
}

let printName = function (hometown, country){
    console.log(this.firstname + " "+ this.lastname +" "+ hometown + " "+ country);
}

//use of bind which returns copy of function
//let printMyName = printName.bind(name, "Delhi");
//printMyName();

Function.prototype.myBind = function(...args){
  let print = this;
  let params =args.slice(1);
return function(...args2){
    params = [...params, ...args2];
    print.apply(args[0],params);
}
}

let printMyName = printName.myBind(name,"Delhi");
printMyName("India");