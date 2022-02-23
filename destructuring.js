//Destructuring object to extract values to variable
const fish = {name: 'king hilsha', price: 1000, color: 'silver', location: 'chadpur'};

//old system to set a property value in a variable
const color = fish.color;
const price = fish.price;

//ES6 rule to set a property value in a variable
const {name,location} = fish;
console.log(name,location);