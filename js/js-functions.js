//  Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".
const marco = () => {
  return "polo"
}
console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (pName) => {
  return `"Welcome, ${pName}`
}
console.log(greeting("raul"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (num) => {
  if (num % 2 === 0) {
    console.log("even")
  } else if (num % 2 != 0) {
    console.log("odd")
  } else {
    console.log("something went wrong")
  }
}
oddOrEven(1)
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

const triple = (num) => {
  return num * 3
}
console.log(triple(1))
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (num1, num2) => {
  return num1 * num2
}
console.log(multiply(5, 5))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (num1, num2) => {
  if (num1 % num2 === 0) {
    return `${num1} is evenly divisible by ${num2}`
  } else if (num1 % num2 != 0) {
    return `${num1} is NOT evenly divisible by ${num2}`
  } else {
    return "something went wrong"
  }
}

console.log(divisibleBy(10, 5))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
// *** consider using a score and max score => score/max score to get grade ***
const assignGrade = (score) => {
  if (score <= 100 && score >= 90) {
    return `${score} is an A`
  } else if (score <= 89 && score >= 80) {
    return `${score} is an B`
  } else if (score <= 79 && score >= 70) {
    return `${score} is an C`
  } else if (score <= 69 && score >= 60) {
    return `${score} is an D`
  } else if (score <= 59) {
    return `${score} is an F`
  } else {
    return "something went wrong"
  }
}
console.log(assignGrade(9000000))
// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

const isLonger = (string1, string2) => {
  return string1.length > string2.length ? string1 : string2
}
console.log(isLonger("Raul", "Marquez"))
// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

// Bonus
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.
// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
// pluralizer(5, "cat")
// // output: "5 cats"

// pluralizer(1, "dog")
// // output: "1 dog"

// pluralizer(9, "dog")
// // output: "9 dogs"

// pluralizer(1, "people")
// // output: "1 person"

// pluralizer(3, "people")
// // output: "3 people"
