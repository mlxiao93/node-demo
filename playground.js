var hammingDistance = function(x, y) {
  var z = x ^ y,
      distance = 0;
  while (z !== 0) {
    if (z % 2) distance++;
    z = Math.floor(z / 2);
  }
  return distance;
};

console.log(hammingDistance(1, 4));