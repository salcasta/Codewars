//Factorial

//In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

function factorial(n) {
  let num = []
  for (let i = 1; i <= n; i++){
   num.push(i)
  }

  let result = num.reduce((acc, cv) => acc * cv, 1)
  
  if (n === 0) {
    return 1
  } else if (n < 0) {
    throw new RangeError('Must be 0 or higher')
  } else if (n > 12) {
    throw new RangeError('Must be lower than 12')
  } else if (n > 0 && n <= 12) {
    return result
  }
  
}
