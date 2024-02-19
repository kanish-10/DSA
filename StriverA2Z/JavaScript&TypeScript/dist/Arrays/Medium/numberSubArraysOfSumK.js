function subarraySum(nums, k) {
    const mpp = new Map();
    mpp.set(0, 1);
    let presum = 0;
    let cnt = 0;
    for (let i = 0; i < nums.length; i++) {
        presum += nums[i];
        const remove = presum - k;
        cnt += mpp.get(remove) || 0;
        mpp.set(presum, (mpp.get(presum) || 0) + 1);
    }
    console.log(cnt);
}
subarraySum([1, 2, 3, -3, 1, 1, 1, 4, 2, -3], 3);
