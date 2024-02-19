// Selection Sort Algorithm
// Time Complexity: O(n^2)

function selectionSort(arr: number[]) {
  console.log("Unsorted Array :-");
  console.log(arr);
  for (let i = 0; i <= arr.length - 2; i++) {
    let min = i;
    for (let j = i; j <= arr.length - 1; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  console.log("Sorted Array :-");
  console.log(arr);
}

let arr1 = [13, 46, 24, 52, 20, 9];
selectionSort(arr1);
