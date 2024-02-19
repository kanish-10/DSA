function mergeOverlappingSubintervals(arr: number[][]) {
	const ans: number[][] = [];
	arr.sort((a, b) => a[0] - b[0]);
	for (let i = 0; i < arr.length; i++) {
		if (ans.length === 0 || ans[ans.length - 1][1] < arr[i][0]) {
			ans.push(arr[i]);
		} else {
			ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], arr[i][1]);
		}
	}
	console.log(ans);
}

mergeOverlappingSubintervals([[1, 3], [2, 6], [8, 9], [9, 11], [8, 10], [2, 4], [15, 18], [16, 17]]);