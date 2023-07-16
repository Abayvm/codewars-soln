// DESCRIPTION:
// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

//SOLUTION:
function opposite(number) {
    let num = number.toString();
    
    if (num.charAt(0) == "-"){
      return Number(num.replace("-",""));
    }
    else{
      return Number("-"+number);
    }
}