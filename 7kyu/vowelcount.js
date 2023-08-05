// DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces

//SOLUTION:
function getCount(str) {
    const arr = str.split('');
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    
    for(let i=0; i<arr.length; i++){
      if(vowels.includes(arr[i])){
        count += 1;
      }
    }
    return count;
}