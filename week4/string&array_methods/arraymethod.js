
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);
var vegetables = vegetables.slice(0,3);
console.log(vegetables)

var fruit = fruit.slice(1);
console.log(fruit)

var orangeIndex = fruit.indexOf("orange")
console.log(orangeIndex)
fruit.push(1)
console.log(fruit)

// lengthOfArray = vegetable.length
console.log(vegetables.length);
 vegetables.push(3);
 console.log(vegetables)

var food = fruit.concat(vegetables)
console.log(food)

console.log(food.splice(4,2));
console.log(food)


food.reverse();
console.log(food)

var food = food.toString();
console.log(food)
// // food.join()
// // console.log(food.join(', '));
// var str = food.toString();
// console.log(str)