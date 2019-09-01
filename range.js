function range(start, len) {
  return new Array(len).fill().map((_, i) => start + i);
};

// Example:
range(-5, 10);
// returns [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4]
