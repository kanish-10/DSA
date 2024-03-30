#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

void markParents(Node *root, unordered_map<Node *, Node *> &parentTrack) {
    queue<Node *> q;
    q.push(root);
    while (!q.empty()) {
        Node *current = q.front();
        q.pop();
        if (current->left) {
            parentTrack[current->left] = current;
            q.push(current->left);
        }
        if (current->right) {
            parentTrack[current->right] = current;
            q.push(current->right);
        }
    }
}

vector<int> distanceK(Node *root, Node *target, int k) {
    unordered_map<Node *, Node *> parentTrack;
    markParents(root, parentTrack);

    unordered_map<Node *, bool> visited;
    queue<Node *> q;
    q.push(target);
    visited[target] = true;
    int cur = 0;
    while (!q.empty()) {
        if (cur == k) break;
        cur++;
        int size = q.size();
        for (int i = 0; i < size; i++) {
            Node *node = q.front();
            q.pop();
            if (node->left && !visited[node->left]) {
                q.push(node->left);
                visited[node->left] = true;
            }
            if (node->right && !visited[node->right]) {
                q.push(node->right);
                visited[node->right] = true;
            }
            if (parentTrack[node] && !visited[parentTrack[node]]) {
                q.push(parentTrack[node]);
                visited[parentTrack[node]] = true;
            }
        }
    }
    vector<int> result;
    while (!q.empty()) {
        Node *t = q.front();
        q.pop();
        result.push_back(t->data);
    }
    return result;
}

int main() {
    Node *root = new Node(3);
    root->left = new Node(5);
    root->right = new Node(1);
    root->left->left = new Node(6);
    root->left->right = new Node(2);
    root->left->right->left = new Node(7);
    root->left->right->right = new Node(4);
    root->right->left = new Node(0);
    root->right->right = new Node(8);

    vector<int> ans = distanceK(root, root->left, 2);
    for (int i : ans) {
        cout << i << " ";
    }
    return 0;
}