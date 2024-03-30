"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTreeOperations_1 = require("./BinaryTreeOperations");
function buildTreeUsingInorderAndPreorder(postorder, inorder) {
    let inMap = {};
    for (let i = 0; i < inorder.length; i++) {
        inMap = { ...inMap, [inorder[i]]: i };
    }
    let root = buildTree(postorder, 0, postorder.length - 1, inorder, 0, inorder.length - 1, inMap);
    return root;
}
function buildTree(postorder, postStart, postEnd, inorder, inStart, inEnd, inMap) {
    if (postStart > postEnd || inStart > inEnd)
        return null;
    let root = new BinaryTreeOperations_1.BTNode(postorder[postEnd]);
    let inRoot = inMap[root.data];
    let number = inRoot - inStart;
    root.left = buildTree(postorder, postStart, postStart + number - 1, inorder, inStart, inRoot - 1, inMap);
    root.right = buildTree(postorder, postStart + number, postEnd - 1, inorder, inRoot + 1, inEnd, inMap);
    return root;
}
let root = buildTreeUsingInorderAndPreorder([40, 50, 20, 60, 30, 10], [40, 20, 50, 10, 60, 30]);
(0, BinaryTreeOperations_1.inorderTraversal)(root);
(0, BinaryTreeOperations_1.postorderTraversal)(root);
