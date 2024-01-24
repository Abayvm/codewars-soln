//-----------
//PROBLEM:
//-----------

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//-----------
//SOLUTION:
//----------

function removeUrlAnchor(url){
    // TODO: complete
    let newUrl = [];
    let theUrl = url.split('');
    for(let i=0; i<theUrl.length; i++){
      if(theUrl[i] !== '#'){
        newUrl.push(theUrl[i])
      }else if(theUrl[i] === '#'){
        return newUrl.join('');
      }
    }
    return newUrl.join('');
}