// Quick Sort Algorithm
// Time Complexity: O(n log n) - Average Case, Best Case
//                  O(n^2) - Worst Case
// Space Complexity: O(1)
function quickSort(arr, low, high) {
    if (low < high) {
        let partitionIndex = partition(arr, low, high);
        quickSort(arr, low, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, high);
    }
}
function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;
    while (i < j) {
        while (arr[i] <= pivot && i <= high) {
            i++;
        }
        while (arr[j] > pivot && j >= low) {
            j--;
        }
        if (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;
    return j;
}
let arr5 = [4, 6, 2, 5, 7, 9, 1, 3];
console.log("Before Sorting: ", arr5);
quickSort(arr5, 0, arr5.length - 1);
console.log("After Sorting: ", arr5);
