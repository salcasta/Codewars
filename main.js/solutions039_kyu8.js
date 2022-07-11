//Array plus array


//I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

//P.S. Each array includes only integer numbers. Output is a number too.


function arrayPlusArray(arr1, arr2) {
  let sumOne = arr1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  })
  
  let sumTwo = arr2.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  })
  
  return sumOne + sumTwo
}
