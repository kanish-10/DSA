function maximumOne(arr) {
    let max = 0;
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            counter++;
            max = Math.max(counter, max);
        }
        else {
            counter = 0;
        }
    }
    console.log(`The consecutive number of 1 are ${max}`);
}
const arr20 = [1, 0, 1, 1, 1, 1, 1, 0, 1, 1];
maximumOne(arr20);
