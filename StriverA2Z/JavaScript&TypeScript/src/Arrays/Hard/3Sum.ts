function threeSum(arr: number[]) {
	let ans: number[][] =[];
	arr.sort((a, b) => a - b);
	for (let i = 0; i < arr.length; i++) {
		if (i > 0 && arr[i] === arr[i - 1]) continue;
		let j = i + 1;
		let k = arr.length - 1;
		while (j < k) {
			let sum = arr[i] + arr[j] + arr[k];
			if (sum < 0) {
				j++;
			} else if (sum > 0) {
				k--;
			} else {
				let temp = [arr[i], arr[j], arr[k]];
				ans.push(temp);
				j++;
				k--;
				while (j < k && arr[j] === arr[j - 1]) j++;
				while (j < k && arr[k] === arr[k + 1]) k--;
			}
		}
	}
	console.log(ans);
}

threeSum([-1, -1, 2, 0, 1])