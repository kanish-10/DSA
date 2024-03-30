import {BTNode, inorderTraversal, postorderTraversal} from "./BinaryTreeOperations";

function buildTreeUsingInorderAndPreorder(postorder: number[], inorder: number[]) {
	let inMap = {};
	for (let i = 0; i < inorder.length; i++) {
		inMap = {...inMap, [inorder[i]]: i}
	}
	let root = buildTree(postorder, 0, postorder.length - 1, inorder, 0, inorder.length - 1, inMap)
	return root
}

function buildTree(postorder: number[], postStart: number, postEnd: number, inorder: number[], inStart: number, inEnd: number, inMap: {}) {
	if (postStart > postEnd || inStart > inEnd) return null;
	let root = new BTNode(postorder[postEnd]);
	let inRoot = inMap[root.data];
	let number = inRoot - inStart;
	root.left = buildTree(postorder, postStart, postStart + number - 1, inorder, inStart, inRoot - 1, inMap);
	root.right = buildTree(postorder, postStart + number, postEnd - 1, inorder, inRoot + 1, inEnd, inMap);
	return root;
}

let root = buildTreeUsingInorderAndPreorder([40, 50, 20, 60, 30, 10], [40, 20, 50, 10, 60, 30]);
inorderTraversal(root);
postorderTraversal(root);