import {BTNode} from "./BinaryTreeOperations";

function markParents(root: BTNode, parentTrack: Map<BTNode, BTNode>,  start: number) {
	let q = [];
	q.push(root);
	let node;
	while (q.length > 0) {
		let curr = q.shift();
		if (start === curr.data) node = curr;
		if (curr.left != null) {
			parentTrack.set(curr.left, curr);
			q.push(curr.left);
		}
		if (curr.right != null) {
			parentTrack.set(curr.right, curr);
			q.push(curr.right);
		}
	}
	return node;
}

function findMaximumDistance(parentTrack: Map<BTNode,BTNode>, target: BTNode) {
	let q = [];
	let visited = new Map();
	q.push(target);
	visited.set(target, true);
	let maxi = 0;
	while (q.length > 0) {
		let fl = false;
		let size = q.length;
		for (let i = 0; i < size; i++) {
			let node = q.shift();
			if (node.left && !visited.has(node.left)) {
				fl = true;
				q.push(node.left);
				visited.set(node.left, true);
			}
			if (node.right != null && !visited.has(node.right)) {
				fl = true;
				q.push(node.right);
				visited.set(node.right, true);
			}
			if (parentTrack.get(node) != null && !visited.has(parentTrack.get(node))) {
				fl = true;
				q.push(parentTrack.get(node));
				visited.set(parentTrack.get(node), true);
			}
		}
		if (fl) maxi++;
	}
	return maxi;
}

function burningTime(root: BTNode, start: number) {
	let parentTrack = new Map();
	let target = markParents(root, parentTrack, start);
	return findMaximumDistance(parentTrack, target);
}

let root = new BTNode(1);
root.left = new BTNode(2);
root.right = new BTNode(3);
root.left.left = new BTNode(4);
root.left.left.right = new BTNode(7);
root.right.left = new BTNode(5);
root.right.right = new BTNode(6);

console.log(burningTime(root, 2))