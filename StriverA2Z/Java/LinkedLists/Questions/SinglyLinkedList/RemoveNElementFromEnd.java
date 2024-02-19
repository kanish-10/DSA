public class RemoveNElementFromEnd {
    public static void main(String[] args) {
        Node head = LinkedListOperations.arrayToLinkedList(new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9});
        head = removeElementFromEnd(head, 1);
        LinkedListOperations.traverseLinkedList(head);
    }

    static Node removeElementFromEnd(Node head, int N) {
        Node fast = head;
        for (int i = 0; i < N; i++) fast = fast.next;
        if (fast == null) return head.next;
        Node slow = head;

        while (fast.next != null) {
            slow = slow.next;
            fast = fast.next;
        }
        slow.next = slow.next.next;
        return head;
    }
}
