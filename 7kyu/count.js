//-----------
//PROBLEM:
//-----------
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 
// 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//-----------
//SOLUTION:
//----------

function countPositivesSumNegatives(input) {
    // your code here
    if(!input || input.length === 0 ){
      return [];
    }
    let pos = 0;
    let sum = 0;
    let ign = 0
    let result = [];
    for(let i=0; i<input.length; i++){
      if(input[i]>0){
        pos+=1;
      }else if(input[i]<0){
        sum += input[i];
      }
    }
    result.push(pos, sum);
    return result;
}