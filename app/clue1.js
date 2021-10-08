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

function arrayPortion(arr, start, end){

}


// ANCHOR write a join method
// Final step we have the message broken up into words, we need to put it back into a normal sentence
// 5. Write a function that takes in an array and returns the array as a string, make sure when it is put back together to add the ' ' character back in.
// Example:
// input: ['This', 'is', 'a', 'split', 'sentence.']
// output: 'This is a split sentence.'

function arrayToString(arr){
  
}


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



//4. Flights from Boise. Write a function that will use the following data to return the cost of flights from boise to a neighboring city, by default return the standard cost unless firstClass is set to true

let flights = [{
  from: 'BOI',
  to: 'LAX',
  prices: {
    standard: 500,
    firstClass: 2200
  }
}, {
  from: 'BOI',
  to: 'SEA',
  prices: {
    standard: 800,
    firstClass: 1200
  }
}, {
  from: 'BOI',
  to: 'CAN',
  prices: {
    standard: 750,
    firstClass: 6200
  }
}]


//***hint: use the find method***
function flightCost(destination, firstClass) {
  // TODO YOUR CODE HERE
}


// ------------------------------------------


// 5. Given a number, return the corresponding user object from the staff array that has the given number as the value of their id property. If no user is found, return an object with an error property and value of "No user with that id."
// Example:
// input: 17
// output: {id: 17, name: 'St. MaryLou de la Playa Carmen'}
//Example:
// input: 1000
// output: { error: "No user with that id." } 


let staff = [{ id: 1, name: 'Jon' }, { id: 2, name: 'Yuli' }, { id: 21, name: 'Peter' },
{ id: 17, name: 'St. MaryLou de la Playa Carmen' }, { id: 51, name: 'Doug' },
{ id: 881, name: 'Paul' }, { id: 0, name: 'Jon' }, { id: 999, name: 'Timma' }]

function findById(id) {
  // TODO YOUR CODE HERE
}


// ------------------------------------------


// 6. Write a function that accepts a name argument and will loop over theBand members and return the band member's name and the instrument that he/she plays. Use string concatenation or interpolation to return a sentence with the following structure: "[band-members-name] is in the band and plays the [band-members-instrument]".
// Example:
// input: 'Johnny P'
// output: "Johnny P is in the band and plays the sax"

let theBand = {
  homeCity: "Birmingham",
  members: [{
    name: 'Johnny P',
    instrument: 'sax'
  }, {
    name: 'River',
    instrument: 'drums'
  }, {
    name: 'Kris',
    instrument: 'guitar'
  }]
}

function bandMemberDetails(name) {
  // TODO YOUR CODE HERE
}
