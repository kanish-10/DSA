"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTreeOperations_1 = require("./BinaryTreeOperations");
function topView(root) {
    let ans = [];
    if (root === null)
        return ans;
    let q = [];
    let mpp = {};
    q.push({ node: root, level: 0 });
    while (q.length > 0) {
        let { node, level } = q.shift();
        if (mpp[level] === undefined)
            mpp[level] = node.data;
        if (node.left)
            q.push({ node: node.left, level: level - 1 });
        if (node.right)
            q.push({ node: node.right, level: level + 1 });
    }
    const sortedKeys = Object.keys(mpp).sort((a, b) => Number(a) - Number(b));
    for (let i of sortedKeys) {
        ans.push(mpp[i]);
    }
    return ans;
}
let root = (0, BinaryTreeOperations_1.arrayToBTLevelOrder)([1, 2, 3, 4, 5, 6, 7]);
console.log(topView(root));
