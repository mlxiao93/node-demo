function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function selectionSort(arr) {
  var len = arr.length;
  var min;
  for (var i = 0; i < len - 1; i++) {
    min = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (i !== min) {
      swap(arr, i, min);
    }
  }
  return arr;
}

var arr = [];
for (var i = 0; i <= 10; i++) {
  arr.push(Math.ceil(Math.random() * (30 - 10) + 10));
}
console.log(arr);
selectionSort(arr);
console.log(arr);
