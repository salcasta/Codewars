//Sort by Last Char

/*
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.
*/

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

function last(x){
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}



//OR


// If two words have the same last letter,  the words will be sorted by the second letter and so on.

function last (str) {
    return str.split(' ').map(x => x.split('').reverse().join(' ')).sort().map(x => x.split(' ').reverse().join(''))
}
