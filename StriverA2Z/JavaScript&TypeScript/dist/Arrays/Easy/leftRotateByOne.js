function leftRotateByOne(arr) {
    let first = arr[0];
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = first;
    // print
    console.log(arr);
}
const arr10 = [1, 2, 3, 4, 5];
leftRotateByOne(arr10);
