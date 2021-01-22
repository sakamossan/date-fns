// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import intlFormatRelative from '.'
import subDays from '../subDays/index'
import addHours from '../addHours/index'
import addMinutes from '../addMinutes/index'
import addSeconds from '../addSeconds/index'

it('should return 1 year ago', function () {
  var result = intlFormatRelative(subDays(new Date(), 366), 'year')
  assert(result === '1 year ago')
})

it('should return 1 quarter ago', function () {
  var result = intlFormatRelative(subDays(new Date(), 92), 'quarter')
  assert(result === '1 quarter ago')
})

it('should return 1 month ago', function () {
  var result = intlFormatRelative(subDays(new Date(), 31), 'month')
  assert(result === '1 month ago')
})

it('should return 1 week ago', function () {
  var result = intlFormatRelative(subDays(new Date(), 7), 'week')
  assert(result === '1 week ago')
})

it('should return 1 day ago', function () {
  var result = intlFormatRelative(subDays(new Date(), 1), 'day')
  assert(result === '1 day ago')
})

it('should return 1 hour ago', function () {
  var result = intlFormatRelative(addHours(new Date(), -1), 'hour')
  assert(result === '1 hour ago')
})

it('should return 1 minute ago', function () {
  var result = intlFormatRelative(addMinutes(new Date(), -1), 'minute')
  assert(result === '1 minute ago')
})

it('should return 1 second ago', function () {
  var result = intlFormatRelative(addSeconds(new Date(), -1), 'second')
  assert(result === '1 second ago')
})

it('throws Error if the unit is invalid', function () {
  assert.throws(
    intlFormatRelative.bind(null, addSeconds(new Date(), -1), 'wrongUnit'),
    Error
  )
})

it('throws RangeError if the date is invalid', function () {
  assert.throws(
    intlFormatRelative.bind(null, addSeconds(new Date(NaN), -1), 'seconds'),
    RangeError
  )
})
