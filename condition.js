//if else
let verified = true

if(verified){
    console.log("verified")
}else{
    console.log("Unverified")
}

//else if
let verified1 = "hello"

if(verified1){
    console.log("verified")
}else if(!verified1){
    console.log("Unverified")
}

//switch
let verified2 = "hello"

switch (verified2){
    case true:
        console.log("true")
        break
    case false:
        console.log("false")
        break
    default:
        console.log("default")
        break
}


//loops
//infinite for loop
// for (;;) {
//     console.log("hi")
// }


//while loop
let i = 0;

while(i<5){
    console.log("hello")
    i+=1
}

//do while
let j = 0

do{
    console.log("do")
    j+=1
}while(j<3)