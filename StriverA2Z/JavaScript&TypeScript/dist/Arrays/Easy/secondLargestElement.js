function secondLargest(arr) {
    let sLargest = arr[0];
    let largest = arr[0];
    for (let x of arr) {
        if (x > largest) {
            sLargest = largest;
            largest = x;
        }
        if (x < largest && x > sLargest) {
            sLargest = x;
        }
    }
    console.log(`Second largest element in array is: ${sLargest}`);
}
const arr7 = [1, 24, 72, 7, 7, 3];
secondLargest(arr7);
