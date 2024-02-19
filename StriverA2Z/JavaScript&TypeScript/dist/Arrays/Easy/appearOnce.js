function findOnce(arr) {
    let xor = 0;
    for (let i of arr) {
        xor ^= i;
    }
    console.log("Element that appears once is ", xor);
}
const arr21 = [1, 2, 3, 4, 1, 2, 3];
findOnce(arr21);
