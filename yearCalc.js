let myAge = 0;
let birthYear = 1990;
const currentYear = new Date().getFullYear();
currentYear.toString;
console.log(currentYear);

function myCurrentAge (year) {
    let myCAge = currentYear - year.birthYear;
    return myCAge;

}

console.log(myCurrentAge(birthYear));