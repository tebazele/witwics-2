// Time to locate the plates of the getaway car!

// We know within the system that the getaway cars plate has 7 characters, lets start by reducing all the plates in the system to only include ones with 7 characters, and while we are at it, lets optimize the process in case we ever need it again, so it can take in any plate length

// 1. Write a function that will take in an array and return an array of only strings that have the provided number characters.
// Example: 
// input: ['IBSTOLEN','NOTMINE','DRIVNFAST','GETAWAY','HEIST','CARGOFAST','ETMYDST'], 7
// output: ['NOTMINE','GETAWAY','ETMYDST']

function platesByCharacters(arr, num) {
  // TODO YOUR CODE HERE
}

// --------------------------------

// 2. Write a function that will take in an array of objects and filter OUT any objects with a citation count the provided number or less.
// Example:
// input: [{plate: 'IBSTOLEN', citations: 2 }, {plate: 'NOTMINE', citations: 1 }, {plate: 'DRIVNFAST', citations: 3 }, {plate: 'GETAWAY', citations: 6 }, {plate: 'HEIST', citations: 0 }, {plate: 'CARGOFAST', citations: 1 }, {plate: 'ETMYDST', citations: 7 }]
// output: [{plate: 'DRIVNFAST', citations: 3 }, {plate: 'GETAWAY', citations: 6 }, {plate: 'ETMYDST', citations: 7 }]

function filterPlatesByCitations(arr, num) {
  // TODO YOUR CODE HERE
}





// --------------------------------

// 3. Write a function that will take in an array and return its contents sorted alphabetically.
// Example:
// input: ['NOTMINE','GETAWAY','ETMYDST']
// output: ['ETMYDST','GETAWAY','NOTMINE']

function sortPlates(arr) {
  // TODO YOUR CODE HERE
}

// --------------------------------

// 4. Write a function that will take in an array of objects and sort them by the value of their 'country' property.
// Example:
// input: [{country: 'AUS', plate:'NOTMINE'},{country: 'USA', plate:'GETAWAY'},{country: 'CAN', plate:'ETMYDST'}]
// output: [{country: 'AUS', plate:'NOTMINE'},{country: 'CAN', plate:'ETMYDST'},{country: 'USA', plate:'GETAWAY'}]

function sortPlatesByCountry(arr) {
  // TODO YOUR CODE HERE
}

// --------------------------------

// 5. Write a function that will sort plates by number of citations they have recieved.
// Example:
// input: [{country: 'CAN', plate:'NOTMINE', citations: 2},{country: 'USA', plate:'GETAWAY', citations: 1},{country: 'AUS', plate:'ETMYDST', citations: 13}]
// output: [{country: 'AUS', plate:'ETMYDST', citations: 13},{country: 'CAN', plate:'NOTMINE', citations: 2}, {country: 'USA', plate:'GETAWAY', citations: 1}]

function sortPlatesByCitations(arr) {
  // TODO YOUR CODE HERE
}