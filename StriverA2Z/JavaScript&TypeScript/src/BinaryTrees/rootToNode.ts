import {arrayToBTLevelOrder, BTNode} from "./BinaryTreeOperations";

function getPath(root: BTNode, x: number, arr: number[]) {
	if (root === null) return false;
	arr.push(root.data);
	if (root.data === x) return true;
	if (getPath(root.left, x, arr) || getPath(root.right, x, arr)) return true;
	arr.pop();
	return false;
}

function solve(root: BTNode, x: number) {
	let arr: number[] = [];
	if (root === null) return arr;
	getPath(root, x, arr);
	return arr;
}

let root = arrayToBTLevelOrder([1,2,3,4,5,6,7]);
console.log(solve(root, 7));