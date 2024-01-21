//-----------
//PROBLEM:
//-----------

// Finish the solution so that it sorts the passed in array of numbers. 
// If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

//-----------
//SOLUTION:
//----------

function solution(nums){
    //Selection Sort algorithm is used.
    let newArr = [];
    if(nums === null){
      return [];
    }
    for(let i=0; i<nums.length; i++){
      let min = i;
      for(let j=i+1; j<nums.length; j++){
        if(nums[min]>nums[j]){
          min = j;
        }
      }
      if(min !== i){
        let temp = nums[i];
        nums[i] = nums[min];
        nums[min] = temp;
      }
       newArr.push(nums[i]);
    }
    return newArr;
}