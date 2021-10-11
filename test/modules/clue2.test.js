describe("clue2", () => {
   describe("returnIndex", () => {
      let returnIndex = window['returnIndex']
      it('returns a number', () => {
         chai.assert.isNumber(returnIndex(['a', 'b', 'c', 'd'], 'b'), 'returnIndex should return a number')
      })
      it('returns the correct index', () => {
         chai.assert.equal(returnIndex(['a', 'b', 'c', 'd'], 'b'), 1, 'Be sure to return the proper index')
      })
      it('throws an error if the value was not found', () => {
         chai.assert.throw(returnIndex(['a', 'b', 'c', 'd'], 'e'), 'Be sure to use the `throw` keyword to throw a proper error when not found')
      })
   })
   describe("hasName", () => {
      let hasName = window['hasName']
      it('returns a boolean value', () => {
         chai.assert.isBoolean(hasName(['hello', 'world'], 'hello'), 'hasName should return a boolean value')
      })
      it('returns true when name is in string', () => {
         chai.assert.isTrue(hasName(['hello', 'world'], 'hello'), 'return true when string is within array')
      })
      it('returns false when name is not in string', () => {
         chai.assert.isTrue(hasName(['hello', 'world'], 'jello'), 'return false when string not within array')
      })
   })
   describe("3. findById Function", () => {
      let findById = window["findById"]
      it("returns an object", () => {
         chai.assert.isObject(findById(1), "The return type must be an object.")
      })
      it("returns the complete user object with the target id", () => {
         chai.assert.hasAllKeys(findById(17), { id: 17, name: 'St. MaryLou de la Playa Carmen' }, "Return the complete user object with the matching id.")
      })
      it("returns an object containing an error message if no matching user", () => {
         chai.assert.hasAllKeys(findById(1000), { error: "No user with that id." }, "Return an object with an error message if no user found with the target id.")
      })
   })
   describe("4. bandMemberDetails Function", () => {
      let bandMemberDetails = window["bandMemberDetails"]
      it("returns a string", () => {
         chai.assert.isString(bandMemberDetails("Kris"), "The return type must be a string.")
      })
      it("returns a correctly formatted string with details of the correct band member", () => {
         chai.assert.strictEqual(bandMemberDetails("Kris"), "Kris is in the band and plays the guitar", "Use string concatenation or interpolation to populate your return string with the correct info.")
      })
      it("still returns properly if only part of the name is given (case insensitive)", () => {
         chai.assert.strictEqual(bandMemberDetails("John"), "Johnny P is in the band and plays the sax", "The .includes() method could help with this challenge.")
      })
   })

   describe("5. flightCost Function", () => {
      let flightCost = window["flightCost"]
      it("Returns value of standard flight when passed false", () => {
         chai.assert.strictEqual(flightCost("LAX", false), 500, "Be sure to return the standard cost if flightClass is set to false")
      })
      it("First class tickets can also be found", () => {
         chai.assert.strictEqual(flightCost("SEA", true), 1200, "Be sure to check if firstClass is set to true")
      })
      it("Destination is not case sensitive", () => {
         chai.assert.strictEqual(flightCost('sea', false), 800)
      })
   })

   // describe("1. factorials Function", () => {
   //    let factorials = window["factorials"]
   //    it("returns a number", () => {
   //       chai.assert.isNumber(factorials(4), "The return type must be a number.")
   //    })
   //    it("returns the correct number given 4", () => {
   //       chai.assert.strictEqual(factorials(4), 24, "Be sure to use the multiplication operator")
   //    })
   //    it("returns the correct number given 10", () => {
   //       chai.assert.strictEqual(factorials(10), 3628800, "Be sure to use the multiplication operator")
   //    })
   // })
   // describe("2. rangeTotal Function", () => {
   //    let rangeTotal = window["rangeTotal"]
   //    it("returns a number", () => {
   //       chai.assert.isNumber(rangeTotal(1, 3), "The return type must be a number.")
   //    })
   //    it("returns the correct sum", () => {
   //       chai.assert.strictEqual(rangeTotal(2, 6), 20, "Sum the range inclusive.")
   //    })
   // })
   // describe("3. rangeDivisor Function", () => {
   //    let rangeDivisor = window["rangeDivisor"]
   //    it("returns a number", () => {
   //       chai.assert.isNumber(rangeDivisor(15, 20, 5), "The return type must be a number.")
   //    })
   //    it("returns the correct total of numbers divisible end of range exclusive", () => {
   //       chai.assert.isAtLeast(rangeDivisor(15, 20, 5), 1, "Total divisible numbers in the range exclusive.")
   //       chai.assert.isAtMost(rangeDivisor(15, 20, 5), 2, "Total divisible numbers in the range exclusive.")
   //    })
   //    it("returns the correct total of numbers divisible end of range inclusive", () => {
   //       chai.assert.strictEqual(rangeDivisor(15, 20, 5), 2, "Total divisible numbers in the range inclusive.")
   //    })
   // })
})

