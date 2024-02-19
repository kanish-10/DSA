function rightRotateByOne(arr) {
    let last = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0; i--) {
        arr[i + 1] = arr[i];
    }
    arr[0] = last;
    // printing
    console.log(arr);
}
const arr11 = [1, 2, 3, 4, 5];
rightRotateByOne(arr11);
