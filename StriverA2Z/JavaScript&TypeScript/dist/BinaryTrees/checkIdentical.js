"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTreeOperations_1 = require("./BinaryTreeOperations");
function check(root1, root2) {
    if (!root1 || !root2)
        return root2 === root1;
    return (root1.data === root2.data) && (check(root1.left, root2.left)) && (check(root1.right, root2.right));
}
let root1 = (0, BinaryTreeOperations_1.arrayToBTLevelOrder)([1, 2, 3, 4]);
let root2 = (0, BinaryTreeOperations_1.arrayToBTLevelOrder)([1, 2, 3, 4]);
console.log(check(root1, root2));
