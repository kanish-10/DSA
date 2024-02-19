function fourSum(arr, target) {
    arr.sort((a, b) => a - b);
    const ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] === arr[i - 1])
            continue;
        for (let j = i + 1; j < arr.length; j++) {
            if (j !== i + 1 && arr[j] === arr[j - 1])
                continue;
            let k = j + 1;
            let l = arr.length - 1;
            while (k < l) {
                let sum = arr[i];
                sum += arr[j];
                sum += arr[k];
                sum += arr[l];
                if (sum === target) {
                    let temp = [arr[i], arr[j], arr[k], arr[l]];
                    ans.push(temp);
                    k++;
                    l--;
                    while (k < l && arr[k] === arr[k - 1])
                        k++;
                    while (k < l && arr[l] === arr[l + 1])
                        l--;
                }
                else if (sum < target)
                    k++;
                else
                    l--;
            }
        }
    }
    console.log(ans);
}
fourSum([1, 0, -1, 0, -2, 2], 0);
