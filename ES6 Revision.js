// var vs let vs const

// var ==> function scope
// let & const ==> block scope 
// const ==> cant' be reassign

function foo(){
    for(var i = 0; i<5; i++){
        console.log(i)
    }
    console.log(i)
;}