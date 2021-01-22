import differenceInYears from '../differenceInYears/index'
import differenceInQuarters from '../differenceInQuarters/index'
import differenceInMonths from '../differenceInMonths/index'
import differenceInWeeks from '../differenceInWeeks/index'
import differenceInDays from '../differenceInDays/index'
import differenceInHours from '../differenceInHours/index'
import differenceInMinutes from '../differenceInMinutes/index'
import differenceInSeconds from '../differenceInSeconds/index'

/**
 * @name intlFormatRelative
 * @category Common Helpers
 * @summary Enables language-sensitive relative time formatting according to
 * according to the locale and formatting options of the given Intl.RelativeTimeFormat object.
 * @description 
 * Get difference between today and the given date 
 * which will become a value for Intl.RelativeTimeFormat.prototype.format()
 * @param {Date|Number} date - the given date
 * @param {String} unit - unit values "year", "quarter", "month", "week", 
 * "day", "hour", "minute", "second" as per MDN Web Docs
 * @param {String} [locale='en'] - optional locale, default value is 'en'. 
 * @param {Object} [options={}] - optional object with the following properties: 
 * localeMatcher, numeric, style. 
 * Default is: 
 * {
    localeMatcher: "best fit", // other values: "lookup"
    numeric: "always", // other values: "auto"
    style: "long", // other values: "short" or "narrow"
   }
 *  Default options :  { style: 'narrow' }
 */

export default function intlFormatRelative(date, unit, locale, options) {
  const units = [
    'year',
    'years',
    'quarter',
    'quarters',
    'month',
    'months',
    'week',
    'weeks',
    'day',
    'days',
    'hour',
    'hours',
    'minute',
    'minutes',
    'second',
    'seconds',
  ]
  const rtf = new Intl.RelativeTimeFormat(locale, options)
  let value = 0

  if (units.indexOf(unit) === -1) {
    throw new Error('Invalid unit supplied')
  }

  if (unit === units[0] || unit === units[1]) {
    value = differenceInYears(new Date(date), new Date())
  } else if (unit === units[2] || unit === units[3]) {
    value = differenceInQuarters(new Date(date), new Date())
  } else if (unit === units[4] || unit === units[5]) {
    value = differenceInMonths(new Date(date), new Date())
  } else if (unit === units[6] || unit === units[7]) {
    value = differenceInWeeks(new Date(date), new Date())
  } else if (unit === units[8] || unit === units[9]) {
    value = differenceInDays(new Date(date), new Date())
  } else if (unit === units[10] || unit === units[11]) {
    value = differenceInHours(new Date(date), new Date())
  } else if (unit === units[12] || unit === units[13]) {
    value = differenceInMinutes(new Date(date), new Date())
  } else if (unit === units[14] || unit === units[15]) {
    value = differenceInSeconds(new Date(date), new Date())
  }
  return rtf.format(value, unit)
}
