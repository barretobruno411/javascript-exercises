const sumAll = function (numberOne, numberTwo) {
  if (
    typeof numberOne !== "number" ||
    typeof numberTwo !== "number" ||
    numberOne < 0 ||
    numberTwo < 0
  ) {
    return "ERROR";
  }

  let sum = 0;

  if (numberOne < numberTwo) {
    for (let i = numberOne; i <= numberTwo; i++) {
      console.log(i);
      sum += i;
      console.log("sum: " + sum);
    }
  } else {
    for (let i = numberTwo; i <= numberOne; i++) {
      console.log(i);
      sum += i;
      console.log("sum: " + sum);
    }
  }

  return sum;
  // for (let i = numberOne; )
};
console.log(sumAll(5, 1));
// Do not edit below this line
module.exports = sumAll;
