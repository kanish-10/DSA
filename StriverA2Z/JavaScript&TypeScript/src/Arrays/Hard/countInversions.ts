function countInversionMergeSort(arr: number[], low: number, high: number) {
	let cnt = 0;
	if (low === high) return cnt;
	let mid = Math.floor((low + high) / 2);
	cnt += countInversionMergeSort(arr, low, mid);
	cnt += countInversionMergeSort(arr, mid + 1, high);
	cnt +=countInversionMerge(arr, low, mid, high);
	return cnt;
}

function countInversionMerge(arr: number[], low: number, mid: number, high: number) {
	let temp = [];
	let left = low;
	let right = mid + 1;
	let cnt = 0;
	while (left <= mid && right <= high) {
		if (arr[left] <= arr[right]) {
			temp.push(arr[left]);
			left++;
		} else {
			temp.push(arr[right]);
			cnt += (mid - left + 1)
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
	return cnt;
}

function countInversions(arr: number[]) {
	let count = countInversionMergeSort(arr, 0, arr.length - 1);
	console.log(count);
}

countInversions([4, 3, 2, 1]);