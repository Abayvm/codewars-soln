//DESCRIPTION:
// Write a function that checks if a given string (case insensitive) is a palindrome. 
// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, 
// such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".

//SOLUTION:
function isPalindrome(x) {
    // your code here
    let sensitivity = x.toLowerCase(); 
    const arr = sensitivity.split('');
    let forward = '';
    let backward = '';
    for(let i=0; i<arr.length; i++){
      forward += arr[i];
      arr.join('');
    }
    for(let j=arr.length-1; j>=0; j--){
        backward += arr[j];
    }
    if(forward === backward){
      return true;
    }else{
      return false;
    }
}