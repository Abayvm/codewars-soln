//DESCRIPTION:
// Given an array of integers, return a new array with each value doubled.

// For example:
// [1, 2, 3] --> [2, 4, 6]

//SOLUTION:
function maps(x){
    let newArray = [];
    for(var i=0; i<x.length; i++){
      newArray.push(x[i]*2);
    }
    return newArray;
}