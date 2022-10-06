const repeatString = function (string, times) {
  let result = "";

  if (times === 0) return result
  if (times < 0) return "ERROR"
  
  for (let i = 1; i <= times; i++) {
    result += string
  };

  return result;
};
console.log(repeatString("hey",-1));

// Do not edit below this line
module.exports = repeatString;
