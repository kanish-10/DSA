function intersection(a: number[], b: number[]) {
	let i = 0;
	let j = 0;
	let intersection: number[] = [];

	while (i < a.length && j < b.length) {
		if (a[i] < b[j]) {
			i++;
		} else if (b[j] < a[i]) {
			j++;
		} else {
			intersection.push(a[i]);
			i++;
			j++;
		}
	}

	// printing
	console.log(intersection);
}

const arr17 = [1, 2, 3, 3, 4, 5];
const arr18 = [2, 3, 3, 5, 6, 7, 8];

intersection(arr17, arr18);
