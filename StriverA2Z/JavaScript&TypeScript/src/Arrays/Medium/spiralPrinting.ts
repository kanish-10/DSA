function spiralPrinting(matrix: number[][]) {
  let n = matrix.length;
  let m = matrix[0].length;

  let left = 0;
  let top = 0;
  let right = m - 1;
  let bottom = n - 1;

  const ans = [];

  for (let i of matrix) {
    console.log(i);
  }

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      ans.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      ans.push(matrix[i][right]);
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        ans.push(matrix[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        ans.push(matrix[i][left]);
      }
      left++;
    }
  }

  console.log(ans);
}

spiralPrinting([
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
]); // [1,2,3,6,9,8,7,4,5]
