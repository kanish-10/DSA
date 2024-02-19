function rightRotate(arr, rotate) {
    rotate = rotate % arr.length;
    reverseRight(arr, arr.length - rotate, arr.length - 1);
    reverseRight(arr, 0, arr.length - rotate - 1);
    reverseRight(arr, 0, arr.length - 1);
    // printing
    console.log(arr);
}
function reverseRight(arr, start, end) {
    while (start <= end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
const arr13 = [1, 2, 3, 4, 5, 6, 7];
rightRotate(arr13, 3);
