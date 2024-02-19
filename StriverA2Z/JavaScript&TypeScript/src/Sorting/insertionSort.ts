// Insertion Sort Algorithm

// Time Complexity: O(n^2) Worst Case and Average Case
//                  O(n) Best Case

function insertionSort(arr: number[]) {
  console.log("Unsorted array :-");
  console.log(arr);
  for (let i = 0; i <= arr.length - 1; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }
  console.log("Sorted array :-");
  console.log(arr);
}

const arr3 = [14, 9, 15, 12, 6, 8, 13];
insertionSort(arr3);
