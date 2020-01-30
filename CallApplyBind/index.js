let name1 ={
    firstname: "Ishant",
    lastname: "Lambhate",
    printFullName: function(){
        console.log(this.firstname + " "+ this.lastname);
    }
}

let name2 = {
    firstname: "Elon",
    lastname: "Musk"
}


name1.printFullName();
//name2.printFullName(); //error
name1.printFullName.call(name2); //function borrowing


// but the method should be outside

let name3 ={
    firstname: "Ishant",
    lastname: "Lambhate",
}

let name4 = {
    firstname: "Elon",
    lastname: "Musk"
}

let printFullName = function(){
    console.log(this.firstname + " "+ this.lastname);
}
   

printFullName.call(name3);
printFullName.call(name4);

//if multiple arguments- using call and apply

let printFullNameMul = function(hometown, country){
    console.log(this.firstname + " "+ this.lastname +" "+ hometown + " "+ country);
}
   
let name5 ={
    firstname: "Ishant",
    lastname: "Lambhate",
}

let name6 = {
    firstname: "Elon",
    lastname: "Musk"
}


printFullNameMul.call(name5,"Delhi","India");
printFullNameMul.apply(name4, ["California", "US"]);


//Bind
//The difference between call and bind is bind is giving a copy of a function which is invoke later.

let printUsingBind = printFullNameMul.bind(name5,"Delhi","India");
console.log("printUsingBind:: ",printUsingBind);
printUsingBind();