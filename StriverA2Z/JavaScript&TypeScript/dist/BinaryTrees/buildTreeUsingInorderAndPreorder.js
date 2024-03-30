"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTreeOperations_1 = require("./BinaryTreeOperations");
function buildTreeUsingInorderAndPreorder(preorder, inorder) {
    let inMap = {};
    for (let i = 0; i < inorder.length; i++) {
        inMap = { ...inMap, [inorder[i]]: i };
    }
    let root = buildTree(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1, inMap);
    return root;
}
function buildTree(preorder, preStart, preEnd, inorder, inStart, inEnd, inMap) {
    if (preStart > preEnd || inStart > inEnd)
        return null;
    let root = new BinaryTreeOperations_1.BTNode(preorder[preStart]);
    let inRoot = inMap[root.data];
    let number = inRoot - inStart;
    root.left = buildTree(preorder, preStart + 1, preStart + number, inorder, inStart, inRoot - 1, inMap);
    root.right = buildTree(preorder, preStart + number + 1, preEnd, inorder, inRoot + 1, inEnd, inMap);
    return root;
}
let root = buildTreeUsingInorderAndPreorder([10, 20, 40, 50, 30, 60], [40, 20, 50, 10, 60, 30]);
(0, BinaryTreeOperations_1.inorderTraversal)(root);
(0, BinaryTreeOperations_1.preorderTraversal)(root);
