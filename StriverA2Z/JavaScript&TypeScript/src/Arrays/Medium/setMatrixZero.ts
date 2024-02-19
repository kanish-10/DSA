function setZeroes(matrix: number[][]): void {
	let col0 = 1;
	let n = matrix.length;
	let m = matrix[0].length;
	printMatrixHere(matrix);

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (matrix[i][j] === 0) {
				matrix[i][0] = 0;
				if (j !== 0) matrix[0][j] = 0; else col0 = 0;
			}
		}
	}

	for (let i = 1; i < n; i++) {
		for (let j = 1; j < m; j++) {
			if (matrix[i][j] !== 0) {
				if (matrix[i][0] === 0 || matrix[0][j] === 0) {
					matrix[i][j] = 0;
				}
			}
		}
	}

	if (matrix[0][0] === 0) {
		for (let j = 0; j < m; j++) {
			matrix[0][j] = 0;
		}
	}

	if (col0 === 0) {
		for (let i = 0; i < n; i++) {
			matrix[i][0] = 0;
		}
	}

	printMatrixHere(matrix)
}

function printMatrixHere(matrix: number[][]): void {
	let str = "";
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			str += matrix[i][j] + " ";
		}
		str += "\n";
	}
	console.log(str);
}

setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]);
