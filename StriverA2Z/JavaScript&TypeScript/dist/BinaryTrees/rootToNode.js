"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTreeOperations_1 = require("./BinaryTreeOperations");
function getPath(root, x, arr) {
    if (root === null)
        return false;
    arr.push(root.data);
    if (root.data === x)
        return true;
    if (getPath(root.left, x, arr) || getPath(root.right, x, arr))
        return true;
    arr.pop();
    return false;
}
function solve(root, x) {
    let arr = [];
    if (root === null)
        return arr;
    getPath(root, x, arr);
    return arr;
}
let root = (0, BinaryTreeOperations_1.arrayToBTLevelOrder)([1, 2, 3, 4, 5, 6, 7]);
console.log(solve(root, 7));
