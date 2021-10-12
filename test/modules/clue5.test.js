describe("clue5", () => {
  const propertyTest = {
    name: 'Bermuda',
    location: {
      x: 32.301008,
      y: -64.757812
    },
    amenities: ['bar', 'restaurant'],
    details: {
      population: 63903,
      area: 20.54,
      description: {
        history: 'Bermuda is a country in the Atlantic Ocean. It is the smallest country in the Caribbean. It is the only country in the Caribbean with a national park.',
        propertyDetails: {
          bathrooms: 3,
          bedrooms: 2,
          escapeTunnel: true
        }
      }
    }
  }

  const simplePropertyTest = {
    name: 'Bermuda',
    location: '32.301008, -64.757812',
    bathrooms: 3,
    bedrooms: 2,
    escapeTunnel: false
  }

  const noEscape = { details: { description: { propertyDetails: { escapeTunnel: false } } } }

  describe('1. hasEscapeTunnel', () => {
    const hasEscapeTunnel = window['hasEscapeTunnel']
    it('returns a boolean', () => {
      chai.assert.isBoolean(hasEscapeTunnel(propertyTest))
    })
    it('returns true if the property has an escape tunnel', () => {
      chai.assert.isTrue(hasEscapeTunnel(propertyTest))
    })
    it('returns false if the property does not have an escape tunnel', () => {

      chai.assert.isFalse(hasEscapeTunnel(noEscape))
    })
  })
  describe('2. hasEscapeTunnelSafe', () => {
    const hasEscapeTunnelSafe = window['hasEscapeTunnelSafe']
    it('returns a boolean', () => {
      chai.assert.isBoolean(hasEscapeTunnelSafe(propertyTest))
    })
    it('returns true if the property has an escape tunnel', () => {
      chai.assert.isTrue(hasEscapeTunnelSafe(propertyTest))
    })
    it('returns false if the property does not have an escape tunnel', () => {
      chai.assert.isFalse(hasEscapeTunnelSafe(noEscape))
    })
    it('returns undefined if the property has no description', () => {
      chai.assert.isUndefined(
        hasEscapeTunnelSafe({ details: { description: undefined } })
      )
    })
  })
  describe('3. Print Property', () => {
    const printProperty = window['printProperty']
    it('returns a string', () => {
      chai.assert.isString(printProperty(propertyTest))
    })
    it('returns a string in the proper format including all keys and values', () => {
      chai.assert.equal(
        printProperty(simplePropertyTest).trim(),
        'name: Bermuda; location: 32.301008, -64.757812; bathrooms: 3; bedrooms: 2; escapeTunnel: false;')
    })
  })
})

