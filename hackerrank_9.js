let arr = [1, 2, 3, 3, 4, 5, 5, 5];

// number of largest digits

function findBiggest(candles) {
  let highestCandle = Math.max(...arr);
  let blowOutCandles = candles.filter(x => x === highestCandle).length;

  return blowOutCandles;
}

findBiggest(arr);
