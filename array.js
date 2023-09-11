//Array example
let fruits = ["Banana", "Orange", "Apple"];

//how to access array by its index number
console.log(fruits[3]);

//output the 5th index number in this array
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers[5])

//replacing 1 index value with this value
//adding/replacing  elements to fruits array
fruits[1] = "Mango";
console.log(fruits);

//push adding a new value at the end of the array 
numbers.push(10);
console.log("Numbers after pushing", numbers);

//pop will delete the last element of an array
numbers.pop();
console.log("Numbers after popping", numbers)


//unshift adds a value at the start of the array
numbers.unshift(0);
console.log("Numbers after adding at the beginning of array ", numbers);

//removing values from array from the beginning
numbers.shift();
console.log(" Numbers after removing from the beginning ", numbers);

//to get the index of an array
console.log(numbers.indexOf(2))
console.log(numbers.length);