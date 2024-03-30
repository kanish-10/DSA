import {arrayToBT, BTNode} from "./BinaryTreeOperations";

function rightView(root: BTNode, level: number, ans: number[]) {
	if (root === null) return;
	if (level === ans.length) ans.push(root.data);
	rightView(root.right, level + 1, ans);
	rightView(root.left, level + 1, ans);
}

let root = arrayToBT([1,2,3,4,5,6,7,8]);
let ans = [];
rightView(root, 0, ans);
console.log(ans)