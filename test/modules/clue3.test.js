describe("clue3", () => {
  const plates = [{
    country: 'CAN',
    plate: 'NOTMINE',
    citations: 2
  }, {
    country: 'USA',
    plate: 'IBSTOLEN',
    citations: 1
  }, {
    country: 'RUS',
    plate: 'HEIST',
    citations: 5
  }, {
    country: 'USA',
    plate: 'GETAWAY',
    citations: 1
  }, {
    country: 'RUS',
    plate: 'DRIVNFAST',
    citations: 3
  },
  {
    country: 'AUS',
    plate: 'ETMYDST',
    citations: 13
  }]

  describe('1. platesByCharacters', () => {
    const platesByCharacters = window['platesByCharacters']
    it('returns an array', () => {
      chai.assert.isArray(platesByCharacters(['IBSTOLEN', 'NOTMINE', 'DRIVNFAST', 'GETAWAY', 'HEIST', 'CARGOFAST', 'ETMYDST'], 7), 'Make sure your method returns an array')
    })
    it('returns an array with only elements containing the proper length', () => {
      chai.assert.sameMembers(platesByCharacters(['IBSTOLEN', 'NOTMINE', 'DRIVNFAST', 'GETAWAY', 'HEIST', 'CARGOFAST', 'ETMYDST'], 7), ['NOTMINE', 'GETAWAY', 'ETMYDST'], 'Make sure your method returns only elements with a length of the provided value')
    })
    it('can return an empty array', () => {
      chai.assert.sameMembers(platesByCharacters(['IBSTOLEN', 'NOTMINE', 'DRIVNFAST', 'GETAWAY', 'HEIST', 'CARGOFAST', 'ETMYDST'], 0), [], 'Make sure your method can return an empty array')
    })
  })

  describe('2. filterPlatesByCitations', () => {
    const filterPlatesByCitations = window['filterPlatesByCitations']
    it('returns an array', () => {
      chai.assert.isArray(filterPlatesByCitations(plates, 2), 'Make sure your method returns an array')
    })
    it('returns an array with only elements containing the proper citations', () => {
      chai.assert.sameMembers(filterPlatesByCitations(plates, 4), [{ country: 'RUS', plate: 'HEIST', citations: 5 }, { country: 'AUS', plate: 'ETMYDST', citations: 13 }], 'Make sure your method returns only elements with a length of the provided value')
    })
    it('can return an empty array', () => {
      chai.assert.sameMembers(filterPlatesByCitations(plates, 0), [], 'Make sure your method can return an empty array')
    })
  })

  describe('3. sortPlates', () => {
    const sortPlates = window['sortPlates']
    it('returns an array', () => {
      chai.assert.isArray(sortPlates(['NOTMINE', 'GETAWAY', 'ETMYDST']), 'Make sure your method returns an array')
    })
    it('returns array with elements in proper order', () => {
      chai.assert.includeOrderedMembers(sortPlates(['NOTMINE', 'GETAWAY', 'ETMYDST']), ['ETMYDST', 'GETAWAY', 'NOTMINE'], 'Make sure your method returns an array with elements in proper order')
    })
    it('works with any array', () => {
      chai.assert.includeOrderedMembers(sortPlates(['b', 'c', 'a', 'd', 'e', 'g', 'f']), ['a', 'b', 'c', 'd', 'e', 'f', 'g'], 'Make sure your method works with any array')
    })
  })

  describe('4. sortPlatesByCountry', () => {
    const sortPlatesByCountry = window['sortPlatesByCountry']
    it('returns an array', () => {
      chai.assert.isArray(sortPlatesByCountry([{ country: 'AUS', plate: 'NOTMINE' }, { country: 'USA', plate: 'GETAWAY' }, { country: 'CAN', plate: 'ETMYDST' }]), 'Make sure your method returns an array')
    })
    it('returns array with elements in proper order', () => {
      chai.assert.includeOrderedMembers(sortPlatesByCountry([{ country: 'AUS', plate: 'NOTMINE' }, { country: 'USA', plate: 'GETAWAY' }, { country: 'CAN', plate: 'ETMYDST' }]), [{ country: 'AUS', plate: 'NOTMINE' }, { country: 'CAN', plate: 'ETMYDST' }, { country: 'USA', plate: 'GETAWAY' }], 'Make sure your method returns an array with elements in proper order')
    })
    it('works with any array', () => {
      chai.assert.includeOrderedMembers(sortPlatesByCountry([{ country: 'b', plate: 'c' }, { country: 'a', plate: 'd' }, { country: 'e', plate: 'g' }, { country: 'f', plate: 'h' }]), [{ country: 'a', plate: 'd' }, { country: 'b', plate: 'c' }, { country: 'e', plate: 'g' }, { country: 'f', plate: 'h' }], 'Make sure your method works with any array')
    })
  })

  describe('5. sortPlatesByCitations', () => {
    const sortPlatesByCitations = window['sortPlatesByCitations']
    const plates1 = [{ plate: 'NOTMINE', citations: 2 }, { plate: 'GETAWAY', citations: 1 }, { plate: 'ETMYDST', citations: 3 }]
    const plates2 = [{ plate: 'ANGEL', citations: 0 }, { plate: 'GETAWAY', citations: 1 }, { plate: 'ETMYDST', citations: 3 }, { plate: 'BADBOYZ', citations: 13 }]
    it('returns an array', () => {
      chai.assert.isArray(sortPlatesByCitations(plates1), 'Make sure your method returns an array')
    })
    it('returns array with elements in proper order', () => {
      chai.assert.includeOrderedMembers(sortPlatesByCitations(plates1), [{ plate: 'ETMYDST', citations: 3 }, { plate: 'NOTMINE', citations: 2 }, { plate: 'GETAWAY', citations: 1 }], 'Make sure your method returns an array with elements in proper order')
    })
    it('works with any array', () => {
      chai.assert.includeOrderedMembers(sortPlatesByCitations(plates2), [{ plate: 'BADBOYZ', citations: 13 }, { plate: 'ETMYDST', citations: 3 }, { plate: 'GETAWAY', citations: 1 }, { plate: 'ANGEL', citations: 0 }], 'Make sure your method works with any array (default sort may not work as expected numbers)')
    })
  })

})
