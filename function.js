//function declaration
function addNumbers(num1, num2){
    const num3 = 50;
    return num1 * num2;
}

//function calling
const num1 = 20;
const num2 = 30;

addNumbers(num1, num2)
console.log(addNumbers(num1, num2));


//function expression
const addThreeNumbers = function(num1, num2, num3, num4){
    return num1 + num2 + num3 + num4;
}

addThreeNumbers(20, 30, 50);
console.log( "Total calculation is :" , addThreeNumbers(20, 30, 50, 100));
