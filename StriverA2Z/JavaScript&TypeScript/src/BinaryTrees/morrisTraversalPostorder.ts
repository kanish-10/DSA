import {arrayToBTLevelOrder, BTNode} from "./BinaryTreeOperations";

function getPostorder(root: BTNode) {
	const postorder = [];
	let cur = root;
	while (cur) {
		if (!cur.right) {
			postorder.push(cur.data);
			cur = cur.left;
		} else {
			let prev = cur.right;
			while (prev.left && prev.left != cur) {
				prev = prev.left;
			}
			if (!prev.left) {
				prev.left = cur;
				postorder.push(cur.data);
				cur = cur.right;
			} else {
				prev.left = null;
				cur = cur.left;
			}
		}
	}
	postorder.reverse();
	console.log(postorder)
}

let root = arrayToBTLevelOrder([1,2,3,4,5,6,7,8])
getPostorder(root);