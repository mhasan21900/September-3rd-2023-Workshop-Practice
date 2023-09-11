const person = {
    name: "Muhammad Hasan",
    age: 32,
    college: "XYZ College"
}
//to get the key and value
for (const key in person){
    console.log(key, person[key]);
}