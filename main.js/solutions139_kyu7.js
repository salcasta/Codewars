// Lost number in number sequence


/*
An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the starting array, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).
*/

function findDeletedNumber(startArr, mixArr) {
    let sorted = mixArr.sort()
    let isMatch = false
    let missing = 0
    
    for (let i = 0; i < startArr.length; i++ ) {
      isMatch = false
      for ( j = 0; j < sorted.length; j++ ) {
        if (startArr[i] == sorted[j]) isMatch = true
      }
        if ( !isMatch ) missing = startArr[i]
    }
    
    return missing
}


//OR

function findDeletedNumber(arr, mixArr) {
    return arr.filter(v=>mixArr.indexOf(v)==-1)[0]||0
}
