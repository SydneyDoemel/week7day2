//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
let fave = (person)=>{
    fpizza = `Favorite pizza: ${person.pizza[0]}, ${person.pizza[1]}`
    ftacos = `Favorite tacos: ${person.tacos}`
    fburgers = `Favorite burgers: ${person.burgers}`
    fice_cream = `Favorite ice cream: ${person.ice_cream[1]}, ${person.ice_cream[2]}, ${person.ice_cream[3]} `
    fshakes = `Favorite milkshakes: ${Object.keys(person3.shakes[0])[0]}: ${person.shakes[0].oberwise}, ${Object.keys(person3.shakes[0])[1]}: ${person.shakes[0].dunkin}, ${Object.keys(person3.shakes[0])[2]}: ${person.shakes[0].culvers}, ${Object.keys(person3.shakes[0])[3]}: ${person.shakes[0].mcDonalds}, ${Object.keys(person3.shakes[0])[4]}: ${person.shakes[0].cupids_candies}`
    return `${fpizza}\n${ftacos}\n${fburgers}\n${fice_cream}\n${fshakes}`
};
console.log(fave(person3))



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        console.log(`${this.name} is ${this.age} years old.`)
    };
    this.addAge = () => {
        this.age ++
    }
}
let p1 = new Person('Jeff', 13)
let p2 = new Person('Nancy', 90)
console.log(p1.printInfo())
console.log(p2.printInfo())
p2.addAge()
p2.addAge()
p2.addAge()
console.log(p2.printInfo())
// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const wordSize = (string) => {
    return new Promise( (resolve,reject) => {
        if(string.length > 10){
            console.log('Big Word')
        } else {
            console.log('Small Number')
        }
    })
}
console.log(wordSize('hi'))
console.log(wordSize('hiiiiiiiiiiiiii'))

// IDK if this is what the question is asking for... 








/////////////CODEWARS////////

// Return the Nth Even Number

// Example(Input --> Output)

// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466
// The input will not be 0.


function nthEven(n){
    if (n){
      return (n*2)-2
    }
    else{
      return 0
    }
    
  }
  console.log(nthEven(6))

//   Given a number return the closest number to it that is divisible by 10.
const closestMultiple10 = num => {
    return Math.round(num/10) *10;
  };
  console.log(closestMultiple10(25))