/**
 * Calculates the number of days in a month
 * @param date The date containing a month whose total days you have to get
 * @returns {number} The number of days in a month
 */
const daysInMonth = (date: Date): number =>
  new Date(date.getFullYear(), date.getMonth(), 0).getDate();

export { daysInMonth };
