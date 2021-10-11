// Now that we figured out what she plans to steal we can narrow down the suspects

//-------------------------------------------

// First things first we need to narrow down portions of our files to get the people who are in the area, our filing system is a mess though, we need to know which cabnet the files are in.

// 1. Write function that will take in an array and and an element that will return the elements index within the array, if it is not found throw an error
// EXAMPLE:
// input: ['Argentina', 'Armenia', 'Aurba', 'Australia', 'Austria'], 'Australia'
// output: 4

function returnIndex(arr, str){
  // TODO your code here
}

//-------------------------------------------

// Now that we have the right cabinet, we need to see if the name is within that file system, a simple bool value will suffice, the interns can locate the actual file later.

// 2. Write a function that will take in an array and a string, it will return a boolean value if the stirng is within the array.
// Example: 
// input: ['Martin', 'Grace', 'Armando', 'Joe', 'Susan', 'Ted'], 'Joe'
// output: true

function hasName(arr, name){

}

//-------------------------------------------

// Now that we have all the files with the right name we should probably clean this all up for next time, if we could look them up by their inmate id it would be much faster, and we can save intern time for things like coffee.

// 3. Given a number, return the corresponding user object from the staff array that has the given number as the value of their id property. If no user is found, return an object with an error property and value of "No user with that id."
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

//-------------------------------------------

// We have our suspect, and we know he is in a band. We want you to go their next concert and nab them, given their name, we need you to find out which instrument they play so you nab the right suspect.

// 4. Write a function that accepts a name argument and will loop over theBand members and return the band member's name and the instrument that he/she plays. Use string concatenation or interpolation to return a sentence with the following structure: "[band-members-name] is in the band and plays the [band-members-instrument]".
// Example:
// input: 'Johnny P'
// output: "Johnny P is in the band and plays the sax"

let theBand = {
  homeCity: "Melbourne",
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

//-------------------------------------------

// Looks like we just missed them and they are trying to catch a flight out of here, we have their bank account and can see all the transactions, but don't know where they are headed. We need you to check the potential destinations and whether or not they are flying first class. 

// 5. All Flights are from Melbourne. Write a function that will use the following data to return the cost of flights from boise to a neighboring city, by default return the standard cost unless firstClass is set to true
// Example;
// input: 'LAX', true
// output: 2200

let flights = [{
  from: 'MEL',
  to: 'LAX',
  prices: {
    standard: 500,
    firstClass: 2200
  }
}, {
  from: 'MEL',
  to: 'SEA',
  prices: {
    standard: 800,
    firstClass: 1200
  }
}, {
  from: 'MEL',
  to: 'CAN',
  prices: {
    standard: 750,
    firstClass: 6200
  }
}]

function flightCost(destination, firstClass) {
  // TODO YOUR CODE HERE
}










// SECTION EXTRAS





// 1. Within the factorials function, write a loop that begins at 1 and multiplies every consecutive
// number up to and including the given number(num). Return the total after the loop completes.
// Example:
// input: 4
// output: 24
// 1*2*3*4 = 24

function factorials(num) {

}

// ------------------------------------------

// 2. Write a function that sums up all of the numbers in a range
// Example:
// input: 2, 6
// output: 20

function rangeTotal(n1, n2) {
  // TODO YOUR CODE HERE
}

// ------------------------------------------


// 3. Write a function that will take in a starting number, ending number, and a divisor. Iterate
// over the range of the numbers and rtuen how many numbers can be divided by the divisor.
// Example:
// input: 15, 20, 5
// output: 2

function rangeDivisor(start, end, divisor) {
  // TODO YOUR CODE HERE
}
