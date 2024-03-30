import {arrayToBTLevelOrder, BTNode} from "./BinaryTreeOperations";

function pathsum(root: BTNode) {
	const sum = [Number.MIN_SAFE_INTEGER];
	height(root, sum);
	return sum[0];
}

function height(root: BTNode, sum: number[]) {
	if (root === null) return 0;
	const left = Math.max(0, height(root.left, sum));
	const right = Math.max(0, height(root.right, sum));
	sum[0] = Math.max(sum[0], left + right + root.data);
	return root.data + Math.max(left, right);
}

let root = arrayToBTLevelOrder([10,20,30,40,50,60,70]);
console.log(pathsum(root));
