function missingNumber(arr, N) {
    // XOR method
    let xor1 = 0;
    let xor2 = 0;
    let n = N - 1;
    for (let i = 0; i < n; i++) {
        xor1 ^= i + 1;
        xor2 ^= arr[i];
    }
    xor1 ^= N;
    console.log("Missing number is ", xor1 ^ xor2);
    // SUM method
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }
    let sum2 = (N * (N + 1)) / 2;
    console.log("Missing number is ", sum2 - sum);
}
const arr19 = [1, 2, 3, 4, 5, 6, 8, 9];
const N = arr19.length + 1;
missingNumber(arr19, N);
