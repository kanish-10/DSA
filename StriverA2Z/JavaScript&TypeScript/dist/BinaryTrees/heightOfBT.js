"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTreeOperations_1 = require("./BinaryTreeOperations");
function heightOfBT(root) {
    if (root === null)
        return 0;
    const l = heightOfBT(root.left);
    const r = heightOfBT(root.right);
    return 1 + Math.max(l, r);
}
let root = (0, BinaryTreeOperations_1.arrayToBTLevelOrder)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
console.log(heightOfBT(root));
