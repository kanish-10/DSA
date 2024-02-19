function fibMem(n, arr) {
    if (n <= 1)
        return n;
    if (arr[n])
        return arr[n];
    arr[n] = fibMem(n - 1, arr) + fibMem(n - 2, arr);
    return arr[n];
}
function fibTab(n) {
    const arr = [];
    arr[0] = 0;
    arr[1] = 1;
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
}
function fib(n) {
    let prev = 1;
    let prev2 = 0;
    for (let i = 2; i <= n; i++) {
        let curr = prev + prev2;
        prev2 = prev;
        prev = curr;
    }
    return prev;
}
{
    const arr = [];
    console.log(fibMem(5, arr));
    console.log(fibTab(5));
    console.log(fib(5));
}
