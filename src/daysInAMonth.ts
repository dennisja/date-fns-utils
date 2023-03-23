/**
 * Calculates the number od days in a monthe
 * @param date The date containing a month whose total days you have to get
 * @returns {number} The number of days in a month
 */
const daysInAMonth = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), 0);

export { daysInAMonth };
