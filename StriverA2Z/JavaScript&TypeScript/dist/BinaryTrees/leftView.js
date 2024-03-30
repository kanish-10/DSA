"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTreeOperations_1 = require("./BinaryTreeOperations");
function leftView(root, level, ans) {
    if (root === null)
        return;
    if (level === ans.length)
        ans.push(root.data);
    leftView(root.left, level + 1, ans);
    leftView(root.right, level + 1, ans);
}
let root = (0, BinaryTreeOperations_1.arrayToBT)([1, 2, 3, 4, 5, 6, 7, 8]);
let ans = [];
leftView(root, 0, ans);
console.log(ans);
