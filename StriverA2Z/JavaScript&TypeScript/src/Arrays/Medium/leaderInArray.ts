function leader(arr: number[]) {
	let ans: number[];
	let max = Number.MIN_SAFE_INTEGER;
	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] < max) ans.push(arr[i]);
		max = Math.max(max, arr[i]);
	}
	console.log(ans);
}

leader([7, 10, 4, 10, 6, 5, 2]);
