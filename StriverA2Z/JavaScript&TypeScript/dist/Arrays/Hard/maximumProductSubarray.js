function maximumProductSubarray(arr) {
    let pre = 1;
    let suff = 1;
    let product = Number.MIN_SAFE_INTEGER;
    console.log(product);
    for (let i = 0; i < arr.length; i++) {
        if (pre === 0)
            pre = 1;
        if (suff === 0)
            suff = 1;
        pre *= arr[i];
        suff *= arr[arr.length - i - 1];
        product = Math.max(product, Math.max(pre, suff));
    }
    console.log(product);
}
maximumProductSubarray([2, 3, -2, 4]);
