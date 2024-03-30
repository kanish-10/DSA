"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTreeOperations_1 = require("./BinaryTreeOperations");
function getPostorder(root) {
    const postorder = [];
    let cur = root;
    while (cur) {
        if (!cur.right) {
            postorder.push(cur.data);
            cur = cur.left;
        }
        else {
            let prev = cur.right;
            while (prev.left && prev.left != cur) {
                prev = prev.left;
            }
            if (!prev.left) {
                prev.left = cur;
                postorder.push(cur.data);
                cur = cur.right;
            }
            else {
                prev.left = null;
                cur = cur.left;
            }
        }
    }
    postorder.reverse();
    console.log(postorder);
}
let root = (0, BinaryTreeOperations_1.arrayToBTLevelOrder)([1, 2, 3, 4, 5, 6, 7, 8]);
getPostorder(root);
