//DESCRIPTION:

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, 
// neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

//SOLUTION:
function disemvowel(str) {
    const arr = str.split('');
    const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
    
    for(let i=arr.length - 1; i>=0; i--){
      if(vowels.includes(arr[i])){
        arr.splice(i, 1);
      }
    }
    return arr.join('');
}