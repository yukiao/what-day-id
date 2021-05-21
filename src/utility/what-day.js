const data = require("../data/data");

/**
 * Converts Date object to Indonesian date format
 *
 * @param {Date} dateInstance A Date object
 * @returns {string} Indonesian date format
 */
function whatDay(dateInstance) {
  if (dateInstance instanceof Date) {
    const year = dateInstance.getFullYear();
    const day = dateInstance.getDay();
    const date = dateInstance.getDate();
    const month = dateInstance.getMonth();

    const output = `${data.day[day]}, ${date} ${data.month[month]} ${year}`;
    return output;
  }

  throw new Error("Invalid argument");
}

module.exports = whatDay;
