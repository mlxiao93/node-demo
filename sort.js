function generateRandomArray(length) {
  length = length || 10;
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}

function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function insertionSort(arr) {
  var len = arr.length;
  for (var i = 1; i < len; i++) {
    //将arr[i] 插入到 arr[i - 1]、arr[i - 2]、arr[i - 3]...之中
    for (var j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
   var min = i;     //最小值的索引
   for (var j = i + 1; j < len; j++) {
     if (arr[j] < arr[min]) min = j;
   }
   swap(arr, i, min);
  }
  return arr;
}

function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr;
}


var arr = generateRandomArray();
console.log(arr);
console.log(bubbleSort(arr));

export default {};
