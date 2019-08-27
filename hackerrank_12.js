let list = [-2,1,2,3,3,4,0,0,0];

function plusMinus(arr) {
  let arrLength = arr.length;
  let positiveNumbers = arr.filter(x => {
    return x > 0;
  }).length 

  let negativeNumbers = arr.filter(x => {
    return x < 0
  }).length /*?*/

  let zeroNumbers = arr.filter(x => {
    return x === 0;
  }).length

  console.log((positiveNumbers/arrLength).toFixed(6));
  console.log((negativeNumbers/arrLength).toFixed(6));
  console.log((zeroNumbers/arrLength).toFixed(6))
}


plusMinus(list);
