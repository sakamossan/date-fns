// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import intlFormatDistance from '.'

describe('intlFormatDistance', function () {
  // Default Options
  it('prints out 1 second ago', function () {
    const result = intlFormatDistance(
      new Date(1986, 3, 4, 10, 30, 0),
      new Date(1986, 3, 4, 10, 30, 1)
    )
    assert(result === '1 second ago')
  })

  it('prints out in 1 second', function () {
    const result = intlFormatDistance(
      new Date(1986, 3, 4, 10, 30, 1),
      new Date(1986, 3, 4, 10, 30, 0)
    )
    assert(result === 'in 1 second')
  })

  it('prints out 1 minute ago', function () {
    const result = intlFormatDistance(
      new Date(1986, 3, 4, 10, 30, 0),
      new Date(1986, 3, 4, 10, 31, 0)
    )
    assert(result === '1 minute ago')
  })

  it('prints out in 1 minute', function () {
    const result = intlFormatDistance(
      new Date(1986, 3, 4, 10, 31, 0),
      new Date(1986, 3, 4, 10, 30, 0)
    )
    assert(result === 'in 1 minute')
  })

  it('prints out 1 hour ago', function () {
    const result = intlFormatDistance(
      new Date(1986, 3, 4, 10, 30, 0),
      new Date(1986, 3, 4, 11, 30, 0)
    )
    assert(result === '1 hour ago')
  })

  it('prints out in 1 hour', function () {
    const result = intlFormatDistance(
      new Date(1986, 3, 4, 11, 30, 0),
      new Date(1986, 3, 4, 10, 30, 0)
    )
    assert(result === 'in 1 hour')
  })

  it('prints out 1 day ago', function () {
    const result = intlFormatDistance(
      new Date(1986, 3, 4, 10, 30, 0),
      new Date(1986, 3, 5, 10, 30, 0)
    )
    assert(result === '1 day ago')
  })

  it('prints out in 1 year', function () {
    const result = intlFormatDistance(
      new Date(1987, 3, 4, 10, 30, 0),
      new Date(1986, 3, 4, 10, 30, 0)
    )
    assert(result === 'in 1 year')
  })

  it('prints out in 4 quarters', function () {
    const result = intlFormatDistance(
      new Date(1987, 3, 4, 10, 30, 0),
      new Date(1986, 3, 4, 10, 30, 0),
      { unit: 'quarter' }
    )
    assert(result === 'in 4 quarters')
  })

  it('prints out in 12 months', function () {
    const result = intlFormatDistance(
      new Date(1987, 3, 4, 10, 30, 0),
      new Date(1986, 3, 4, 10, 30, 0),
      { unit: 'month' }
    )
    assert(result === 'in 12 months')
  })

  it('prints out in 52 weeks', function () {
    const result = intlFormatDistance(
      new Date(1987, 3, 4, 10, 30, 0),
      new Date(1986, 3, 4, 10, 30, 0),
      { unit: 'week' }
    )
    assert(result === 'in 52 weeks')
  })

  it('prints out in 365 days', function () {
    const result = intlFormatDistance(
      new Date(1987, 3, 4, 10, 30, 0),
      new Date(1986, 3, 4, 10, 30, 0),
      { unit: 'day' }
    )
    assert(result === 'in 365 days')
  })

  it('prints out in 8,760 hours"', function () {
    const result = intlFormatDistance(
      new Date(1987, 3, 4, 10, 30, 0),
      new Date(1986, 3, 4, 10, 30, 0),
      { unit: 'hour' }
    )
    assert(result === 'in 8,760 hours')
  })

  it('prints out in 525,600 minutes', function () {
    const result = intlFormatDistance(
      new Date(1987, 3, 4, 10, 30, 0),
      new Date(1986, 3, 4, 10, 30, 0),
      { unit: 'minute' }
    )
    assert(result === 'in 525,600 minutes')
  })

  it('prints out in 31,536,000 seconds', function () {
    const result = intlFormatDistance(
      new Date(1987, 3, 4, 10, 30, 0),
      new Date(1986, 3, 4, 10, 30, 0),
      { unit: 'second' }
    )
    assert(result === 'in 31,536,000 seconds')
  })

  it('prints out in 1 day', function () {
    const result = intlFormatDistance(
      new Date(1986, 3, 5, 10, 30, 0),
      new Date(1986, 3, 4, 10, 30, 0)
    )
    assert(result === 'in 1 day')
  })

  it('prints out 1 month ago', function () {
    const result = intlFormatDistance(
      new Date(1986, 4, 4, 10, 30, 0),
      new Date(1986, 5, 4, 10, 30, 0)
    )
    assert(result === '1 month ago')
  })

  it('prints out in 1 month', function () {
    const result = intlFormatDistance(
      new Date(1986, 5, 4, 10, 30, 0),
      new Date(1986, 4, 4, 10, 30, 0)
    )
    assert(result === 'in 1 month')
  })

  it('prints out 1 quarter ago', function () {
    const result = intlFormatDistance(
      new Date(1986, 1, 4, 10, 30, 0),
      new Date(1986, 5, 4, 10, 30, 0)
    )
    assert(result === '1 quarter ago')
  })

  it('prints out in 1 quarter', function () {
    const result = intlFormatDistance(
      new Date(1986, 5, 4, 10, 30, 0),
      new Date(1986, 1, 4, 10, 30, 0)
    )
    assert(result === 'in 1 quarter')
  })

  it('prints out 1 year ago', function () {
    const result = intlFormatDistance(
      new Date(1985, 1, 4, 10, 30, 0),
      new Date(1986, 4, 4, 10, 30, 0)
    )
    assert(result === '1 year ago')
  })

  it('prints out in 1 year', function () {
    const result = intlFormatDistance(
      new Date(1986, 4, 4, 10, 30, 0),
      new Date(1985, 4, 4, 10, 30, 0)
    )
    assert(result === 'in 1 year')
  })

  // Custom options
  it('prints out dentro de 1 año', function () {
    const result = intlFormatDistance(
      new Date(1986, 4, 4, 10, 30, 0),
      new Date(1985, 4, 4, 10, 30, 0),
      { locale: 'es' }
    )
    assert(result === 'dentro de 1 año')
  })

  it('prints tomorrow', function () {
    const result = intlFormatDistance(
      new Date(1985, 4, 5, 10, 30, 0),
      new Date(1985, 4, 4, 10, 30, 0),
      { style: 'short', numeric: 'auto' }
    )
    assert(result === 'tomorrow')
  })

  // Same dates
  it('prints out in 0 seconds', function () {
    const result = intlFormatDistance(
      new Date(1986, 3, 5, 10, 30, 0),
      new Date(1986, 3, 5, 10, 30, 0)
    )
    assert(result === 'in 0 seconds')
  })

  it('prints in 60 minutes', function () {
    const result = intlFormatDistance(
      new Date(1986, 3, 5, 11, 30, 0),
      new Date(1986, 3, 5, 10, 30, 0),
      { unit: 'minute' }
    )
    assert(result === 'in 60 minutes')
  })

  // Options object properties of Intl.RelativeTimeFormat
  it('prints out in 0 Sekunden', function () {
    const result = intlFormatDistance(
      new Date(1986, 3, 5, 10, 30, 0),
      new Date(1986, 3, 5, 10, 30, 0),
      { locale: 'de-DE', localeMatcher: 'lookup' }
    )
    assert(result === 'in 0 Sekunden')
  })

  it('prints out in 0 Sekunden', function () {
    const result = intlFormatDistance(
      new Date(1986, 3, 5, 10, 30, 0),
      new Date(1986, 3, 5, 10, 30, 0),
      { locale: 'de-DE', localeMatcher: 'best fit' }
    )
    assert(result === 'in 0 Sekunden')
  })

  it('prints out in 0 Sekunden', function () {
    const result = intlFormatDistance(
      new Date(1986, 3, 5, 10, 30, 0),
      new Date(1986, 3, 5, 10, 30, 0),
      { locale: 'de-DE', numeric: 'always' }
    )
    assert(result === 'in 0 Sekunden')
  })

  it('prints out jetzt', function () {
    const result = intlFormatDistance(
      new Date(1986, 3, 5, 10, 30, 0),
      new Date(1986, 3, 5, 10, 30, 0),
      { locale: 'de-DE', numeric: 'auto' }
    )
    assert(result === 'jetzt')
  })

  it('prints out now', function () {
    const result = intlFormatDistance(
      new Date(1986, 3, 5, 10, 30, 0),
      new Date(1986, 3, 5, 10, 30, 0),
      { numeric: 'auto' }
    )
    assert(result === 'now')
  })

  it('prints dentro de 60 minutos', function () {
    const result = intlFormatDistance(
      new Date(1986, 3, 5, 11, 30, 0),
      new Date(1986, 3, 5, 10, 30, 0),
      { unit: 'minute', locale: 'es' }
    )
    assert(result === 'dentro de 60 minutos')
  })

  it('prints in 60 Minuten', function () {
    const result = intlFormatDistance(
      new Date(1986, 3, 5, 11, 30, 0),
      new Date(1986, 3, 5, 10, 30, 0),
      { unit: 'minute', locale: 'de' }
    )
    assert(result === 'in 60 Minuten')
  })

  // Units passed in as parameters
  it('prints out 1 hour ago', function () {
    const result = intlFormatDistance(
      new Date(1986, 3, 4, 10, 30, 0),
      new Date(1986, 3, 4, 11, 30, 0),
      { unit: 'hour' }
    )
    assert(result === '1 hour ago')
  })

  it('prints out 60 minutes ago', function () {
    const result = intlFormatDistance(
      new Date(1986, 3, 4, 10, 30, 0),
      new Date(1986, 3, 4, 11, 30, 0),
      { unit: 'minute' }
    )
    assert(result === '60 minutes ago')
  })

  it('prints out in 60 minutes', function () {
    const result = intlFormatDistance(
      new Date(1986, 3, 4, 11, 30, 0),
      new Date(1986, 3, 4, 10, 30, 0),
      { unit: 'minute' }
    )
    assert(result === 'in 60 minutes')
  })

  describe('edge cases', () => {
    it('throws Range Error if the date isnt valid', () => {
      assert.throws(
        intlFormatDistance.bind(
          null,
          new Date(NaN),
          new Date(1986, 3, 4, 10, 30, 0)
        ),
        RangeError
      )
    })

    it('throws Range Error if the base date isnt valid', () => {
      assert.throws(
        intlFormatDistance.bind(
          null,
          new Date(1986, 3, 4, 10, 30, 0),
          new Date(NaN)
        ),
        RangeError
      )
    })

    it("throws Range Error if both dates aren't valid", () => {
      assert.throws(
        intlFormatDistance.bind(null, new Date(NaN), new Date(NaN)),
        RangeError
      )
    })

    it('throws Range Error if unit is not valid', () => {
      assert.throws(
        // @ts-ignore: the value doesnt match onre of the Unit values from '../types.ts'
        intlFormatDistance.bind(
          null,
          new Date(1986, 3, 4, 10, 30, 0),
          new Date(1986, 3, 4, 10, 30, 0),
          { unit: 'wrongValue' }
        ),
        RangeError
      )
    })

    it('throws Range Error if locales is not valid', () => {
      assert.throws(
        intlFormatDistance.bind(
          null,
          new Date(1986, 3, 4, 10, 30, 0),
          new Date(1986, 3, 4, 10, 30, 0),
          { locale: 'wrongValue' }
        ),
        RangeError
      )
    })

    it('throws Range Error if locales is not valid', () => {
      assert.throws(
        intlFormatDistance.bind(
          null,
          new Date(1986, 3, 4, 10, 30, 0),
          new Date(1986, 3, 4, 10, 30, 0),
          { localeMatcher: 'wrongValue' }
        ),
        RangeError
      )
    })

    it('throws Range Error if locales is not valid', () => {
      assert.throws(
        intlFormatDistance.bind(
          null,
          new Date(1986, 3, 4, 10, 30, 0),
          new Date(1986, 3, 4, 10, 30, 0),
          { numeric: 'wrongValue' }
        ),
        RangeError
      )
    })

    it('throws Range Error if locales is not valid', () => {
      assert.throws(
        intlFormatDistance.bind(
          null,
          new Date(1986, 3, 4, 10, 30, 0),
          new Date(1986, 3, 4, 10, 30, 0),
          { style: 'wrongValue' }
        ),
        RangeError
      )
    })

    it('handles dates before 100 AD and prints out in 60 minutes', function () {
      const result = intlFormatDistance(
        new Date(1, 3, 4, 11, 30, 0),
        new Date(1, 3, 4, 10, 30, 0),
        { unit: 'minute' }
      )
      assert(result === 'in 60 minutes')
    })
  })
})
