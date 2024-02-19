// Bubble Sort Algorithm
// Time Complexity: O(n^2) Worst Case and Average Case
//                  O(n) Best Case
function bubbleSort(arr) {
    console.log("Unsorted array :-");
    console.log(arr);
    for (let i = arr.length - 1; i >= 1; i--) {
        let didSwap = false;
        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                didSwap = true;
            }
        }
        if (!didSwap)
            break;
    }
    console.log("Sorted array :-");
    console.log(arr);
}
const arr2 = [13, 46, 24, 52, 20, 9];
bubbleSort(arr2);
