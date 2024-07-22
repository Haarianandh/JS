//concate
let d = 'hello' + 20
console.log(d)

let a = 10 + 20 + "hey"
console.log(a)
 
//multiple declaration
let x=12,y=13,z=15;
console.log(x)
console.log(y)
console.log(z)


console.log("3" + "3" - "3")
console.log(3 + + "3" )
console.log(3 + "3")

//NaN = Not a Number

//DOM = Document Object Model

//JIT = Just In Time compiler

//function
function name(){

}
name()

//arrow function
const arr =() =>{

}
//anonymous function
console.log(() => {
    return "hello"
})

//async function
async function kk(){
    const res = await fetch('link').then().catch((err)=>{console.log(err)})
    const res1 = await res.json()
    console.log(res1)
}
kk()

// .then
function kk(){
    const res = fetch('link').then((res) => res.json).then((r) => console.log(r))

}
kk()   
