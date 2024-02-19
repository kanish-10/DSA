function twoSumVarientOne(arr: number[], target: number) {
	let flag = true;
	let mpp: Map<number, number> = new Map();
	for (let i = 0; i < arr.length; i++) {
		let rem = target - arr[i];
		if (mpp.has(rem)) {
			flag = false;
			console.log(`[${mpp.get(rem)},${i}]`)
			break;
		}
		mpp.set(arr[i], i);
	}
	if (flag) console.log("[-1,-1]")
}

twoSumVarientOne([2, 6, 5, 8, 11], 14);

function twoSumVarientTwo(arr: number[], target: number) {
	let i = 0;
	let j = arr.length - 1;
	let flag = true;
	while (i < j) {
		let sum = arr[i] + arr[j];
		if (sum === target) {
			console.log("YES");
			flag = false;
			break;
		} else if (sum > target) {
			j--;
		} else {
			i++;
		}
	}
	if (flag) console.log("NO");
}

twoSumVarientTwo([2, 6, 5, 8, 11], 14);
