#include<bits/stdc++.h>

using namespace std;

class Node {
public:
    int data;
    Node *next;

    Node(int data) {
        this->data = data;
        this->next = nullptr;
    }
};

// array to linkedlist
Node *array_to_linkedlist(vector<int> &arr) {
    Node *head = new Node(arr[0]);
    Node *mover = head;
    for (int i = 1; i < arr.size(); i++) {
        Node *temp = new Node(arr[i]);
        mover->next = temp;
        mover = temp;
    }
    return head;
}

// traversing in linked list
void traverseLinkedList(Node *head) {
    Node *temp = head;
    while (temp) {
        cout << temp->data << " ";
        temp = temp->next;
    }
    cout << endl;
}

// length of linked list
void lengthOfLinkedList(Node *head) {
    Node *temp = head;
    int cnt = 0;
    while (temp) {
        cnt++;
        temp = temp->next;
    }
    cout << "Length of Linked List :- " << cnt << endl;
}

// search element in array
void searchElement(Node *head, int element) {
    Node *temp = head;
    while (temp) {
        if (temp->data == element) {
            cout << "Element found" << endl;
            return;
        }
        temp = temp->next;
    }
    cout << "Element not found" << endl;
}

//-------------------DELETION IN LINKED LIST-------------------

// delete the head
Node *deleteHead(Node *head) {
    if (head == nullptr) return head;
    Node *temp = head;
    head = head->next;
    delete temp;
    return head;
}

// delete the tail
Node *deleteTail(Node *head) {
    if (head == nullptr || head->next == nullptr) return head;
    Node *temp = head;
    while (temp->next->next != nullptr) {
        temp = temp->next;
    }
    delete temp->next;
    temp->next = nullptr;
    return head;
}

// delete any element at k position
Node *deleteAnyPosition(Node *head, int element) {
    if (head == nullptr) return head;
    Node *temp = head;
    if (element == 1) {
        head = head->next;
        delete temp;
        return head;
    }
    int cnt = 0;
    Node *prev = nullptr;
    while (temp) {
        cnt++;
        if (cnt == element) {
            prev->next = prev->next->next;
            delete temp;
            break;
        }
        prev = temp;
        temp = temp->next;
    }
    return head;
}

// delete any element
Node *deleteElement(Node *head, int el) {
    if (head == nullptr) return head;
    Node *temp = head;
    if (head->data == el) {
        head = head->next;
        delete temp;
        return head;
    }
    Node *prev = nullptr;
    while (temp) {
        if (temp->data == el) {
            prev->next = prev->next->next;
            delete temp;
            break;
        }
        prev = temp;
        temp = temp->next;
    }
    return head;
}

//-------------------INSERTION IN LINKED LIST-------------------

// insert element at head
Node *insertHead(Node *head, int el) {
    if (head == nullptr) return new Node(el);
    Node *temp = new Node(el);
    temp->next = head;
    return temp;
}

Node *insertTail(Node *head, int el) {
    if (head == nullptr) return new Node(el);
    Node *temp = head;
    while (temp->next != nullptr) {
        temp = temp->next;
    }
    Node *newNode = new Node(el);
    temp->next = newNode;
    return head;
}

// insert at a specific location
Node *insertSpecificPosition(Node *head, int el, int pos) {
    if (head == nullptr) {
        if (pos == 1) {
            return new Node(el);
        }
    }
    if (pos == 1) {
        Node *temp = new Node(el);
        temp->next = head;
        return temp;
    }
    Node *temp = head;
    int cnt = 0;
    while (temp) {
        cnt++;
        if (cnt == (pos - 1)) {
            Node *newNode = new Node(el);
            newNode->next = temp->next;
            temp->next = newNode;
            break;
        }
        temp = temp->next;
    }
    return head;
}

// insert before a value
Node *insertBeforeValue(Node *head, int el, int val) {
    if (head == nullptr) return head;
    if (head->data == val) {
        Node *temp = new Node(el);
        temp->next = head;
        return temp;
    }
    Node *temp = head;
    bool flag = false;
    while (temp->next != nullptr) {
        if (temp->next->data == val) {
            Node *newNode = new Node(el);
            newNode->next = temp->next;
            temp->next = newNode;
            flag = true;
            break;
        }
        temp = temp->next;
    }
    if (!flag) cout << "Value is not present in linked list" << endl;
    return head;
}

int main() {
    vector<int> arr = {1, 2, 3, 4, 5};
    Node *head = array_to_linkedlist(arr);
    cout << head << endl;
    /*
        Insertion Operations :-

        head = insertHead(head, 10);
        traverseLinkedList(head);
        head = insertTail(head, 20);
        traverseLinkedList(head);
        head = insertSpecificPosition(head, 20, 7);
        traverseLinkedList(head);
        head = insertBeforeValue(head, 20, 5);
        traverseLinkedList(head);
    */
    /*
        Deletion Operations :-

        head = deleteHead(head);
        traverseLinkedList(head);
        head = deleteTail(head);
        traverseLinkedList(head);
        head = deleteAnyPosition(head, 2);
        traverseLinkedList(head);
        head = deleteElement(head, 2);
        traverseLinkedList(head);
    */

    /*
       Basic operations :-

       traverseLinkedList(head);
       lengthOfLinkedList(head);
       searchElement(head, 3);
       searchElement(head, 10);
    */
    return 0;
}