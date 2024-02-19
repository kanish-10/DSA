// O(n)

function largestElement(arr: number[]) {
    let largest = arr[0];
    for (let x of arr) {
        if (x > largest) {
            largest = x;
        }
    }
    console.log(`Largest element is: ${largest}`)
}

const arr6 = [3, 2, 1, 5, 1, 2];
largestElement(arr6);
