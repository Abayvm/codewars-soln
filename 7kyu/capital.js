//-----------
//PROBLEM:
//-----------

// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, 
// and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

//-----------
//SOLUTION:
//----------

var capitals = function (word) {
	// Write your code here
  let wrdArr = word.split("");
  let result = [];
  for(let i=0; i<wrdArr.length; i++){
    if(wrdArr[i] === wrdArr[i].toUpperCase()){
      result.push(i);
    }
  }
  return result;
}