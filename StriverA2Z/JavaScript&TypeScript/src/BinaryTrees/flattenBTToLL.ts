import {BTNode} from "./BinaryTreeOperations";

function flatten(root: BTNode | null): void {
	let cur = root;
	while (cur) {
		if (cur.left) {
			let prev = cur.left;
			while (prev.right) prev = prev.right;
			prev.right = cur.right;
			cur.right = cur.left;
			cur.left = null;
		}
		cur = cur.right;
	}
}