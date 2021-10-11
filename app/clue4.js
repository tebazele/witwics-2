// We know that to pull off this caper Carmen will be wearing a disguise, we need to figure out what she will look like in order to nab her for sure this time.

// We found a partial receipt we think was for a disguise. However, we only have the price of the item, not the name, and we only have the after tax price. We need to take all items from the store, and add tax to them to see if we find a match.

// 1. Write a function that will take in an array of prices and a tax rate, and return an array of those prices after the tax has been added. (Hint: use the map method)
// Example:
// Input: [10, 15, 20], 0.05
// Output: [10.5, 15.75, 21]

function afterTax(arr, tax) {
  // TODO YOUR CODE HERE
}

// ---------------------------------------------

// We checked with the store manager and their system was able to match up some of the items with the prices we got earlier, though the data is a bit messy, lets see if we can clean it up.

// 2. Write a function that will take in an array of arrays and return an array of objects where the first property is the "name", and the second property is the "price".
// Example:
// Input: [["Cowboy", 10], ["Nun", 15], ["Scarecrow", 20]]
// Output: [{name: "Cowboy", price: 10}, {name: "Nun", price: 15}, {name: "Scarecrow", price: 20}]

function convertToObjects(arr) {
  // TODO YOUR CODE HERE
}

// ---------------------------------------------

// Turns out this could be from one of several locations that stocks different costumes, we will need to join the two lists of their data together.

// 3. Write a function that will join two arrays together. (Hint: use the concat method or the spread operator)
// Example:
// Input: [1, 2, 3], [4, 5, 6]
// Output: [1, 2, 3, 4, 5, 6]

function joinArrays(arr1, arr2) {
  // TODO YOUR CODE HERE
}

// ---------------------------------------------

// Oh boy, it looks like this purchase could have been multiple items, lets total up the receipt so we can compare it to other collections of items.

// 4. Write a function that will take in an array of items and return the total of their prices. (Hint: use the reduce method)
// Example:
// Input: [{name: "Cowboy", price: 10}, {name: "Nun", price: 15}, {name: "Scarecrow", price: 20}]
// Output: 35

function totalReceipt(arr) {
  // TODO YOUR CODE HERE
}

// ---------------------------------------------

// Iterating over all these arrays is really slowing us down, lets try to reduce the amount of data we need to process by converting our list of disguises into something we can more directly look up by disguise name.

// 5. Write a function that will convert an array of objects into a dictionary. Where the key is the name of the item and the value is the price.
// Example:
// Input: [{name: "Cowboy", price: 10}, {name: "Nun", price: 15}, {name: "Scarecrow", price: 20}]
// Output: {Cowboy: 10, Nun: 15, Scarecrow: 20}

function convertToDictionary(arr) {
  // TODO YOUR CODE HERE
}