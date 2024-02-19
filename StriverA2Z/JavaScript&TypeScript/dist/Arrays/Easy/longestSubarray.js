function longestSubarrayForAll(arr, target) {
    let presumMap = new Map();
    let sum = 0;
    let length = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum === target) {
            length = Math.max(length, i + 1);
        }
        let remaining = sum - target;
        if (presumMap.has(remaining)) {
            let len = i - presumMap.get(remaining);
            length = Math.max(len, length);
        }
        if (!presumMap.has(sum)) {
            presumMap.set(sum, i);
        }
    }
    console.log("the longest subarray is: ", length);
}
const arr23 = [-50, 0, 52];
const k1 = 2;
longestSubarrayForAll(arr23, k1);
