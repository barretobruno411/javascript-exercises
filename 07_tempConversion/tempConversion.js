const ftoc = function(Fahrenheit) {
  let celsius = (Fahrenheit - 32) * 5 / 9
  return parseFloat(celsius.toFixed(1))
};

const ctof = function(celsius) {
  let Fahrenheit = (celsius * 1.8) + 32
  return parseFloat(Fahrenheit.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
