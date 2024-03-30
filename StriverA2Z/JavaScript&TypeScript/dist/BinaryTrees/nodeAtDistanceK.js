"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTreeOperations_1 = require("./BinaryTreeOperations");
function markParents(root, parentTrack) {
    let q = [];
    q.push(root);
    while (q.length > 0) {
        let curr = q.shift();
        if (curr.left != null) {
            parentTrack.set(curr.left, curr);
            q.push(curr.left);
        }
        if (curr.right != null) {
            parentTrack.set(curr.right, curr);
            q.push(curr.right);
        }
    }
}
function distanceK(root, target, k) {
    let parentTrack = new Map();
    markParents(root, parentTrack);
    let q = [];
    let visited = new Map();
    q.push(target);
    visited.set(target, true);
    let cur = 0;
    while (q.length > 0) {
        if (cur === k)
            break;
        cur++;
        let size = q.length;
        for (let i = 0; i < size; i++) {
            let node = q.shift();
            if (node.left && !visited.has(node.left)) {
                q.push(node.left);
                visited.set(node.left, true);
            }
            if (node.right != null && !visited.has(node.right)) {
                q.push(node.right);
                visited.set(node.right, true);
            }
            if (parentTrack.get(node) != null && !visited.has(parentTrack.get(node))) {
                q.push(parentTrack.get(node));
                visited.set(parentTrack.get(node), true);
            }
        }
    }
    let result = [];
    while (q.length > 0) {
        let t = q.shift();
        result.push(t.data);
    }
    return result;
}
let root = new BinaryTreeOperations_1.BTNode(3);
root.left = new BinaryTreeOperations_1.BTNode(5);
root.right = new BinaryTreeOperations_1.BTNode(1);
root.left.left = new BinaryTreeOperations_1.BTNode(6);
root.left.right = new BinaryTreeOperations_1.BTNode(2);
root.left.right.left = new BinaryTreeOperations_1.BTNode(7);
root.left.right.right = new BinaryTreeOperations_1.BTNode(4);
root.right.left = new BinaryTreeOperations_1.BTNode(0);
root.right.right = new BinaryTreeOperations_1.BTNode(8);
let ans = distanceK(root, root.left, 2);
console.log(ans);
