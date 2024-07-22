//to find datatype 
console.log(typeof a)

//string
let name = "Haari"

//integer
let age = 10;

//boolean
let Bool = true ;

//undefined
let ud;
console.log(ud)

//null
let id = null;
console.log(id)

//object
let obj = {key:'value'}
console.log(obj)

//array
let arr = ['a',2,true,null,undefined]
console.log(arr)

const date = new Date();
let today = date.toUTCString(); 
console.log(today)

const date1 = new Date();
let today1 = date.getDay();
const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
console.log(days[today1])
