function reverse(arr, start, end) {
    while (start <= end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
function reverseMatrixBy90Degree(matrix) {
    printMatrix(matrix);
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix[0].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for (let i of matrix) {
        reverse(i, 0, i.length - 1);
    }
    printMatrix(matrix);
}
// @ts-ignore
function printMatrix(matrix) {
    for (let i of matrix) {
        console.log(i);
    }
    console.log(" ");
}
reverseMatrixBy90Degree([[1, 2, 3], [4, 5, 6], [7, 8, 9],]);
