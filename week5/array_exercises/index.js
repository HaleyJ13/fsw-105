function fiveAndGreaterOnly(arr) {
    const result = arr.filter(function(num){
        if(num >= 5){
            return true;
        }
    });
return result;
};
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));
console.log("--------");

function evensOnly(arr){
      const result = arr.filter(function(num){
    if (num % 2 == 0){
        return true;
    }
      });
      return result;
}

console.log("Output from #2: " + evensOnly([3, 6, 8, 2]));
// Section B
function doubleNumber(arr){
    const result = arr.map(function(num){
        return num * 2;
    });
    return result;
};
console.log(doubleNumbers([2, 5, 100]));

function stringItUp(arr){
const result = arr.map(function(num){
    return num + "";
})
return result;
}
console.log(stringItUp([2, 5, 100]));


function capitalize(arr) {
    const result = arr.map(function(word){
        return word[0].toUpperCase() + word.substring(1).toLowerCase()
    })
    return result;
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));



function total(arr) {
   const result = arr.reduce(function(num, finalAddition){
              finalAddition = finalAddition + num;
              return finalAddition;
   });
   return result;
}
console.log(total([1,2,3]));

//section D


function nameOnly(arr){
    const result = arr.map(function(word){
       return word.name;
  
        
    });
    return result;
};
console.log(namesOnly([
    {name: "Angelina Jolie", age:80},
    {name: "Eric Jones", age:2},
    {name: "Paris Hilton", age:5},
    {name: "Kanye West", age:16},
    {name: "Bob Ziroll", age:100},
]));

// extra credit 2
function makeString(arr){
    const result = arr.map(function(oldEnough){
        if (oldEnough.age >= 17){
            return oldEnough.name + " can see The Matrix";
        }else (oldEnough.age < 17)
        return oldEnough.name + " cannot see the Matrix";
    });
    return result;
};

console.log(makeStrings([
    {name: "Angelina Jolie", age:80},
    {name: "Eric Jones", age:2},
    {name: "Paris Hilton", age:5},
    {name: "Kanye West", age:16},
    {name: "Bob Ziroll", age:100}
]));
// Section C
// 1.
function total(arr) {
   
    return  arr.reduce((total,amount) => total + amount);
}
console.log(total([1,2,3]));

// 2.
function stringConCat(arr) {
    const result = arr.reduce(function(a, b){
        console.log(a)
        console.log(b)
        return a + b;
    },'')
    return result
}
console.log(stringConCat([1,2,3]));

function totalVotes(arr){
    const result = voters.reduce(function(final, voters){
        if(voters.voted == true){
            final ++
        }
        return final
    }, )
    return result
}
var voters = [
    {name: 'Bob', age:30, voted: true},
    {name: 'Jake', age:32, voted:true},
    {name: 'Kate', age:25, voted:false},
    {name: 'Sam', age:20, voted:false},
    {name: 'Phil', age:21, voted:true},
    {name:'Ed', age:55, voted:true},
    {name:'Tami', age:54, voted:true},
    {name:'Mary', age:31, voted:false},
    {name:'Becky', age:43, voted:false},
    {name:'Joey', age:41, voted:true},
    {name:'Jeff', age:30, voted:true},
    {name:'Zack', age:19, voted:false},

];
console.log(totalVotes(voters));


//extra credit
// function shoppingSpree(arr){
//     const result = arr.reduce(function(num1, num2){

//     })
// }
// var wishlist = [
//     {title: "Tesla Model S", price: 90000},
//     {title: "4 carat diamond ring", price: 45000},
//     {title: "Fancy hacky Sack", price: 5},
//     {title: "Gold fidgit spinner", price: 2000},
//     {title: "A second Tesla Model S", price: 90000},
// ];
// console.log(shoppingSpree(wishlist));

//extra credit 2
// function flatten(arr){

// }
// var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ];
// console.log(flatten(arrays));

//Section D
function leastToGreatest(arr) {
const result = arr.sort(function(num1, num2){
    return num1 - num2;
});
return result;
}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));

function greatestToLeast(arr){
    const result = arr.sort(function(f,d){
        return d - f;
    });
    return result
}
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));

function lengthSort(arr){
    const result = arr.sort(function(c,b){
        return c.length - b.length;
    });
    return result;
}
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));
