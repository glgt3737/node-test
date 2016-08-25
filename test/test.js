const fibonacci = (n) => {
  if(typeof n !== 'number') throw new Error('n should be a Number');
  if(n < 0) throw new Error('n should >= 0');
  if(n > 10) throw new Error('n should <= 10');
  if(n === 0) return 0;
  if(n === 1) return 1;
  return fibonacci(n-1) + fibonacci(n-2);
};

module.exports = (req, res) => {
  var n = parseInt(req.query.n);
  console.log('fibonacci(' + n + ') is ' + fibonacci(n));
  res.send('success');
};

module.exports.fibonacci = fibonacci;