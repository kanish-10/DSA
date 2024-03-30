import {arrayToBTLevelOrder, BTNode} from "./BinaryTreeOperations";

function getPreorder(root: BTNode) {
	const preorder = [];
	let cur = root;
	while (cur) {
		if (!cur.left) {
			preorder.push(cur.data);
			cur = cur.right;
		} else {
			let prev = cur.left;
			while (prev.right && prev.right != cur) {
				prev = prev.right;
			}
			if (!prev.right) {
				prev.right = cur;
				preorder.push(cur.data);
				cur = cur.left;
			} else {
				prev.right = null;
				cur = cur.right;
			}
		}
	}
	console.log(preorder)
}

let root = arrayToBTLevelOrder([1,2,3,4,5,6,7,8])
getPreorder(root);