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

// BONUS

// Create a function that takes in two arrays and returns one array with no duplicate values.
const arr1 = [3, 7, 10, 5, 4, 3, 3]
const arr2 = [7, 8, 2, 3, 1, 5, 4]

// output: [3, 7, 10, 5, 4, 8, 2, 1]