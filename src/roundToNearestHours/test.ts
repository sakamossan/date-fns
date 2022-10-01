/* eslint-env mocha */

import assert from 'assert'
import roundToNearestHours from './index'

describe('roundToNearestHours', function () {
  it('rounds given date to the nearest hour by default', function () {
    const result = roundToNearestHours(
      new Date(2014, 6 /* Jul */, 10, 12, 16, 16)
    )
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 0, 0))
  })

  it('accepts a timestamp', function () {
    const result = roundToNearestHours(
      new Date(2014, 6 /* Jul */, 10, 12, 13, 16).getTime()
    )
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 0, 0))
  })

  it('rounds to the closest x hours if nearestTo is provided', function () {
    const result = roundToNearestHours(
      new Date(2014, 6 /* Jul */, 10, 10, 10, 30),
      { nearestTo: 4 }
    )
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 0, 0))
  })

  it('rounds up >=30 minutes for nearestTo=1', function () {
    const result = roundToNearestHours(
      new Date(2014, 6 /* Jul */, 10, 12, 30, 0)
    )
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 13, 0, 0))
  })

  it('rounds down <30 minutes for nearestTo=1', function () {
    const result = roundToNearestHours(
      new Date(2014, 6 /* Jul */, 10, 12, 13, 29, 999)
    )
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 0, 0))
  })

  it('does not mutate the original date', function () {
    const date = new Date(2014, 6 /* Jul */, 10, 12, 10, 10, 99)
    roundToNearestHours(date)
    assert.deepStrictEqual(
      date,
      new Date(2014, 6 /* Jul */, 10, 12, 10, 10, 99)
    )
  })

  it('rounds according to the passed mode - floor', () => {
    const result = roundToNearestHours(
      new Date(2014, 6 /* Jul */, 10, 12, 30, 0, 5),
      { roundingMethod: 'floor' }
    )
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 13, 0, 0))
  })

  it('rounds according to the passed mode - floor - when nearestTo is provided', () => {
    const result = roundToNearestHours(
      new Date(2014, 6 /* Jul */, 10, 15, 10, 30, 5),
      { nearestTo: 4, roundingMethod: 'floor' }
    )
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 16, 0, 0))
  })

  it('rounds according to the passed mode - ceil', () => {
    const result = roundToNearestHours(
      new Date(2014, 6 /* Jul */, 10, 12, 10, 30, 5),
      { roundingMethod: 'ceil' }
    )
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 13, 0, 0))
  })

  it('rounds according to the passed mode - ceil - when nearestTo is provided', () => {
    const result = roundToNearestHours(
      new Date(2014, 6 /* Jul */, 10, 12, 10, 30, 5),
      { nearestTo: 4, roundingMethod: 'ceil' }
    )
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 16, 0, 0))
  })

  it('rounds according to the passed mode - round - when nearestTo is provided', () => {
    const result = roundToNearestHours(
      new Date(2014, 6 /* Jul */, 10, 12, 10, 30, 5),
      { nearestTo: 4, roundingMethod: 'round' }
    )
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 0, 0))
  })

  it('rounds according to the passed mode - trunc - when nearestTo is provided', () => {
    const result = roundToNearestHours(
      new Date(2014, 6 /* Jul */, 10, 12, 10, 30, 5),
      { nearestTo: 4, roundingMethod: 'trunc' }
    )
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 0, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    const result = roundToNearestHours(new Date(NaN))
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws `RangeError` if nearestTo is not between 1 and 12', function () {
    const date = new Date(2014, 6 /* Jul */, 10, 12, 10, 30)
    assert.throws(
      roundToNearestHours.bind(null, date, { nearestTo: 13 }),
      RangeError
    )
    assert.throws(
      roundToNearestHours.bind(null, date, { nearestTo: 0 }),
      RangeError
    )
  })
})
