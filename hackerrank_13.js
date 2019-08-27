function printTree(n) {
  const list = Array(n + 1).fill(' ');

  for(let i = n-1; i > 0; i--) {
    list[i] = '#';
    console.log(list.join(''));
  }
}


printTree(4)
