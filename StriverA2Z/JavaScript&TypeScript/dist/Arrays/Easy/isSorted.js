function isSorted(arr) {
    let flag = false;
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] <= arr[i + 1]) {
        }
        else {
            flag = true;
            break;
        }
    }
    if (flag) {
        console.log("The array is not sorted");
    }
    else {
        console.log("The array is sorted");
    }
}
const arr8 = [1, 2, 2, 3, 3, 4, 5, 6];
isSorted(arr8);
