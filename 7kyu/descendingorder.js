//-----------
//PROBLEM:
//-----------

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

//-----------
//SOLUTION:
//----------

function descendingOrder(n){
    let newArr = [];
    let digits = n.toString().split('').map(Number);
    for(let i=0; i<digits.length; i++){
      let max = i;
      for(let j=i+1; j<digits.length; j++){
        if(digits[max]<digits[j]){
          max = j;
        }
      }
      if(i !== max){
        let temp = digits[i];
        digits[i] = digits[max];
        digits[max] = temp;
      }
      newArr.push(digits[i]);
    }
    var result = Number(newArr.join(''));
    return result;
}