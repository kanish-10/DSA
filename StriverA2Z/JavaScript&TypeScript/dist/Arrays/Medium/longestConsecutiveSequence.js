function longestSequence(arr) {
    let longest = 1;
    let st = new Set();
    for (let i of arr) {
        st.add(i);
    }
    for (let i of st) {
        if (!st.has(i - 1)) {
            let cnt = 1;
            let x = i;
            while (st.has(x + 1)) {
                x++;
                cnt++;
            }
            longest = Math.max(cnt, longest);
        }
    }
    console.log("The longest consecutive number is ", longest);
}
longestSequence([100, 4, 200, 1, 3, 2]);
