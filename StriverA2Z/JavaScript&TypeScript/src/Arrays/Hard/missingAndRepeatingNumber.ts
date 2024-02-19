function optimalSumMethod(arr: number[]) {
	const n = arr.length;
	const nSum = Math.floor((n * (n + 1)) / 2);
	const nSum2 = Math.floor(n * (n + 1) * (2 * n + 1)) / 6;
	let sum = 0, sum2 = 0;
	for (let i of arr) {
		sum += i;
		sum2 += i * i;
	}
	let val1 = sum - nSum; // x - y
	let val2 = sum2 - nSum2;
	val2 /= val1; // x + y
	let rep = (val1 + val2) / 2;
	let miss = rep - val1;
	console.log(`Missing :- ${miss}`);
	console.log(`Repeating :- ${rep}`);
}

function optimalXorMethod(arr: number[]) {
	let xr = 0;
	for (let i = 0; i < arr.length; i++) {
		xr ^= arr[i];
		xr ^= (i + 1);
	}
	let bitNo = 0;
	while (true) {
		if ((xr & (1 << bitNo)) !== 0) {
			break;
		}
		bitNo++;
	}
	let zero = 0;
	let one = 0;
	for (let i = 0; i < arr.length; i++) {
		if ((arr[i] & (1 << bitNo)) !== 0) {
			one ^= arr[i];
		} else {
			zero ^= arr[i];
		}
		if (((i + 1) & (1 << bitNo)) !== 0) {
			one ^= (i + 1);
		} else {
			zero ^= (i + 1);
		}
	}

	let cnt = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === zero) cnt++;
	}

	if (cnt == 2) {
		console.log(`Missing :- ${one}`);
		console.log(`Repeating :- ${zero}`);
	} else {
		console.log(`Missing :- ${zero}`);
		console.log(`Repeating :- ${one}`);
	}
}

optimalXorMethod([4, 3, 5, 2, 1, 2]);

optimalSumMethod([4, 3, 6, 2, 1, 1]);