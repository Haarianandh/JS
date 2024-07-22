//array
const data = [
    "date",
    "hello",
    "world"
]
console.log(data);
console.log(data.toString());

const data1 = new Array("hello","world");
console.log(data1);

//object
const data2 = {
    firstName:"Haari",
    lastName:"Priya"
}
console.log(data2);
const ndata = data.push("new");
console.log(data);
console.log(data.pop());

//concat
const newdata = data.concat(data2);
console.log( newdata);

//slice
console.log(data.slice(0,2));