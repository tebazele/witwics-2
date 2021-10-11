describe("clue4", () => {
   const simpleItems = [1.44, 2.32, 4.23, 11.88]
   const matrixItems = [["Cowboy", 10], ["Nun", 15], ["Scarecrow", 20]]
   const receiptItems = [{ name: "Cowboy", age: 10 }, { name: "Nun", age: 15 }, { name: "Scarecrow", age: 20 }]
   describe('1. addTax', () => {
      const addTax = window['addTax']
      it('should return an array', () => {
         chai.assert.isArray(addTax(simpleItems, 0.10), 'returned value is not an array')
      })
      it('should return an array with the same length as the input array', () => {
         chai.assert.lengthOf(addTax(simpleItems, 0.10), simpleItems.length, 'returned array has wrong length')
      })
      it('should return an array with numbers after the tax has been included', () => {
         chai.assert.sameOrderedMembers(addTax(simpleItems, 0.10), [1.58, 2.55, 4.65, 13.07], 'returned array has wrong values (be sure to round any floating values)')
      })
      it('works on any array', () => {
         chai.assert.sameOrderedMembers(addTax([1, 2, 3, 4, 5], 0.10), [1.1, 2.2, 3.3, 4.4, 5.5], 'returned array has wrong values (be sure to round any floating values)')
      })
   })

   describe('2. convertToObjects', () => {
      const convertToObjects = window['convertToObjects']
      it('should return an array', () => {
         chai.assert.isArray(convertToObjects(matrixItems), 'returned value is not an array')
      })
      it('should convert matrix to array of objects', () => {
         chai.assert.sameDeepOrderedMembers(convertToObjects(matrixItems), [{ name: "Cowboy", age: 10 }, { name: "Nun", age: 15 }, { name: "Scarecrow", age: 20 }], 'returned array has wrong values')
      })
      it('works on any array', () => {
         chai.assert.sameDeepOrderedMembers(convertToObjects([["Doctor", 10], ["Police", 15], ["Firefighter", 20]]), [{ name: "Doctor", age: 10 }, { name: "Police", age: 15 }, { name: "Firefighter", age: 20 }], 'returned array has wrong values')
      })
   })

   describe('3. joinArrays', () => {
      const joinArrays = window['joinArrays']
      it('should return an array', () => {
         chai.assert.isArray(joinArrays([1, 2], [3, 4]), 'returned value is not an array')
      })
      it('should return an array with the same length as the input arrays', () => {
         chai.assert.lengthOf(joinArrays([1, 2], [3, 4]), 4, 'returned array has wrong length')
      })
      it('should return an array with the values from both input arrays', () => {
         chai.assert.sameOrderedMembers(joinArrays([1, 2], [3, 4]), [1, 2, 3, 4], 'returned array has wrong values')
      })
      it('works on any array', () => {
         chai.assert.sameOrderedMembers(joinArrays([1, 2, 3], [4, 5, 6]), [1, 2, 3, 4, 5, 6], 'returned array has wrong values')
      })
   })

   describe('4. totalReceipt', () => {
      const totalReceipt = window['totalReceipt']
      it('should return a number', () => {
         chai.assert.isNumber(totalReceipt(receiptItems), 'returned value is not a number')
      })
      it('should return the total of all prices in the receipt', () => {
         chai.assert.equal(totalReceipt(receiptItems), 35, 'returned value is not correct')
      })
      it('works on any array', () => {
         chai.assert.equal(totalReceipt([{ name: "Doctor", age: 15 }, { name: "Police", age: 25 }, { name: "Firefighter", age: 20 }]), 60, 'returned value is not correct')
      })
   })

   descibe('5. convertToDictonary', () => {
      const convertToDictionary = window['convertToDictionary']
      it('should return an object', () => {
         chai.assert.isObject(convertToDictionary(receiptItems), 'returned value is not an object')
      })
      it('should return an object with the same keys as the input array', () => {
         chai.assert.sameOrderedMembers(Object.keys(convertToDictionary(receiptItems)), ["Cowboy", "Nun", "Scarecrow"], 'returned object has wrong keys')
      })
      it('should return an object with the same values as the input array', () => {
         chai.assert.sameOrderedMembers(Object.values(convertToDictionary(receiptItems)), [10, 15, 20], 'returned object has wrong values')
      })
      it('works on any array', () => {
         chai.assert.sameOrderedMembers(Object.keys(convertToDictionary([{ name: "Doctor", age: 15 }, { name: "Police", age: 25 }, { name: "Firefighter", age: 20 }])), ["Doctor", "Police", "Firefighter"], 'returned object has wrong keys')
         chai.assert.sameOrderedMembers(Object.values(convertToDictionary([{ name: "Doctor", age: 15 }, { name: "Police", age: 25 }, { name: "Firefighter", age: 20 }])), [15, 25, 20], 'returned object has wrong values')
      })
   })

})