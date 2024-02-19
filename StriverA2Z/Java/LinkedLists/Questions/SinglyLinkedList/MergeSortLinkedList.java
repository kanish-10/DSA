public class MergeSortLinkedList {
    public static void main(String[] args) {
        Node head = LinkedListOperations.arrayToLinkedList(new int[]{2, 1, 5, 4, 3});
        head = mergeSort(head);
        LinkedListOperations.traverseLinkedList(head);
    }

    static Node findMiddle(Node head) {
        Node slow = head;
        Node fast = head.next;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    static Node merge(Node l1, Node l2) {
        Node dNode = new Node(-1);
        Node temp = dNode;
        while (l1 != null && l2 != null) {
            if (l1.data < l2.data) {
                temp.next = l1;
                temp = l1;
                l1 = l1.next;
            } else {
                temp.next = l2;
                temp = l2;
                l2 = l2.next;
            }
        }
        if (l1 != null) temp.next = l1;
        else temp.next = l2;

        return dNode.next;
    }

    static Node mergeSort(Node head) {
        if (head == null || head.next == null) return head;
        Node middle = findMiddle(head);
        Node left = head;
        Node right = middle.next;
        middle.next = null;
        left = mergeSort(left);
        right = mergeSort(right);
        return merge(left, right);
    }
}
