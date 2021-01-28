import requiredArgs from '../_lib/requiredArgs/index';
import defaultLocale from '../locale/en-US/index';
import differenceInSeconds from '../differenceInSeconds/index';
import differenceInMinutes from '../differenceInMinutes/index';
import differenceInHours from '../differenceInHours/index';
import differenceInDays from '../differenceInDays/index';
import differenceInWeeks from '../differenceInWeeks/index';
import differenceInMonths from '../differenceInMonths/index';
import differenceInQuarters from '../differenceInQuarters/index';
import differenceInYears from '../differenceInYears/index';

const SECONDS_IN_MINUTE = 60;
const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_DAY = 86400;
const SECONDS_IN_WEEK = 604800;
const SECONDS_IN_MONTH = 2592000;  // 30 days in month
const SECONDS_IN_3_MONTHS = 7776000;  // 3 months in quarter
const SECONDS_IN_YEAR = 31104000; // 12 months in year

/**
 * @name intlFormatDistance
 * @category Common Helpers
 * @summary Enables language-sensitive relative time formatting according to the locale and formatting options
 * of the given Intl.RelativeTimeFormat object.
 * @description
 * The API gets a difference between two gived dates and either picks the most appropriate unit
 * depending on the distance (the less the distance the smaller the unit),
 * or allowes a user to pass in a unit as well.
 *
 * | Distance between the below dates, no unit passed in:         | Result        |
 * | new Date(1986, 3, 4, 11, 30, 0),                             | in 1 hour     |
 * | new Date(1986, 3, 4, 10, 30, 0)                              |               |
*  |--------------------------------------------------------------|---------------|
 * | Distance between the below dates, hour passed in as a unit:  | Result        |
 * | new Date(1986, 3, 4, 11, 30, 0),                             | in 60 minutes |
 * | new Date(1986, 3, 4, 10, 30, 0)                              |               |

 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with.
 * @param {Object} [rtfOptions] - an object with options.
 * @param {String} [rtfOptions.unit=''] - values "year", "quarter", "month", "week", "day", "hour", "minute", "second" as per MDN Web Docs.
 * @param {String|String[]} [rtfOptions.locales='en'] - a string (or array of strings) with a BCP 47 language tag. For reference see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation
 * @param {String} [rtfOptions.options.localeMatcher='best fit'] - the locale matching algorithm to use. Other value: "lookup".
 * @param {String} [rtfOptions.options.numeric='always'] - the output message format. Other value: "auto".
 * @param {String} [rtfOptions.options.style='long'] - the length of the internationalized message. Other values: "short" or "narrow";
 * For reference see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat
 *
 * @example
 * // What is the distance between Mar, 4 1986 11:30:00 and Mar, 4 1986 10:30:00 in Intl?
 * const result = intlFormatDistance(
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0));
 * // => in 1 hour
 *
 * @example
 * // What is the distance between Mar, 4 1986 11:30:00 and Mar, 4 1986 10:30:00 in minutes in Intl?
 * const result = intlFormatDistance(
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   { unit: 'minute'});
 * // => in 60 minutes
 *
 * @example
 * // What is the distance between Mar, 4 1986 11:30:00 and Mar, 4 1986 10:30:00 in minutes in Spanish in Intl?
 * const result = intlFormatDistance(
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   { unit: 'minute', locales: 'es' });
 * // => dentro de 60 minutos
 */

// This type mimics the 'options' parameter of Intl.RelativeTimeFormat
type IrtfOptions = {
  localeMatcher?: String,
  numeric?: String,
  style?: String,
};

type Options = {
  unit?: String,
  locales?: String;
  options?: IrtfOptions;
}

export default function intlFormatDistance(date: Date | number, baseDate: Date | number, rtfOptions?: Options): String {
  requiredArgs(2, arguments);

  let value;
  let unit;

  if (!rtfOptions?.unit) {
    // Get the unit based on diffInSeconds calculations if no unit passed in
    const diffInSeconds = differenceInSeconds(date, baseDate);  // The smallest unit

    if (Math.abs(diffInSeconds) < SECONDS_IN_MINUTE) {
      value = differenceInSeconds(date, baseDate);
      unit = 'second';
    } else if (Math.abs(diffInSeconds) < SECONDS_IN_HOUR) {
      value = differenceInMinutes(date, baseDate);
      unit = 'minute';
    } else if (Math.abs(diffInSeconds) < SECONDS_IN_DAY) {
      value = differenceInHours(date, baseDate);
      unit = 'hour';
    } else if (Math.abs(diffInSeconds) < SECONDS_IN_WEEK) {
      value = differenceInDays(date, baseDate);
      unit = 'day';
    } else if (Math.abs(diffInSeconds) < SECONDS_IN_MONTH) {  // Seconds in a month
      value = differenceInWeeks(date, baseDate);
      unit = 'week';
    } else if (Math.abs(diffInSeconds) < SECONDS_IN_3_MONTHS) {  // Seconds in 3 months
      value = differenceInMonths(date, baseDate);
      unit = 'month';
    } else if (Math.abs(diffInSeconds) < SECONDS_IN_YEAR) {  // Seconds in a year
      value = differenceInQuarters(date, baseDate);
      unit = 'quarter';
    } else {
      value = differenceInYears(date, baseDate);
      unit = 'year';
    }
  } else {
    // Get the value if unit has been passed in
    unit = rtfOptions?.unit;
    if (unit === 'second') {
      value = differenceInSeconds(date, baseDate);
    } else if (unit === 'minute') {
      value = differenceInMinutes(date, baseDate);
    } else if (unit === 'hour') {
      value = differenceInHours(date, baseDate);
    } else if (unit === 'day') {
      value = differenceInDays(date, baseDate);
    } else if (unit === 'week') {
      value = differenceInWeeks(date, baseDate);
    } else if (unit === 'month') {
      value = differenceInMonths(date, baseDate);
    } else if (unit === 'quarter') {
      value = differenceInQuarters(date, baseDate);
    } else if (unit === 'year') {
      value = differenceInYears(date, baseDate);
    }
  }

  const rtf = new Intl.RelativeTimeFormat(
    rtfOptions?.locales || defaultLocale,
    rtfOptions?.options || {}
  );
  return rtf.format(value, unit);
};
