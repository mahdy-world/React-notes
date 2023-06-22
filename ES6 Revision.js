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


// Arrow function
// Create arrow function
const foo = () => {
    console .log("This is my first arrow function");
}
// If we have one line in function we can write it like this:
const foo = () => console.log("ahmed");
// To refere to the object using arrow:
const ahmed = {
    name: "ahmed",
    age: 20,
    foo: function (){
        // we add arow function in normal function to refare to the object
        const inner = () => console.log(this);
        inner();
    }

}
