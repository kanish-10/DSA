import {arrayToBTLevelOrder, BTNode} from "./BinaryTreeOperations";

function checkBalancedTree(root: BTNode) {
	return heightCheck(root) !== -1;
}

function heightCheck(root: BTNode) {
	if (root === null) return 0;
	let l = heightCheck(root.left);
	if (l === -1) return -1;
	let r = heightCheck(root.right);
	if (r === -1) return -1;

	if (Math.abs(l - r) > 1) return -1;
	return Math.max(l, r) + 1;
}

let root = arrayToBTLevelOrder([1,2,3,4,5,6]);
// let root = new BTNode(1);
// root.left = new BTNode(2);
// root.right = new BTNode(3);
// root.left.left = new BTNode(4);
// root.left.left.left = new BTNode(5);

console.log(checkBalancedTree(root));