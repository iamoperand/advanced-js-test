const isEven = () => value => ({
  status: (value % 2 === 0),
  number: value,
});


module.exports = isEven;
