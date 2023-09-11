const person = {
    //creating object and key value pair
    firstName: "Muhammad", 
    lastName: "Hasan",
    age: 32,
    isDeveloper: true 
}

//accessing the value of the object
//accessing with dot . notation
console.log(person.firstName);
console.log(person["lastName"]);

//adding new key value to the person object 
person.city = "New York";

//getting all the values together
console.log(person);

let calculator = {
    add: function(a, b) {
        return a + b
    },
    subtract: function(a,b){
        return a - b

    },

    multiply: function(a, b){
        return a * b
    }
}
console.log(calculator.add(5, 10))
console.log(calculator.multiply(4,7))