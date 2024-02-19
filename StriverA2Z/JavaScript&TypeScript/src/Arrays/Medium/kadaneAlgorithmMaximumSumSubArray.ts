function maxSubArray(arr: number[]): number {
	let sum = 0;
	let max = Number.MIN_SAFE_INTEGER;
	let start = 0;
	let ansEnd = -1, ansStart = -1;
	for (let i = 0; i < arr.length; i++) {
		if (sum == 0) start = i;
		sum += arr[i];
		if (sum > max) {
			max = sum;
			ansStart = start;
			ansEnd = i;
		}
		if (sum < 0) {
			sum = 0;
		}
	}

	for (let i = ansStart; i <= ansEnd; i++) {
		console.log(arr[i], " ");
	}
	return max;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
