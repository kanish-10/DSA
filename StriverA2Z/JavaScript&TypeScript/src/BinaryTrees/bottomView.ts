import {arrayToBTLevelOrder, BTNode} from "./BinaryTreeOperations";

function bottomView(root: BTNode) {
	let ans = [];
	if (root === null) return ans;
	let q: { node: BTNode, level: number }[] = [];
	let mpp: { [key: number]: number } = {};
	q.push({node: root, level: 0});
	while (q.length > 0) {
		let {node, level} = q.shift();
		mpp[level] = node.data;
		if (node.left) q.push({node: node.left, level: level - 1});
		if (node.right) q.push({node: node.right, level: level + 1});
	}
	const sortedKeys = Object.keys(mpp).sort((a, b) => Number(a) - Number(b));
	for (let i of sortedKeys) {
		ans.push(mpp[i]);
	}
	return ans;
}

let root = arrayToBTLevelOrder([1, 2, 3, 4, 5, 6, 7]);
console.log(bottomView(root));