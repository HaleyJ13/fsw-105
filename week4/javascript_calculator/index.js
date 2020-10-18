var readlineSync = require('readline-sync');
var firstNum = readlineSync.questionInt("Please enter first number: ");
var secondNum = readlineSync.questionInt("Please enter second number: ");
var selectedOperator = readlineSync.question("What operation do you want to perform today? add/sub/div/mul/quit: ")
function addTwoNumbers(num1, num2){
    return "Adding number1 with Number2 = " + (num1 + num2);
}
function subtractTwoNumbers(num1, num2){
    return "Subtracting Number1 and Number 2 = " + (num1 - num2)
}
function multiplyingTwoNumbers(num1, num2){
    return "Multiplying Number1 with Number2 = " (num1 * num2)
}
function divideTwoNumbers(num1, num2){
    return "Dividing Number1 and Number2 = " (num1 / num2)
}
if(selectedOperator == "add"){
    console.log(addTwoNumbers(firstNum, secondNum));
} else if(selectedOperator == "sub") {
    console.log(subtractTwoNumbers(firstNum, secondNum));
} else if (selectedOperator == "mul"){
    console.log(multiplyTwoNumbers(firstNum, secondNum));
} else if (selectedOperator == "div"){
    console.log(divideTwoNumbers(firstNum, secondNum));
}else if (selectedOperator == "quit"){
    console.log("Thank you for using the calculator!");
}else {
    console.log("What you entered is not a valid operation!")
}