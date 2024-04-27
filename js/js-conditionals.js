// Challenges
// Write the code that will log true or false for the following:

// Is 34 divided by 3 greater than 67 divided by 2?
var num1 = 34
var num2 = 3
var num3 = 67
var num4 = 2

if (num1 / num2 > num3 / num4) {
  console.log(true)
} else {
  console.log(false)
}

// Does 5 evaluate to the same as "5"?
console.log(5 == "5")
// Does 5 strictly equal "5"?
console.log(5 === "5")

// Does !3 strictly equal 3?
console.log(!3 === 3)

var ln = "LEARN"
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
console.log(ln.length === 5 && "Student".length === 7)
// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log(ln.length === 5 || "Student".length === 10)

// Does "LEARN" contain the subset "RN"?
console.log(ln.includes("RN"))
// Does "LEARN" contain the subset "rn"?
console.log(ln.includes("rn"))

// Does "LEARN"[0] strictly equal "l"?
console.log(ln[0] === "l")
// Modify the code from the previous question to return true.
console.log("look->", ln[0] === "L")

// -----------------------------------------------------------------------
// Write a conditional statement for the following prompts. Make sure you try different options and change the variables to ensure properly working code.

// Challenges 2
// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var item = 100

if (item <= 100) {
  console.log("in budget")
} else {
  log("out budget")
}
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = "hungry"
if (hungry === "hungry") {
  console.log("eat food")
} else {
  console.log("keep coding")
}
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var light = "yellow"

if (light == "green") {
  console.log("GOoooooo")
} else if (light == "yellow") {
  console.log("SLOW down")
} else if (light == "red") {
  console.log("stop")
} else {
  console.log("try again")
}
// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
var num1 = 5
var num2 = 4
if (num1 < num2) {
  console.log(num2 + " is bigger")
} else if (num1 > num2) {
  console.log(num1 + " is bigger")
} else if (num1 === num2) {
  console.log("the numbers are the same")
} else {
  console.log("something went wrong")
}

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var isNum = 0.2

if (typeof isNum !== "number") {
  console.log("somthing is wrong")
} else if (isNum === 0) {
  console.log(`${isNum} is equal to zero`)
} else if (isNum % 2 !== 0) {
  console.log(`${isNum} is an odd number`)
} else if (isNum % 2 === 0) {
  console.log(`${isNum} is an even number`)
} else {
  console.log("try again")
}

//-----------------------------------------------------------------------
// Stretch Goals
// Write a conditional statement for the following prompts.

// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
const grade = 55
if (grade / 100 === 1) {
  console.log("perfect score")
} else if (grade <= 99.999 && grade >= 90) {
  console.log(`"${grade}% is a grade of A"`)
} else if (grade <= 89.9 && grade >= 80) {
  console.log(`"${grade}% is a grade of B"`)
} else if (grade <= 79.9 && grade >= 70) {
  console.log(`"${grade}% is a grade of C"`)
} else if (grade <= 69.9 && grade >= 60) {
  console.log(`"${grade}% is a grade of D"`)
} else if (grade <= 59.9 && grade >= 0.01) {
  console.log(`"${grade}% is a grade of F"`)
} else if (grade === 0) {
  console.log("no grade available.")
} else {
  console.log("somthing went wrong")
}

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

const typeO = 8.7

console.log(typeof typeO)

if (typeof typeO) {
  console.log(typeof typeO)
}

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

const pass = "abc012345679!"

if (pass.length >= 12 && pass.includes("!")) {
  console.log("That is a mighty strong password!")
} else if (pass.includes("!") || pass.length >= 8) {
  console.log("That password is strong enough.")
} else {
  console.log("That is not a valid password.")
}
