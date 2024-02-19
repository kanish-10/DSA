public class DeleteMiddle {
    public static void main(String[] args) {
        Node head = LinkedListOperations.arrayToLinkedList(new int[] {1,2,3,4,5,6});
        head = deleteMiddle(head);
        LinkedListOperations.traverseLinkedList(head);
    }

    static Node deleteMiddle(Node head) {
        if (head == null || head.next == null) return null;
        Node fast = head;
        Node slow = head;
        fast = fast.next.next;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        slow.next = slow.next.next;
        return head;
    }
}
