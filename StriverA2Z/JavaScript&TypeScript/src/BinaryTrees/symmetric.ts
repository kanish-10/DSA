import {arrayToBTLevelOrder, BTNode} from "./BinaryTreeOperations";

function symmetric(left: BTNode, right: BTNode) {
	if (left === null || right === null) return left === right;
	if (left.data != right.data) return false;
	return symmetric(left.left, right.right) && symmetric(left.right, right.left);
}

function isSymmetric(root: BTNode) {
	return root === null || symmetric(root.left, root.right);
}

let root = arrayToBTLevelOrder([1,2,3,3,4,4,3]);
console.log(isSymmetric(root));
