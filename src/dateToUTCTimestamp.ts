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
 * Gets the utc date string equivalent of the date. Doesn't convert the date to UTC but just drops the timezone
 * @param date The date whose UTC date string is to be calculated
 * @returns {string} 
 */
const dateToUTCString = (date: Date): string =>
  new Date(dateToUTCTimestamp(date)).toUTCString();

export { dateToUTCTimestamp, dateToUTCString };
