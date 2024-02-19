function optimal1(arr1, arr2) {
    let left = arr1.length - 1;
    let right = 0;
    while (left >= 0 && right < arr2.length) {
        if (arr1[left] > arr2[right]) {
            [arr1[left], arr2[right]] = [arr2[right], arr1[left]];
            left--;
            right++;
        }
        else
            break;
    }
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    console.log(arr1);
    console.log(arr2);
}
function optimal2(arr1, arr2) {
    let len = arr1.length + arr2.length;
    let gap = (len / 2) + Math.floor((len % 2));
    while (gap > 0) {
        let left = 0;
        let right = left + gap;
        while (right < (arr1.length + arr2.length)) {
            if (left < arr1.length && right >= arr1.length) {
                swapIfGreater(arr1, arr2, left, right - arr1.length);
            }
            else if (left >= arr1.length) {
                swapIfGreater(arr2, arr2, left - arr1.length, right - arr1.length);
            }
            else {
                swapIfGreater(arr1, arr1, left, right);
            }
            left++;
            right++;
        }
        if (gap === 1)
            break;
        gap = (gap / 2) + Math.floor((gap % 2));
    }
    console.log(arr1);
    console.log(arr2);
}
function swapIfGreater(arr1, arr2, ind1, ind2) {
    if (arr1[ind1] > arr2[ind2]) {
        [arr1[ind1], arr2[ind2]] = [arr2[ind2], arr1[ind1]];
    }
}
optimal1([1, 3, 5, 7], [0, 2, 6, 8, 9]);
optimal2([1, 3, 5, 7], [0, 2, 6, 8, 9]);
