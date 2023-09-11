const currentDate = new Date();
console.log(currentDate);

const specificDate = new Date("2021-05-15");
console.log(specificDate);

//to print out date, day, time in hours minutes and seconds
console.log(currentDate.getFullYear());
console.log(currentDate.getDate());
console.log(currentDate.getDay());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());

//this is to format the date
console.log(currentDate.toDateString());

//local date and time
console.log(currentDate.toLocaleString);
console.log(currentDate.toLocaleDateString);