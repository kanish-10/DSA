import {arrayToBTLevelOrder, BTNode} from "./BinaryTreeOperations";

function zigZagTraversal(root: BTNode) {
	const result = [];
	if (root === null) return result;
	const q: BTNode[] = [root];
	let left = true;
	while (q.length > 0) {
		let size = q.length;
		let row = Array(size);
		for (let i = 0; i < size; i++) {
			let node = q.shift();
			if(node.data === null) break;
			let index = left ? i : (size - 1 - i);
			row[index] = node.data;
			if (node.left !== null) q.push(node.left);
			if (node.right !== null) q.push(node.right);
		}
		left = !left;
		result.push(row)
	}
	return result;
}

let root = arrayToBTLevelOrder([1,2,3,4,5,6,7,8,9,10,11,12]);
console.log(zigZagTraversal(root));