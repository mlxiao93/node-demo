function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function shellSort(arr) {
  var len = arr.length;
  var step = Math.floor(len / 3);
  while(step > 0) {
    for (var i = step; i < len; i++) {
      for (var j = i; j >= step; j -= step) {
        if (arr[j] < arr[j - step]) swap(arr, j, j - step);
      }
    }
    step = Math.floor(step / 3);
  }
}

var arr = [];
for (var i = 0; i <= 10; i++) {
  arr.push(Math.ceil(Math.random() * (30 - 10) + 10));
}
console.log(arr);
shellSort(arr);
console.log(arr);
