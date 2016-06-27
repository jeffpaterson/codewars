Math.round = function(number) {
  return +number.toFixed(0);
};

Math.ceil = function(number) {
  if (number === parseInt(number, 10)) return number;
  return number + (number < 0 ? 0 : 1) >> 0;
};

Math.floor = function(number) {
  return ~~number;
};