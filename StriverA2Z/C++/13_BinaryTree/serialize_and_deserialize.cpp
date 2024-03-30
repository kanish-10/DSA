#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

string serialize(Node *root) {
    queue<Node *> q;
    q.push(root);
    string s = "";
    while (!q.empty()) {
        Node *curNode = q.front();
        q.pop();
        if (curNode == nullptr) s.append("#,");
        else s.append(to_string(curNode->data) + ',');
        if (curNode != nullptr) {
            q.push(curNode->left);
            q.push(curNode->right);
        }
    }
    cout << s << endl;
    return s;
}

Node *deserialize(string data) {
    if (data.size() == 0) return NULL;
    stringstream s(data);
    string str;
    getline(s, str, ',');
    Node *root = new Node(stoi(str));
    queue<Node *> q;
    q.push(root);
    while (!q.empty()) {

        Node *node = q.front();
        q.pop();

        getline(s, str, ',');
        if (str == "#") {
            node->left = nullptr;
        } else {
            Node *leftNode = new Node(stoi(str));
            node->left = leftNode;
            q.push(leftNode);
        }

        getline(s, str, ',');
        if (str == "#") {
            node->right = nullptr;
        } else {
            Node *rightNode = new Node(stoi(str));
            node->right = rightNode;
            q.push(rightNode);
        }
    }
    cout << root << endl;
    return root;
}

int main() {
    Node *root = arrayToBTLevelOrder({1, 2, 3, 4, 5, 6, 7});
    string s = serialize(root);
    Node *root1 = deserialize(s);
    levelOrder(root1);
    return 0;
}