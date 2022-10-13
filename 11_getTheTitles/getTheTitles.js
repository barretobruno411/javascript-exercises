const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

const getTheTitles = function(books) {
    const result = books.map(item => item["title"])
    return result
};
console.log(getTheTitles(books))
// Do not edit below this line
module.exports = getTheTitles;
