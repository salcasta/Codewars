//The average length

//avgLenArr(['v', 's', 'b', 'd', 'u', 'a', 'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'])
/*
avgLenArr(['u', 'y']) =>  ['u', 'y'] // average length is 1
avgLenArr(['aa', 'bbb', 'cccc']) => ['aaa', 'bbb', 'ccc'] // average length is 3
avgLenArr(['aa', 'bb', 'ddd', 'eee']) => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
*/

function avgLenArr (arr) {
    let indLenArr = arr.map(x => parseInt(x.length))
    let singLetArr = arr.map(x => x[0])
    let totalLenNum = indLenArr.reduce((a,c) => a + Number(c), 0)
    let avg = Math.round(totalLenNum/indLenArr.length)
    return singLetArr.map(x => x.repeat(avg))
}


//more efficient


function averageLength(arr){
    let num = Math.round(arr.reduce((acc, cv) => acc + cv.length, 0) / arr.length )
  
    return arr.map(element => element[0].repeat(num))
}
