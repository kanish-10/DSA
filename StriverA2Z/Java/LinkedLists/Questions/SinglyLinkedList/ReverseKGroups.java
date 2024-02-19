public class ReverseKGroups {
    public static void main(String[] args) {
        Node head = LinkedListOperations.arrayToLinkedList(new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10});
        head = reverseKGroups(head, 3);
        LinkedListOperations.traverseLinkedList(head);
    }

    static Node reverseKGroups(Node head, int k) {
        Node temp = head;
        Node prev = null;
        while (temp != null) {
            Node kthNode = getKthNode(temp, k);
            if (kthNode == null) {
                if (prev != null) prev.next = temp;
                break;
            }
            Node nextNode = kthNode.next;
            kthNode.next = null;
            reverseLinkedList(temp);
            if (temp == head) {
                head = kthNode;
            } else {
                prev.next = kthNode;
            }
            prev = temp;
            temp = nextNode;
        }
        return head;
    }

    static Node reverseLinkedList(Node head) {
        Node temp = head;
        Node prev = null;
        while (temp != null) {
            Node front = temp.next;
            temp.next = prev;
            prev = temp;
            temp = front;
        }
        return prev;
    }

    static Node getKthNode(Node temp, int k) {
        k--;
        while (temp != null && k > 0) {
            k--;
            temp = temp.next;
        }
        return temp;
    }
}