// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
const testArr1 = [3, 9, 15, 4, 10]

const multArr = (arr) => {
  let temp = arr
  let results = []

  for (let i = 0; i < temp.length; i++) {
    results.push(temp[i] * 3)
  }
  return results
}
// console.log(multArr(testArr1))
// output: [9, 27, 45, 12, 30]

// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

const onlyOdd = (arr) => {
  res = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      res.push(arr[i])
    }
  }
  return res
}
// console.log(onlyOdd(testArr2))
// onlyOdd(testArr2)
// output: [-7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
const comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]

const deCombo = (arr) => {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      res.push(arr[i])
    }
  }
  return res.join("")
}
// console.log(deCombo(comboArr))
// output: "nicework"

// ------------------------------------------------------------
// ------------------------------------------------------------

// Create a function that takes in an array of numbers and returns the sum.
const addThese1 = [1, 2, 3, 4]
// output: 10
const addThese2 = []
// output: 0

const adder = (arr) => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}
// console.log(adder(addThese1))
// console.log(adder(addThese2))

// ------------------------------------------------------------
// ------------------------------------------------------------

// Create a function that takes in an array of numbers and returns the index of the largest number.
const indexHighestNumber = [1, 4, 2, 3]

const lrgNum = (numArr) => {
  let indxLrg = 0

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > numArr[i + 1]) {
      indxLrg = i
    }
  }
  return indxLrg
}
// console.log(lrgNum(indexHighestNumber))
// output: 1

// ------------------------------------------------------------
// ------------------------------------------------------------

// BONUS

// Create a function that takes in two arrays and returns one array with no duplicate values.
const arr1 = [3, 7, 10, 5, 4, 3, 3]
const arr2 = [7, 8, 2, 3, 1, 5, 4]

const filtered = (arr1, arr2) => {
  let lgArr = [...arr1, ...arr2]
  let result = []

  for (let i = 0; i < lgArr.length; i++) {
    if (!result.includes(lgArr[i])) {
      result.push(lgArr[i])
    }
  }
  return result
}

// console.log(filtered(arr1, arr2))
// output: [3, 7, 10, 5, 4, 8, 2, 1]

// ------------------------------------------------------------
// ------------------------------------------------------------

// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
const arrayLength = 6
const arrayValue = 0
const arrayLength2 = 4
const arrayValue2 = 11

const arrayFiller = (arLeng, arVal) => {
  let result = []
  for (let i = 0; i < arLeng; i++) {
    result.push(arVal)
  }
  return result
}

// console.log(arrayFiller(arrayLength, arrayValue))
// output: [0, 0, 0, 0, 0, 0]
// console.log(arrayFiller(arrayLength2, arrayValue2))
// output: [11, 11, 11, 11]

// ------------------------------------------------------------
// ------------------------------------------------------------

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
const randomNumAdd = (num) => {
  result = 0
  for (let i = 0; i < num + 1; i++) {
    result += i
  }
  return result
}

const addUp1 = 4
console.log(randomNumAdd(addUp1))
// 1 + 2 + 3 + 4 = 10
// output: 10

const addUp2 = 10
console.log(randomNumAdd(addUp2))

// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// output: 55

const addUp3 = 600
console.log(randomNumAdd(addUp3))
// output: 180300


// ------------------------------------------------------------
// ------------------------------------------------------------
// Epic Goals

// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".
// Create an HTML page and link your JavaScript file. More info here.
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// As a user, I can see if my guess is too high or too low.
// As a user, if I guess the "answer" correctly I am notified that I won.
// As a user, I can continue to guess the "answer" until I am correct.
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.
