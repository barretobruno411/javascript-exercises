const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (array) {
  return array.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    return oldestAge > currentAge ? oldest : currentPerson
  }) 
};
// find age of object
const getAge = function (birth, death) {
  
  if (!death) {
    death = new Date().getFullYear();
  }

  const result = death - birth
  return result;
};

console.log(findTheOldest(people))
// Do not edit below this line
module.exports = findTheOldest;
