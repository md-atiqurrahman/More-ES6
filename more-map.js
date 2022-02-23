const foodBloggers = ['sony side','food ranger', 'rafsan the chotobhai','food expert'];

const lengths = foodBloggers.map(foodBlogger => foodBlogger.length)
// console.log(lengths);

const products = [
    {name:'dell laptop', price: 50000, color: 'black'},
    {name:'iphone max', price: 75000, color: 'golden'},
    {name:'watch',price:3000, color:'silver'},
    {name:'water pot', price:50, color:'pink'},
    {name:'headphone',price:650, color:'black'}
]

const nameArray = products.map(product => product.name);
const lengths2 = products.map(product => product.name.length);

//use of forEach
// products.forEach(product => console.log(product.name));
//forEach jekono property er value console.log korte parbe kintu map er moto value gulake kono new akta array te dukaite parbe nah.

//use of filter

const expensive = products.filter(product => product.price > 10000);
const expensive2 = products.filter(product => product.price > 100000);


//use of find
const cheaper = products.find(product => product.price < 1000);
const cheaper2 = products.find(product => product.color == 'blue');
console.log(cheaper);
