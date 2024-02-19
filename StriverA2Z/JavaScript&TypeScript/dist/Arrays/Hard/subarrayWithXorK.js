function subarrayWithXorK(arr, target) {
    let xr = 0;
    const mpp = {};
    mpp[0] = 1;
    let cnt = 0;
    for (let i of arr) {
        xr ^= i;
        let x = xr ^ target;
        if (mpp[x] !== undefined)
            cnt += mpp[x];
        mpp[xr] = (mpp[xr] + 1) || 1;
    }
    console.log(cnt);
}
subarrayWithXorK([4, 2, 2, 6, 4], 6);
