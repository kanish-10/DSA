public class RotateLinkedList {
    public static void main(String[] args) {
        Node head = LinkedListOperations.arrayToLinkedList(new int[]{1, 2, 3, 4, 5});
        head = rotate(head, 4);
        LinkedListOperations.traverseLinkedList(head);
    }

    static Node rotate(Node head, int rotation) {
        if (head == null || rotation == 0) return head;
        Node tail = head;
        int len = 1;
        while (tail.next != null) {
            tail = tail.next;
            len++;
        }
        if (rotation % len == 0) return head;
        rotation = rotation % len;
        tail.next = head;
        Node newLastNode = findNthNode(head, len - rotation);
        head = newLastNode.next;
        newLastNode.next = null;
        return head;
    }

    static Node findNthNode(Node temp, int k) {
        int cnt = 1;
        while (temp != null) {
            if (cnt == k) return temp;
            temp = temp.next;
            cnt++;
        }
        return temp;
    }
}
