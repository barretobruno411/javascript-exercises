const removeFromArray = function(array, number) {
    const argumentsNumber = arguments.length;
    let target = array;
    // let final = []
    for (let i = 1; i < argumentsNumber; i++) {
        let index = target.indexOf(arguments[i])
        if (index >= 0) {
            target.splice(index,1)
        }

    }
    return target
};
console.log(removeFromArray([1, 2, 3, 4], 3, 2))
// Do not edit below this line
module.exports = removeFromArray;
