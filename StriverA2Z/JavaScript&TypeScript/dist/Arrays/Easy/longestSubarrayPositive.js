function longestSubArrayPositive(arr, k) {
    let left = 0;
    let right = 0;
    let len = 0;
    let sum = arr[0];
    while (right < arr.length) {
        while (left <= right && sum > k) {
            sum -= arr[left];
            left++;
        }
        if (sum == k)
            len = Math.max(len, right - left + 1);
        right++;
        if (right < arr.length) {
            sum += arr[right];
        }
    }
    console.log("Longest subarray with sum k is ", len);
}
const arr22 = [4, 1, 1, 1, 2, 3, 5];
const k = 5;
longestSubArrayPositive(arr22, k);
