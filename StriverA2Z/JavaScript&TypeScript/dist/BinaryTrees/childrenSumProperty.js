"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTreeOperations_1 = require("./BinaryTreeOperations");
function childrenSum(root) {
    if (root === null)
        return;
    let child = 0;
    if (root.left != null)
        child += root.left.data;
    if (root.right != null)
        child += root.right.data;
    if (child >= root.data)
        root.data = child;
    else {
        if (root.left !== null)
            root.left.data = root.data;
        if (root.right !== null)
            root.right.data = root.data;
    }
    childrenSum(root.left);
    childrenSum(root.right);
    let tot = 0;
    if (root.left !== null)
        tot += root.left.data;
    if (root.right !== null)
        tot += root.right.data;
    if (root.left !== null || root.right !== null)
        root.data = tot;
}
let root = (0, BinaryTreeOperations_1.arrayToBTLevelOrder)([40, 10, 20, 2, 5, 30, 40]);
childrenSum(root);
(0, BinaryTreeOperations_1.inorderTraversal)(root);
