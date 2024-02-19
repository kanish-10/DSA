function stock(arr) {
    let profit = 0;
    let min = arr[0];
    for (let i of arr) {
        let cost = i - min;
        profit = Math.max(profit, cost);
        min = Math.min(i, min);
    }
    console.log(profit);
}
stock([7, 1, 5, 3, 6, 4]);
