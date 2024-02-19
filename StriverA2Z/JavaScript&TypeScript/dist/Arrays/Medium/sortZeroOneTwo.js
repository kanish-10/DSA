function zeroOneTwo(arr) {
    let low = 0, mid = 0, high = arr.length - 1;
    while (mid <= high) {
        if (arr[mid] === 0) {
            //swap
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        }
        else if (arr[mid] === 1) {
            mid++;
        }
        else {
            //swap
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
    console.log(arr);
}
zeroOneTwo([0, 1, 2, 1, 0, 1, 2, 1, 0, 0, 0, 2, 2, 2, 1, 1, 0]);
