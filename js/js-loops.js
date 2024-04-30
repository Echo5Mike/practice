// CHALLENGES

// for (let i = 0; i < 5; i++) {
//   console.log(i)}

// for (let i = 0; i < 5; i++) {
//   console.log(i)
// }
// const fName = "raul"
// const random = "Churro"
// for (let i = 0; i < random.length; i++) {
//   console.log(fName[i])
// }

// for (let i = 0; i < fName.length; i++) {
//   console.log(random + fName[i])
// }

// Create a for loop that logs each number from 1 - 20.
for (let i = 1; i < 21; i++) {
  console.log(i)
}
// Create a for loop that logs every other number from 1 - 20.

for (let i = 1; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}

// Create a for loop that logs the result of each number from 1 - 20 tripled.

for (let i = 1; i < 21; i++) {
  console.log(i * 3)
}

// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc

for (let i = 1; i < 21; i++) {
  if (i % 2 != 0) {
    console.log("odd")
  } else {
    console.log(i)
  }
}

// --------------------------------------------
// --------------------------------------------

const nums = [3, 57, -9, 20, 67]
let temp = nums.sort((a, b) => a - b)

// Create the code that will log the largest number from the array.

let bigNum = []
for (let i = 0; i < nums.length; i++) {
  let sortNums = nums.sort((a, b) => a - b)
  if (sortNums[i] > bigNum) {
    bigNum = sortNums[i]
  }
}
console.log("look bigNum", bigNum)

// Create the code that will log the smallest number from the array.

let smallNum = []
for (let i = 0; i < nums.length; i++) {
  let sortNums = nums.sort((a, b) => a - b)
  if (sortNums[i] < smallNum) {
    smallNum = sortNums[i]
  }
}
console.log("look smallNum", smallNum)

// Create the code that will log the remainder of each number when divided by 2.
// Expected output: 1, 1, -1, 0, 1
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i] % 2)
}

// --------------------------------------------
// --------------------------------------------

const myString = "learn student"

// Create the code that will log the number of times the letter "e" occurs in the string.

var eTimes = 0
for (let i = 0; i < myString.length; i++) {
  if (myString[i] === "e") {
    eTimes++
  }
}
// console.log(eTimes)

// Create the code that will log every other character in the string.

for (let i = 0; i < myString.length; i++) {
  if (i % 2 != 0) {
    console.log(myString[i])
  }
}

// --------------------------------------------
// --------------------------------------------

// BONUS

// Create the code that iterates from 5 to 15. For each iteration log if the current number is odd or even.
// Expected output: "5 is odd" "6 is even" "7 is odd" ...etc
for (let i = 5; i < 16; i++) {
  if (i % 2 != 0) {
    console.log(`${i}" is odd"`)
  } else if (i % 2 === 0) {
    console.log(`${i}" is even"`)
  } else {
    console.log("something went wrong")
  }
}

// Fizz Buzz: Create the code that will iterate from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz.

// Expected output: 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc

for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, "fizz buzz")
  } else if (i % 3 === 0) {
    console.log(i, "fizz")
  } else if (i % 5 === 0) {
    console.log(i, "buzz")
  } else if (i % 5 != 0 && i % 3 != 0) {
    console.log(i)
  } else {
    console.log("something went wrong")
  }
}
