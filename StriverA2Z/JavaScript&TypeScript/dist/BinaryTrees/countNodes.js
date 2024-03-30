"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTreeOperations_1 = require("./BinaryTreeOperations");
function countNodes(root) {
    if (root === null)
        return 0;
    let lh = leftHeight(root);
    let rh = rightHeight(root);
    if (lh === rh)
        return Math.pow(2, lh) - 1;
    return 1 + countNodes(root.left) + countNodes(root.right);
}
function leftHeight(node) {
    let h = 0;
    while (node) {
        h++;
        node = node.left;
    }
    return h;
}
function rightHeight(node) {
    let h = 0;
    while (node) {
        h++;
        node = node.right;
    }
    return h;
}
let root = (0, BinaryTreeOperations_1.arrayToBTLevelOrder)([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(countNodes(root));
