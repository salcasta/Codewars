/*
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
*/


function removeDupeWords(str) {
    //str => split(' ') => filter
    return str.split(' ').filter((w,i,a) => w !== a[i-1]).join(' ')
}

//OR

const removeConsecutiveDuplicates = s =>{
    const out = [];
    s = s.split(' ');
    for (let i = 1; i <= s.length; i++){
      if (s[i] !== s[i-1]){
        out.push(s[i-1])
      }
    }
    return out.join(' ')
}
