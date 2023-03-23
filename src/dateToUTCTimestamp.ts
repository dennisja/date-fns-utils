/**
 * Calculates the UTC timestamp of the same date time. It doesn't convert the date to UTC but replaces the timezone with UTC
 * @param date The date whose UTC timestamp is to be calculated
 * @returns {number} The number of seconds since 1st January 1970
 */
const dateToUTCTimestamp = (date: Date): number =>
  Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  );

/**
 *
 * @param {Date} date The date whose 
 * @param locales
 * @param options
 * @returns
 */
const dateToUTCString = (
  date: Date,
  locales?: Intl.LocalesArgument,
  options?: Intl.DateTimeFormatOptions
): string =>
  new Date(dateToUTCTimestamp(date)).toLocaleDateString(locales, options);

export { dateToUTCTimestamp, dateToUTCString };
