#include<bits/stdc++.h>

using namespace std;

class Node {
public:
    int data;
    Node *next;
    Node *prev;

    Node(int data) {
        this->data = data;
        this->next = nullptr;
        this->prev = nullptr;
    }
};

Node *arrayToLinkedList(vector<int> arr) {
    if (arr.size() == 0) return nullptr;
    Node *head = new Node(arr[0]);
    Node *temp = head;
    for (int i = 1; i < arr.size(); i++) {
        Node *newNode = new Node(arr[i]);
        newNode->prev = temp;
        temp->next = newNode;
        temp = newNode;
    }
    return head;
}

void traverseToLinkedList(Node *head) {
    Node *temp = head;
    while (temp) {
        cout << temp->data << " ";
        temp = temp->next;
    }
    cout << endl;
}

//---------------------------DELETION OPERATIONS---------------------------

// delete head
Node *deleteHead(Node *head) {
    if (head == nullptr || head->next == nullptr) return head;
    Node *temp = head;
    head = head->next;
    head->prev = nullptr;
    temp->next = nullptr;
    delete temp;
    return head;
}

// delete tail
Node *deleteTail(Node *head) {
    if (head == nullptr || head->next == nullptr) return head;
    Node *tail = head;
    while (tail->next != nullptr) tail = tail->next;
    Node *newTail = tail->prev;
    tail->prev = nullptr;
    newTail->next = nullptr;
    delete tail;
    return head;
}

// delete k position
Node *deletePosition(Node *head, int k) {
    if (head == nullptr) return head;
    Node *kNode = head;
    int cnt = 0;
    while (kNode) {
        cnt++;
        if (cnt == k) break;
        kNode = kNode->next;
    }
    if (kNode == nullptr) return head;
    Node *prevNode = kNode->prev;
    Node *nextNode = kNode->next;
    if (prevNode == nullptr && nextNode == nullptr) {
        return nullptr;
    } else if (prevNode == nullptr) {
        // delete head function
        // return deleteHead(head);
        head = head->next;
        nextNode->prev = nullptr;
        kNode->next = nullptr;
        delete kNode;
        return head;
    } else if (nextNode == nullptr) {
        // delete tail function
        // return deleteTail(head);
        prevNode->next = nullptr;
        kNode->prev = nullptr;
        delete kNode;
        return head;
    }
    prevNode->next = nextNode;
    nextNode->prev = prevNode;
    delete kNode;
    return head;
}

// delete a particular el
Node *deleteElement(Node *head, int el) {
    if (head == nullptr) return head;
    Node *kNode = head;
    while (kNode) {
        if (kNode->data == el) break;
        kNode = kNode->next;
    }
    if (kNode == nullptr) return head;
    Node *prevNode = kNode->prev;
    Node *nextNode = kNode->next;
    if (prevNode == nullptr && nextNode == nullptr) {
        return nullptr;
    } else if (prevNode == nullptr) {
        // delete head function
        // return deleteHead(head);
        head = head->next;
        nextNode->prev = nullptr;
        kNode->next = nullptr;
        delete kNode;
        return head;
    } else if (nextNode == nullptr) {
        // delete tail function
        // return deleteTail(head);
        prevNode->next = nullptr;
        kNode->prev = nullptr;
        delete kNode;
        return head;
    }
    prevNode->next = nextNode;
    nextNode->prev = prevNode;
    delete kNode;
    return head;
}

//---------------------------INSERTION OPERATIONS---------------------------

// insert at the head
Node *insertHead(Node *head, int val) {
    if (head == nullptr) return new Node(val);
    Node *newHead = new Node(val);
    newHead->next = head;
    head->prev = newHead;
    return newHead;
}

// insert before tail
Node *insertBeforeTail(Node *head, int val) {
    if (head == nullptr) return new Node(val);
    if (head->next == nullptr) {
        Node *newHead = new Node(val);
        newHead->next = head;
        head->prev = newHead;
        return newHead;
    }
    Node *tail = head;
    while (tail->next != nullptr) tail = tail->next;
    Node *prevNode = tail->prev;
    Node *newNode = new Node(val);
    newNode->prev = prevNode;
    newNode->next = tail;
    prevNode->next = newNode;
    tail->prev = newNode;
    return head;
}

// insert after tail
Node *insertAfterTail(Node *head, int val) {
    if (head == nullptr) return new Node(val);
    Node *tail = head;
    while (tail->next != nullptr) {
        tail = tail->next;
    }
    Node *newTail = new Node(val);
    newTail->prev = tail;
    tail->next = newTail;
    return head;
}

int length(Node *head) {
    Node *temp = head;
    int cnt = 0;
    while (temp) {
        cnt++;
        temp = temp->next;
    }
    return cnt;
}

Node *insertPosition(Node *head, int val, int pos) {
    if (pos <= 0) return head;
    if (head == nullptr) {
        if (pos == 1) return new Node(val);
        else return nullptr;
    }
    if (pos == 1) {
        Node *newHead = new Node(val);
        newHead->next = head;
        head->prev = newHead;
        return newHead;
    }
    Node *temp = head;
    Node *prevNode = nullptr;
    int cnt = 0;
    while (temp != nullptr) {
        cnt++;
        if (cnt == pos) break;
        prevNode = temp;
        temp = temp->next;
    }
    int len = length(head);
    if (temp == nullptr && (len + 1) == pos) {
        Node *newNode = new Node(val);
        newNode->prev = prevNode;
        prevNode->next = newNode;
        return head;
    } else if (temp == nullptr) return head;
    Node *newNode = new Node(val);
    prevNode = temp->prev;
    prevNode->next = newNode;
    newNode->next = temp;
    temp->prev = newNode;
    newNode->prev = prevNode;
    return head;
}

// insert before value
Node *insertBeforeValue(Node *head, int val, int k) {
    if (head == nullptr) {
        if (!k) return new Node(val);
        else return nullptr;
    }
    if (head->data == k) {
        Node *newHead = new Node(val);
        newHead->next = head;
        head->prev = newHead;
        return newHead;
    }
    Node *temp = head;
    while (temp) {
        if (temp->data == k) break;
        temp = temp->next;
    }
    if (temp == nullptr) return head;
    Node *prevNode = temp->prev;
    Node *newNode = new Node(val);
    newNode->prev = prevNode;
    newNode->next = temp;
    temp->prev = newNode;
    prevNode->next = newNode;
    return head;
}

int main() {
    vector<int> arr = {12, 5, 8, 7};
    Node *head = arrayToLinkedList(arr);
    cout << head;
    return 0;
}
