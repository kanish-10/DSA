import {arrayToBTLevelOrder, BTNode} from "./BinaryTreeOperations";

function isLeaf(node: BTNode) {
	return node.left === null && node.right === null;
}

function leftBoundary(root: BTNode, result: number[]) {
	let cur = root.left;
	while (cur) {
		if (!isLeaf(cur)) result.push(cur.data);
		if (cur.left) cur = cur.left; else cur = cur.right;
	}
}

function rightBoundary(root: BTNode, result: number[]) {
	let cur = root.right;
	const temp = []
	while (cur) {
		if (!isLeaf(cur)) temp.push(cur.data);
		if (cur.right) cur = cur.right; else cur = cur.left;
	}
	for (let i = temp.length - 1; i >= 0; i--) {
		result.push(temp[i]);
	}
}

function leafBoundary(root: BTNode, result: number[]) {
	if (isLeaf(root)) {
		result.push(root.data);
		return;
	}
	if (root.left) leafBoundary(root.left, result);
	if (root.right) leafBoundary(root.right, result);
}

function boundaryTraversal(root: BTNode) {
	let result = [];
	if (root === null) return result;
	if (!isLeaf(root)) result.push(root.data);
	leftBoundary(root, result);
	leafBoundary(root, result);
	rightBoundary(root, result);
	return result;
}

let root = arrayToBTLevelOrder([1,2,3,4,5,6,7]);
console.log(boundaryTraversal(root))