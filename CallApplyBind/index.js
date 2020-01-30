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
name1.printFullName.call(name2);


