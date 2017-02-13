function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function partion(arr, low, high) {
  var left = low,
      right = high,
      midVal = arr[low];

  while (true) {
    while (true) {
      if (left > right) break;
      if (arr[left] > midVal) break;
      left++;
    }
    while (true) {
      if (right < left) break;
      if (arr[right] < midVal) break;
      right--;
    }
    if (left >= right) break;
    swap(arr, left, right);
  }
  left--;
  swap(arr, low, left);
  return left;
}

function quickSort(arr, low, high) {
  if (low === undefined) low = 0;
  if (high === undefined) high = arr.length - 1;
  if (low >= high) return;
  var mid = partion(arr, low, high);
  quickSort(arr, low, mid - 1);
  quickSort(arr, mid + 1, high);
  return arr;
}

var arr = [];
for (var i = 0; i <= 10; i++) {
  arr.push(Math.ceil(Math.random() * (30 - 10) + 10));
}
console.log(arr);
quickSort(arr);
console.log(arr);
