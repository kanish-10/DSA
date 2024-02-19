class Node {
    int data;
    Node next;
    Node prev;

    Node(int data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

public class LinkedList {
    public static void main(String[] args) {
        int[] arr = {12, 8, 5, 7};
        Node head = arrayToLinkedList(arr);
    }

    static Node arrayToLinkedList(int[] arr) {
        if (arr.length == 0) return null;
        Node head = new Node(arr[0]);
        Node temp = head;
        for (int i = 1; i < arr.length; i++) {
            Node newNode = new Node(arr[i]);
            newNode.prev = temp;
            temp.next = newNode;
            temp = newNode;
        }
        return head;
    }

    static void traverseLinkedList(Node head) {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
        System.out.println();
    }

//---------------------------DELETION OPERATIONS---------------------------

    // delete head
    static Node deleteHead(Node head) {
        if (head == null || head.next == null) return head;
        Node temp = head;
        head = head.next;
        head.prev = null;
        temp.next = null;
        return head;
    }

    // delete tail
    static Node deleteTail(Node head) {
        if (head == null || head.next == null) return head;
        Node tail = head;
        while (tail.next != null) tail = tail.next;
        Node newTail = tail.prev;
        tail.prev = null;
        newTail.next = null;
        return head;
    }

    // delete k position element
    static Node deletePosition(Node head, int k) {
        if (head == null) return head;
        Node kNode = head;
        int cnt = 0;
        while (kNode != null) {
            cnt++;
            if (cnt == k) break;
            kNode = kNode.next;
        }
        if (kNode == null) return head;
        Node prevNode = kNode.prev;
        Node nextNode = kNode.next;
        if (prevNode == null && nextNode == null) {
            return null;
        } else if (prevNode == null) {
            // delete head function
            // return deleteHead(head);
            head = head.next;
            kNode.next = null;
            nextNode.prev = null;
            return head;
        } else if (nextNode == null) {
            // delete tail function
            // return deleteTail(head);
            prevNode.next = null;
            kNode.prev = null;
            return head;
        }
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        return head;
    }

    // delete element
    static Node deleteElement(Node head, int el) {
        if (head == null) return head;
        Node kNode = head;
        while (kNode != null) {
            if (kNode.data == el) break;
            kNode = kNode.next;
        }
        if (kNode == null) return head;
        Node prevNode = kNode.prev;
        Node nextNode = kNode.next;
        if (prevNode == null && nextNode == null) {
            return null;
        } else if (prevNode == null) {
            // delete head function
            // return deleteHead(head);
            head = head.next;
            kNode.next = null;
            nextNode.prev = null;
            return head;
        } else if (nextNode == null) {
            // delete tail function
            // return deleteTail(head);
            prevNode.next = null;
            kNode.prev = null;
            return head;
        }
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        return head;
    }

//---------------------------INSERTION OPERATIONS---------------------------

    // insert at the head
    static Node insertHead(Node head, int val) {
        if (head == null) return new Node(val);
        Node newHead = new Node(val);
        newHead.next = head;
        head.prev = newHead;
        return newHead;
    }

    // insert before tail
    static Node insertBeforeTail(Node head, int val) {
        if (head == null) return new Node(val);
        if (head.next == null) {
            Node newHead = new Node(val);
            newHead.next = head;
            head.prev = newHead;
            return newHead;
        }
        Node tail = head;
        while (tail.next != null) tail = tail.next;
        Node prevNode = tail.prev;
        Node newNode = new Node(val);
        newNode.next = tail;
        newNode.prev = prevNode;
        prevNode.next = newNode;
        tail.prev = newNode;
        return head;
    }

    // insert after tail
    static Node insertAfterTail(Node head, int val) {
        if (head == null) return new Node(val);
        Node tail = head;
        while (tail.next != null) {
            tail = tail.next;
        }
        Node newTail = new Node(val);
        newTail.prev = tail;
        tail.next = newTail;
        return head;
    }

    // length of linked list
    static int length(Node head) {
        Node temp = head;
        int cnt = 0;
        while (temp != null) {
            cnt++;
            temp = temp.next;
        }
        return cnt;
    }

    // insert at position
    static Node insertPosition(Node head, int val, int pos) {
        if (pos <= 0) return head;
        if (head == null) {
            if (pos == 1) return new Node(val);
            else return null;
        }
        if (pos == 1) {
            Node newHead = new Node(val);
            newHead.next = head;
            head.prev = newHead;
            return newHead;
        }
        Node temp = head;
        Node prevNode = null;
        int cnt = 0;
        while (temp != null) {
            cnt++;
            if (cnt == pos) break;
            prevNode = temp;
            temp = temp.next;
        }
        int len = length(head);
        if (temp == null && (len + 1) == pos) {
            Node newNode = new Node(val);
            newNode.prev = prevNode;
            prevNode.next = newNode;
            return head;
        } else if (temp == null) return head;
        Node newNode = new Node(val);
        prevNode = temp.prev;
        prevNode.next = newNode;
        newNode.next = temp;
        temp.prev = newNode;
        newNode.prev = prevNode;
        return head;
    }

    static Node insertBeforeValue(Node head, int val, int k) {
        if (head == null) return null;
        if (head.data == k) {
            Node newHead = new Node(val);
            newHead.next = head;
            head.prev = newHead;
            return newHead;
        }
        Node temp = head;
        while (temp != null) {
            if (temp.data == k) break;
            temp = temp.next;
        }
        if (temp == null) return head;
        Node prevNode = temp.prev;
        Node newNode = new Node(val);
        newNode.prev = prevNode;
        newNode.next = temp;
        temp.prev = newNode;
        prevNode.next = newNode;
        return head;
    }

    static Node reverseDLL(Node head) {
        if (head == null || head.next == null) return head;
        Node temp = head;
        Node prevNode = null;
        while (temp != null) {
            prevNode = temp.prev;
            temp.prev = temp.next;
            temp.next = prevNode;
            temp = temp.prev;
        }
        return prevNode.prev;
    }
}
