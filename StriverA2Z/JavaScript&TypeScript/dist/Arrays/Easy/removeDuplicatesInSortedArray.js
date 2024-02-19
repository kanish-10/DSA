function removeDuplicates(arr) {
    let i = 0; // here i is for sorted arr.length
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] != arr[j]) {
            arr[i + 1] = arr[j];
            i++;
        }
    }
    i++;
    // printing only the sorted array
    for (let x = 0; x < i; x++) {
        console.log(arr[x]);
    }
}
let arr9 = [1, 1, 2, 2, 2, 3, 3, 3];
removeDuplicates(arr9);
