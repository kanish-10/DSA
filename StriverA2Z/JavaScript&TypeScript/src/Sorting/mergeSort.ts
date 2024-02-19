// Merge Sort Algorithm

// Time Complexity: O(n log n)
// Space Complexity: O(n)

function mergeSort(arr: number[], low: number, high: number) {
  if (low === high) return;
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}

function merge(arr: number[], low: number, mid: number, high: number) {
  let temp = [];
  let left = low;
  let right = mid + 1;
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

let arr4 = [3, 1, 2, 4, 1, 5, 2, 6, 4];
console.log("Before Sorting: ", arr4);
mergeSort(arr4, 0, arr4.length - 1);
console.log("After Sorting: ", arr4);
