// You know the drill your first task is to find out the Treasure Carmen is Planning on stealing

// A coded message has been sent to her associate that we need to decipher, this time though its much craftier, we breaking up the message into individual words in an array so we can better manipulate it.

// 1. Write a function that will take in a string (str), and return an array of strings that contain only the words, seperated where there is a ' ' character.
// input: 'This is a split sentence.'
// output: [ 'This', 'is', 'a', 'split', 'sentence.']

function stringBreaker(str) {
  // TODO YOUR CODE HERE
}



// 2. Given an array, move the element at the first position (0) to the last position in the array. Return the modified array.
// Example:
// input: ['This', 'is', 'a', 'split', 'sentence.']
// output: ['is', 'a', 'split', 'sentence.', 'This']

function rearranger(arr) {
  // TODO YOUR CODE HERE
}


// Hmm... it seems like that was the opposite of what we might have needed, lets try to reverse that process

// 3. Given an array, move the element at the last position to the first position in the array. Return the modified array.
// Example:
// input: ['This', 'is', 'a', 'split', 'sentence.']
// output: ['sentence.', 'This', 'is', 'a', 'split' ]
function reverseRearranger(arr) {
  // TODO YOUR CODE HERE
}


// Looks like we almost got it, but it as it turns out most of this message is nonsense, we need to be able to get a copy of only a portion of the message
// 4. write a function that will take in an array as well as two indexes (start and end), and return the portion of the array within those indexes
// Example:
// input: ['This', 'is', 'a', 'split', 'sentence.'] , 1, 3
// output: ['is', 'a', 'split']
// TODO this should not allow destructive methods
function arrayPortion(arr, start, end){
  // TODO YOUR CODE HERE
}


// ANCHOR write a join method
// Final step we have the message broken up into words, we need to put it back into a normal sentence
// 5. Write a function that takes in an array and returns the array as a string, make sure when it is put back together to add the ' ' character back in.
// Example:
// input: ['This', 'is', 'a', 'split', 'sentence.']
// output: 'This is a split sentence.'

function arrayToString(arr){
  // TODO YOUR CODE HERE
}




// SECTION EXTRAS


// ------------------------------------------


// 2. Given an array of numbers, return the largest number in the array.
// Example:
// input: [6, 4, 8, 33, 42, 10]
// output: 42

function largestNum(arr) {
  // TODO YOUR CODE HERE
}


// ------------------------------------------


// 3. Given an array of numbers, return an array where every element in the given array is multiplied by the length of the given array.
// Example:
// input:  [4, 2, 1, 7]
// output: [16, 8, 4, 28]

function elemsTimesLength(arr) {
  // TODO YOUR CODE HERE
}


// ------------------------------------------
