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


module.exports = calcMonth
