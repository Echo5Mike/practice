var groceryList = ["chips", "dip", "cookies"]

// Write the code that will add "soda" to the end of the original array.
console.log(groceryList.push("soda"))
console.log(groceryList)

// Write the code that will add "granola" to the end of the array without altering the original array.
console.log(groceryList.concat("granola"))
console.log(groceryList)

// Write the code that will return a subset of the array containing only "chips" and "dip".
const chipAndDip = groceryList
console.log(chipAndDip.slice(0, 2))
console.log(chipAndDip)

// Write the code that will add "beans" to the "chips" and "dip" array.
console.log(chipAndDip.slice(0, 2).concat("beans"))

// -----------------------------------------------------------------------------

var numbers = [2, 4, 6, 8, 10]
var zero = [0]

// Write the code that will add the number 0 to the beginning of the array.
numbers.unshift(0)
console.log(numbers)
// Write the code that will add the number 12 to the end of the array.
numbers.push(12)
console.log(numbers)
// Write the code that will remove the first number from the array.
numbers.shift()
console.log(numbers)
// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
console.log(zero.concat(numbers))
console.log(numbers)

// -----------------------------------------------------------------------------

var numSet = [2, 13, 6, 8, 4, 2]
// Write the code that finds the index of the first appearance of the number 2.
console.log(numSet.indexOf(2))
// Write the code that finds the index of the last appearance of the number 2.
console.log(numSet.lastIndexOf(2))

// Write the code that returns the number at the third index.
console.log(numSet[3])

// -----------------------------------------------------------------------------

var characters = ["y", "a", "r", "r", "a"]

// Write the code that brings all the letters in the characters array together into a string.
// console.log(characters.join(""))

// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
const charsReversed = characters.reverse()
console.log(charsReversed)

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
console.log(charsReversed.join("*"))

// Write the code that brings all the letters in the charsReversed array together into a string without separators.
console.log(charsReversed.join(""))

// Create two arrays consisting of three first names of your cohort members in each array.
const fName = ["raul", "ariana", "jose"]
const fName2 = ["peter", "paul", "joe"]

// Write the code that sorts the names in alphabetical order.
console.log(fName.sort())
// console.log(fName2.sort())
// Write the code that sorts the names in reverse alphabetical order.
console.log(fName.sort().reverse())
console.log(fName2.sort().reverse())

// Write the code that sorts all the names in alphabetical order in a single array.
const allFnames = fName.concat(fName2)
console.log(allFnames.sort())
