"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayToBT = exports.preInPostTraversal = exports.postorderTraversalIterative1Stack = exports.postorderTraversalIterative2Stack = exports.inorderTraversalIterative = exports.preorderTraversalIterative = exports.levelOrder = exports.arrayToBTLevelOrder = exports.postorderTraversal = exports.inorderTraversal = exports.preorderTraversal = exports.BTNode = void 0;
class BTNode {
    data;
    left;
    right;
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
exports.BTNode = BTNode;
function preorderTraversal(node) {
    if (node === null)
        return;
    console.log(node.data);
    preorderTraversal(node.left);
    preorderTraversal(node.right);
}
exports.preorderTraversal = preorderTraversal;
function inorderTraversal(node) {
    if (node === null)
        return;
    inorderTraversal(node.left);
    console.log(node.data);
    inorderTraversal(node.right);
}
exports.inorderTraversal = inorderTraversal;
function postorderTraversal(node) {
    if (node === null)
        return;
    postorderTraversal(node.left);
    postorderTraversal(node.right);
    console.log(node.data);
}
exports.postorderTraversal = postorderTraversal;
function arrayToBTLevelOrder(arr) {
    if (arr.length === null)
        return null;
    let root = new BTNode(arr[0]);
    const q = [];
    q.push(root);
    let i = 0;
    let n = (Math.floor(arr.length / 2));
    while (q.length !== 0 && i < n) {
        let node = q.shift();
        let left = new BTNode(arr[(2 * i) + 1]);
        node.left = left;
        q.push(left);
        if ((2 * i + 2) !== arr.length) {
            let right = new BTNode(arr[(2 * i) + 2]);
            node.right = right;
            q.push(right);
        }
        i++;
    }
    return root;
}
exports.arrayToBTLevelOrder = arrayToBTLevelOrder;
function levelOrder(root) {
    if (root === null)
        return;
    const q = [];
    q.push(root);
    console.log(root.data);
    while (q.length !== 0) {
        for (let i = 0; i < q.length; i++) {
            let node = q.shift();
            if (node.left)
                console.log(node.left.data);
            if (node.right)
                console.log(node.right.data);
            if (node.left)
                q.push(node.left);
            if (node.right)
                q.push(node.right);
        }
    }
}
exports.levelOrder = levelOrder;
function preorderTraversalIterative(root) {
    if (root === null)
        return;
    const st = [];
    st.push(root);
    while (st.length !== 0) {
        let node = st.pop();
        console.log(node.data);
        if (node.right)
            st.push(node.right);
        if (node.left)
            st.push(node.left);
    }
}
exports.preorderTraversalIterative = preorderTraversalIterative;
function inorderTraversalIterative(root) {
    if (root === null)
        return;
    const st = [];
    let node = root;
    while (true) {
        if (node) {
            st.push(node);
            node = node.left;
        }
        else {
            if (st.length === 0)
                break;
            node = st.pop();
            console.log(node.data);
            node = node.right;
        }
    }
}
exports.inorderTraversalIterative = inorderTraversalIterative;
function postorderTraversalIterative2Stack(root) {
    if (root === null)
        return;
    const st1 = [];
    const st2 = [];
    st1.push(root);
    while (st1.length !== 0) {
        let node = st1.pop();
        st2.push(node);
        if (node.left)
            st1.push(node.left);
        if (node.right)
            st1.push(node.right);
    }
    while (st2.length !== 0) {
        console.log(st2.pop().data);
    }
}
exports.postorderTraversalIterative2Stack = postorderTraversalIterative2Stack;
function postorderTraversalIterative1Stack(root) {
    if (root === null)
        return;
    const st = [];
    let curr = root;
    while (curr || st.length !== 0) {
        if (curr) {
            st.push(curr);
            curr = curr.left;
        }
        else {
            let temp = st[st.length - 1].right;
            if (temp === null) {
                temp = st.pop();
                console.log(temp.data);
                while (st.length !== 0 && temp === st[st.length - 1].right) {
                    temp = st.pop();
                    console.log(temp.data);
                }
            }
            else {
                curr = temp;
            }
        }
    }
}
exports.postorderTraversalIterative1Stack = postorderTraversalIterative1Stack;
function preInPostTraversal(root) {
    if (root === null)
        return;
    const arr = [];
    arr.push([root, 1]);
    const pre = [];
    const post = [];
    const inorder = [];
    while (arr.length !== 0) {
        let [node, num] = arr.pop();
        if (num === 1) {
            pre.push(node.data);
            num++;
            arr.push([node, num]);
            if (node.left)
                arr.push([node.left, 1]);
        }
        else if (num === 2) {
            inorder.push(node.data);
            num++;
            arr.push([node, num]);
            if (node.right)
                arr.push([node.right, 1]);
        }
        else {
            post.push(node.data);
        }
    }
    console.log(pre);
    console.log(inorder);
    console.log(post);
}
exports.preInPostTraversal = preInPostTraversal;
function arrayToBT(arr, index = 0) {
    // Base case: If the current index is out of bounds or the element is null, return null
    if (index >= arr.length || arr[index] === null) {
        return null;
    }
    // Create a new TreeNode with the current element
    const root = new BTNode(arr[index]);
    // Recursively build the left and right subtrees
    root.left = arrayToBT(arr, 2 * index + 1);
    root.right = arrayToBT(arr, 2 * index + 2);
    return root;
}
exports.arrayToBT = arrayToBT;
let root = arrayToBTLevelOrder([1, 2, 3, 4, 5, 6, 7]);
// preorderTraversal(root);
// console.log();
// postorderTraversal(root);
// console.log();
// inorderTraversal(root);
// console.log();
// levelOrder(root);
// console.log();
// preorderTraversalIterative(root);
// console.log();
// inorderTraversalIterative(root);
// console.log();
// postorderTraversalIterative2Stack(root);
// console.log();
// postorderTraversalIterative1Stack(root);
// preInPostTraversal(root);
