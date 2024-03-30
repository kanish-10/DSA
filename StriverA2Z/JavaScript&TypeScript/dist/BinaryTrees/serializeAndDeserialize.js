"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTreeOperations_1 = require("./BinaryTreeOperations");
function serialize(root) {
    if (!root)
        return "";
    let s = "";
    let q = [];
    q.push(root);
    while (q.length > 0) {
        let curNode = q.shift();
        if (curNode === null) {
            s += "#,";
        }
        else {
            s += curNode.data + ",";
            q.push(curNode.left);
            q.push(curNode.right);
        }
    }
    return s;
}
function deserialize(data) {
    if (data.length === 0)
        return null;
    let dataArray = data.split(",");
    let root = new BinaryTreeOperations_1.BTNode(parseInt(dataArray[0]));
    let q = [];
    q.push(root);
    let i = 1;
    while (i < dataArray.length) {
        let node = q.shift();
        let leftVal = dataArray[i++];
        if (leftVal !== "#" && leftVal) {
            let leftNode = new BinaryTreeOperations_1.BTNode(parseInt(leftVal));
            node.left = leftNode;
            q.push(leftNode);
        }
        let rightVal = dataArray[i++];
        if (rightVal !== "#" && rightVal) {
            let rightNode = new BinaryTreeOperations_1.BTNode(parseInt(rightVal));
            node.right = rightNode;
            q.push(rightNode);
        }
    }
    return root;
}
let root = (0, BinaryTreeOperations_1.arrayToBTLevelOrder)([1, 2, 3, 4, 5, 6, 7, 8]);
let s = serialize(root);
let root1 = deserialize(s);
(0, BinaryTreeOperations_1.levelOrder)(root1);
