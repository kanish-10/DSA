function largestSubarrayWithZeroSum(arr) {
    const mpp = {};
    let sum = 0;
    let maxi = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum === 0) {
            maxi = i + 1;
        }
        else {
            if (mpp[sum] !== undefined) {
                maxi = Math.max(maxi, i - mpp[sum]);
            }
            else {
                mpp[sum] = i;
            }
        }
    }
    console.log(maxi);
}
largestSubarrayWithZeroSum([1, -1, 0, 0, 2]);
