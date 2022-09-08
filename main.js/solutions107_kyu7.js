//Get key/value pairs as arrays

/*
Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

Example:

keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
*/

function keysAndValues(data){
    let key = Object.keys(data).sort()
    let value = Object.values(data).sort()
    
    return result = [[...key],[...value]]
}


//OR


function keysAndValues(data){
    return [Object.keys(data), Object.values(data)];
}


//OR


function keysAndValues(data){
    var arr = [];
    arr.push(Object.keys(data));
    arr.push(Object.keys(data).map(function(x){return data[x]}))
    return arr
}
