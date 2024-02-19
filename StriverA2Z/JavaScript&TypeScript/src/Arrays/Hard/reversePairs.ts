function reversePairsMergeSort(arr: number[], low: number, high: number) {
	let cnt = 0;
	if (low === high) return cnt;
	let mid = Math.floor((low + high) / 2);
	cnt += reversePairsMergeSort(arr, low, mid);
	cnt += reversePairsMergeSort(arr, mid + 1, high);
	cnt += countPairs(arr, low, mid, high);
	reversePairsMerge(arr, low, mid, high);
	return cnt;
}

function countPairs(arr: number[], low: number, mid: number, high: number) {
	let cnt = 0;
	let right = mid + 1;
	for (let i = low; i <= mid; i++) {
		while (right <= high && arr[i] > 2 * arr[right]) right++;
		cnt += (right - (mid + 1));
	}
	return cnt;
}

function reversePairsMerge(arr: number[], low: number, mid: number, high: number) {
	let temp = [];
	let left = low;
	let right = mid + 1;
	while (left <= mid && right <= high) {
		if (arr[left] <= arr[right]) {
			temp.push(arr[left]);
			left++;
		} else {
			temp.push(arr[right]);
			right++;
		}
	}
	while (left <= mid) {
		temp.push(arr[left]);
		left++;
	}
	while (right <= high) {
		temp.push(arr[right]);
		right++;
	}
	for (let i = low; i <= high; i++) {
		arr[i] = temp[i - low];
	}
}

function reversePairs(arr: number[]) {
	const count = reversePairsMergeSort(arr, 0, arr.length - 1);
	console.log(count);
}

reversePairs([4, 1, 2, 3, 1])