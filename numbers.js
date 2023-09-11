
//integer value
let age = 50;
let quantity = 10;

//float number
let price = 19.99;
let pi = 3.1415;

//math method examples
console.log(Math.PI)
console.log(Math.sqrt(16));
console.log(Math.pow(4, 5))

//round it to the nearest whole number
console.log(Math.round(4.7))

//get rid of decimal value 
console.log(Math.floor(4.2))

//increase to the next whole number. output 5
console.log(Math.ceil(4.7))

//question
//multiplying string with number, NaN= Not a number
//similar data type to do arithmatic operation
let result = "value1" * 5;
console.log("Result ", result)

//It prints the decimal value after the whole number 
//based on the number in the argument
let price2 = 125.54675;
console.log(price2.toFixed(2))

//converting number to string 
console.log(price2.toString())
const convertedNumber = price2.toString();
console.log(convertedNumber);
console.log(typeof convertedNumber);

//giving random value less than 1 
console.log(Math.random())

//manipulate it to give out other values
console.log((Math.random() * 10) + 1)