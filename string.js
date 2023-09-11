//chatAt method to output a specific character 
const myName = "Hasan";
console.log(myName.charAt(2)); //chatAt method
console.log(myName.charAt(4)); //chatAt method

const studentName = "Muhammad Md Hasan";
//substring method to certain range of string
console.log(studentName.substring(0, 11))

//slice method. 
//It counts from left 
//It starts from the number given and display
const text = "Hello, World";
console.log(text.slice(7))

//split method divide word or character by space
console.log(text.split(" "))

//method to count the index of a particular word.
const sentence = 'We are learning JavaScript';
console.log(sentence.indexOf("JavaScript"))

//to print out the index of last one of the two similar words
const sentence2 = "We are learning JavaScript. and JavaScript is very popular";
//console.log(sentence2.lastIndexOfndexOf("JavaScript"))

//to get the toal length of a string
console.log(" The total String length is ", sentence.length);


