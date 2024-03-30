import {arrayToBTLevelOrder, BTNode} from "./BinaryTreeOperations";

function getInorder(root: BTNode) {
	const inorder = [];
	let cur = root;
	while (cur) {
		if (!cur.left) {
			inorder.push(cur.data);
			cur = cur.right;
		} else {
			let prev = cur.left;
			while (prev.right && prev.right != cur) {
				prev = prev.right;
			}
			if (!prev.right) {
				prev.right = cur;
				cur = cur.left;
			} else {
				prev.right = null;
				inorder.push(cur.data);
				cur = cur.right;
			}
		}
	}
	console.log(inorder)
}

let root = arrayToBTLevelOrder([1,2,3,4,5,6,7,8])
getInorder(root);