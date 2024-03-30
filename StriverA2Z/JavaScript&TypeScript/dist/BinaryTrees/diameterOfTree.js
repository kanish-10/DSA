"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTreeOperations_1 = require("./BinaryTreeOperations");
function height(root, diameter) {
    if (root === null)
        return 0;
    let l = height(root.left, diameter);
    let r = height(root.right, diameter);
    diameter[0] = Math.max(diameter[0], l + r);
    return 1 + Math.max(l, r);
}
let root = (0, BinaryTreeOperations_1.arrayToBTLevelOrder)([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const diameter = [0];
height(root, diameter);
console.log(diameter);
