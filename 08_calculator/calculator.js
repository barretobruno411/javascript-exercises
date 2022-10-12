const add = function(number1, number2) {
	return number1 + number2
};

const subtract = function(number1, number2) {
	return number1 - number2
};

const sum = function(array) {
	return array.reduce((total, currentValue) => total += currentValue, 0)
};

const multiply = function(array) {
  return array.reduce((total, currentValue) => total *= currentValue, 1)
};

const power = function(number1, number2) {
	return number1 ** number2
};

const factorial = function(number) {
	const array = []

  for (let i = number; i >= 1; i--) {
    array.push(i)
  }

  return array.reduce((total, prev) => total *= prev, 1)
};
console.log(factorial(10))
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
