describe("clue4", () => {
   const simpleItems = [1.50, 2.30, 4.20, 11.80]
   const matrixItems = [["Cowboy", 10], ["Nun", 15], ["Scarecrow", 20]]
   const receiptItems = [{ name: "Cowboy", price: 10 }, { name: "Nun", price: 15 }, { name: "Scarecrow", price: 20 }]
   describe('1. afterTax', () => {
      const afterTax = window['afterTax']
      it('should return an array', () => {
         chai.assert.isArray(afterTax([], 0.10), 'returned value is not an array')
      })
      it('should return an array with the same length as the input array', () => {
         chai.assert.lengthOf(afterTax([1, 2], 0.10), 2, 'returned array has wrong length')
      })
      it('should return an array with numbers after the tax has been included', () => {
         chai
            .expect(afterTax(simpleItems, 0.10))
            .to.eql(
               [1.65, 2.53, 4.62, 12.98],
               'returned array has wrong values (be sure to round any floating values)')
      })
   })

   describe('2. convertToObjects', () => {
      const convertToObjects = window['convertToObjects']
      it('should return an array', () => {
         chai.assert.isArray(convertToObjects(matrixItems), 'returned value is not an array')
      })
      it('should convert matrix to array of objects', () => {
         chai.expect(
            convertToObjects(matrixItems))
            .to.eql([
               { name: "Cowboy", price: 10 },
               { name: "Nun", price: 15 },
               { name: "Scarecrow", price: 20 }
            ], 'returned array has wrong values'
            )
      })
      it('works on any array', () => {
         chai.expect(
            convertToObjects([
               ["Doctor", 10],
               ["Police", 15],
               ["Firefighter", 20]
            ])).to.eql([
               { name: "Doctor", price: 10 },
               { name: "Police", price: 15 },
               { name: "Firefighter", price: 20 }
            ], 'returned array has wrong values')
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
         chai.assert.isNumber(totalReceipt([1]), 'returned value is not a number')
      })
      it('should return the total of all prices in the receipt', () => {
         chai.assert.equal(totalReceipt(receiptItems), 45, 'returned value is not correct')
      })
      it('works on any array', () => {
         chai.assert.equal(totalReceipt([{ name: "Doctor", price: 15 }, { name: "Police", price: 25 }, { name: "Firefighter", price: 20 }]), 60, 'returned value is not correct')
      })
   })
})