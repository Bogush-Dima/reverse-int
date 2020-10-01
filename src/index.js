module.exports = function reverse (n) {
    const arr = (n + '').split('')
  let result = 1;

  if (arr[0] === '-') {
    arr.shift()
  }
  result *= arr.reverse().join('')
  return result
}
