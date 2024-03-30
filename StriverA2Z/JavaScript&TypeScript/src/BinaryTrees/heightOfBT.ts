import {arrayToBTLevelOrder, BTNode} from "./BinaryTreeOperations";

function heightOfBT(root: BTNode) {
	if (root === null) return 0;
	const l = heightOfBT(root.left);
	const r = heightOfBT(root.right);
	return 1 + Math.max(l, r);
}

let root = arrayToBTLevelOrder([1,2,3,4,5,6,7,8,9,10,11]);
console.log(heightOfBT(root));