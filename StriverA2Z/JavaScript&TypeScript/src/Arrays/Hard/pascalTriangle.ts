// This function returns a particular element of pascal triangle.
function nCr(row: number, col: number) {
	let res = 1;
	row--;
	col--;
	for (let i = 0; i < col; i++) {
		res = res * (row - i);
		res = res / (i + 1);
	}
	console.log(res);
}

// This function returns the n-th row of pascal triangle
function pascalRow(n: number) {
	const ans: number[] = [];
	ans.push(1);
	let res = 1;
	for (let i = 1; i < n; i++) {
		res = res * (n - i);
		res = res / i;
		ans.push(res);
	}
	console.log(ans);
	return ans;
}

function pascalTriangle(N: number) {
	const triangle: number[][] = [];
	for (let i = 1; i <= N; i++) {
		let temp = pascalRow(i);
		triangle.push(temp);
	}
}

nCr(5, 3);
pascalRow(5);
pascalTriangle(5);