import {arrayToBTLevelOrder, BTNode} from "./BinaryTreeOperations";

function countNodes(root: BTNode) {
	if (root === null) return 0;
	let lh = leftHeight(root);
	let rh = rightHeight(root);
	if (lh === rh) return Math.pow(2,lh) - 1;
	return 1 + countNodes(root.left) + countNodes(root.right);
}

function leftHeight(node: BTNode) {
	let h = 0;
	while (node) {
		h++;
		node = node.left;
	}
	return h;
}

function rightHeight(node: BTNode) {
	let h = 0;
	while (node) {
		h++;
		node = node.right;
	}
	return h;
}

let root = arrayToBTLevelOrder([1,2,3,4,5,6,7,8,9]);
console.log(countNodes(root))