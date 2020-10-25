// //ES 6 assignment
// const name = "John"

// let age = 101

// function runForLoop(pets){
//     let petObjects = []
//     for (let i = 0; i < pets.length; i++){
//         const pet = { type: pets[i] }
//       let name;
//         if(pets[i] === "cat"){
//             name = "fluffy"
//         } else {
//           name = "spot"
//         }

//     console.log("pet name: ", name)
//     pet.name = petObjects.push(pet)
// }
// console.log("man name: ", name)
// return petObjects
// }

// runForLoop(["cat", "dog"])


//2
const carrots = ["bright orange", "ripe", "rotten"];

mapVegetables = arr => 
     arr.map(carrot => 
         ({type: "carrot", name: carrot})
    );

console.log(mapVegetables(carrots));


//3

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Browser",
        friendly: false
    }
]
const filterForFriendly = (arr) => 
    arr.filter(person => person.friendly
    )
console.log(filterForFriendly(people))

//4
const doMathSum = (a, b) => a + b
   console.log(doMathSum(1,3))

const produceProduct = (a, b) => a * b

    console.log(produceProduct(4, 3))

//5
const printString = (firstName, lastName, age) => "Hi "+ firstName +" " +lastName +", how does it feel to be "+ age+ " ?"

console.log(printString("Jane", "Doe", 100))
//6

const printString2 = (firstName, lastName, age) => `Hi ${firstName} ${lastName}, how does it feel to be ${age} ?`

console.log(printString2("Jane", "Doe", 100))


//7

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    },
];

    const filterForDogs = (arr) => 

    
      arr.filter(animal => {
        if (animal.type ==="dog"){
            return true
        } else {
            return false
        }
    })

console.log(filterForDogs(animals))

//8
const traveling = (name, location) => `Hi ${name}! Welcome to ${location}. I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`

console.log(traveling("Janice","Hawaii"))