/**
 *
 * @param {Number} now
 * @param {Number} month
 * @param {String} symbol
 */

const calcMonth = (now = 1, month = 1) => {
  const monthNow = new Date(new Date().setMonth(now - 1));
  return (symbol = "+") => {
    const result = monthNow.setMonth(
      eval(`${monthNow.getMonth()} ${symbol} ${month}`)
    );
    return new Date(result).getMonth() + 1;
  };
};

/**
 * 
 * @param {Number} month 
 * @param {Number} monthToAdd 
 * @param {String} symbol
 */

const calcMonthMod = (month = 1, monthToAdd = 1) => (symbol = "+") => {
  return eval(`(12 + ${month} ${symbol} ${monthToAdd}) % 12`);
};

module.exports = { calcMonth, calcMonthMod };
