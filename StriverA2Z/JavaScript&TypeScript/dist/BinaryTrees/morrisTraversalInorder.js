"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTreeOperations_1 = require("./BinaryTreeOperations");
function getInorder(root) {
    const inorder = [];
    let cur = root;
    while (cur) {
        if (!cur.left) {
            inorder.push(cur.data);
            cur = cur.right;
        }
        else {
            let prev = cur.left;
            while (prev.right && prev.right != cur) {
                prev = prev.right;
            }
            if (!prev.right) {
                prev.right = cur;
                cur = cur.left;
            }
            else {
                prev.right = null;
                inorder.push(cur.data);
                cur = cur.right;
            }
        }
    }
    console.log(inorder);
}
let root = (0, BinaryTreeOperations_1.arrayToBTLevelOrder)([1, 2, 3, 4, 5, 6, 7, 8]);
getInorder(root);
