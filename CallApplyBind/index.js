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
