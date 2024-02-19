function majorityNBy3(arr: number[]) {
	let cnt1 = 0, cnt2 = 0, el1, el2;
	for (let i of arr) {
		if (cnt1 === 0 && el2 !== i) {
			cnt1 = 1;
			el1 = i;
		} else if (cnt2 === 0 && el1 !== i) {
			cnt2 = 1;
			el2 = i;
		} else if (el1 === i) {
			cnt1++;
		} else if (el2 === i) {
			cnt2++;
		} else {
			cnt1--;
			cnt2--;
		}
	}

	cnt1 = 0;
	cnt2 = 0;

	const ls: number[] = [];
	for (let i of arr) {
		if (i === el1) cnt1++;
		if (i === el2) cnt2++;
	}

	const min = Math.floor(arr.length / 3) + 1;
	if (cnt1 >= min) ls.push(el1);
	if (cnt2 >= min) ls.push(el2);
	console.log(ls);
}

majorityNBy3([2, 2, 1, 3, 1, 1, 3, 1, 1])