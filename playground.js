function sum(a, b) {
  if (a === 0) return b;
  return sum((a & b) << 1, a ^ b);
}

console.log(sum(3, 19));
