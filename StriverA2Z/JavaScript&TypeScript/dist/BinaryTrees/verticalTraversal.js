"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTreeOperations_1 = require("./BinaryTreeOperations");
function verticalTraversal(root) {
    let q = [];
    let nodes = {};
    q.push({ node: root, vertical: 0, level: 0 });
    while (q.length > 0) {
        let { node, vertical, level } = q.shift();
        if (!nodes[vertical]) {
            nodes[vertical] = {};
        }
        if (!nodes[vertical][level]) {
            nodes[vertical][level] = [];
        }
        nodes[vertical][level].push(node.data);
        if (node.left) {
            q.push({ node: node.left, vertical: vertical - 1, level: level + 1 });
        }
        if (node.right) {
            q.push({ node: node.right, vertical: vertical + 1, level: level + 1 });
        }
    }
    let ans = [];
    const sortedVerticals = Object.keys(nodes).sort((a, b) => Number(a) - Number(b));
    for (const vertical of sortedVerticals) {
        const sortedLevels = Object.keys(nodes[vertical]).sort((a, b) => Number(a) - Number(b));
        const col = [];
        for (const level of sortedLevels) {
            col.push(...nodes[vertical][level]);
        }
        ans.push(col);
    }
    console.log(ans);
}
let root = (0, BinaryTreeOperations_1.arrayToBTLevelOrder)([1, 2, 3, 4, 5, 6, 7]);
verticalTraversal(root);
