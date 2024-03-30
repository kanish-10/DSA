"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTreeOperations_1 = require("./BinaryTreeOperations");
function getPath(root, a, b) {
    if (root === null)
        return Number.MIN_SAFE_INTEGER;
    if (root.data === a)
        return a;
    if (root.data === b)
        return b;
    let left = getPath(root.left, a, b);
    let right = getPath(root.right, a, b);
    if (left !== Number.MIN_SAFE_INTEGER && right !== Number.MIN_SAFE_INTEGER)
        return root.data;
    return Math.max(left, right);
}
function lca(root, a, b) {
    if (root === null || root === a || root === b)
        return root;
    let left = lca(root.left, a, b);
    let right = lca(root.right, a, b);
    if (left === null)
        return right;
    else if (right === null)
        return left;
    else
        return root;
}
let root = (0, BinaryTreeOperations_1.arrayToBTLevelOrder)([1, 2, 3, 4, 5, 6, 7, 8]);
console.log((getPath(root, 1, 7)));
