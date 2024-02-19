//
// Created by kanis on 16-02-2024.
//

#ifndef INC_13_BINARYTREE_NODE_H
#define INC_13_BINARYTREE_NODE_H

#include<bits/stdc++.h>

using namespace std;

class Node {
public:
    int data;
    Node *left;
    Node *right;

    Node(int data) {
        this->data = data;
        this->right = nullptr;
        this->left = nullptr;
    }
};

void preorderTraversal(Node *node) {
    if (node == nullptr) return;
    cout << node->data << " ";
    preorderTraversal(node->left);
    preorderTraversal(node->right);
}

void inorderTraversal(Node *node) {
    if (node == nullptr) return;
    inorderTraversal(node->left);
    cout << node->data << " ";
    inorderTraversal(node->right);
}

void postorderTraversal(Node *node) {
    if (node == nullptr) return;
    postorderTraversal(node->left);
    postorderTraversal(node->right);
    cout << node->data << " ";
}

Node *arrayToBTLevelOrder(vector<int> arr) {
    if (arr.empty()) return nullptr;
    queue<Node *> q;
    Node *root = new Node(arr[0]);
    q.push(root);
    int i = 0;
    while (!q.empty() && i < (arr.size() / 2)) {
        Node *t = q.front();
        q.pop();

        Node *left = new Node(arr[2 * i + 1]);
        t->left = left;
        q.push(left);

        Node *right = new Node(arr[2 * i + 2]);
        t->right = right;
        q.push(right);
        i++;
    }
    return root;
}

void levelOrder(Node *root) {
    if (root == nullptr) return;
    queue<Node *> q;
    q.push(root);
    cout << root->data << " ";
    while (!q.empty()) {
        int size = q.size();
        for (int i = 0; i < size; i++) {
            Node *node = q.front();
            q.pop();
            if (node->left)cout << node->left->data << " ";
            if (node->right) cout << node->right->data << " ";
            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
        }
    }
}

void preOrderTraversalIterative(Node *root) {
    if (root == nullptr) return;
    stack<Node *> st;
    st.push(root);
    while (!st.empty()) {
        Node *node = st.top();
        st.pop();
        cout << node->data << " ";
        if (node->right) st.push(node->right);
        if (node->left) st.push(node->left);
    }
}

void inorderTraversalIterative(Node *root) {
    if (root == nullptr) return;
    stack<Node *> st;
    Node *node = root;
    while (true) {
        if (node) {
            st.push(node);
            node = node->left;
        } else {
            if (st.empty()) break;
            node = st.top();
            st.pop();
            cout << node->data << " ";
            node = node->right;
        }
    }
}

void postorderTraversalIterative2Stack(Node *root) {
    if (root == nullptr) return;
    stack<Node *> st1, st2;
    st1.push(root);
    while (!st1.empty()) {
        Node *node = st1.top();
        st1.pop();
        st2.push(node);
        if (node->left) st1.push(node->left);
        if (node->right) st1.push(node->right);
    }
    while (!st2.empty()) {
        cout << st2.top()->data << " ";
        st2.pop();
    }
}

void postorderTraversalIterative1Stack(Node *root) {
    if (root == nullptr) return;
    stack<Node *> st;
    Node *curr = root;
    while (curr != nullptr || !st.empty()) {
        if (curr != nullptr) {
            st.push(curr);
            curr = curr->left;
        } else {
            Node *temp = st.top()->right;
            if (temp == nullptr) {
                temp = st.top();
                st.pop();
                cout << temp->data << " ";
                while (!st.empty() && temp == st.top()->right) {
                    temp = st.top();
                    st.pop();
                    cout << temp->data << " ";
                }
            } else {
                curr = temp;
            }
        }
    }
}

void preInPostTraversal(Node *root) {
    if (root == nullptr) return;
    stack<pair<Node *, int>> st;
    st.push({root, 1});
    vector<int> pre, in, post;
    while (!st.empty()) {
        auto it = st.top();
        st.pop();
        if (it.second == 1) {
            pre.push_back(it.first->data);
            it.second++;
            st.push(it);
            if (it.first->left) st.push({it.first->left, 1});
        } else if (it.second == 2) {
            in.push_back(it.first->data);
            it.second++;
            st.push(it);
            if (it.first->right) st.push({it.first->right, 1});
        } else {
            post.push_back(it.first->data);
        }
    }

    for (int i : pre) {
        cout << i << " ";
    }
    cout << endl;

    for (int i : in) {
        cout << i << " ";
    }
    cout << endl;

    for (int i : post) {
        cout << i << " ";
    }
    cout << endl;
}

#endif //INC_13_BINARYTREE_NODE_H
