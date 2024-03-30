"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTreeOperations_1 = require("./BinaryTreeOperations");
function getPreorder(root) {
    const preorder = [];
    let cur = root;
    while (cur) {
        if (!cur.left) {
            preorder.push(cur.data);
            cur = cur.right;
        }
        else {
            let prev = cur.left;
            while (prev.right && prev.right != cur) {
                prev = prev.right;
            }
            if (!prev.right) {
                prev.right = cur;
                preorder.push(cur.data);
                cur = cur.left;
            }
            else {
                prev.right = null;
                cur = cur.right;
            }
        }
    }
    console.log(preorder);
}
let root = (0, BinaryTreeOperations_1.arrayToBTLevelOrder)([1, 2, 3, 4, 5, 6, 7, 8]);
getPreorder(root);
