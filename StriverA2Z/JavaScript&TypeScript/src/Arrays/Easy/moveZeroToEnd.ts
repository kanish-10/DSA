function moveZero(arr: number[]) {
	let j = -1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			j = i;
			break;
		}
	}

	if (j === -1) {
		console.log(arr);
		return;
	}

	for (let i = j + 1; i < arr.length; i++) {
		if (arr[i] !== 0) {
			//swapping
			[arr[i], arr[j]] = [arr[j], arr[i]];
			j++;
		}
	}

	// printing
	console.log(arr);
}

const arr14 = [1, 2, 0, 0, 0, 0, 4, 3, 0, 5, 0, 0, 0];
moveZero(arr14);
