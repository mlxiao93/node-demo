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

function shellSort(arr) {
  var len = arr.length;
  var h = Math.ceil(len / 3);
  while(h > 0) {
    //对间隔为h的元素进行插入排序
    for (var i = h; i < len; i++) {
      for (var j = i; j > 0; j -= h) {
        if (arr[j] < arr[j - h]) {
          swap(arr, j, j - h);
        }
      }
    }
    h = Math.floor(h / 3);
  }
  return arr;
}

var aux = []    //归并所需的辅助数组

//原地归并方法
//arr是一个low到mid和mid+1到high各自有序的数组，借助aux原地merge这个数组
function merge(arr, low, mid, high) {
  aux = [];
  var m = low,
      n = mid + 1;

  for (var k = low; k <= high; k++) {    //复制arr到aux
    aux[k] = arr[k];
  }

  for (var i = low; i <= high; i++) {    //归并aux到arr
    if (m > mid) {    //左边归并完成
      arr[i] = aux[n++];
    } else if (n > high) {  //右边归并完成
      arr[i] = aux[m++];
    } else if (aux[m] > aux[n]) {   //左边大于右边
      arr[i] = aux[n++];
    } else {       //右边大于左边
      arr[i] = aux[m++];
    }
  }
}

function mergeSort(arr, low, high) {
  if (low === undefined) low = 0;
  if (high === undefined) high = arr.length - 1;
  if (low >= high) return arr;
  var mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
  return arr;
}

//选择一个元素（哨兵）对数组切分，小的放前面，大的放后面（升序）
//返回切分后哨兵的索引
function partion(arr, low, high) {
  var i = low,
      j = high,
      k = low,    //切分前哨兵的索引
      ele = arr[k];

  while(true) {   //扫描左右，检查扫描是否结束
    while(true) {    //从左边开始扫描，找出比ele大的
      if(i > j) break;
      if (arr[i] > ele) break;
      i++;
    }
    while(true) {     //从右边开始扫描，找出比ele小的
      if(j < i) break;
      if (arr[j] < ele) break;
      j--;
    }
    if (i >= j) break;   //左边没找到比ele小的或者右边没找到比ele大的
    swap(arr, i, j); //交换左右找到的元素
  }
  k = i - 1;     //切分后哨兵的索引
  swap(arr, low, k);
  return k;
}

function quickSort(arr, low, high) {
  if (low === undefined) low = 0;
  if (high === undefined) high = arr.length - 1;

  if (low >= high) return arr;

  var mid =partion(arr, low, high);
  quickSort(arr, low, mid - 1);
  quickSort(arr, mid + 1, high);

  return arr;
}

var arr = generateRandomArray();
console.log(arr);
console.log(quickSort(arr));

export default {};
