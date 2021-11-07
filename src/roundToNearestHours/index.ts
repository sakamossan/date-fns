import constructFrom from '../constructFrom/index'
import toDate from '../toDate/index'
import type { RoundingOptions } from '../types'
import { getRoundingMethod } from '../_lib/roundingMethods/index'

/**
 * The {@link roundToNearestHours} function options.
 */
export interface RoundToNearestHoursOptions extends RoundingOptions {
  nearestTo?: number
}

/**
 * @name roundToNearestHours
 * @category Hour Helpers
 * @summary Rounds the given date to the nearest hour
 *
 * @description
 * Rounds the given date to the nearest hour (or number of hours).
 * Rounds up when the given date is exactly between the nearest rounded hour.
 *
 * @param date - the date to round
 * @param options - an object with options.
 * @returns {Date} the new date rounded to the closest hour
 * @throws {RangeError} `options.nearestTo` must be between 1 and 12
 *
 * @example
 * // Round 10 July 2014 12:12:34 to nearest hour:
 * var result = roundToNearestHours(new Date(2014, 6, 10, 12, 12, 34))
 * //=> Thu Jul 10 2014 12:00:00
 *
 * @example
 * // Round 10 July 2014 13:12:34 to nearest quarter of day:
 * var result = roundToNearestHours(new Date(2014, 6, 10, 13, 12, 34), { nearestTo: 6 })
 * // rounds up because given date is exactly between 12:00:00 and 18:00:00
 * //=> Thu Jul 9 2014 12:00:00
 */
export default function roundToNearestHours(
  dirtyDate: Date | number,
  options?: RoundToNearestHoursOptions
): Date {
  const nearestTo = options?.nearestTo ?? 1

  if (nearestTo < 1 || nearestTo > 12) {
    throw new RangeError('`options.nearestTo` must be between 1 and 12')
  }

  const date = toDate(dirtyDate)
  const minutes = date.getMinutes() // relevant if nearestTo is 1, which is the default case
  const hours = date.getHours() + minutes / 60
  const roundingMethod = getRoundingMethod(options?.roundingMethod)
  const roundedHour = roundingMethod(hours / nearestTo) * nearestTo
  const remainderHour = hours % nearestTo
  const addedHour = Math.round(remainderHour / nearestTo) * nearestTo

  const result = constructFrom(date, date)
  result.setHours(roundedHour + addedHour, 0, 0, 0)
  return result
}
