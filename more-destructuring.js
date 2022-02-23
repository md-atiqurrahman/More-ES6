const fish = {
    fishName : 'king hilsha',
    location : 'chadpur',
    price:{
        bd: '1000 tk',
        india : '1200 rupee',
        saudi : '20 rial',
        america:{
            newYork:'20 dollar',
            loseAngels: '25 dollar',
            washingtonDc: '22 dollar',
            texcas: '30 dollar'
        }
    } 
}
//old system to set property value in a variable
// const texcas = fish.price.america.texcas;
// const bd = fish.price.bd;

//ES6 system to set property value in a variabe
const {texcas,newYork} = fish.price.america;
const anArray = [texcas,newYork];
console.log(anArray);

//use of ?. for avoiding show error

// console.log(fish?.price?.india);
// console.log(fish?.value?.india);//jodi fish er vitor value property thake tahole value er vitore jabe ar value fish er vitor nah thakle undefined show korbe. jodi property ta thake tao  ?. use kora jay.

// ES6 system of array destructuring 
const [a,b,c] = [4,10,3,15,11,23];
console.log(a,b,c);
