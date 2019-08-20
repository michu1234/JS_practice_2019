// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  let fromMinToMax = arr.sort(function(a, b) {
    return a - b;
  });
  let minSum = fromMinToMax.slice(0, 4).reduce((a, b) => {
    return a + b;
  });
  let maxSum = fromMinToMax.slice(1, 5).reduce((a, b) => {
    return a + b;
  });

  console.log(minSum, maxSum);
}
