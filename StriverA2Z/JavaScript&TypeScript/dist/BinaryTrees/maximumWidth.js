"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTreeOperations_1 = require("./BinaryTreeOperations");
function maximumWidth(root) {
    let ans = 0;
    if (!root)
        return ans;
    let q = [];
    q.push({ node: root, num: 0 });
    let first, last;
    while (q.length > 0) {
        let size = q.length;
        let min = q[0].num;
        for (let i = 0; i < size; i++) {
            let { node, num } = q[0];
            num -= min;
            q.shift();
            if (i === 0)
                first = num;
            if (i === size - 1)
                last = num;
            if (node.left)
                q.push({ node: node.left, num: 2 * num + 1 });
            if (node.right)
                q.push({ node: node.right, num: 2 * num + 2 });
        }
        ans = Math.max(ans, last - first + 1);
    }
    return ans;
}
let root = (0, BinaryTreeOperations_1.arrayToBTLevelOrder)([1, 2, 3, 4, 5, 6]);
console.log(maximumWidth(root));
