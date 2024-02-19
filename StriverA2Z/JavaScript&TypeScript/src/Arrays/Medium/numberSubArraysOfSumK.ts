function subarraySum(nums: number[], k: number) {
  const mpp: Map<number, number> = new Map();
  mpp.set(0, 1);
  let presum: number = 0;
  let cnt: number = 0;

  for (let i = 0; i < nums.length; i++) {
    presum += nums[i];
    const remove: number = presum - k;
    cnt += mpp.get(remove) || 0;
    mpp.set(presum, (mpp.get(presum) || 0) + 1);
  }

  console.log(cnt);
}

subarraySum([1, 2, 3, -3, 1, 1, 1, 4, 2, -3], 3);
