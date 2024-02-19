function unionArray(arr1: number[], arr2: number[]) {
	let i = 0;
	let j = 0;
	let unionArr: number[] = [];
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] <= arr2[j]) {
			if (unionArr.length === 0 || unionArr[unionArr.length - 1] !== arr1[i]) {
				unionArr.push(arr1[i]);
			}
			i++;
		} else {
			if (unionArr.length === 0 || unionArr[unionArr.length - 1] !== arr2[j]) {
				unionArr.push(arr2[j]);
			}
			j++;
		}
	}
	while (i < arr1.length) {
		if (unionArr[unionArr.length - 1] !== arr1[i]) {
			unionArr.push(arr1[i]);
		}
		i++;
	}

	while (j < arr2.length) {
		if (unionArr[unionArr.length - 1] !== arr2[j]) {
			unionArr.push(arr2[j]);
		}
		j++;
	}

	console.log(unionArr);
}

const arr15 = [1, 1, 2, 2, 3, 4, 5];
const arr16 = [2, 2, 3, 4, 4, 5, 6, 7];

unionArray(arr15, arr16);
