import {arrayToBT, BTNode} from "./BinaryTreeOperations";

function leftView(root: BTNode, level: number, ans: number[]) {
	if (root === null) return;
	if (level === ans.length) ans.push(root.data);
	leftView(root.left, level + 1, ans);
	leftView(root.right, level + 1, ans);
}

let root = arrayToBT([1,2,3,4,5,6,7,8]);
let ans = [];
leftView(root, 0, ans);
console.log(ans)