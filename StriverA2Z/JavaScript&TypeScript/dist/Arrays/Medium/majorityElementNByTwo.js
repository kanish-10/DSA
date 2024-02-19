function majority(arr) {
    let el;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (count === 0) {
            count = 1;
            el = arr[i];
        }
        else if (arr[i] === el) {
            count++;
        }
        else if (arr[i] !== el) {
            count--;
        }
    }
    let cnt = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == el)
            cnt++;
    }
    if (cnt > arr.length / 2) {
        console.log(el);
    }
    else {
        console.log(-1);
    }
}
majority([2, 2, 3, 3, 1, 2, 2]);
