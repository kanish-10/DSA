#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

Node *markParents(Node *root, unordered_map<Node *, Node *> &parentTrack, int start) {
    queue<Node *> q;
    q.push(root);
    Node *res;
    while (!q.empty()) {
        Node *cur = q.front();
        if (cur->data == start) res = cur;
        q.pop();
        if (cur->left) {
            q.push(cur->left);
            parentTrack[cur->left] = cur;
        }
        if (cur->right) {
            q.push(cur->right);
            parentTrack[cur->right] = cur;
        }
    }
    return res;
}

int findMaxDistance(unordered_map<Node *, Node *> &parentTrack, Node *target) {
    queue<Node *> q;
    unordered_map<Node *, bool> visited;
    q.push(target);
    visited[target] = true;
    int maxi = 0;
    while (!q.empty()) {
        int size = q.size();
        bool fl = false;
        for (int i = 0; i < size; i++) {
            Node *cur = q.front();
            q.pop();
            if (cur->left && !visited[cur->left]) {
                fl = true;
                q.push(cur->left);
                visited[cur->left] = true;
            }
            if (cur->right && !visited[cur->right]) {
                fl = true;
                q.push(cur->right);
                visited[cur->right] = true;
            }
            if (parentTrack[cur] && !visited[parentTrack[cur]]) {
                fl = true;
                q.push(parentTrack[cur]);
                visited[parentTrack[cur]] = true;
            }
        }
        if (fl) maxi++;
    }
    return maxi;
}

int burningTime(Node *root, int start) {
    unordered_map<Node *, Node *> parentTrack;
    Node *target = markParents(root,parentTrack,start);
    int ans = findMaxDistance(parentTrack,target);
    return ans;
}

int main() {
    Node *root = new Node(1);
    root->left = new Node(2);
    root->right = new Node(3);
    root->left->left = new Node(4);
    root->left->left->right = new Node(7);
    root->right->left = new Node(5);
    root->right->right = new Node(6);
    root->right->right->left = new Node(8);

    cout << burningTime(root, 2);
    return 0;
}
