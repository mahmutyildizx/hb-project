export const moneyFormat = (money) => {
  const moneyFloat = parseFloat(money).toFixed(2).split(".");
  return moneyFloat.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};

export const formatPrice = (num) => `${moneyFormat(num)} TL`;
