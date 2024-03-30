"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTreeOperations_1 = require("./BinaryTreeOperations");
function symmetric(left, right) {
    if (left === null || right === null)
        return left === right;
    if (left.data != right.data)
        return false;
    return symmetric(left.left, right.right) && symmetric(left.right, right.left);
}
function isSymmetric(root) {
    return root === null || symmetric(root.left, root.right);
}
let root = (0, BinaryTreeOperations_1.arrayToBTLevelOrder)([1, 2, 3, 3, 4, 4, 3]);
console.log(isSymmetric(root));
