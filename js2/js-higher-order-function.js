// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.

const arr1 = [3, 9, 15, 4, 10]

// ----------------Good for muiltiple arrays----------------------
// const numArray = (numsArray) => {
//   return numsArray.map((arrayValue) => {
//     return arrayValue * 10
//   })
// }

// ----------------better ----------------------

// const numArray2 = arr1.map((arrayValue) => {
//   return arrayValue * 10
// })

// ----------------One liner----------------------

const numArray3 = arr1.map((arrayValue) => arrayValue * 10)

// console.log(numArray(arr1))
// console.log(numArray2)
console.log(numArray3)
// output: [30, 90, 150, 40, 100]

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
// const arr1 = [3, 9, 15, 4, 10]

// ---------------------- V V V V Full Function V V V -----------------

// const divBy2 = (numArray) => {
//   return numArray.map((value) => {
//     return value / 2
//   })
// }

// ---------------------- V V V V  Function and one liner V V V -----------------

const divBy2 = (numArray) => {
  return numArray.map((value) => value / 2)
}

// ------------------------vvvvvvvvv one liner vvvvvvvvv ----------------------
// const multiArrayX2 = arr1.map((arrayValue) => arrayValue * 2)
console.log(divBy2(arr1))
// output: [1.5, 4.5, 7.5, 2, 5]

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

// Create a function that takes in an array of numbers and returns an array with only odd numbers.
const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]

// const onlyOdds = (array) => {
//   return array.filter((value) => {
//     return value % 2 !== 0
//   })
// }

// ---------- Top function and bottom function do the same task -----------------

const onlyOdds = (numArray) => numArray.filter((value) => value % 2 != 0)

console.log(onlyOdds(arr2))
// output: [7, 3, 5, 13, -9]

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.

const pumbaa = "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"

const hakuna = (string) => {
  // let temp = string.split(" ")
  // return temp.filter((value) => value.length % 2 !== 0)

  return string.split(" ").filter((value) => value.length % 2 !== 0)
}

console.log(hakuna(pumbaa))

// output: ["a", "wonderful", "ain't", "passing", "craze"]

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

// const returnStrings = (array) => {
//   let temp = array.filter((value) => typeof value === "string")
//   return temp.join("")
// }

const returnStrings = (array) => array.filter((value) => typeof value === "string").join("")
console.log(returnStrings(comboArr))
// output: "nicework"

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]

// const noFalseValues = (array) => {
//   let result = array.filter((value) => {
//     return value !== null && value !== undefined && value !== 0 && value !== false && value !== ""
//   })
//   return result
// }

const noFalseValues = (array) => array.filter((value) => value !== null && value !== undefined && value !== 0 && value !== false && value !== "")

console.log(noFalseValues(filterArrayValues))

// output: [58, "abcd", true]

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

// Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.

const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]

const secondLetterCap = (array) => {
  let temp = array.map((value) => {
    let result = value.split("").join("")
    console.log("result", result)

  })
  return temp
}

console.log(secondLetterCap(makesWackyWords))
// secondLetterCap(makesWackyWords) 
// output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]
