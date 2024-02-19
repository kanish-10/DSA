function equal(arr: number[]) {
	let pos = 0;
	let neg = 1;
	let ans: number[] = []
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= 0) {
			ans[pos] = arr[i];
			pos += 2;
		} else {
			ans[neg] = arr[i];
			neg += 2;
		}
	}
	console.log(ans);
}

function unequal(arr: number[]) {
	let pos: number[] = [];
	let neg: number[] = [];

	for (let i of arr) {
		if (i >= 0) {
			pos.push(i);
		} else {
			neg.push(i);
		}
	}

	if (pos.length > neg.length) {
		for (let i = 0; i < neg.length; i++) {
			arr[2 * i] = pos[i];
			arr[2 * i + 1] = neg[i];
		}
		let index = neg.length * 2;
		for (let i = neg.length; i < pos.length; i++) {
			arr[index++] = pos[i];
		}
	} else {
		for (let i = 0; i < pos.length; i++) {
			arr[2 * i] = pos[i];
			arr[2 * i + 1] = neg[i]
		}
		let index = pos.length * 2;
		for (let i = pos.length; i < neg.length; i++) {
			arr[index++] = neg[i];
		}
	}
	console.log(arr);
}

equal([3, 1, -2, -5, 2, -4]);
unequal([-1, 2, 3, -4, -3, -1]);
