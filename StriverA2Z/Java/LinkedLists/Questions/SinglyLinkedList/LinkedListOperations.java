class Node {
    int data;
    Node next;

    Node(int data, Node next) {
        this.data = data;
        this.next = next;
    }

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class LinkedListOperations {
    // array to linked list
    static Node arrayToLinkedList(int[] arr) {
        Node head = new Node(arr[0]);
        Node mover = head;
        for (int i = 1; i < arr.length; i++) {
            Node temp = new Node(arr[i]);
            mover.next = temp;
            mover = temp;
        }
        return head;
    }

    // traversing in linked list
    static void traverseLinkedList(Node head) {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
        System.out.println();
    }

    // length of linked list
    static void lengthOfLinkedList(Node head) {
        Node temp = head;
        int cnt = 0;
        while (temp != null) {
            cnt++;
            temp = temp.next;
        }
        System.out.println("Length of Linked list :- " + cnt);
    }

    // search element in linked list
    static void searchElement(Node head, int element) {
        Node temp = head;
        while (temp != null) {
            if (temp.data == element) {
                System.out.println("Element found");
                return;
            }
            temp = temp.next;
        }
        System.out.println("Element not found");
    }

//    ------------------- DELETION IN LINKED LIST-------------------

    // delete head in linked list
    static Node deleteHead(Node head) {
        if (head == null) return null;
        head = head.next;
        return head;
    }

    // delete tail in linked list
    static Node deleteTail(Node head) {
        if (head == null || head.next == null) return head;
        Node temp = head;
        while (temp.next.next != null) temp = temp.next;
        temp.next = null;
        return head;
    }

    // delete any element at k position in linked list
    static Node deleteAnyPosition(Node head, int el) {
        if (head == null) return head;
        Node temp = head;
        if (el == 1) {
            head = head.next;
            return head;
        }
        Node prev = null;
        int cnt = 0;
        while (temp != null) {
            cnt++;
            if (cnt == el) {
                prev.next = prev.next.next;
                break;
            }
            prev = temp;
            temp = temp.next;
        }
        return head;
    }

    // delete any element
    static Node deleteElement(Node head, int el) {
        if (head == null) return head;
        if (head.data == el) {
            head = head.next;
            return head;
        }
        Node temp = head;
        Node prev = null;
        while (temp != null) {
            if (temp.data == el) {
                prev.next = prev.next.next;
                break;
            }
            prev = temp;
            temp = temp.next;
        }
        return head;
    }

//-------------------INSERTION IN LINKED LIST-------------------

    // insert at head
    static Node insertHead(Node head, int el) {
        if (head == null) return new Node(el);
        Node temp = new Node(el);
        temp.next = head;
        return temp;
    }

    // insert at tail
    static Node insertTail(Node head, int el) {
        if (head == null) return new Node(el);
        Node temp = head;
        while (temp.next != null) {
            temp = temp.next;
        }
        Node newNode = new Node(el);
        temp.next = newNode;
        return head;
    }

    // insert at specific position
    static Node insertSpecificPosition(Node head, int el, int pos) {
        if (head == null)
            if (pos == 1)
                return new Node(el);
        if (pos == 1) {
            Node temp = new Node(el);
            temp.next = head;
            return temp;
        }
        Node temp = head;
        int cnt = 0;
        while (temp != null) {
            cnt++;
            if (cnt == (pos - 1)) {
                Node newNode = new Node(el);
                newNode.next = temp.next;
                temp.next = newNode;
                break;
            }
            temp = temp.next;
        }
        return head;
    }

    // insert before a value
    static Node insertBeforeValue(Node head, int el, int val) {
        if (head == null) return head;
        if (head.data == val) {
            Node temp = new Node(el);
            temp.next = head;
            return temp;
        }
        Node temp = head;
        boolean flag = false;
        while (temp.next != null) {
            if (temp.next.data == val) {
                Node newNode = new Node(el);
                newNode.next = temp.next;
                temp.next = newNode;
                flag = true;
                break;
            }
            temp = temp.next;
        }
        if (!flag) System.out.println("Value is not present in linked list");
        return head;
    }
}
