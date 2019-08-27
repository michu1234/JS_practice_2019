// Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.


let arr = [1,2,3,4,5,6];

function aVeryBigSum(ar) {
  return ar.reduce((a, b) => {
    return a + b;
  }, 0);
}


aVeryBigSum(arr) /*?*/
