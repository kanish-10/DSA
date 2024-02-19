function climbStairsRecursive(n) {
    if (n == 0)
        return 1;
    if (n == 1)
        return 1;
    let left = climbStairsRecursive(n - 1);
    let right = climbStairsRecursive(n - 2);
    return left + right;
}
function climbStairs(n) {
    let prev = 1;
    let prev2 = 0;
    for (let i = 2; i <= n + 1; i++) {
        let curr = prev + prev2;
        prev2 = prev;
        prev = curr;
    }
    return prev;
}
{
    console.log(climbStairs(5));
    console.log(climbStairsRecursive(5));
}
