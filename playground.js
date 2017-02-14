function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function maxHeapify(arr, top, last) {
  if (top >= last) return;
  var lchild = top * 2 + 1,
      rchild = top * 2 + 2;
  maxHeapify(arr, lchild, last);
  maxHeapify(arr, rchild, last);

  var max = top;
  if (lchild <= last && arr[lchild] > arr[max]) max = lchild;
  if (rchild <= last && arr[rchild] > arr[max]) max = rchild;
  if (max !== top) swap(arr, max, top);
}

function heapSort(arr) {
  var len = arr.length;
  for (var last = len - 1; last > 0; last--) {
    maxHeapify(arr, 0, last);
    swap(arr, 0, last);
  }
  return arr;
}

var arr = [];
for (var i = 0; i <= 10; i++) {
  arr.push(Math.ceil(Math.random() * (30 - 10) + 10));
}
console.log(arr);
heapSort(arr);
console.log(arr);
